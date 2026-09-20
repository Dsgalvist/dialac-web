import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import RequestForm from "../components/request/RequestForm";
import RequestOrderSummary from "../components/request/RequestOrderSummary";
import RequestSuccess from "../components/request/RequestSuccess";
import {
  clearRequestDraft,
  readStoredRequestDraft,
  type RequestFormData,
} from "../data/request";
import { useCart } from "../hooks/useCart";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ??
  "http://localhost:8000"
).replace(/\/$/, "");

type GeneratedRequest = {
  customerName: string;
  pdfUrl: string;
  fileName: string;
};

function getResponseFileName(
  contentDisposition: string | null,
) {
  if (!contentDisposition) {
    return "solicitud-dialac.pdf";
  }

  const utfFileNameMatch = contentDisposition.match(
    /filename\*=UTF-8''([^;]+)/i,
  );

  if (utfFileNameMatch?.[1]) {
    return decodeURIComponent(
      utfFileNameMatch[1].replace(/["']/g, ""),
    );
  }

  const fileNameMatch = contentDisposition.match(
    /filename="?([^"]+)"?/i,
  );

  return fileNameMatch?.[1]?.trim() || "solicitud-dialac.pdf";
}

function downloadPdf(
  pdfUrl: string,
  fileName: string,
) {
  const downloadLink = document.createElement("a");

  downloadLink.href = pdfUrl;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

function RequestPage() {
  const navigate = useNavigate();

  const {
    items,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  const [defaultValues] = useState<RequestFormData>(
    readStoredRequestDraft,
  );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submissionError, setSubmissionError] =
    useState("");

  const [generatedRequest, setGeneratedRequest] =
    useState<GeneratedRequest | null>(null);

  const generatedPdfUrl = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (generatedPdfUrl.current) {
        URL.revokeObjectURL(generatedPdfUrl.current);
      }
    };
  }, []);

  const handleSubmit = async (
    formData: RequestFormData,
  ) => {
    if (items.length === 0) {
      setSubmissionError(
        "Tu carrito está vacío. Agrega productos antes de generar la solicitud.",
      );

      return;
    }

    setSubmissionError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/requests/pdf`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer: {
              full_name: formData.fullName.trim(),
              company: formData.company.trim() || null,
              phone: formData.phone.trim(),
              email: formData.email.trim(),
              address:
                formData.address.trim() || null,
              city: formData.city.trim(),
              required_date: formData.requiredDate,
              delivery_method:
                formData.deliveryMethod,
              notes: formData.notes.trim() || null,
            },
            items: items.map((item) => ({
              id: item.id,
              code: item.code ?? null,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              subtotal: item.price * item.quantity,
            })),
            total_items: totalItems,
            total_price: totalPrice,
          }),
        },
      );

      if (!response.ok) {
        let errorMessage =
          "No pudimos enviar la solicitud. Intenta nuevamente.";

        try {
          const errorResponse: unknown =
            await response.json();

          if (
            errorResponse &&
            typeof errorResponse === "object" &&
            "detail" in errorResponse &&
            typeof errorResponse.detail === "string"
          ) {
            errorMessage = errorResponse.detail;
          }
        } catch {
          // La respuesta del servidor no contenía JSON.
        }

        throw new Error(errorMessage);
      }

      const pdfBlob = await response.blob();

      if (pdfBlob.size === 0) {
        throw new Error(
          "El documento generado está vacío. Intenta nuevamente.",
        );
      }

      if (generatedPdfUrl.current) {
        URL.revokeObjectURL(generatedPdfUrl.current);
      }

      const pdfUrl = URL.createObjectURL(pdfBlob);

      const fileName = getResponseFileName(
        response.headers.get("Content-Disposition"),
      );

      generatedPdfUrl.current = pdfUrl;

      /*
       * La respuesta exitosa indica que el backend generó el PDF
       * y envió la solicitud al equipo de DIALAC.
       */
      setGeneratedRequest({
        customerName: formData.fullName.trim(),
        pdfUrl,
        fileName,
      });

      /*
       * El carrito y el formulario solamente se limpian después
       * de recibir una respuesta exitosa del backend.
       */
      clearRequestDraft();
      clearCart();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      /*
       * Si ocurre un error, conservamos el carrito y el borrador
       * para que el usuario pueda volver a intentarlo.
       */
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "No pudimos enviar la solicitud. Intenta nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (!generatedRequest) return;

    downloadPdf(
      generatedRequest.pdfUrl,
      generatedRequest.fileName,
    );
  };

  const handleCreateAnother = () => {
    if (generatedPdfUrl.current) {
      URL.revokeObjectURL(generatedPdfUrl.current);
      generatedPdfUrl.current = null;
    }

    setGeneratedRequest(null);
    setSubmissionError("");

    navigate("/productos");
  };

  /*
   * La pantalla de confirmación debe mostrarse antes de revisar
   * si el carrito está vacío, porque el carrito se limpia después
   * de que la solicitud es enviada correctamente.
   */
  if (generatedRequest) {
    return (
      <main className="min-h-screen overflow-x-clip bg-[#f7f5f1]">
        <section className="relative px-3 py-10 sm:px-8 sm:py-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-dialac-brown/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 bottom-24 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
          />

          <div className="relative mx-auto max-w-[1480px]">
            <RequestSuccess
              customerName={generatedRequest.customerName}
              pdfUrl={generatedRequest.pdfUrl}
              fileName={generatedRequest.fileName}
              onDownload={handleDownload}
              onCreateAnother={handleCreateAnother}
            />
          </div>
        </section>
      </main>
    );
  }

  /*
   * Evita acceder al formulario cuando no existen productos.
   */
  if (items.length === 0) {
    return <Navigate to="/solicitud" replace />;
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f5f1]">
      <section className="relative px-3 pb-10 pt-3 sm:px-8 sm:pb-14 sm:pt-4 lg:pb-16 lg:pt-5">
        {/* DECORACIÓN */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-24 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
        />

        <div className="relative mx-auto max-w-[1480px]">
          {/* ENCABEZADO */}
          <header className="mb-6 flex flex-col gap-5 sm:mb-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-dialac-brown"
                />

                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Continuar solicitud
                </p>
              </div>

              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                Completa los datos de tu pedido
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Ingresa la información necesaria para que DIALAC
                revise los productos, la fecha y la entrega de tu
                solicitud.
              </p>
            </div>

            <Link
              to="/solicitud"
              className="group hidden w-fit items-center justify-center gap-3 rounded-xl border-2 border-dialac-brown px-6 py-3 font-semibold text-dialac-brown-dark outline-none transition hover:bg-dialac-brown hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25 lg:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
              >
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
              </svg>

              Volver al carrito
            </Link>
          </header>

          {/* ERROR DEL SERVIDOR */}
          {submissionError && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-2xl border border-[#efcaca] bg-[#fff1f1] p-4 text-dialac-error"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6" />
                  <path d="M12 17h.01" />
                </svg>
              </span>

              <div>
                <p className="font-display font-bold">
                  No se pudo enviar la solicitud
                </p>

                <p className="mt-1 text-sm leading-6">
                  {submissionError}
                </p>
              </div>
            </div>
          )}

          {/* FORMULARIO Y RESUMEN */}
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_400px] xl:gap-8">
            {/* FORMULARIO: SEGUNDO EN RESPONSIVE */}
            <div className="order-2 lg:order-1">
              <RequestForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            {/* RESUMEN: PRIMERO EN RESPONSIVE */}
            <div
              data-tour="request-summary"
              className="order-1 lg:order-2 lg:sticky lg:top-28"
            >
              <RequestOrderSummary
                items={items}
                totalItems={totalItems}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RequestPage;

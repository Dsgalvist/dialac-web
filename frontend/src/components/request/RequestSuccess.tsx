import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

type RequestSuccessProps = {
  customerName: string;
  pdfUrl: string;
  fileName: string;
  onDownload: () => void;
  onCreateAnother: () => void;
};

function RequestSuccess({
  customerName,
  pdfUrl,
  fileName,
  onDownload,
  onCreateAnother,
}: RequestSuccessProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-labelledby="request-success-title"
      className="relative overflow-hidden rounded-[2rem] border border-dialac-border bg-white shadow-[0_14px_40px_rgba(38,40,42,0.06)]"
    >
      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      {/* CONFIRMACIÓN */}
      <div className="relative px-5 py-10 text-center sm:px-10 sm:py-14">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  scale: 0.8,
                  opacity: 0,
                }
          }
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dialac-border bg-[#e9eddf] text-dialac-green-dark shadow-sm"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-11 w-11"
          >
            <path d="m6 12 4 4 8-8" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </motion.div>

        <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
          Solicitud enviada
        </p>

        <h1
          id="request-success-title"
          className="mt-3 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl"
        >
          Tu solicitud fue enviada exitosamente
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
          Gracias, {customerName}. Tu solicitud fue enviada al equipo
          de DIALAC. Revisaremos los productos, la disponibilidad y la
          fecha requerida.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-dialac-charcoal sm:text-base">
          Nos comunicaremos contigo dentro de nuestros horarios de
          atención para confirmar el pedido.
        </p>

        {/* ACLARACIÓN */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dialac-border bg-[#faf8f4] p-4 text-left sm:p-5">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e8de] text-dialac-brown-dark"
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
                <path d="M12 11v5" />
                <path d="M12 8h.01" />
              </svg>
            </span>

            <div>
              <p className="font-display text-sm font-bold text-dialac-charcoal">
                La solicitud todavía debe ser confirmada
              </p>

              <p className="mt-1 text-xs leading-5 text-dialac-charcoal sm:text-sm sm:leading-6">
                El envío de este documento no confirma automáticamente
                el pedido. DIALAC verificará disponibilidad, fecha,
                dirección y condiciones de entrega.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOCUMENTO */}
      <div className="relative border-t border-dialac-border bg-[#f4f0e9] px-3 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-dialac-green-dark">
                Comprobante de solicitud
              </p>

              <h2 className="mt-1 font-display text-2xl font-bold text-dialac-charcoal">
                Revisa tu documento
              </h2>

              <p className="mt-1 break-all text-sm text-dialac-charcoal">
                {fileName}
              </p>
            </div>

            <motion.button
              type="button"
              onClick={onDownload}
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-dialac-brown bg-white px-5 py-3 font-semibold text-dialac-brown-dark outline-none transition hover:bg-[#f4e8de] focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>

              Descargar PDF
            </motion.button>
          </div>

          {/* VISTA PREVIA */}
          <div className="overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-sm">
            <object
              data={pdfUrl}
              type="application/pdf"
              aria-label="Vista previa del PDF de la solicitud"
              className="h-[520px] w-full sm:h-[650px] lg:h-[760px]"
            >
              <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center">
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M14 2v6h6" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                </span>

                <h3 className="mt-5 font-display text-xl font-bold text-dialac-charcoal">
                  Tu navegador no puede mostrar el PDF
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-dialac-charcoal">
                  Puedes utilizar el botón Descargar PDF para abrir o
                  guardar el documento.
                </p>

                <button
                  type="button"
                  onClick={onDownload}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-dialac-brown px-5 py-3 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
                >
                  Descargar PDF
                </button>
              </div>
            </object>
          </div>

          {/* ACCIONES FINALES */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/productos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-dialac-brown bg-white px-6 py-3.5 font-semibold text-dialac-brown-dark outline-none transition hover:bg-[#f4e8de] focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
              </svg>

              Regresar a productos
            </Link>

            <button
              type="button"
              onClick={onCreateAnother}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
            >
              Crear una nueva solicitud

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default RequestSuccess;
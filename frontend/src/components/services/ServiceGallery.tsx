import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import type { Service } from "../../data/services";

type ServiceGalleryProps = {
  service: Service | null;
  onClose: () => void;
  onConsult: (serviceName: string) => void;
};

const categoryStyles: Record<
  Service["category"],
  {
    badge: string;
    decoration: string;
    icon: string;
    button: string;
    focus: string;
  }
> = {
  celebraciones: {
    badge: "bg-dialac-brown text-white",
    decoration: "bg-dialac-brown/10",
    icon: "text-dialac-brown-dark",
    button: "bg-dialac-brown hover:bg-dialac-brown-dark",
    focus: "focus-visible:ring-dialac-brown/25",
  },
  empresas: {
    badge: "bg-dialac-green text-white",
    decoration: "bg-dialac-green/10",
    icon: "text-dialac-green-dark",
    button: "bg-dialac-green hover:bg-dialac-green-dark",
    focus: "focus-visible:ring-dialac-green/25",
  },
  complementos: {
    badge: "bg-[#6b5518] text-white",
    decoration: "bg-[#6b5518]/10",
    icon: "text-[#5d4810]",
    button: "bg-[#6b5518] hover:bg-[#59460f]",
    focus: "focus-visible:ring-[#d8c98e]",
  },
};

function ServiceGallery({
  service,
  onClose,
  onConsult,
}: ServiceGalleryProps) {
  const reduceMotion = useReducedMotion();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = service?.images ?? [];
  const activeImage = images[activeImageIndex];
  const hasImages = images.length > 0;
  const showImage = Boolean(activeImage) && !imageError;

  useEffect(() => {
    setActiveImageIndex(0);
    setImageError(false);
  }, [service]);

  useEffect(() => {
    if (!service) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (images.length <= 1) return;

      if (event.key === "ArrowRight") {
        setActiveImageIndex((currentIndex) =>
          currentIndex === images.length - 1
            ? 0
            : currentIndex + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((currentIndex) =>
          currentIndex === 0
            ? images.length - 1
            : currentIndex - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, images.length, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  const showPreviousImage = () => {
    if (images.length <= 1) return;

    setImageError(false);
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (images.length <= 1) return;

    setImageError(false);
    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  return createPortal(
    <AnimatePresence>
      {service && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`service-gallery-title-${service.id}`}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dialac-charcoal/70 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8"
          onClick={onClose}
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: 18,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f4f0e9] shadow-2xl sm:max-h-[calc(100vh-4rem)] sm:rounded-[2rem] lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]"
          >
            {/* CERRAR */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar galería del servicio"
              className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-dialac-border bg-white text-dialac-charcoal shadow-md outline-none transition hover:bg-[#f4f0e9] focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:right-5 sm:top-5"
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
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            {/* GALERÍA */}
            <div className="flex min-h-0 flex-col bg-white">
              <div className="relative flex min-h-[280px] flex-1 items-center justify-center overflow-hidden bg-white sm:min-h-[430px] lg:min-h-[600px]">
                {showImage ? (
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={`${service.title}, imagen ${
                      activeImageIndex + 1
                    } de ${images.length}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.98,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onError={() => setImageError(true)}
                    className="h-full max-h-[600px] w-full object-contain p-5 sm:p-8"
                  />
                ) : (
                  <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden px-6 text-center sm:min-h-[430px]">
                    <div
                      aria-hidden="true"
                      className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${
                        categoryStyles[service.category].decoration
                      }`}
                    />

                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-dialac-border bg-white shadow-md ${
                          categoryStyles[service.category].icon
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-9 w-9"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="16"
                            rx="3"
                          />
                          <circle cx="9" cy="10" r="2" />
                          <path d="m21 15-5-5L5 20" />
                        </svg>
                      </div>

                      <p className="mt-5 font-display text-xl font-bold text-dialac-charcoal">
                        Imágenes próximamente
                      </p>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-dialac-charcoal">
                        La galería está preparada para recibir las
                        fotografías de este servicio.
                      </p>
                    </div>
                  </div>
                )}

                {/* BOTONES ANTERIOR Y SIGUIENTE */}
                {hasImages && images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Mostrar imagen anterior"
                      className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-dialac-border bg-white/95 text-dialac-charcoal shadow-md outline-none backdrop-blur-sm transition hover:bg-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:left-5"
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Mostrar imagen siguiente"
                      className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-dialac-border bg-white/95 text-dialac-charcoal shadow-md outline-none backdrop-blur-sm transition hover:bg-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:right-5"
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}

                {hasImages && (
                  <span className="absolute bottom-4 right-4 rounded-full bg-dialac-charcoal/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {activeImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>

              {/* MINIATURAS */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto border-t border-dialac-border bg-[#faf8f4] p-3 sm:p-4">
                  {images.map((image, index) => {
                    const isActive = activeImageIndex === index;

                    return (
                      <button
                        key={`${service.id}-${image}-${index}`}
                        type="button"
                        onClick={() => {
                          setImageError(false);
                          setActiveImageIndex(index);
                        }}
                        aria-label={`Mostrar imagen ${index + 1}`}
                        aria-pressed={isActive}
                        className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-white outline-none transition focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:h-20 sm:w-24 ${
                          isActive
                            ? "border-dialac-brown"
                            : "border-transparent hover:border-dialac-border"
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* INFORMACIÓN */}
            <div className="overflow-y-auto bg-[#f4f0e9] p-5 sm:p-7 lg:p-8">
              <span
                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${
                  categoryStyles[service.category].badge
                }`}
              >
                {service.categoryName}
              </span>

              <h2
                id={`service-gallery-title-${service.id}`}
                className="mt-5 pr-12 font-display text-3xl font-bold leading-tight text-dialac-charcoal"
              >
                {service.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-dialac-charcoal">
                {service.description}
              </p>

              <div className="mt-7 rounded-2xl border border-dialac-border bg-white p-4">
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
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-display text-sm font-bold text-dialac-charcoal">
                      Solicita con anticipación
                    </p>

                    <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                      Los pedidos deben realizarse con mínimo 3 días de
                      anticipación.
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => onConsult(service.title)}
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className={`mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3.5 font-semibold text-white outline-none transition focus-visible:ring-4 ${
                  categoryStyles[service.category].button
                } ${categoryStyles[service.category].focus}`}
              >
                Consultar por WhatsApp

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
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ServiceGallery;
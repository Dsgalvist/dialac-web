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
  mode?: "modal" | "page";
  onClose?: () => void;
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

function getMobilePreview(description: string) {
  const sentences = description.trim().split(/(?<=[.!?])\s+/);
  const firstTwoSentences = sentences.slice(0, 2).join(" ");
  const words = firstTwoSentences.split(/\s+/);
  return words.slice(0, 14).join(" ");
}

function ServiceGallery({
  service,
  onClose,
  onConsult,
  mode = "modal",
}: ServiceGalleryProps) {
  const isPage = mode === "page";
  const Title = isPage ? "h1" : "h2";
  const reduceMotion = useReducedMotion();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [expandedOptions, setExpandedOptions] = useState<Record<number, boolean>>({});

  const images = service?.images ?? [];
  const activeImage = images[activeImageIndex];
  const activeExample = service?.examples[activeImageIndex];
  const hasImages = images.length > 0;
  const showImage = Boolean(activeImage) && !imageError;

  useEffect(() => {
    setActiveImageIndex(0);
    setImageError(false);
    setExpandedOptions({});
  }, [service]);

  useEffect(() => {
    if (!service || isPage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
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
  }, [service, images.length, onClose, isPage]);

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

  const handleConsult = () => {
    const consultationName = activeExample
      ? `${activeExample.name} (${service?.title})`
      : service?.title;

    if (!consultationName) return;

    onConsult(consultationName);
  };

  const panel = service ? (
    <motion.div
      initial={
        isPage || reduceMotion
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
      onClick={isPage ? undefined : (event) => event.stopPropagation()}
      className={isPage ? "relative flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f4f0e9] lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]" : "relative flex h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f4f0e9] shadow-2xl sm:h-[calc(100dvh-4rem)] sm:rounded-[2rem] lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]"}
    >
      {/* CERRAR */}
      {!isPage && (
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
      )}

      {/* GALERÍA */}
      <div className="flex min-h-0 shrink-0 flex-col bg-white lg:shrink">
        <div className={isPage ? "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white" : "relative flex h-[250px] shrink-0 items-center justify-center overflow-hidden bg-white sm:h-[360px] lg:h-auto lg:min-h-0 lg:flex-1 lg:shrink"}>
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
              className="h-full w-full object-contain p-4 sm:p-6 lg:p-8"
            />
          ) : (
            <div className="relative flex h-full min-h-[250px] w-full items-center justify-center overflow-hidden px-6 text-center sm:min-h-[360px]">
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
            <span className="absolute bottom-3 right-3 rounded-full bg-dialac-charcoal/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-4 sm:right-4">
              {activeImageIndex + 1} / {images.length}
            </span>
          )}
        </div>

        {/* MINIATURAS */}
        {images.length > 1 && (
          <div className="flex shrink-0 gap-3 overflow-x-auto border-t border-dialac-border bg-[#faf8f4] p-3 sm:p-4">
            {images.map((image, index) => {
              const isActive = activeImageIndex === index;
              const exampleName =
                service.examples[index]?.name;

              return (
                <button
                  key={`${service.id}-${image}-${index}`}
                  type="button"
                  onClick={() => {
                    setImageError(false);
                    setActiveImageIndex(index);
                  }}
                  aria-label={
                    exampleName
                      ? `Mostrar ${exampleName}`
                      : `Mostrar imagen ${index + 1}`
                  }
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
      <div className="flex min-h-0 flex-1 flex-col bg-[#f4f0e9]">
        {/* CONTENIDO CON SCROLL */}
        <div className={isPage ? "flex-1 p-5 sm:p-7 lg:p-8" : "min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 pb-6 sm:p-7 sm:pb-7 lg:p-8 lg:pb-8"}>
          <div className="flex items-center gap-2 lg:block">
          <span
            className={`order-2 inline-flex shrink-0 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] lg:px-3 lg:py-1.5 lg:text-xs ${
              categoryStyles[service.category].badge
            }`}
          >
            {service.categoryName}
          </span>

          <Title
            id={`service-gallery-title-${service.id}`}
            className="order-1 min-w-0 break-words font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl lg:mt-5 lg:pr-12"
          >
            {service.title}
          </Title>
          </div>

          <p className="hidden lg:mt-5 lg:block lg:text-base lg:leading-7 text-dialac-charcoal">
            {service.description}
          </p>

          {/* OPCIONES DEL SERVICIO */}
          {service.examples.length > 0 && (
            <div className="mt-6 sm:mt-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-dialac-brown-dark">
                    Conoce las alternativas
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-dialac-charcoal">
                    Opciones disponibles
                  </h3>
                </div>

                <span className="shrink-0 text-xs font-semibold text-dialac-charcoal">
                  {service.examples.length}{" "}
                  {service.examples.length === 1
                    ? "opción"
                    : "opciones"}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {service.examples.map((example, index) => {
                  const hasRelatedImage = Boolean(
                    images[index],
                  );

                  const isRelatedImageActive =
                    hasRelatedImage &&
                    activeImageIndex === index;
                  const preview = getMobilePreview(example.description);
                  const canExpand = preview !== example.description.trim();
                  const isExpanded = Boolean(expandedOptions[index]);
                  const descriptionId = `service-option-${service.id}-${index}-description`;

                  return (
                    <div
                      key={`${service.id}-${example.name}`}
                      className={`relative rounded-2xl border lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none ${
                        isRelatedImageActive
                          ? "border-dialac-brown bg-white shadow-sm"
                          : "border-dialac-border bg-white/70"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (!hasRelatedImage) return;

                          setImageError(false);
                          setActiveImageIndex(index);
                        }}
                        aria-label={
                          hasRelatedImage
                            ? `Ver imagen de ${example.name}`
                            : undefined
                        }
                        aria-pressed={
                          hasRelatedImage
                            ? isRelatedImageActive
                            : undefined
                        }
                        className={`w-full rounded-2xl p-4 pb-0 text-left outline-none transition focus-visible:ring-4 focus-visible:ring-dialac-brown/20 lg:border lg:pb-4 ${
                          isRelatedImageActive
                            ? "lg:border-dialac-brown lg:bg-white lg:shadow-sm"
                            : "lg:border-dialac-border lg:bg-white/70 lg:hover:border-dialac-brown/60 lg:hover:bg-white"
                        } ${
                          hasRelatedImage
                            ? "cursor-pointer after:absolute after:inset-0 after:content-[''] lg:after:hidden"
                            : "cursor-default"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold ${
                              isRelatedImageActive
                                ? "bg-dialac-brown text-white"
                                : "bg-[#eadfd3] text-dialac-brown-dark"
                            }`}
                          >
                            {index + 1}
                          </span>

                          <div className="min-w-0">
                            <p className="font-display text-sm font-bold leading-5 text-dialac-charcoal">
                              {example.name}
                            </p>

                            <p className="mt-1 hidden text-xs leading-5 text-dialac-charcoal lg:block">
                              {example.description}
                            </p>
                          </div>
                        </div>
                      </button>
                      <p className="mt-1 pb-4 pl-[3.75rem] pr-4 text-xs leading-5 text-dialac-charcoal lg:hidden">
                        <span id={descriptionId}>
                          {canExpand && !isExpanded ? `${preview}…` : example.description}
                        </span>
                        {canExpand && (
                        <>
                        {" "}
                        <button
                          type="button"
                          aria-controls={descriptionId}
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Ver menos" : "Ver más"}: ${example.name}`}
                          onClick={() =>
                            setExpandedOptions((current) => ({
                              ...current,
                              [index]: !current[index],
                            }))
                          }
                          className="relative z-10 inline-block rounded-sm py-1 text-xs font-semibold text-dialac-brown-dark underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          {isExpanded ? "Ver menos" : "Ver más"}
                        </button>
                        </>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* PIE SIEMPRE VISIBLE */}
        <div className="shrink-0 border-t border-dialac-border bg-[#f4f0e9] px-4 py-3 sm:px-7 lg:px-8">
          <div key={service.id} className="space-y-2">
            <details
              name={`service-info-${service.id}`}
              className="group rounded-xl border border-dialac-border bg-white text-sm text-dialac-charcoal"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 py-2.5 font-display font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown sm:px-4 [&::-webkit-details-marker]:hidden">
                Zonas de atención
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="max-h-[min(8rem,18dvh)] overflow-y-auto px-3 pb-3 leading-6 sm:px-4">
                Atendemos solicitudes para este servicio en Bogotá, Cajicá, Chía,
                Cogua, Cota, Gachancipá, Nemocón, Sopó, Tabio, Tenjo, Tocancipá y
                Zipaquirá. Consulta disponibilidad para tu municipio.
              </p>
            </details>
            <details
              name={`service-info-${service.id}`}
              className="group rounded-xl border border-dialac-border bg-white text-sm text-dialac-charcoal"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 py-2.5 font-display font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown sm:px-4 [&::-webkit-details-marker]:hidden">
                Solicita con anticipación
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="px-3 pb-3 leading-6 sm:px-4">
                Los pedidos deben realizarse con mínimo 3 días de anticipación.
              </p>
            </details>
          </div>

          {activeExample && (
            <p
              aria-live="polite"
              className="mt-3 truncate text-xs font-semibold text-dialac-charcoal"
            >
              Opción seleccionada: {activeExample.name}
            </p>
          )}

          <motion.button
            type="button"
            onClick={handleConsult}
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.98,
                  }
            }
            className={`mt-3 inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3.5 font-semibold text-white outline-none transition focus-visible:ring-4 ${
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
      </div>
    </motion.div>
  ) : null;

  if (isPage) return panel;
  if (typeof document === "undefined") return null;

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
          {panel}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ServiceGallery;

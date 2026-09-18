import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";
import type { ServiceCategory } from "./ServicesCategories";

type Service = {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "todos">;
  categoryName: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
};

type ServicesCatalogProps = {
  activeCategory: ServiceCategory;
};

type CategoryStyle = {
  badge: string;
  decoration: string;
  icon: string;
  action: string;
  focus: string;
};

const categoryStyles: Record<
  Exclude<ServiceCategory, "todos">,
  CategoryStyle
> = {
  celebraciones: {
    badge: "bg-dialac-brown text-white",
    decoration: "bg-dialac-brown/10",
    icon: "text-dialac-brown-dark",
    action: "text-dialac-brown-dark",
    focus: "focus-visible:ring-dialac-brown/25",
  },
  empresas: {
    badge: "bg-dialac-green text-white",
    decoration: "bg-dialac-green/10",
    icon: "text-dialac-green-dark",
    action: "text-dialac-green-dark",
    focus: "focus-visible:ring-dialac-green/25",
  },
  complementos: {
    badge: "bg-[#6b5518] text-white",
    decoration: "bg-[#6b5518]/10",
    icon: "text-[#5d4810]",
    action: "text-[#5d4810]",
    focus: "focus-visible:ring-[#d8c98e]",
  },
};

const services: Service[] = [
  {
    id: "tabla-quesos",
    title: "Tabla de quesos personalizada",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Tablas preparadas para compartir y personalizadas de acuerdo con cada ocasión.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "anchetas-desayunos",
    title: "Anchetas y desayunos sorpresa",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Detalles personalizados para celebrar y acompañar momentos especiales.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "eventos-reuniones",
    title: "Eventos y reuniones",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Soluciones alimenticias para encuentros familiares, sociales y empresariales.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "fiestas-tematicas",
    title: "Fiestas temáticas",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Alternativas adaptadas al concepto y las necesidades de cada celebración.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "refrigerios",
    title: "Refrigerios",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Opciones prácticas y personalizadas para reuniones, empresas y eventos.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "coffee-break",
    title: "Coffee Break",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Pausas preparadas para acompañar jornadas, capacitaciones y reuniones.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "cajas-dialac",
    title: "Cajas DIALAC",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Presentaciones completas y organizadas para equipos y encuentros.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "break-lacteo",
    title: "Break Lácteo",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Combinaciones variadas para disfrutar durante una pausa o actividad grupal.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "bocaditos",
    title: "Bocaditos",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Pequeñas preparaciones para compartir en reuniones y celebraciones.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "pasabocas",
    title: "Pasabocas",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Alternativas variadas para complementar diferentes tipos de eventos.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "frescos",
    title: "Frescos",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Opciones frescas para acompañar y completar cada experiencia.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "postres",
    title: "Postres",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Preparaciones dulces para hacer más especial cada ocasión.",
    videoSrc: "",
    posterSrc: "",
  },
];

function ServicesCatalog({
  activeCategory,
}: ServicesCatalogProps) {
  const reduceMotion = useReducedMotion();
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const filteredServices =
    activeCategory === "todos"
      ? services
      : services.filter(
          (service) => service.category === activeCategory,
        );

  const playVideo = (serviceId: string) => {
    const video = videoRefs.current[serviceId];

    if (!video) return;

    video.play().catch(() => {
      // El navegador puede bloquear la reproducción automática.
    });
  };

  const stopVideo = (serviceId: string) => {
    const video = videoRefs.current[serviceId];

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  const handleServiceConsultation = (serviceName: string) => {
    contactWhatsApp(
      `Hola, me gustaría consultar por el servicio "${serviceName}". ¿Me podrían brindar más información?`,
    );
  };

  return (
    <section
      id="catalogo-servicios"
      className="relative w-full bg-white px-3 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
              Explora DIALAC
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-dialac-charcoal sm:text-4xl">
              {activeCategory === "todos"
                ? "Todos nuestros servicios"
                : `Servicios para ${
                    activeCategory === "celebraciones"
                      ? "celebraciones"
                      : activeCategory
                  }`}
            </h2>
          </div>

          <p
            aria-live="polite"
            className="text-sm font-semibold text-dialac-charcoal"
          >
            {filteredServices.length}{" "}
            {filteredServices.length === 1
              ? "servicio"
              : "servicios"}
          </p>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const styles = categoryStyles[service.category];

              return (
                <motion.article
                  layout
                  key={service.id}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                          scale: 0.98,
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
                          scale: 0.96,
                        }
                  }
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                        }
                  }
                  onMouseEnter={() => playVideo(service.id)}
                  onMouseLeave={() => stopVideo(service.id)}
                  onFocus={() => playVideo(service.id)}
                  onBlur={() => stopVideo(service.id)}
                  className="group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-[0_12px_32px_rgba(38,40,42,0.07)] sm:min-h-[470px] sm:rounded-[1.75rem] sm:shadow-[0_14px_40px_rgba(38,40,42,0.07)]"
                >
                  <div className="relative h-40 overflow-hidden bg-[#f1ece4] sm:h-60">
                    {service.videoSrc ? (
                      <video
                        ref={(element) => {
                          videoRefs.current[service.id] = element;
                        }}
                        src={service.videoSrc}
                        poster={service.posterSrc || undefined}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`Video del servicio ${service.title}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          aria-hidden="true"
                          className={`absolute -right-10 -top-10 h-28 w-28 rounded-full sm:-right-12 sm:-top-12 sm:h-40 sm:w-40 ${styles.decoration}`}
                        />

                        <div
                          className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-dialac-border bg-white shadow-md sm:h-16 sm:w-16 ${styles.icon}`}
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 sm:h-7 sm:w-7"
                          >
                            <path d="m10 8 6 4-6 4V8Z" />
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="16"
                              rx="3"
                            />
                          </svg>
                        </div>

                        <span className="absolute bottom-3 px-2 text-center text-[11px] font-semibold leading-4 text-dialac-charcoal sm:bottom-5 sm:text-sm">
                          Multimedia próximamente
                        </span>
                      </div>
                    )}

                    <span
                      className={`absolute left-2 top-2 max-w-[calc(100%-1rem)] rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] shadow-sm sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em] ${styles.badge}`}
                    >
                      {service.categoryName}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-7">
                    <h3 className="font-display text-base font-bold leading-snug text-dialac-charcoal sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-5 text-dialac-charcoal sm:mt-4 sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        handleServiceConsultation(service.title)
                      }
                      aria-label={`Consultar por WhatsApp el servicio ${service.title}`}
                      className={`group/link mt-auto inline-flex w-fit cursor-pointer items-center gap-2 pt-5 text-left text-sm font-semibold underline-offset-4 transition hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-4 sm:gap-3 sm:pt-7 sm:text-base ${styles.action} ${styles.focus}`}
                    >
                      <span className="sm:hidden">
                        Consultar
                      </span>

                      <span className="hidden sm:inline">
                        Consultar por WhatsApp
                      </span>

                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 sm:h-5 sm:w-5"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                      </svg>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCatalog;
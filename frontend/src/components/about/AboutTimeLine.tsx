import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  visualLabel: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "2009",
    title: "Nacimiento de DIALAC",
    description:
      "DIALAC nace como una empresa familiar, con el propósito de ofrecer productos de calidad, buen sabor y una atención cercana y personalizada.",
    image:
      "/images/9 FOTOS/mascotas.png",
    imageAlt:
      "Servicio preparado por DIALAC para eventos y reuniones",
    visualLabel: "El comienzo de nuestra historia",
  },
  {
    year: "2019",
    title: "Crecimiento y consolidación",
    description:
      "Después de una década de trabajo, DIALAC alcanza una importante etapa de crecimiento, fortaleciendo sus ventas, ampliando su variedad de productos y llegando a nuevos clientes.",
    image:
      "/images/servicios/EVENTOS Y REUNIONES 2/2.2.png",
    imageAlt:
      "Servicio preparado por DIALAC para eventos y reuniones",
    visualLabel: "Una oferta cada vez más amplia",
  },
  {
    year: "2020",
    title: "Pausa por la pandemia",
    description:
      "Con la llegada de la pandemia, DIALAC se ve obligada a cerrar temporalmente sus puertas, poniendo en pausa sus operaciones después de años de crecimiento.",
    visualLabel: "Una pausa en el camino",
  },
  {
    year: "2026",
    title: "Un nuevo comienzo",
    description:
      "DIALAC abre nuevamente sus puertas, iniciando una nueva etapa como empresa familiar con una imagen renovada, una oferta más amplia y nuevas experiencias, manteniendo la esencia que la ha caracterizado desde 2009: calidad, cercanía y buen sabor.",
    image: "/images/servicios/REFRIGERIOS2/2,2.png",
    imageAlt:
      "Refrigerio preparado por DIALAC en su nueva etapa",
    visualLabel: "DIALAC vuelve renovada",
  },
];

function AboutTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeEvent = timelineEvents[selectedEvent];

  const progress =
    (selectedEvent / (timelineEvents.length - 1)) * 100;

  const showPreviousEvent = () => {
    setSelectedEvent((current) => Math.max(current - 1, 0));
  };

  const showNextEvent = () => {
    setSelectedEvent((current) =>
      Math.min(current + 1, timelineEvents.length - 1),
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
      {/* DECORACIÓN */}
      <FloatingShape
        duration={8}
        distance={12}
        className="pointer-events-none absolute -left-32 top-[18%] -z-10"
      >
        <div className="h-72 w-72 rounded-full bg-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={9}
        delay={0.6}
        distance={14}
        className="pointer-events-none absolute -bottom-32 right-[4%] -z-10"
      >
        <div className="h-80 w-80 rounded-full border-[55px] border-dialac-brown/5" />
      </FloatingShape>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(153, 82, 47, 0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="grid items-end gap-6 border-b border-dialac-border pb-7 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-dialac-brown"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.35, 1],
                          opacity: [1, 0.65, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Nuestra trayectoria
                </p>
              </div>

              <div className="mt-5 h-px w-20 bg-dialac-brown" />
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-dialac-charcoal sm:text-5xl">
                Una historia que continúa creciendo
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Cada etapa ha contribuido a construir la esencia y el
                propósito que hoy representan a DIALAC.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.12}>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f7f2eb] shadow-[0_20px_55px_rgba(38,40,42,0.08)] sm:mt-10">
            {/* TIMELINE DE ESCRITORIO */}
            <div className="hidden px-8 pb-8 pt-9 md:block lg:px-12">
              <div
                role="tablist"
                aria-label="Historia de DIALAC"
                className="relative"
              >
                <div className="absolute left-[12.5%] right-[12.5%] top-5 h-1 overflow-hidden rounded-full bg-[#ded4c8]">
                  <motion.div
                    className="h-full rounded-full bg-dialac-brown"
                    initial={false}
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                <div className="relative grid grid-cols-4">
                  {timelineEvents.map((event, index) => {
                    const isSelected = selectedEvent === index;
                    const isCompleted = index <= selectedEvent;

                    return (
                      <button
                        key={event.year}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        aria-controls="timeline-details"
                        onClick={() => setSelectedEvent(index)}
                        className="group flex flex-col items-center rounded-2xl px-3 text-center outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
                      >
                        <motion.span
                          aria-hidden="true"
                          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 font-display font-bold transition-colors duration-300 ${
                            isCompleted
                              ? "border-dialac-brown bg-dialac-brown text-white"
                              : "border-[#ded4c8] bg-white text-dialac-charcoal"
                          }`}
                          animate={
                            isSelected && !reduceMotion
                              ? {
                                  scale: [1, 1.15, 1],
                                }
                              : {
                                  scale: 1,
                                }
                          }
                          transition={{
                            duration: 0.4,
                          }}
                        >
                          {index + 1}

                          {isSelected && (
                            <motion.span
                              aria-hidden="true"
                              className="absolute -inset-3 -z-10 rounded-full border border-dialac-brown/30"
                              initial={
                                reduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      scale: 0.7,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                            />
                          )}
                        </motion.span>

                        <span
                          className={`mt-4 font-display text-2xl font-bold transition-colors ${
                            isSelected
                              ? "text-dialac-brown-dark"
                              : "text-dialac-charcoal"
                          }`}
                        >
                          {event.year}
                        </span>

                        <span className="mt-1.5 max-w-[180px] text-sm font-semibold leading-5 text-dialac-charcoal lg:text-base">
                          {event.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TIMELINE MÓVIL */}
            <div
              role="tablist"
              aria-label="Historia de DIALAC"
              className="grid grid-cols-2 gap-2.5 border-b border-dialac-border p-4 md:hidden"
            >
              {timelineEvents.map((event, index) => {
                const isSelected = selectedEvent === index;

                return (
                  <motion.button
                    key={event.year}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls="timeline-details"
                    onClick={() => setSelectedEvent(index)}
                    className={`relative flex min-h-20 items-center gap-3 overflow-hidden rounded-2xl border p-3 text-left outline-none transition-colors focus-visible:ring-4 focus-visible:ring-dialac-brown/30 ${
                      isSelected
                        ? "border-dialac-brown bg-[#f0dfd1] text-dialac-charcoal"
                        : "border-dialac-border bg-white text-dialac-charcoal"
                    }`}
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.98,
                          }
                    }
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="active-mobile-timeline"
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 top-0 w-1 bg-dialac-brown"
                      />
                    )}

                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
                        isSelected
                          ? "bg-dialac-brown text-white"
                          : "bg-[#eee7de] text-dialac-charcoal"
                      }`}
                    >
                      {event.year.slice(-2)}
                    </span>

                    <span className="relative min-w-0">
                      <span className="block font-display text-base font-bold">
                        {event.year}
                      </span>

                      <span className="mt-0.5 block text-xs leading-4">
                        {event.title}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* DETALLE DEL ACONTECIMIENTO */}
            <article
              id="timeline-details"
              role="tabpanel"
              aria-live="polite"
              className="grid border-t border-dialac-border bg-white lg:grid-cols-[0.82fr_1.18fr]"
            >
              {/* VISUAL */}
              <div className="relative min-h-[260px] overflow-hidden bg-[#ead8c7] sm:min-h-[320px] lg:min-h-[390px]">
                <AnimatePresence mode="wait">
                  {activeEvent.image ? (
                    <motion.div
                      key={`image-${activeEvent.year}`}
                      className="absolute inset-0"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 1.06,
                            }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              scale: 0.98,
                            }
                      }
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <img
                        src={activeEvent.image}
                        alt={activeEvent.imageAlt}
                        className="h-full w-full object-cover"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`graphic-${activeEvent.year}`}
                      className="absolute inset-0 overflow-hidden bg-[#ead8c7]"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 0.96,
                            }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              scale: 1.04,
                            }
                      }
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[52px] border-white/35"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-dialac-brown/10"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[3rem] border border-white/70 bg-white/25"
                      />

                      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                        <motion.p
                          className="font-display text-[5.5rem] font-bold leading-none text-dialac-brown-dark/90 sm:text-[7rem]"
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  y: 20,
                              }
                          }
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                        >
                          {activeEvent.year}
                        </motion.p>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-px w-10 bg-dialac-brown" />
                          <span className="h-2.5 w-2.5 rounded-full bg-dialac-brown" />
                          <span className="h-px w-10 bg-dialac-brown" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* INFORMACIÓN SOBRE EL VISUAL */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`visual-label-${activeEvent.year}`}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 15,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: -10,
                            }
                      }
                      transition={{
                        duration: 0.35,
                      }}
                      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-md ${
                        activeEvent.image
                          ? "border-white/30 bg-white/90 text-dialac-charcoal"
                          : "border-white/60 bg-white/75 text-dialac-charcoal"
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-dialac-brown" />

                      <span className="text-sm font-semibold">
                        {activeEvent.visualLabel}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-dialac-brown font-display text-sm font-bold text-white shadow-lg sm:left-7 sm:top-7">
                  {selectedEvent + 1}
                </div>
              </div>

              {/* INFORMACIÓN */}
              <div className="flex min-h-[330px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeEvent.year}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 20,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -15,
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.17em] text-dialac-brown-dark sm:text-sm">
                        Momento importante
                      </p>

                      <p className="font-display text-sm font-semibold text-dialac-charcoal/70">
                        Hito {selectedEvent + 1} de{" "}
                        {timelineEvents.length}
                      </p>
                    </div>

                    <p className="mt-6 font-display text-5xl font-bold leading-none text-dialac-brown sm:text-6xl">
                      {activeEvent.year}
                    </p>

                    <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-dialac-charcoal">
                      {activeEvent.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
                      {activeEvent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* CONTROLES */}
                <div className="mt-8 flex items-center justify-between gap-3 border-t border-dialac-border pt-6">
                  <button
                    type="button"
                    onClick={showPreviousEvent}
                    disabled={selectedEvent === 0}
                    aria-label="Ver acontecimiento anterior"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-dialac-border bg-white px-4 font-semibold text-dialac-charcoal outline-none transition hover:border-dialac-brown hover:bg-[#f7eee7] hover:text-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/25 disabled:cursor-not-allowed disabled:border-[#ded8d0] disabled:bg-[#eeeae5] disabled:text-[#77736e] sm:px-5"
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

                    <span className="hidden sm:inline">Anterior</span>
                  </button>

                  <div
                    className="flex items-center gap-2"
                    aria-label={`Acontecimiento ${
                      selectedEvent + 1
                    } de ${timelineEvents.length}`}
                  >
                    {timelineEvents.map((event, index) => (
                      <button
                        key={`indicator-${event.year}`}
                        type="button"
                        onClick={() => setSelectedEvent(index)}
                        aria-label={`Ver el año ${event.year}`}
                        aria-current={
                          selectedEvent === index ? "true" : undefined
                        }
                        className={`h-2.5 rounded-full outline-none transition-all focus-visible:ring-4 focus-visible:ring-dialac-brown/25 ${
                          selectedEvent === index
                            ? "w-8 bg-dialac-brown"
                            : "w-2.5 bg-[#d7cfc5] hover:bg-dialac-brown/60"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={showNextEvent}
                    disabled={
                      selectedEvent === timelineEvents.length - 1
                    }
                    aria-label="Ver acontecimiento siguiente"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dialac-brown px-4 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 disabled:cursor-not-allowed disabled:bg-[#696969] disabled:text-white sm:px-5"
                  >
                    <span className="hidden sm:inline">Siguiente</span>

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
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutTimeline;
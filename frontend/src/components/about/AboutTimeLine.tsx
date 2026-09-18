import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const timelineEvents = [
  {
    year: "2009",
    title: "Nacimiento de DIALAC",
    description:
      "DIALAC nace como una empresa familiar, con el propósito de ofrecer productos de calidad, buen sabor y una atención cercana y personalizada.",
  },
  {
    year: "2019",
    title: "Crecimiento y consolidación",
    description:
      "Después de una década de trabajo, DIALAC alcanza una importante etapa de crecimiento, fortaleciendo sus ventas, ampliando su variedad de productos y llegando a nuevos clientes.",
  },
  {
    year: "2020",
    title: "Pausa por la pandemia",
    description:
      "Con la llegada de la pandemia, DIALAC se ve obligada a cerrar temporalmente sus puertas, poniendo en pausa sus operaciones después de años de crecimiento.",
  },
  {
    year: "2026",
    title: "Un nuevo comienzo",
    description:
      "DIALAC abre nuevamente sus puertas, iniciando una nueva etapa como empresa familiar con una imagen renovada, una oferta más amplia y nuevas experiencias, manteniendo la esencia que la ha caracterizado desde 2009: calidad, cercanía y buen sabor.",
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
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-24 lg:py-28">
      {/* DECORACIÓN SUTIL */}
      <FloatingShape
        duration={8}
        distance={12}
        className="pointer-events-none absolute -left-32 top-[20%] -z-10"
      >
        <div className="h-72 w-72 rounded-full bg-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={9}
        delay={0.6}
        distance={14}
        className="pointer-events-none absolute -bottom-32 right-[4%] -z-10"
      >
        <div className="h-80 w-80 rounded-full border-[55px] border-dialac-green/5" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
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

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Una historia que continúa creciendo
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Cada etapa ha contribuido a construir la esencia y el propósito
              que hoy representan a DIALAC.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.12}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-dialac-border bg-[#f7f5f1] shadow-[0_20px_60px_rgba(38,40,42,0.09)]">
            {/* TIMELINE DE ESCRITORIO */}
            <div className="hidden px-8 pb-10 pt-12 md:block lg:px-12">
              <div
                role="tablist"
                aria-label="Historia de DIALAC"
                className="relative"
              >
                <div className="absolute left-[12.5%] right-[12.5%] top-5 h-1 overflow-hidden rounded-full bg-[#ded7ce]">
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
                              : "border-[#ded7ce] bg-white text-dialac-charcoal"
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
                          className={`mt-5 font-display text-2xl font-bold transition-colors ${
                            isSelected
                              ? "text-dialac-brown-dark"
                              : "text-dialac-charcoal"
                          }`}
                        >
                          {event.year}
                        </span>

                        <span className="mt-2 max-w-[180px] font-semibold leading-6 text-dialac-charcoal">
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
              className="space-y-3 border-b border-dialac-border p-5 md:hidden"
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
                    className={`relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left outline-none transition-colors focus-visible:ring-4 focus-visible:ring-dialac-brown/30 ${
                      isSelected
                        ? "border-dialac-brown bg-[#f4e8de] text-dialac-charcoal"
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
                        className="absolute bottom-0 left-0 top-0 w-1.5 bg-dialac-brown"
                      />
                    )}

                    <span
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display font-bold ${
                        isSelected
                          ? "bg-dialac-brown text-white"
                          : "bg-[#eee9e2] text-dialac-charcoal"
                      }`}
                    >
                      {event.year.slice(-2)}
                    </span>

                    <span className="relative">
                      <span className="block font-display text-lg font-bold">
                        {event.year}
                      </span>

                      <span className="mt-1 block leading-6">
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
              className="grid border-t border-dialac-border bg-white lg:grid-cols-[0.72fr_1.28fr]"
            >
              {/* AÑO */}
              <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#f1e5da] p-8 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[35px] border-dialac-brown/5"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/35"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`year-${activeEvent.year}`}
                    className="relative flex h-full flex-col justify-between"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -25,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            x: 25,
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dialac-brown font-display text-sm font-bold text-white">
                        {selectedEvent + 1}
                      </span>

                      <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-dialac-brown-dark">
                        Hito {selectedEvent + 1} de {timelineEvents.length}
                      </p>
                    </div>

                    <div>
                      <p className="font-display text-6xl font-bold text-dialac-charcoal sm:text-7xl">
                        {activeEvent.year}
                      </p>

                      <motion.div
                        aria-hidden="true"
                        className="mt-4 h-2 w-16 rounded-full bg-dialac-brown"
                        initial={reduceMotion ? false : { width: 0 }}
                        animate={{ width: 64 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* INFORMACIÓN */}
              <div className="flex min-h-64 flex-col justify-between p-8 sm:p-10">
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
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-dialac-green-dark">
                      Momento importante
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-dialac-charcoal">
                      {activeEvent.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-dialac-charcoal">
                      {activeEvent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* CONTROLES */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={showPreviousEvent}
                    disabled={selectedEvent === 0}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-dialac-charcoal px-5 py-3 font-semibold text-dialac-charcoal outline-none transition hover:bg-dialac-charcoal hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-charcoal/25 disabled:cursor-not-allowed disabled:border-[#c9c3ba] disabled:bg-[#ece8e2] disabled:text-[#6b6965]"
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

                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={showNextEvent}
                    disabled={
                      selectedEvent === timelineEvents.length - 1
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 disabled:cursor-not-allowed disabled:bg-[#5f5f5f] disabled:text-white"
                  >
                    Siguiente

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
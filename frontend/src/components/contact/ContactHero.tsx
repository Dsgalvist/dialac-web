import { motion, useReducedMotion } from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";
import Reveal from "../animations/Reveal";

function ContactHero() {
  const reduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
          backgroundSize: "23px 23px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-white/80 to-transparent"
      />

      {/* FORMAS DECORATIVAS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[18%] -z-10 h-52 w-52 rounded-full border-[38px] border-dialac-brown/[0.045]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -10, 0],
              }
        }
        transition={{
          duration: 13,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[2%] -z-10 h-64 w-64 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.04]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -10, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* BARRA SUPERIOR */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -10,
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
          className="flex items-center justify-between border-b border-dialac-border pb-3"
        >
          <div className="flex items-center gap-2.5">
            <motion.span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.6, 1],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-xs">
              Hablemos
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden font-display text-[9px] font-bold uppercase tracking-[0.18em] text-dialac-charcoal/60 sm:inline">
              Atención personalizada
            </span>

            <span className="h-px w-7 bg-dialac-brown/35 sm:w-10" />

            <span className="font-display text-xs font-bold text-dialac-brown-dark">
              01
            </span>
          </div>
        </motion.div>

        {/* ENCABEZADO EDITORIAL */}
        <div className="grid items-end gap-5 py-6 sm:py-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:py-9">
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark">
                  Atención personalizada
                </p>
              </div>

              <div className="mt-4 h-px w-20 bg-dialac-brown/45" />
            </div>
          </Reveal>

          <Reveal direction="up">
            <h1 className="max-w-4xl font-display text-[2.6rem] font-bold leading-[0.94] tracking-[-0.04em] text-dialac-charcoal sm:text-[3.6rem] lg:text-[4.2rem]">
              ¿Necesitas información o una{" "}
              <span className="relative inline-block text-dialac-brown-dark">
                cotización?

                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-dialac-brown sm:-bottom-1.5 sm:h-1.5"
                />
              </span>
            </h1>
          </Reveal>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_24px_60px_rgba(75,52,39,0.12)] sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* INFORMACIÓN */}
            <Reveal direction="right">
              <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#ead8c5] p-6 sm:p-8 lg:min-h-[440px] lg:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -left-20 -top-20 h-52 w-52 rounded-full border-[35px] border-white/25"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/20"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-6 top-4 font-display text-[5rem] font-bold leading-none text-white/25 sm:text-[7rem]"
                >
                  01
                </span>

                <div className="relative">
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.8,
                            rotate: -8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 190,
                      damping: 18,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dialac-brown text-white shadow-[0_12px_26px_rgba(122,63,37,0.22)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                    </svg>
                  </motion.div>

                  <p className="mt-7 max-w-xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
                    Estamos listos para ayudarte a encontrar productos,
                    refrigerios y soluciones adecuadas para personas, empresas y
                    eventos.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      className="rounded-2xl border border-white/70 bg-white/55 p-4 backdrop-blur-sm"
                    >
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-dialac-brown-dark">
                        Atención
                      </p>

                      <p className="mt-2 text-sm font-semibold text-dialac-charcoal">
                        Cercana y personalizada
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      className="rounded-2xl border border-white/70 bg-white/55 p-4 backdrop-blur-sm"
                    >
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-dialac-brown-dark">
                        Canal directo
                      </p>

                      <p className="mt-2 text-sm font-semibold text-dialac-charcoal">
                        Conversa con DIALAC
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* ÚNICA ACCIÓN DE WHATSAPP */}
                <motion.div
                  className="relative mt-8 w-full sm:w-fit"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.015,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                >
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(122,63,37,0.22)] outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 sm:w-auto"
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
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                    </svg>

                    Contáctanos por WhatsApp

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </Reveal>

            {/* IMAGEN */}
            <Reveal direction="left" delay={0.12}>
              <div className="relative min-h-[350px] overflow-hidden bg-[#dfcbb7] sm:min-h-[430px] lg:h-full lg:min-h-[440px]">
                <motion.img
                  src="/images/3 FOTOS/3.3.png"
                  alt="Servicio de eventos y reuniones de DIALAC"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 1.08,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.035,
                        }
                  }
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#24150d]/55 via-transparent to-[#24150d]/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#21140d]/70 to-transparent"
                />

                {/* IDENTIFICADOR */}
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -14,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.55,
                  }}
                  className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/55 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md sm:left-7 sm:top-7"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dialac-brown text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-dialac-brown-dark">
                      Equipo DIALAC
                    </p>

                    <p className="text-xs font-semibold text-dialac-charcoal">
                      Listos para ayudarte
                    </p>
                  </div>
                </motion.div>

                {/* MENSAJE VISUAL */}
                <motion.div
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
                    duration: 0.65,
                    delay: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-6 left-6 max-w-[320px] sm:bottom-8 sm:left-8"
                >
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                    Productos · Servicios · Eventos
                  </p>

                  <p className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Soluciones pensadas para cada ocasión
                  </p>
                </motion.div>

                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-7 right-7 h-3 w-3 rounded-full bg-white"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.45, 1],
                          opacity: [1, 0.55, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* CIERRE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.75,
          }}
          className="mt-5 flex items-center justify-center gap-2.5"
        >
          <span className="h-px w-7 bg-dialac-brown/40 sm:w-10" />

          <motion.span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-dialac-brown"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.4, 1],
                  }
            }
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <p className="font-display text-[10px] font-bold text-dialac-charcoal sm:text-xs">
            Cuídate · Aliméntate · Disfruta
          </p>

          <span className="h-px w-7 bg-dialac-brown/40 sm:w-10" />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
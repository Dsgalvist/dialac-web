import { motion, useReducedMotion } from "motion/react";
import Reveal from "../animations/Reveal";

const processSteps = [
  {
    number: "01",
    title: "Explora",
    description:
      "Conoce nuestro catálogo de productos y las soluciones que DIALAC tiene disponibles.",
    tone: "brown",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Selecciona",
    description:
      "Agrega los productos que necesitas, define sus cantidades y revisa el valor de tu carrito.",
    tone: "green",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
        <path d="M12 9v5M9.5 11.5h5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Planifica",
    description:
      "Indica la fecha en la que necesitas tu pedido. Recuerda solicitarlo con mínimo tres días de anticipación.",
    tone: "brown",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="2"
        />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Genera tu solicitud",
    description:
      "Completa tus datos, revisa la información y genera el PDF con el resumen de tu solicitud.",
    tone: "green",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 15h8M8 18h5M8 12h2" />
      </svg>
    ),
  },
];

function HomeProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf9] px-4 py-14 text-dialac-charcoal sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(153,78,43,0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* DECORACIÓN */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-8 -z-10 h-72 w-72 rounded-full border-[50px] border-dialac-brown/5"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 10, 0],
                y: [0, -10, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 -z-10 h-80 w-80 rounded-[42%_58%_37%_63%] bg-[#eadac9]/40"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -8, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-[1500px]">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="grid gap-6 border-b border-dialac-brown/25 pb-7 lg:grid-cols-[0.42fr_1.58fr] lg:items-end lg:gap-12">
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
                          opacity: [1, 0.55, 1],
                        }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-sm">
                  Así funciona
                </p>
              </div>

              <motion.div
                aria-hidden="true"
                className="mt-5 h-px w-32 origin-left bg-dialac-brown"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-dialac-charcoal sm:text-5xl lg:text-[clamp(3rem,4.5vw,4.8rem)]">
                Tu solicitud en cuatro pasos
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-dialac-charcoal/85 sm:text-lg sm:leading-8">
                Selecciona lo que necesitas y genera una solicitud organizada
                para que el equipo de DIALAC pueda evaluarla.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RECORRIDO */}
        <div className="relative mt-10 sm:mt-12">
          {/* Línea de escritorio */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-dialac-brown/20 lg:block"
          >
            <motion.div
              className="h-full origin-left bg-dialac-brown"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => {
              const isBrown = step.tone === "brown";

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 30,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.11,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f5efe6] p-5 shadow-[0_14px_38px_rgba(68,45,30,0.07)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(68,45,30,0.13)] sm:p-6"
                >
                  {/* Número superior */}
                  <div className="relative flex items-center justify-between gap-4">
                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              y: [0, -4, 0],
                            }
                      }
                      transition={{
                        duration: 3.2 + index * 0.25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white font-display text-base font-bold text-white shadow-[0_10px_24px_rgba(76,48,31,0.18)] ${
                        isBrown
                          ? "bg-dialac-brown"
                          : "bg-dialac-green-dark"
                      }`}
                    >
                      {step.number}
                    </motion.span>

                    <span
                      aria-hidden="true"
                      className="font-display text-6xl font-bold leading-none text-dialac-brown/[0.06]"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Ícono */}
                  <div
                    className={`relative mt-6 flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:-rotate-3 group-hover:scale-110 ${
                      isBrown
                        ? "bg-[#ead8c8] text-dialac-brown-dark"
                        : "bg-[#e5ead8] text-dialac-green-dark"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="relative mt-5 font-display text-2xl font-bold text-dialac-charcoal">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-6 text-dialac-charcoal/85 sm:text-base sm:leading-7">
                    {step.description}
                  </p>

                  {/* Línea inferior */}
                  <motion.div
                    aria-hidden="true"
                    className={`mt-6 h-1.5 origin-left rounded-full ${
                      isBrown
                        ? "bg-dialac-brown"
                        : "bg-dialac-green-dark"
                    }`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            scaleX: 0,
                          }
                    }
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion
                        ? 0
                        : 0.25 + index * 0.1,
                    }}
                  />

                  {/* Flecha entre pasos */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      aria-hidden="true"
                      className="absolute -right-3 top-5 z-20 hidden h-7 w-7 items-center justify-center rounded-full bg-white text-dialac-brown shadow-md lg:flex"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              x: [0, 4, 0],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* RECORDATORIO */}
        <Reveal delay={0.25}>
          <motion.aside
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-dialac-charcoal px-5 py-6 text-white shadow-[0_20px_50px_rgba(38,40,42,0.18)] sm:px-8 sm:py-7 lg:px-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-dialac-brown/75"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-16 right-24 h-36 w-36 rounded-full border-[24px] border-white/5"
            />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, -5, 5, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5efe6] text-dialac-brown-dark shadow-lg sm:h-16 sm:w-16"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                  <path d="M12 7v5l3 2" />
                </svg>
              </motion.div>

              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#e8c5ad]">
                  Importante
                </p>

                <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                  Planifica tu pedido con tiempo
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                  Puedes enviar tu solicitud a cualquier hora. Recuerda
                  realizarla con mínimo tres días de anticipación; el equipo de
                  DIALAC se comunicará contigo dentro de los horarios de
                  atención establecidos.
                </p>
              </div>
            </div>
          </motion.aside>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeProcess;
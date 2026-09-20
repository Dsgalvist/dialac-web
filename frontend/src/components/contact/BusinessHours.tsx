import { motion, useReducedMotion } from "motion/react";

const businessHours = [
  { day: "Lunes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Martes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Miércoles", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Jueves", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Viernes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Sábado", hours: "8:00 a. m. – 1:00 p. m." },
];

function BusinessHours() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f5efe6] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
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
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/65 to-transparent"
      />

      {/* FORMAS DECORATIVAS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[20%] -z-10 h-52 w-52 rounded-full border-[36px] border-dialac-brown/[0.045]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[2%] -z-10 h-60 w-60 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.04]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -10, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-7 grid items-end gap-5 border-b border-dialac-border pb-6 sm:mb-8 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
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
                Horarios de atención
              </p>
            </div>

            <div className="mt-4 h-px w-16 bg-dialac-brown/45" />
          </div>

          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-dialac-charcoal sm:text-4xl lg:text-[2.75rem]">
            Estamos disponibles para ayudarte
          </h2>
        </motion.div>

        {/* CONTENIDO */}
        <div className="overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_20px_50px_rgba(75,52,39,0.1)] sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* HORARIOS */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -30,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-5 sm:p-7 lg:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-1 font-display text-[6rem] font-bold leading-none text-dialac-brown/[0.035] sm:text-[8rem]"
              >
                01
              </span>

              <div className="relative">
                <div className="flex items-start gap-4">
                  <motion.span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dialac-brown text-white shadow-[0_10px_25px_rgba(122,63,37,0.2)]"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: [0, 4, 0, -4, 0],
                          }
                    }
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </motion.span>

                  <p className="max-w-2xl pt-0.5 leading-7 text-dialac-charcoal">
                    Puedes realizar tu solicitud en cualquier momento desde
                    nuestra página web. Nuestro equipo la revisará y se
                    comunicará contigo dentro de los siguientes horarios de
                    atención.
                  </p>
                </div>

                <dl className="mt-7 overflow-hidden rounded-2xl border border-dialac-border">
                  {businessHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: -14,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 4,
                              backgroundColor: "#faf5ef",
                            }
                      }
                      className={`group grid grid-cols-[1fr_auto] items-center gap-4 bg-white px-4 py-3.5 transition sm:px-5 ${
                        index < businessHours.length - 1
                          ? "border-b border-dialac-border"
                          : ""
                      }`}
                    >
                      <dt className="flex items-center gap-3 font-semibold text-dialac-charcoal">
                        <motion.span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-dialac-brown"
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  scale: 1.4,
                                }
                          }
                        />

                        {schedule.day}
                      </dt>

                      <dd className="text-right text-sm leading-5 text-dialac-charcoal sm:text-base">
                        {schedule.hours}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </motion.div>

            {/* INFORMACIÓN IMPORTANTE */}
            <motion.aside
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex overflow-hidden border-t border-dialac-border bg-[#ead8c5] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[36px] border-white/20"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-16 h-52 w-52 rounded-[38%_62%_48%_52%] bg-white/15"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[-1rem] right-5 font-display text-[8rem] font-bold leading-none text-white/20"
              >
                02
              </span>

              <div className="relative flex w-full flex-col">
                <motion.div
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dialac-brown text-white shadow-[0_12px_28px_rgba(122,63,37,0.22)]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, 4, 0, -4, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </motion.div>

                <p className="mt-6 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-dialac-brown-dark sm:text-xs">
                  Información importante
                </p>

                <h3 className="mt-3 max-w-lg font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
                  Solicita tu pedido con anticipación
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-dialac-charcoal">
                  Puedes enviar tu solicitud a cualquier hora, todos los días.
                  Nuestro equipo se comunicará contigo dentro del horario de
                  atención para confirmar los detalles.
                </p>

                <motion.div
                  className="relative mt-7"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.01,
                        }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div className="rounded-2xl border border-white/75 bg-white/75 p-5 shadow-[0_12px_28px_rgba(75,52,39,0.08)] backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dialac-brown text-white"
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
                          <path d="M12 3v18" />
                          <path d="M7 8h7.5a3.5 3.5 0 0 1 0 7H9" />
                          <path d="m8 5 4-2 4 2" />
                        </svg>
                      </div>

                      <div>
                        <p className="font-display text-lg font-bold text-dialac-charcoal sm:text-xl">
                          Mínimo 3 días de anticipación
                        </p>

                        <p className="mt-2 text-sm leading-6 text-dialac-charcoal">
                          El pedido debe solicitarse al menos 3 días antes de la
                          fecha en la que se requiere.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessHours;
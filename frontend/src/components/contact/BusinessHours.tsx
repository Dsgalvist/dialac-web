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
    <section className="relative isolate w-full overflow-hidden bg-[#f5efe6] px-4 py-8 sm:px-6 sm:py-10 lg:py-16">
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
          className="mb-5 grid items-end gap-3 border-b border-dialac-border pb-4 sm:mb-6 lg:mb-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-5 lg:pb-6"
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

              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark lg:text-xs">
                Horarios de atención
              </p>
            </div>

            <div className="mt-3 h-px w-16 bg-dialac-brown/45 lg:mt-4" />
          </div>

          <h2 className="max-w-3xl font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-dialac-charcoal sm:text-3xl lg:text-[2.75rem]">
            Estamos disponibles para ayudarte
          </h2>
        </motion.div>

        {/* CONTENIDO */}
        <div className="overflow-hidden rounded-[1.25rem] border border-dialac-border bg-white shadow-[0_20px_50px_rgba(75,52,39,0.1)] lg:rounded-[2rem]">
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
              className="relative p-4 sm:p-5 lg:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-4 top-1 font-display text-[5rem] font-bold leading-none text-dialac-brown/[0.035] lg:right-6 lg:text-[8rem]"
              >
                01
              </span>

              <div className="relative">
                <div className="flex items-start gap-3 lg:gap-4">
                  <motion.span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-dialac-brown text-white shadow-[0_10px_25px_rgba(122,63,37,0.2)] lg:h-12 lg:w-12"
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
                      className="h-5 w-5 lg:h-6 lg:w-6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </motion.span>

                  <p className="max-w-2xl pt-0.5 text-sm leading-6 text-dialac-charcoal lg:text-base lg:leading-7">
                    Puedes realizar tu solicitud en cualquier momento desde
                    nuestra página web. Nuestro equipo la revisará y se
                    comunicará contigo dentro de los siguientes horarios de
                    atención.
                  </p>
                </div>

                <dl className="mt-4 overflow-hidden rounded-xl border border-dialac-border lg:mt-7 lg:rounded-2xl">
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
                      className={`group grid grid-cols-[1fr_auto] items-center gap-2 bg-white px-3 py-2.5 transition lg:gap-4 lg:px-5 lg:py-3.5 ${
                        index < businessHours.length - 1
                          ? "border-b border-dialac-border"
                          : ""
                      }`}
                    >
                      <dt className="flex items-center gap-2 text-sm font-semibold text-dialac-charcoal lg:gap-3 lg:text-base">
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

                      <dd className="text-right text-xs leading-5 text-dialac-charcoal lg:text-base">
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
              className="relative flex overflow-hidden border-t border-dialac-border bg-[#ead8c5] p-4 sm:p-5 lg:border-l lg:border-t-0 lg:p-9"
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
                className="absolute bottom-[-1rem] right-5 font-display text-[5rem] font-bold leading-none text-white/20 lg:text-[8rem]"
              >
                02
              </span>

              <div className="relative flex w-full flex-col">
                <motion.div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-dialac-brown text-white shadow-[0_12px_28px_rgba(122,63,37,0.22)] lg:h-14 lg:w-14 lg:rounded-2xl"
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
                    className="h-5 w-5 lg:h-7 lg:w-7"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </motion.div>

                <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-dialac-brown-dark lg:mt-6 lg:text-xs">
                  Información importante
                </p>

                <h3 className="mt-1.5 max-w-lg font-display text-xl font-bold leading-tight text-dialac-charcoal sm:text-2xl lg:mt-3 lg:text-3xl">
                  Solicita tu pedido con anticipación
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-dialac-charcoal lg:mt-4 lg:text-base lg:leading-7">
                  Puedes enviar tu solicitud a cualquier hora, todos los días.
                  Nuestro equipo se comunicará contigo dentro del horario de
                  atención para confirmar los detalles.
                </p>

                <motion.div
                  className="relative mt-4 lg:mt-7"
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
                  <div className="rounded-xl border border-white/75 bg-white/75 p-4 shadow-[0_12px_28px_rgba(75,52,39,0.08)] backdrop-blur-sm lg:rounded-2xl lg:p-5">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-dialac-brown text-white lg:h-11 lg:w-11"
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
                        <p className="font-display text-base font-bold leading-snug text-dialac-charcoal lg:text-xl">
                          Mínimo 3 días de anticipación
                        </p>

                        <p className="mt-1 text-xs leading-5 text-dialac-charcoal lg:mt-2 lg:text-sm lg:leading-6">
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
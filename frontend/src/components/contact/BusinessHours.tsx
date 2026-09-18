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
    <section className="relative w-full overflow-hidden bg-[#f7f5f1] px-5 py-20 sm:px-8 sm:py-24">
      {/* FORMAS DECORATIVAS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full border-[42px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* HORARIOS */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
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
            className="relative overflow-hidden rounded-[2rem] border border-dialac-border bg-white p-7 shadow-[0_18px_50px_rgba(38,40,42,0.07)] sm:p-9 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-brown"
            />

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-dialac-brown/5"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
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
                </span>

                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dialac-brown-dark">
                  Horarios de atención
                </p>
              </div>

              <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
                Estamos disponibles para ayudarte
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-dialac-charcoal">
                Puedes realizar tu solicitud en cualquier momento desde nuestra
                página web. Nuestro equipo la revisará y se comunicará contigo
                dentro de los siguientes horarios de atención.
              </p>

              <dl className="mt-9 grid gap-3 sm:grid-cols-2">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
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
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-dialac-border bg-[#fcfaf7] px-5 py-4 transition hover:border-dialac-brown/50 hover:bg-white"
                  >
                    <dt className="flex items-center gap-3 font-semibold text-dialac-charcoal">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-dialac-green transition-transform group-hover:scale-125"
                      />

                      {schedule.day}
                    </dt>

                    <dd className="text-right text-sm leading-6 text-dialac-charcoal sm:text-base">
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
                    x: 35,
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
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex overflow-hidden rounded-[2rem] border border-dialac-border bg-gradient-to-br from-white via-[#fffaf4] to-[#eef1e8] p-7 shadow-[0_18px_50px_rgba(38,40,42,0.07)] sm:p-9 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-green"
            />

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[36px] border-dialac-green/5"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 h-48 w-48 rounded-[35%_65%_45%_55%] bg-dialac-brown/5"
            />

            <div className="relative flex w-full flex-col">
              <motion.div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dialac-green text-white shadow-lg"
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
                  className="h-8 w-8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </motion.div>

              <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
                Información importante
              </p>

              <h3 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-dialac-charcoal">
                Solicita tu pedido con anticipación
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-dialac-charcoal">
                Puedes enviar tu solicitud a cualquier hora, todos los días.
                Nuestro equipo se comunicará contigo dentro del horario de
                atención para confirmar los detalles.
              </p>

              <motion.div
                className="relative mt-auto pt-8"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.015,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
              >
                <div className="rounded-3xl border border-dialac-brown/30 bg-white p-6 shadow-[0_12px_30px_rgba(38,40,42,0.06)]">
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
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
                        <path d="M12 3v18" />
                        <path d="M7 8h7.5a3.5 3.5 0 0 1 0 7H9" />
                        <path d="m8 5 4-2 4 2" />
                      </svg>
                    </div>

                    <div>
                      <p className="font-display text-xl font-bold text-dialac-charcoal">
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
    </section>
  );
}

export default BusinessHours;
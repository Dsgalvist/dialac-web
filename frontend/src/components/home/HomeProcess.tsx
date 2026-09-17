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
        className="h-7 w-7"
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
        className="h-7 w-7"
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
        className="h-7 w-7"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
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
        className="h-7 w-7"
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
    <section className="relative overflow-hidden bg-dialac-cream px-6 py-20 sm:py-24">
      {/* Decoración */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-16 bottom-16 h-44 w-44 rounded-full border-[24px] border-white"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 12, 0],
                y: [0, -12, 0],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-20 top-20 h-52 w-52 rounded-[40%] bg-white"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -10, 0],
                scale: [1, 1.07, 1],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown">
              Así funciona
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Tu solicitud en cuatro pasos
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Selecciona lo que necesitas y genera una solicitud organizada
              para que el equipo de DIALAC pueda evaluarla.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Línea animada para escritorio */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 overflow-hidden rounded-full bg-white lg:block"
          >
            <motion.div
              className="h-full origin-left rounded-full bg-dialac-brown"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                ease: "easeOut",
              }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                          y: 36,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  className="group relative pt-3 lg:pt-0"
                >
                  {/* Número sobre la línea */}
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -5, 0],
                          }
                    }
                    transition={{
                      duration: 3.2 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className={`relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-dialac-cream font-display text-xl font-bold text-white shadow-lg ${
                      isBrown
                        ? "bg-dialac-brown"
                        : "bg-dialac-green-dark"
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  <div className="relative -mt-10 h-[calc(100%-2.5rem)] rounded-3xl border border-dialac-border bg-white px-6 pb-8 pt-16 text-center shadow-sm transition duration-300 group-hover:shadow-xl">
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isBrown
                          ? "bg-dialac-cream text-dialac-brown-dark"
                          : "bg-[#edf0e4] text-dialac-green-dark"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-dialac-charcoal">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-dialac-charcoal">
                      {step.description}
                    </p>

                    <motion.div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-6 right-6 h-1 origin-left rounded-full ${
                        isBrown
                          ? "bg-dialac-brown"
                          : "bg-dialac-green-dark"
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.6,
                        delay: reduceMotion ? 0 : 0.25 + index * 0.1,
                      }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Recordatorio */}
        <Reveal delay={0.25}>
          <motion.aside
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="relative mt-12 overflow-hidden rounded-3xl bg-dialac-charcoal px-6 py-7 text-white sm:px-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-14 h-40 w-40 rounded-full bg-dialac-brown opacity-70"
            />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-dialac-brown-dark">
                <svg
                  aria-hidden="true"
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
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Planifica tu pedido con tiempo
                </h3>

                <p className="mt-2 max-w-4xl leading-7 text-white">
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
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import Reveal from "../animations/Reveal";

const requestItems = [
  {
    name: "Productos seleccionados",
    value: "3",
  },
  {
    name: "Fecha requerida",
    value: "Programada",
  },
  {
    name: "Formato",
    value: "PDF",
  },
];

function HomeCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-dialac-charcoal px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16 lg:px-16">
          {/* Formas decorativas */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-[42%] bg-dialac-green"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 12, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-dialac-brown opacity-80"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 20, 0],
                    y: [0, -14, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute right-10 top-10 h-20 w-20 rounded-full border-2 border-white/30"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    rotate: [0, 15, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Contenido */}
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-4 py-2">
                  <motion.span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-white"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.6, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                    Solicitudes disponibles 24/7
                  </span>
                </div>

                <h2 className="mt-7 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Convierte tus ideas en una solicitud organizada
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white">
                  Explora el catálogo, selecciona lo que necesitas y genera un
                  PDF con toda la información de tu solicitud.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Link
                      to="/productos"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-7 py-4 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                    >
                      Explorar productos

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Link
                      to="/contacto"
                      className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white bg-transparent px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-dialac-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                    >
                      Hablar con DIALAC
                    </Link>
                  </motion.div>
                </div>

                <div className="mt-8 flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-dialac-green-dark">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <p className="max-w-lg leading-7 text-white">
                    Realiza tu pedido con mínimo tres días de anticipación.
                    Nuestro equipo te contactará dentro de los horarios de
                    atención.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vista previa de la solicitud */}
            <Reveal direction="right" delay={0.15}>
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: [0, 0.7, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto w-full max-w-md"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rotate-3 rounded-[2rem] bg-dialac-brown"
                />

                <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 text-dialac-charcoal shadow-2xl sm:p-8">
                  <div className="flex items-center justify-between gap-4 border-b border-dialac-border pb-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-dialac-brown-dark">
                        DIALAC
                      </p>

                      <h3 className="mt-1 font-display text-2xl font-bold text-dialac-charcoal">
                        Resumen de solicitud
                      </h3>
                    </div>

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
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-dialac-cream text-dialac-brown-dark"
                    >
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
                        <path d="M8 13h8M8 17h8" />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {requestItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 24,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: reduceMotion ? 0 : 0.25 + index * 0.12,
                        }}
                        className="flex items-center justify-between gap-4 rounded-xl bg-dialac-cream px-4 py-3"
                      >
                        <span className="text-sm font-medium text-dialac-charcoal">
                          {item.name}
                        </span>

                        <span className="text-sm font-bold text-dialac-brown-dark">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: 0.5,
                    }}
                    className="mt-6 h-2 origin-left overflow-hidden rounded-full bg-dialac-cream"
                  >
                    <div className="h-full w-full rounded-full bg-dialac-green-dark" />
                  </motion.div>

                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-dialac-border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dialac-green-dark text-white">
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
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </div>

                    <div>
                      <p className="font-display font-bold text-dialac-charcoal">
                        Lista para generar
                      </p>

                      <p className="mt-1 text-sm text-dialac-charcoal">
                        Revisa tus datos antes de continuar.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCta;
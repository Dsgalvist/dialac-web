import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import Reveal from "../animations/Reveal";

function HomeCategories() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-24">
      {/* Elementos decorativos */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-28 h-56 w-56 rounded-full bg-dialac-cream"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -16, 0],
                scale: [1, 1.05, 1],
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
        className="absolute -right-20 bottom-10 h-48 w-48 rounded-full border-[28px] border-dialac-cream"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 12, 0],
                y: [0, 12, 0],
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
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown">
              Explora DIALAC
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Encuentra lo que necesitas para cada ocasión
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-dialac-charcoal">
              Descubre nuestros productos o solicita una solución personalizada
              para reuniones, empresas y eventos.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {/* PRODUCTOS */}
          <Reveal direction="left" delay={0.1}>
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative h-full min-h-[440px] overflow-hidden rounded-[2rem] border border-dialac-border bg-dialac-cream p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-10"
            >
              <motion.div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-dialac-brown"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.06, 1],
                        rotate: [0, 8, 0],
                      }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-dialac-brown-dark">
                    01 · Catálogo
                  </span>

                  <motion.div
                    aria-hidden="true"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -7, 0],
                            rotate: [0, 3, 0],
                          }
                    }
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-dialac-brown shadow-lg sm:h-28 sm:w-28"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-14 w-14 sm:h-16 sm:w-16"
                    >
                      <path d="M17 22h31l-3 22H20l-3-22Z" />
                      <path d="M24 22c0-6 3-10 8-10s8 4 8 10" />
                      <path d="M25 32h14" />
                      <circle cx="25" cy="50" r="2" fill="currentColor" />
                      <circle cx="41" cy="50" r="2" fill="currentColor" />
                    </svg>
                  </motion.div>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="font-display text-3xl font-bold text-dialac-charcoal sm:text-4xl">
                    Productos
                  </h3>

                  <p className="mt-4 max-w-md text-lg leading-8 text-dialac-charcoal">
                    Consulta el catálogo, selecciona las cantidades y agrega
                    cada producto a tu solicitud.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Alimentos", "Refrigerios", "Artesanales"].map(
                      (category) => (
                        <span
                          key={category}
                          className="rounded-full border border-dialac-border bg-white px-4 py-2 text-sm font-semibold text-dialac-charcoal"
                        >
                          {category}
                        </span>
                      ),
                    )}
                  </div>

                  <Link
                    to="/productos"
                    className="group/link mt-8 inline-flex items-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
                  >
                    Explorar productos

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          </Reveal>

          {/* SERVICIOS */}
          <Reveal direction="right" delay={0.2}>
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative h-full min-h-[440px] overflow-hidden rounded-[2rem] border border-dialac-green-dark bg-dialac-green-dark p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-10"
            >
              <motion.div
                aria-hidden="true"
                className="absolute -bottom-24 -right-14 h-72 w-72 rounded-[40%] bg-dialac-green opacity-80"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, 10, 0],
                        scale: [1, 1.08, 1],
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
                className="absolute left-1/2 top-8 h-20 w-20 rounded-full border border-white/30"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 12, 0],
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                    02 · Soluciones
                  </span>

                  <motion.div
                    aria-hidden="true"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -7, 0],
                            rotate: [0, -3, 0],
                          }
                    }
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-dialac-green-dark shadow-lg sm:h-28 sm:w-28"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-14 w-14 sm:h-16 sm:w-16"
                    >
                      <path d="M12 27h40v25H12V27Z" />
                      <path d="M8 21h48v8H8v-8Z" />
                      <path d="M32 21v31" />
                      <path d="M32 21c-7 0-13-2-13-7 0-3 2-5 5-5 5 0 8 7 8 12Z" />
                      <path d="M32 21c7 0 13-2 13-7 0-3-2-5-5-5-5 0-8 7-8 12Z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    Servicios
                  </h3>

                  <p className="mt-4 max-w-md text-lg leading-8 text-white">
                    Conoce las soluciones personalizadas que DIALAC prepara
                    para diferentes personas, empresas y ocasiones.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Eventos", "Empresas", "Personalizados"].map(
                      (category) => (
                        <span
                          key={category}
                          className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                        >
                          {category}
                        </span>
                      ),
                    )}
                  </div>

                  <Link
                    to="/servicios"
                    className="group/link mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-dialac-green-dark transition hover:bg-dialac-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Conocer servicios

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
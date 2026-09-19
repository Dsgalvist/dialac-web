import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { Link } from "react-router-dom";
import FloatingShape from "../animations/FloatingShape";

const heroImage =
  "/images/servicios/FIESTAS TEMATICAS 2/1.2.png";

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.45,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-dialac-cream px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
      {/* TEXTURA SUAVE DEL FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.18]"
      >
        <svg
          viewBox="0 0 120 120"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="hero-dot-pattern"
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.25"
                fill="#9a5432"
                opacity="0.18"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#hero-dot-pattern)"
          />
        </svg>
      </div>

      {/* LUZ CENTRAL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl"
      />

      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={7}
        distance={18}
        className="pointer-events-none absolute -left-28 top-16 -z-10"
      >
        <div className="h-64 w-64 rounded-[42%_58%_63%_37%] bg-dialac-brown/10" />
      </FloatingShape>

      <FloatingShape
        duration={8}
        delay={0.8}
        distance={22}
        className="pointer-events-none absolute -right-28 top-4 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[48px] border-dialac-green/10" />
      </FloatingShape>

      <FloatingShape
        duration={6}
        delay={0.3}
        distance={12}
        className="pointer-events-none absolute bottom-8 left-[44%] -z-10 hidden lg:block"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-24 w-24 text-dialac-green/20"
          fill="currentColor"
        >
          <path d="M82 15C50 18 23 35 17 65c20 7 39 2 51-10 12-12 16-27 14-40ZM24 72c12-18 26-30 46-42-16 14-28 29-38 47l-8-5Z" />
        </svg>
      </FloatingShape>

      <div className="mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:gap-14 xl:gap-20">
        {/* CONTENIDO PRINCIPAL */}
        <motion.div
          variants={contentVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative"
        >
          <motion.div
            variants={contentItemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-dialac-border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
          >
            <motion.span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-dialac-green"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.65, 1],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <p className="font-display text-xs font-semibold tracking-[0.18em] text-dialac-green-dark sm:text-sm">
              CUÍDATE · ALIMÉNTATE · DISFRUTA
            </p>
          </motion.div>

          <motion.h1
            variants={contentItemVariants}
            className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-dialac-charcoal sm:text-5xl lg:text-6xl"
          >
            Todo lo que necesitas en una sola solicitud
          </motion.h1>

          <motion.div
            variants={contentItemVariants}
            className="mt-6 h-1.5 w-20 overflow-hidden rounded-full bg-dialac-border"
          >
            <motion.div
              className="h-full rounded-full bg-dialac-brown"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          <motion.p
            variants={contentItemVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8"
          >
            Explora productos lácteos, opciones artesanales y servicios
            personalizados. Selecciona lo que necesitas y genera
            fácilmente tu solicitud.
          </motion.p>

          <motion.div
            variants={contentItemVariants}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
          >
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.02,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/productos"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_12px_25px_rgba(120,61,35,0.18)] outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:w-auto"
              >
                Explorar productos

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.02,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/servicios"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dialac-green bg-white/50 px-6 py-3 font-semibold text-dialac-green-dark outline-none backdrop-blur-sm transition hover:bg-dialac-green hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-green/25 sm:w-auto"
              >
                Ver servicios

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={contentItemVariants}
            className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2"
          >
            <div className="flex items-center gap-3 rounded-xl border border-dialac-border bg-white/55 px-4 py-3 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dialac-green/15 text-dialac-green-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </span>

              <span className="text-sm font-semibold text-dialac-charcoal">
                Empresa familiar desde 2009
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-dialac-border bg-white/55 px-4 py-3 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dialac-brown/15 text-dialac-brown-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                </svg>
              </span>

              <span className="text-sm font-semibold text-dialac-charcoal">
                Atención personalizada
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* EXPERIENCIA VISUAL DIALAC */}
        <motion.aside
          aria-label="Opciones disponibles en DIALAC"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 60,
                  rotate: 1.5,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* SOMBRA DECORATIVA */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 hidden h-[92%] w-[92%] rounded-[2rem] border border-dialac-brown/20 bg-dialac-brown/5 lg:block"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-dialac-border bg-dialac-charcoal shadow-[0_30px_70px_rgba(38,40,42,0.22)] sm:rounded-[2rem]">
            {/* IMAGEN PRINCIPAL */}
            <div className="relative h-[310px] overflow-hidden sm:h-[420px] lg:h-[560px]">
              <motion.img
                src={heroImage}
                alt="Celebración personalizada preparada por DIALAC"
                initial={
                  reduceMotion
                    ? false
                    : {
                        scale: 1.06,
                      }
                }
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              />

              {/* CAPAS PARA LEGIBILIDAD */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-dialac-charcoal via-dialac-charcoal/20 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-dialac-charcoal/35 via-transparent to-transparent"
              />

              {/* ENCABEZADO SOBRE LA IMAGEN */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-7">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-dialac-charcoal/65 px-4 py-2 backdrop-blur-md">
                  <motion.span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[#B8D28B]"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.35, 1],
                            opacity: [1, 0.65, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <p className="font-display text-xs font-semibold tracking-[0.15em] text-white sm:text-sm">
                    ENCUENTRA EN DIALAC
                  </p>
                </div>

                <div className="hidden rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-right text-white backdrop-blur-md sm:block">
                  <p className="font-display text-2xl font-bold">
                    2009
                  </p>

                  <p className="text-xs font-medium">
                    Creando momentos
                  </p>
                </div>
              </div>

              {/* TEXTO EMOCIONAL */}
              <div className="absolute inset-x-0 bottom-0 p-5 pb-6 sm:p-7 sm:pb-8">
                <p className="max-w-lg font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Productos y servicios preparados para compartir
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/90 sm:text-base">
                  Alternativas para momentos cotidianos y
                  celebraciones especiales.
                </p>
              </div>
            </div>

            {/* OPCIONES */}
            <motion.ul
              className="relative grid gap-3 bg-gradient-to-br from-dialac-charcoal to-[#343832] p-4 sm:p-5 lg:grid-cols-3"
              variants={cardContainerVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              <motion.li
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                      }
                }
                className="group rounded-2xl border border-white/10 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3 lg:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dialac-cream text-dialac-brown lg:mb-4">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path d="M12 2c3 4 6 7.3 6 12a6 6 0 0 1-12 0c0-4.7 3-8 6-12Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display text-base font-semibold leading-5 text-dialac-charcoal">
                      Productos lácteos
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-dialac-charcoal">
                      Diferentes marcas, presentaciones y alternativas.
                    </p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                      }
                }
                className="group rounded-2xl border border-white/10 bg-dialac-cream p-4 shadow-sm"
              >
                <div className="flex items-start gap-3 lg:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-dialac-brown lg:mb-4">
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
                      <path d="M12 3v18" />
                      <path d="M8 7c0-2 1.5-4 4-4s4 2 4 4-1.5 3-4 3-4 1-4 3 1.5 4 4 4 4-2 4-4" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display text-base font-semibold leading-5 text-dialac-charcoal">
                      Productos artesanales
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-dialac-charcoal">
                      Opciones preparadas para disfrutar y compartir.
                    </p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                      }
                }
                className="group rounded-2xl border border-white/10 bg-dialac-green p-4 text-white shadow-sm"
              >
                <div className="flex items-start gap-3 lg:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-dialac-green-dark lg:mb-4">
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
                      <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display text-base font-semibold leading-5 text-white">
                      Servicios personalizados
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-white">
                      Soluciones para momentos cotidianos y especiales.
                    </p>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </motion.aside>
      </div>

      {/* INDICADOR DE DESPLAZAMIENTO */}
      <motion.div
        aria-hidden="true"
        className="mx-auto mt-14 hidden w-fit flex-col items-center gap-2 text-dialac-charcoal lg:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.5,
        }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
          Descubre más
        </span>

        <div className="flex h-9 w-6 justify-center rounded-full border-2 border-dialac-charcoal/60 pt-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-dialac-brown"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 12, 0],
                    opacity: [1, 0.3, 1],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
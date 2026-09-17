import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { Link } from "react-router-dom";
import FloatingShape from "../animations/FloatingShape";

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
      delayChildren: 0.4,
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
    <section className="relative isolate overflow-hidden bg-dialac-cream px-6 py-16 sm:py-24">
      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={7}
        distance={18}
        className="pointer-events-none absolute -left-24 top-12 -z-10"
      >
        <div className="h-64 w-64 rounded-[42%_58%_63%_37%] bg-dialac-brown/10" />
      </FloatingShape>

      <FloatingShape
        duration={8}
        delay={0.8}
        distance={22}
        className="pointer-events-none absolute -right-24 top-4 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[48px] border-dialac-green/10" />
      </FloatingShape>

      <FloatingShape
        duration={6}
        delay={0.3}
        distance={12}
        className="pointer-events-none absolute bottom-10 left-[45%] -z-10 hidden lg:block"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-24 w-24 text-dialac-green/20"
          fill="currentColor"
        >
          <path d="M82 15C50 18 23 35 17 65c20 7 39 2 51-10 12-12 16-27 14-40ZM24 72c12-18 26-30 46-42-16 14-28 29-38 47l-8-5Z" />
        </svg>
      </FloatingShape>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* CONTENIDO PRINCIPAL */}
        <motion.div
          variants={contentVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={contentItemVariants}
            className="font-display text-sm font-semibold tracking-[0.2em] text-dialac-green-dark"
          >
            CUÍDATE · ALIMÉNTATE · DISFRUTA
          </motion.p>

          <motion.h1
            variants={contentItemVariants}
            className="mt-6 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-6xl"
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
            className="mt-6 max-w-2xl text-lg leading-8 text-dialac-charcoal"
          >
            Explora productos lácteos, opciones artesanales y servicios
            personalizados. Selecciona lo que necesitas y genera fácilmente tu
            solicitud.
          </motion.p>

          <motion.div
            variants={contentItemVariants}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/productos"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark sm:w-auto"
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
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/servicios"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dialac-green px-6 py-3 font-semibold text-dialac-green-dark transition hover:bg-dialac-green hover:text-white sm:w-auto"
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
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-dialac-charcoal"
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-dialac-green"
              />

              <span>Empresa familiar desde 2009</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
              />

              <span>Atención personalizada</span>
            </div>
          </motion.div>
        </motion.div>

        {/* PANEL DE OPCIONES */}
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
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-dialac-charcoal to-[#343832] p-6 shadow-xl sm:p-8"
        >
          {/* DECORACIONES DEL PANEL */}
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[32px] border-white/5"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-dialac-brown/15"
          />

          <div className="relative flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="h-3 w-3 rounded-full bg-[#B8D28B]"
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

            <p className="font-display text-sm font-semibold tracking-[0.15em] text-white">
              ENCUENTRA EN DIALAC
            </p>
          </div>

          <motion.ul
            className="relative mt-6 space-y-4"
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
                      x: 6,
                      scale: 1.015,
                    }
              }
              className="group rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dialac-cream text-dialac-brown">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M12 2c3 4 6 7.3 6 12a6 6 0 0 1-12 0c0-4.7 3-8 6-12Z" />
                  </svg>
                </div>

                <div>
                  <p className="font-display text-lg font-semibold text-dialac-charcoal">
                    Productos lácteos
                  </p>

                  <p className="mt-2 text-dialac-charcoal">
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
                      x: 6,
                      scale: 1.015,
                    }
              }
              className="group rounded-2xl bg-dialac-cream p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-dialac-brown">
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
                    <path d="M12 3v18" />
                    <path d="M8 7c0-2 1.5-4 4-4s4 2 4 4-1.5 3-4 3-4 1-4 3 1.5 4 4 4 4-2 4-4" />
                  </svg>
                </div>

                <div>
                  <p className="font-display text-lg font-semibold text-dialac-charcoal">
                    Productos artesanales
                  </p>

                  <p className="mt-2 text-dialac-charcoal">
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
                      x: 6,
                      scale: 1.015,
                    }
              }
              className="group rounded-2xl bg-dialac-green p-5 text-white shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-dialac-green-dark">
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
                    <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                  </svg>
                </div>

                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    Servicios personalizados
                  </p>

                  <p className="mt-2 text-white">
                    Soluciones para momentos cotidianos y especiales.
                  </p>
                </div>
              </div>
            </motion.li>
          </motion.ul>
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
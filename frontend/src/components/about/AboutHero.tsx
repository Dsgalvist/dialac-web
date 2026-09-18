import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fffaf3] via-dialac-cream to-[#efe0d1] px-6 py-16 sm:py-20 lg:min-h-[720px] lg:py-24">
      {/* FORMAS DECORATIVAS DEL FONDO */}
      <FloatingShape
        duration={9}
        distance={16}
        className="pointer-events-none absolute -left-28 -top-28 -z-10"
      >
        <div className="h-72 w-72 rounded-full bg-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={8}
        delay={0.6}
        distance={13}
        className="pointer-events-none absolute -bottom-32 right-[5%] -z-10"
      >
        <div className="h-80 w-80 rounded-full border-[55px] border-dialac-green/5" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.3}
        distance={10}
        className="pointer-events-none absolute right-[4%] top-10 -z-10 hidden lg:block"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="h-24 w-24 text-dialac-brown/10"
        >
          <path d="M82 15C50 18 23 35 17 65c20 7 39 2 51-10 12-12 16-27 14-40ZM24 72c12-18 26-30 46-42-16 14-28 29-38 47l-8-5Z" />
        </svg>
      </FloatingShape>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        {/* CONTENIDO PRINCIPAL */}
        <Reveal direction="right">
          <div>
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-green"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.65, 1],
                      }
                }
                transition={{
                  duration: 2.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
                Conoce DIALAC
              </p>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl lg:text-6xl">
              Una historia familiar construida alrededor del{" "}
              <span className="relative inline-block text-dialac-brown-dark">
                buen sabor
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-dialac-brown"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Conoce la esencia que nos inspira a crear experiencias para
              cuidarte, alimentarte y disfrutar cada momento.
            </p>

            <motion.div
              className="mt-10 inline-flex items-center gap-4 rounded-full border border-dialac-border bg-white px-6 py-4 shadow-sm"
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
                duration: 0.6,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dialac-green text-white">
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
              </span>

              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-dialac-green-dark">
                  Nuestra esencia
                </p>

                <p className="mt-1 text-sm text-dialac-charcoal">
                  Alimentos y experiencias hechas con dedicación.
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* COMPOSICIÓN VISUAL DE MARCA */}
        <Reveal direction="left" delay={0.15}>
          <div className="relative mx-auto min-h-[480px] w-full max-w-[550px]">
            {/* ÓRBITAS */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dialac-brown/20"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                  }
              }
              transition={{
                duration: 38,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <span className="absolute left-[15%] top-[3%] h-4 w-4 rounded-full bg-dialac-brown" />
              <span className="absolute bottom-[10%] right-[8%] h-3 w-3 rounded-full bg-dialac-green" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-dialac-green/25"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                  }
              }
              transition={{
                duration: 32,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* TARJETA PRINCIPAL */}
            <motion.div
              className="absolute left-1/2 top-1/2 flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-[42%_58%_45%_55%] border-[10px] border-white bg-white px-8 text-center shadow-[0_25px_70px_rgba(38,40,42,0.18)] sm:h-[340px] sm:w-[340px]"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.8,
                      rotate: -7,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                      rotate: 2,
                      borderRadius: "55% 45% 58% 42%",
                    }
              }
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-dialac-brown/5"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-dialac-green/5"
              />

              <motion.img
                src="/images/LOGO/logocompleto.png"
                alt="DIALAC - Cuídate, aliméntate y disfruta"
                className="relative w-full max-w-[235px] object-contain"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative mt-6 h-px w-20 bg-dialac-border" />

              <p className="relative mt-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
                Cuídate · Aliméntate · Disfruta
              </p>
            </motion.div>

            {/* ELEMENTOS DECORATIVOS */}
            <FloatingShape
              duration={6}
              distance={10}
              className="absolute left-2 top-[15%]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dialac-border bg-white text-dialac-brown shadow-lg">
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
                  <path d="M20 4C12 4 6 8 5 16c5 2 10 .5 13-3 3-3 3-6 2-9Z" />
                  <path d="M5 20c2-6 6-10 12-13" />
                </svg>
              </div>
            </FloatingShape>

            <FloatingShape
              duration={7}
              delay={0.5}
              distance={12}
              className="absolute bottom-[12%] right-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dialac-brown text-white shadow-lg">
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
                  <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                </svg>
              </div>
            </FloatingShape>

            <FloatingShape
              duration={6.5}
              delay={0.8}
              distance={9}
              className="absolute right-[5%] top-[8%]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dialac-green text-white shadow-lg">
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
                  <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
                </svg>
              </div>
            </FloatingShape>
          </div>
        </Reveal>
      </div>

      {/* INDICADOR INFERIOR */}
      <motion.div
        aria-hidden="true"
        className="mx-auto mt-8 hidden w-fit flex-col items-center gap-2 lg:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.6,
        }}
      >
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-dialac-charcoal">
          Descubre más
        </span>

        <motion.div
          className="flex h-10 w-6 justify-center rounded-full border-2 border-dialac-brown/50 pt-2"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 5, 0],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="h-2 w-1 rounded-full bg-dialac-brown" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutHero;
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

function HomeAbout() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-dialac-green px-6 py-16 text-white sm:py-20 lg:py-24">
      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={8}
        distance={18}
        className="pointer-events-none absolute -left-28 -top-28 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[55px] border-white/5" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.7}
        distance={14}
        className="pointer-events-none absolute -bottom-32 right-[8%] -z-10"
      >
        <div className="h-80 w-80 rounded-[40%_60%_35%_65%] bg-white/5" />
      </FloatingShape>

      <FloatingShape
        duration={6}
        delay={0.4}
        distance={10}
        className="pointer-events-none absolute right-[4%] top-10 -z-10 hidden lg:block"
      >
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className="h-24 w-24 text-white/10"
        >
          <path d="M82 15C50 18 23 35 17 65c20 7 39 2 51-10 12-12 16-27 14-40ZM24 72c12-18 26-30 46-42-16 14-28 29-38 47l-8-5Z" />
        </svg>
      </FloatingShape>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* COLUMNA IZQUIERDA */}
        <Reveal direction="right">
          <div>
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-[#E6C6A8]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.65, 1],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <p className="font-display text-sm font-semibold tracking-[0.15em] text-white">
                SOBRE DIALAC
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Una empresa familiar desde 2009
            </h2>

            <motion.div
              className="mt-6 h-1.5 w-20 overflow-hidden rounded-full bg-white/25"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full rounded-full bg-[#E6C6A8]"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* TARJETA DEL AÑO */}
            <motion.div
              className="relative mt-10 max-w-sm overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-7 backdrop-blur-sm"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                      rotate: -2,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      rotate: 1,
                    }
              }
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[24px] border-white/5"
              />

              <p className="relative font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Nuestra esencia
              </p>

              <p className="relative mt-3 font-display text-6xl font-bold text-white sm:text-7xl">
                2009
              </p>

              <p className="relative mt-3 leading-7 text-white">
                El comienzo de una empresa familiar construida con dedicación,
                cercanía y buen sabor.
              </p>
            </motion.div>
          </div>
        </Reveal>

        {/* COLUMNA DERECHA */}
        <Reveal direction="left" delay={0.12}>
          <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-sm sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute right-7 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-dialac-green-dark"
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
                <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
              </svg>
            </div>

            <p className="max-w-xl pr-16 text-lg leading-8 text-white">
              En DIALAC creamos experiencias alrededor del buen sabor,
              manteniendo nuestra esencia familiar, el compromiso con la
              calidad y una atención cercana para cada uno de nuestros
              clientes.
            </p>

            <div className="my-7 h-px bg-white/25" />

            <p className="max-w-xl leading-7 text-white">
              Ofrecemos alimentos, refrigerios, desayunos, productos
              artesanales y soluciones personalizadas para diferentes gustos,
              necesidades y ocasiones.
            </p>

            <motion.div
              className="mt-8 w-fit"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <Link
                to="/nosotros"
                className="group inline-flex items-center gap-3 rounded-lg border-2 border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-dialac-green-dark"
              >
                Conoce nuestra historia

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
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeAbout;
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

function HomeAbout() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff8ee_0%,#f3e4d5_55%,#d7b79d_100%)] px-6 py-16 text-dialac-charcoal sm:py-20 lg:py-24">
      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={8}
        distance={18}
        className="pointer-events-none absolute -left-28 -top-28 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[55px] border-dialac-brown/10" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.7}
        distance={14}
        className="pointer-events-none absolute -bottom-32 right-[8%] -z-10"
      >
        <div className="h-80 w-80 rounded-[40%_60%_35%_65%] bg-white/30" />
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
          className="h-24 w-24 text-dialac-brown/15"
        >
          <path d="M82 15C50 18 23 35 17 65c20 7 39 2 51-10 12-12 16-27 14-40ZM24 72c12-18 26-30 46-42-16 14-28 29-38 47l-8-5Z" />
        </svg>
      </FloatingShape>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* INFORMACIÓN */}
        <Reveal direction="right">
          <div>
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
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

              <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-dialac-brown-dark">
                Sobre DIALAC
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Una empresa familiar que disfruta contigo
            </h2>

            <motion.div
              className="mt-6 h-1.5 w-20 overflow-hidden rounded-full bg-dialac-brown/20"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full origin-left rounded-full bg-dialac-brown"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-dialac-charcoal">
              En DIALAC creamos experiencias alrededor del buen sabor,
              manteniendo nuestra esencia familiar, el compromiso con la
              calidad y una atención cercana para cada uno de nuestros
              clientes.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-dialac-charcoal">
              Ofrecemos alimentos, refrigerios, desayunos, productos
              artesanales y soluciones personalizadas para diferentes gustos,
              necesidades y ocasiones.
            </p>

            {/* DETALLES DE IDENTIDAD */}
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-dialac-border bg-white/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-dialac-brown-dark">
                  Desde 2009
                </p>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Creciendo con dedicación, cercanía y buen sabor.
                </p>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-dialac-border bg-white/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-dialac-brown-dark">
                  Esencia familiar
                </p>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Calidad y atención cercana en cada experiencia.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 w-fit"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <Link
                to="/nosotros"
                className="group inline-flex items-center gap-3 rounded-xl bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
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
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </Reveal>

        {/* MASCOTAS */}
        <Reveal direction="left" delay={0.12}>
          <div className="relative mx-auto w-full max-w-3xl pt-10 lg:pt-0">
            {/* Fondo orgánico */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-[2%] bottom-[4%] top-[4%] rounded-[46%_54%_42%_58%/54%_44%_56%_46%] border border-white/60 bg-white/65 shadow-xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      borderRadius: [
                        "46% 54% 42% 58% / 54% 44% 56% 46%",
                        "54% 46% 56% 44% / 45% 56% 44% 55%",
                        "46% 54% 42% 58% / 54% 44% 56% 46%",
                      ],
                      rotate: [0, 1.5, 0],
                    }
              }
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Huella decorativa */}
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="absolute left-[4%] top-[5%] h-14 w-14 -rotate-12 text-dialac-brown opacity-20 sm:h-16 sm:w-16"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      rotate: [-12, -5, -12],
                    }
              }
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ellipse cx="32" cy="39" rx="14" ry="11" />
              <ellipse cx="16" cy="25" rx="6" ry="8" />
              <ellipse cx="29" cy="17" rx="6" ry="8" />
              <ellipse cx="43" cy="18" rx="6" ry="8" />
              <ellipse cx="52" cy="31" rx="6" ry="8" />
            </motion.svg>

            {/* Sello */}
            <motion.div
              aria-hidden="true"
              className="absolute right-[2%] top-[1%] z-20 flex h-24 w-24 items-center justify-center rounded-full bg-dialac-brown text-center font-display text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl sm:h-28 sm:w-28"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 6, -4, 0],
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span>
                Familia
                <br />
                DIALAC
              </span>
            </motion.div>

            {/* Imagen completa */}
            <motion.div
              className="relative z-10"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.025,
                      rotate: 0.5,
                    }
              }
            >
              <img
                src="/images/LOGO/mascotas.png"
                alt="Las cinco mascotas oficiales de la familia DIALAC"
                className="mx-auto h-auto w-full object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Sombra inferior */}
            <motion.div
              aria-hidden="true"
              className="absolute bottom-[3%] left-[12%] right-[12%] h-9 rounded-[50%] bg-dialac-brown/25 blur-xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scaleX: [1, 0.94, 1],
                      opacity: [0.25, 0.16, 0.25],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* FRASE DE MARCA */}
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
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : 0.5,
              }}
              className="relative z-20 mx-auto -mt-1 flex w-fit items-center gap-3 rounded-full border border-dialac-border bg-white px-5 py-3 shadow-xl"
            >
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="text-sm font-semibold text-dialac-charcoal">
                Cuídate · Aliméntate · Disfruta
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeAbout;
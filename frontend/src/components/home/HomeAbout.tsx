import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

function HomeAbout() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-10 text-dialac-charcoal sm:px-6 sm:py-12 lg:flex lg:min-h-[calc(100svh-64px)] lg:items-center lg:px-8 lg:py-7">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(153,78,43,0.13) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={9}
        distance={14}
        className="pointer-events-none absolute -left-32 top-8 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[55px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={8}
        delay={0.6}
        distance={10}
        className="pointer-events-none absolute -bottom-40 right-[4%] -z-10"
      >
        <div className="h-80 w-80 rounded-[42%_58%_37%_63%] bg-white/30" />
      </FloatingShape>

      <div className="mx-auto w-full max-w-[1500px]">
        {/* ENCABEZADO */}
        <Reveal direction="up">
          <div className="mb-6 grid gap-4 border-b border-dialac-brown/25 pb-5 sm:mb-7 sm:pb-6 lg:mb-6 lg:grid-cols-[0.36fr_1.64fr] lg:items-end lg:gap-10 lg:pb-5">
            <div>
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.55, 1],
                        }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-dialac-brown-dark sm:text-sm">
                  Sobre DIALAC
                </p>
              </div>

              <motion.div
                aria-hidden="true"
                className="mt-4 h-px w-28 origin-left bg-dialac-brown sm:mt-5 sm:w-32"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <h2 className="max-w-5xl font-display text-[2.4rem] font-bold leading-[1.02] tracking-[-0.04em] text-dialac-charcoal sm:text-5xl lg:text-[clamp(2.7rem,3.9vw,4.3rem)]">
              Una empresa familiar que disfruta contigo
            </h2>
          </div>
        </Reveal>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_65px_rgba(38,40,42,0.11)] sm:rounded-[2.25rem] lg:h-[450px] lg:grid-cols-[1.05fr_0.95fr] xl:h-[470px]">
          {/* MASCOTAS */}
          <Reveal
            direction="right"
            className="min-h-0"
          >
            <div className="group relative flex h-full min-h-[350px] items-center justify-center overflow-hidden bg-[#eadac9] px-4 pb-14 pt-10 sm:min-h-[440px] sm:px-9 sm:pb-16 sm:pt-12 lg:min-h-0 lg:px-10 lg:py-7">
              {/* Fondo orgánico */}
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[82%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/45"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        borderRadius: [
                          "50% 50% 50% 50%",
                          "44% 56% 58% 42% / 48% 45% 55% 52%",
                          "50% 50% 50% 50%",
                        ],
                        rotate: [0, 2, 0],
                      }
                }
                transition={{
                  duration: 11,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -left-16 -top-16 h-44 w-44 rounded-full border-[34px] border-dialac-brown/10 sm:h-48 sm:w-48 sm:border-[38px]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-dialac-brown/10 sm:h-60 sm:w-60"
              />

              {/* Sello */}
              <motion.div
                aria-hidden="true"
                className="absolute right-4 top-4 z-20 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/70 bg-dialac-brown text-center font-display text-[9px] font-bold uppercase leading-3 tracking-[0.12em] text-white shadow-lg sm:right-7 sm:top-6 sm:h-20 sm:w-20 sm:text-[10px] lg:h-[5.25rem] lg:w-[5.25rem]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, 5, -3, 0],
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 5.5,
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

              {/* Imagen */}
              <motion.div
                className="relative z-10 w-full max-w-[620px]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -7, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.02,
                      }
                }
              >
                <img
                  src="/images/LOGO/mascotas.png"
                  alt="Las cinco mascotas oficiales de la familia DIALAC"
                  className="mx-auto max-h-[315px] w-full object-contain drop-shadow-[0_22px_20px_rgba(90,50,28,0.20)] sm:max-h-[380px] lg:max-h-[365px] xl:max-h-[390px]"
                  loading="lazy"
                />
              </motion.div>

              {/* Sombra */}
              <motion.div
                aria-hidden="true"
                className="absolute bottom-[13%] left-[18%] right-[18%] h-8 rounded-[50%] bg-dialac-brown/20 blur-2xl"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scaleX: [1, 0.94, 1],
                        opacity: [0.22, 0.14, 0.22],
                      }
                }
                transition={{
                  duration: 5,
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
                        y: 14,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.35,
                }}
                className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-white/90 px-4 py-2.5 shadow-md backdrop-blur-md sm:bottom-5 sm:gap-3 sm:px-5"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                />

                <p className="text-[11px] font-bold text-dialac-charcoal sm:text-sm">
                  Cuídate · Aliméntate · Disfruta
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* INFORMACIÓN */}
          <Reveal
            direction="left"
            delay={0.1}
            className="h-full"
          >
            <div className="relative flex h-full flex-col justify-center px-6 py-9 sm:px-10 sm:py-11 lg:px-9 lg:py-6 xl:px-12">
              <span
                aria-hidden="true"
                className="absolute right-5 top-4 font-display text-[5rem] font-bold leading-none text-dialac-brown/[0.045] lg:right-6 lg:top-4 lg:text-[5.5rem]"
              >
                09
              </span>

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-dialac-brown-dark">
                  Nuestra esencia
                </p>

                <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-dialac-charcoal sm:text-lg sm:leading-8 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
                  En DIALAC creamos experiencias alrededor del buen sabor,
                  manteniendo nuestra esencia familiar, el compromiso con la
                  calidad y una atención cercana para cada uno de nuestros
                  clientes.
                </p>
                
                <p className="mt-3 max-w-xl text-sm font-normal leading-6 text-dialac-charcoal/80 sm:text-base sm:leading-7 lg:text-sm lg:leading-6 xl:text-base xl:leading-7">
                  Ofrecemos alimentos, refrigerios, desayunos, productos
                  artesanales y soluciones personalizadas para diferentes
                  gustos, necesidades y ocasiones.
                </p>

                {/* DATOS */}
                <div className="mt-4 border-y border-dialac-border">
                  <motion.div
                    className="grid gap-1 border-b border-dialac-border py-3 sm:grid-cols-[0.42fr_0.58fr] sm:items-start lg:grid-cols-[0.4fr_0.6fr]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 5,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <p className="text-xl font-bold tracking-[-0.03em] text-dialac-brown-dark lg:text-lg xl:text-xl">
                      Desde 2009
                    </p>

                    <p className="text-sm font-normal leading-6 text-dialac-charcoal lg:text-[13px] lg:leading-5 xl:text-sm xl:leading-6">
                      Creciendo con dedicación, cercanía y buen sabor.
                    </p>
                  </motion.div>

                  <motion.div
                    className="grid gap-1 py-3 sm:grid-cols-[0.42fr_0.58fr] sm:items-start lg:grid-cols-[0.4fr_0.6fr]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 5,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <p className="text-xl font-bold tracking-[-0.03em] text-dialac-brown-dark lg:text-lg xl:text-xl">
                      Esencia familiar
                    </p>

                    <p className="text-sm font-normal leading-6 text-dialac-charcoal lg:text-[13px] lg:leading-5 xl:text-sm xl:leading-6">
                      Calidad y atención cercana en cada experiencia.
                    </p>
                  </motion.div>
                </div>

                {/* ENLACE */}
                <motion.div
                  className="mt-4 w-fit"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                >
                  <Link
                    to="/nosotros"
                    className="group inline-flex items-center gap-3 rounded-full bg-dialac-brown px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(153,78,43,0.22)] transition duration-300 hover:bg-dialac-brown-dark hover:shadow-[0_14px_30px_rgba(153,78,43,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown sm:px-6 sm:py-3 sm:text-base lg:py-2.5 lg:text-sm xl:text-base"
                  >
                    Conoce nuestra historia

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1 group-hover:bg-white/25">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* TEXTO DECORATIVO SIN AÑADIR ALTURA */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-1/2 -z-10 hidden -translate-x-1/2 whitespace-nowrap font-display text-[clamp(4rem,8vw,7rem)] font-bold uppercase leading-none tracking-[-0.06em] text-dialac-brown/[0.04] sm:block"
      >
        CALIDAD · FAMILIA · SABOR · CERCANÍA
      </p>
    </section>
  );
}

export default HomeAbout;
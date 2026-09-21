import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const audiences = [
  {
    name: "Personas",
    description: "Opciones para disfrutar en el día a día.",
    number: "01",
    icon: (
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
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    name: "Empresas",
    description: "Soluciones pensadas para equipos y organizaciones.",
    number: "02",
    icon: (
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
        <path d="M3 21h18" />
        <path d="M6 21V7l6-4 6 4v14" />
        <path d="M9 10h1" />
        <path d="M14 10h1" />
        <path d="M9 14h1" />
        <path d="M14 14h1" />
        <path d="M10 21v-3h4v3" />
      </svg>
    ),
  },
  {
    name: "Eventos y reuniones",
    description: "Alternativas para acompañar momentos especiales.",
    number: "03",
    icon: (
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
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
];

function AboutStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="nuestra-esencia"
      className="relative isolate overflow-hidden bg-[#fffdf9] px-4 py-10 sm:px-6 sm:py-12 lg:py-14"
    >
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-[#f3e9dc] via-[#f8f3ec]/70 to-transparent"
      />

      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={9}
        distance={10}
        className="pointer-events-none absolute -left-32 top-20 -z-10"
      >
        <div className="h-60 w-60 rounded-full border-[42px] border-dialac-brown/[0.045]" />
      </FloatingShape>

      <FloatingShape
        duration={8}
        delay={0.5}
        distance={9}
        className="pointer-events-none absolute -right-24 bottom-10 -z-10"
      >
        <div className="h-56 w-56 rounded-[42%_58%_35%_65%] bg-dialac-brown/[0.04]" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="grid gap-4 border-b border-dialac-border pb-5 lg:grid-cols-[0.38fr_1fr] lg:items-end">
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-2.5">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dialac-brown-dark">
                  Nuestra esencia
                </p>
              </div>

              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 block h-px w-16 origin-left bg-dialac-brown"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.08}>
            <h2 className="font-display text-3xl font-bold leading-none tracking-[-0.025em] text-dialac-charcoal sm:text-4xl lg:text-5xl">
              Quiénes somos
            </h2>
          </Reveal>
        </div>

        {/* HISTORIA Y COLLAGE */}
        <div className="mt-7 grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          {/* CONTENIDO EDITORIAL */}
          <Reveal direction="right">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-10 font-display text-[7rem] font-bold leading-none text-dialac-brown/[0.045]"
              >
                01
              </span>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dialac-brown text-white shadow-[0_10px_24px_rgba(148,79,44,0.2)]">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>

                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-dialac-brown-dark">
                    Empresa familiar
                  </p>
                </div>

                <p className="mt-6 max-w-xl text-xl font-medium leading-9 text-dialac-charcoal sm:text-2xl sm:leading-10">
                  DIALAC es una empresa familiar dedicada a crear experiencias
                  alrededor del buen sabor por medio de alimentos, productos y
                  soluciones para diferentes momentos y ocasiones.
                </p>

                <div className="mt-6 flex items-start gap-4 border-l-2 border-dialac-brown pl-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eadac9] text-dialac-brown">
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
                      <path d="M20 4C12 4 6 8 5 16c5 2 10 .5 13-3 3-3 3-6 2-9Z" />
                      <path d="M5 20c2-6 6-10 12-13" />
                    </svg>
                  </span>

                  <p className="max-w-lg text-sm leading-6 text-dialac-charcoal sm:text-base">
                    Creamos alternativas que se adaptan a diferentes personas,
                    necesidades y ocasiones.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Cercanía", "Calidad", "Buen sabor"].map(
                    (value, index) => (
                      <motion.span
                        key={value}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 10,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: 0.15 + index * 0.08,
                        }}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -3,
                              }
                        }
                        className="rounded-full border border-dialac-border bg-white px-4 py-2 text-xs font-semibold text-dialac-charcoal shadow-sm"
                      >
                        {value}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* COLLAGE ASIMÉTRICO */}
          <Reveal direction="left" delay={0.08}>
            <div className="relative mx-auto h-[390px] w-full max-w-2xl sm:h-[460px] lg:h-[480px]">
              {/* FONDO CREMA */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-2 top-8 rounded-[42%_58%_46%_54%] bg-[#eadac9]"
              />

              <div
                aria-hidden="true"
                className="absolute left-2 top-2 h-28 w-28 rounded-full border-[22px] border-dialac-brown/[0.07]"
              />

              {/* IMAGEN PRINCIPAL */}
              <motion.figure
                className="absolute bottom-8 left-0 top-0 w-[67%] overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-[0_24px_55px_rgba(90,60,42,0.18)] sm:left-4"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        rotate: -1,
                      }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="/images/9 FOTOS/3.png"
                  alt="Experiencia preparada por DIALAC"
                  className="h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
                />

                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.17em] text-white/90">
                    Experiencias DIALAC
                  </p>

                  <p className="mt-2 font-display text-xl font-bold leading-tight sm:text-2xl">
                    Preparadas con dedicación y cercanía
                  </p>
                </figcaption>
              </motion.figure>

              {/* IMAGEN SUPERIOR */}
              <motion.figure
                className="absolute right-0 top-10 h-[38%] w-[42%] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-[0_20px_45px_rgba(90,60,42,0.17)]"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 20,
                        rotate: 4,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 4,
                }}
                viewport={{ once: true }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 1,
                        y: -5,
                      }
                }
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="/images/9 FOTOS/4.png"
                  alt="Galletas artesanales de DIALAC"
                  className="h-full w-full object-cover"
                />
              </motion.figure>

              {/* IMAGEN INFERIOR */}
              <motion.figure
                className="absolute bottom-0 right-4 h-[39%] w-[43%] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-[0_20px_45px_rgba(90,60,42,0.17)]"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 20,
                        rotate: -4,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: -4,
                }}
                viewport={{ once: true }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -1,
                        y: -5,
                      }
                }
                transition={{
                  duration: 0.55,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="/images/9 FOTOS/6.png"
                  alt="Refrigerio preparado por DIALAC"
                  className="h-full w-full object-cover"
                />
              </motion.figure>

              {/* SELLO */}
              <motion.div
                className="absolute right-[32%] top-[41%] z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-dialac-brown text-center font-display text-[10px] font-bold uppercase leading-3 tracking-[0.08em] text-white shadow-xl sm:h-24 sm:w-24 sm:text-xs sm:leading-4"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -7, 0],
                        rotate: [0, 3, 0],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Familia
                <br />
                DIALAC
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* NUESTRA PROPUESTA */}
        <Reveal direction="up" delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-[1.5rem] bg-dialac-brown px-5 py-6 text-white sm:px-7 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-52 w-52 rounded-full border-[38px] border-white/[0.08]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 left-[35%] h-44 w-44 rounded-[40%_60%_35%_65%] bg-white/[0.05]"
            />

            <div className="relative grid gap-5 lg:grid-cols-[0.35fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  Lo que ofrecemos
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-white">
                  Nuestra propuesta
                </h3>
              </div>

              <p className="max-w-4xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                Ofrecemos alimentos, refrigerios, desayunos, productos
                artesanales y soluciones para eventos y reuniones. Nuestra
                propuesta busca adaptarse a diferentes gustos y necesidades,
                tanto para el día a día como para momentos especiales.
              </p>
            </div>
          </div>
        </Reveal>

        {/* AUDIENCIAS */}
        <Reveal direction="up" delay={0.15}>
          <div
            aria-label="Clientes de DIALAC"
            className="mt-4 overflow-hidden rounded-[1.5rem] border border-dialac-border bg-white shadow-[0_14px_35px_rgba(90,60,42,0.07)] sm:grid sm:grid-cols-3"
          >
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.name}
                className={`group relative flex items-center gap-4 overflow-hidden px-5 py-5 ${
                  index !== audiences.length - 1
                    ? "border-b border-dialac-border sm:border-b-0 sm:border-r"
                    : ""
                }`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        backgroundColor: "#f8eee5",
                      }
                }
                transition={{
                  duration: 0.3,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-4 font-display text-6xl font-bold text-dialac-brown/[0.045] transition-transform duration-500 group-hover:scale-110"
                >
                  {audience.number}
                </span>

                <motion.span
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eadac9] text-dialac-brown-dark"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 6,
                          scale: 1.08,
                        }
                  }
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {audience.icon}
                </motion.span>

                <div className="relative min-w-0">
                  <h4 className="font-display text-base font-bold leading-tight text-dialac-charcoal">
                    {audience.name}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-dialac-charcoal/80 sm:text-sm">
                    {audience.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutStory;
import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const audiences = [
  {
    name: "Personas",
    description: "Opciones para disfrutar en el día a día.",
    color: "bg-dialac-brown",
    icon: (
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
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    name: "Empresas",
    description: "Soluciones pensadas para equipos y organizaciones.",
    color: "bg-dialac-green",
    icon: (
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
    color: "bg-dialac-brown-dark",
    icon: (
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
      className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={8}
        distance={12}
        className="pointer-events-none absolute -left-28 bottom-10 -z-10"
      >
        <div className="h-64 w-64 rounded-full border-[45px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.5}
        distance={10}
        className="pointer-events-none absolute -right-24 top-16 -z-10"
      >
        <div className="h-56 w-56 rounded-[40%_60%_35%_65%] bg-dialac-green/5" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* INFORMACIÓN PRINCIPAL */}
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
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

                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Nuestra esencia
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                Quiénes somos
              </h2>

              <motion.div
                className="mt-6 h-1.5 w-20 overflow-hidden rounded-full bg-dialac-border"
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
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>

              <p className="mt-7 text-lg leading-8 text-dialac-charcoal">
                DIALAC es una empresa familiar dedicada a crear experiencias
                alrededor del buen sabor por medio de alimentos, productos y
                soluciones para diferentes momentos y ocasiones.
              </p>

              <motion.div
                className="mt-9 flex items-start gap-4 rounded-2xl border border-dialac-border bg-dialac-cream p-5"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 6,
                      }
                }
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dialac-green text-white">
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
                    <path d="M20 4C12 4 6 8 5 16c5 2 10 .5 13-3 3-3 3-6 2-9Z" />
                    <path d="M5 20c2-6 6-10 12-13" />
                  </svg>
                </span>

                <p className="leading-7 text-dialac-charcoal">
                  Creamos alternativas que se adaptan a diferentes personas,
                  necesidades y ocasiones.
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* NUESTRA PROPUESTA */}
          <Reveal direction="left" delay={0.12}>
            <article className="relative overflow-hidden rounded-[2rem] bg-dialac-charcoal p-6 shadow-[0_25px_70px_rgba(38,40,42,0.15)] sm:p-9 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-white/5"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-dialac-brown/15"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c9ab]">
                      Lo que ofrecemos
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                      Nuestra propuesta
                    </h3>
                  </div>

                  <motion.div
                    aria-hidden="true"
                    className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-dialac-brown sm:flex"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: [0, 8, -8, 0],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                    </svg>
                  </motion.div>
                </div>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
                  Ofrecemos alimentos, refrigerios, desayunos, productos
                  artesanales y soluciones para eventos y reuniones. Nuestra
                  propuesta busca adaptarse a diferentes gustos y necesidades,
                  tanto para el día a día como para momentos especiales.
                </p>

                <div className="my-8 h-px bg-white/20" />

                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#f2c9ab]">
                  Pensado para
                </p>

                <div
                  aria-label="Clientes de DIALAC"
                  className="mt-5 grid gap-4 sm:grid-cols-2"
                >
                  {audiences.map((audience, index) => (
                    <motion.div
                      key={audience.name}
                      className={`group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm ${
                        index === audiences.length - 1
                          ? "sm:col-span-2"
                          : ""
                      }`}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 24,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
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
                              backgroundColor: "rgba(255, 255, 255, 0.16)",
                            }
                      }
                      transition={{
                        duration: 0.45,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110 ${audience.color}`}
                        >
                          {audience.icon}
                        </span>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white">
                            {audience.name}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-white">
                            {audience.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
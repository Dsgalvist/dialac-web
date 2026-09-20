import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "../animations/Stragger";

const reasons = [
  {
    number: "01",
    title: "Experiencia familiar",
    description:
      "Desde 2009 trabajamos manteniendo nuestra esencia familiar, dedicación y atención cercana.",
  },
  {
    number: "02",
    title: "Calidad y frescura",
    description:
      "Seleccionamos productos frescos y de calidad para diferentes gustos, necesidades y ocasiones.",
  },
  {
    number: "03",
    title: "Atención personalizada",
    description:
      "Escuchamos las necesidades de cada cliente para ofrecer alternativas para personas, empresas y eventos.",
  },
  {
    number: "04",
    title: "Compromiso responsable",
    description:
      "Promovemos el bienestar e incorporamos prácticas responsables, como el uso de empaques biodegradables.",
  },
];

function HomeWhyUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-14 text-dialac-charcoal sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(153,78,43,0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={8}
        distance={16}
        className="pointer-events-none absolute -right-28 top-16 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[52px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.5}
        distance={12}
        className="pointer-events-none absolute -bottom-24 left-[35%] -z-10"
      >
        <div className="h-56 w-56 rounded-[40%_60%_62%_38%] bg-dialac-brown/5" />
      </FloatingShape>

      <div className="mx-auto max-w-[1500px]">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="grid gap-6 border-b border-dialac-brown/25 pb-7 lg:grid-cols-[0.42fr_1.58fr] lg:items-end lg:gap-12">
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

                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-sm">
                  Por qué elegirnos
                </p>
              </div>

              <motion.div
                aria-hidden="true"
                className="mt-5 h-px w-32 origin-left bg-dialac-brown"
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

            <h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-dialac-charcoal sm:text-5xl lg:text-[clamp(3rem,4.5vw,4.8rem)]">
              Cercanía, calidad y dedicación en cada experiencia
            </h2>
          </div>
        </Reveal>

        {/* CONTENIDO */}
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* IMAGEN PRINCIPAL */}
          <Reveal
            direction="right"
            className="min-h-0"
          >
            <motion.div
              className="group relative h-full min-h-[540px] overflow-hidden rounded-[2rem] bg-dialac-charcoal shadow-[0_26px_70px_rgba(55,39,28,0.2)] sm:min-h-[620px] lg:min-h-[600px]"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.img
                src="/images/servicios/FIESTAS TEMATICAS 2/2;2.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.045,
                      }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Capas */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,25,22,0.12)_0%,rgba(27,25,22,0.42)_40%,rgba(32,27,23,0.97)_100%)]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-dialac-brown/35 via-transparent to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[38px] border-white/10"
              />

              {/* Etiqueta */}
              <motion.div
                className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-md sm:left-8 sm:top-8"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />

                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
                    Familia DIALAC
                  </p>
                </div>
              </motion.div>

              {/* Contenido */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-9">
                <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  En DIALAC combinamos nuestra experiencia familiar con una
                  atención personalizada para acompañar momentos cotidianos,
                  reuniones y eventos.
                </p>

                <motion.div
                  className="mt-5 h-1.5 w-20 overflow-hidden rounded-full bg-white/25"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <motion.div
                    className="h-full origin-left rounded-full bg-white"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            scaleX: 0,
                          }
                    }
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: reduceMotion ? 0 : 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </motion.div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="font-display text-3xl font-bold text-white">
                      2009
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/90 sm:text-sm">
                      Año en que comenzó nuestra historia
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-dialac-brown">
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

                    <p className="mt-2 text-xs leading-5 text-white/90 sm:text-sm">
                      Atención cercana y personalizada
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RAZONES */}
          <StaggerContainer className="overflow-hidden rounded-[2rem] border border-dialac-border bg-white shadow-[0_20px_55px_rgba(60,42,30,0.08)]">
            {reasons.map((reason, index) => (
              <StaggerItem
                key={reason.number}
                className="h-auto"
              >
                <motion.article
                  className={`group relative grid gap-5 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:px-7 lg:px-8 ${
                    index < reasons.length - 1
                      ? "border-b border-dialac-border"
                      : ""
                  }`}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 6,
                          backgroundColor: "#f8f1e8",
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Número */}
                  <motion.span
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dialac-brown font-display text-sm font-bold text-white shadow-[0_8px_20px_rgba(153,78,43,0.22)]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 6,
                            scale: 1.08,
                          }
                    }
                  >
                    {reason.number}
                  </motion.span>

                  {/* Texto */}
                  <div className="relative z-10">
                    <h3 className="font-display text-xl font-bold leading-tight text-dialac-charcoal sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-dialac-charcoal/85 sm:text-base sm:leading-7">
                      {reason.description}
                    </p>
                  </div>

                  {/* Número decorativo */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-5 right-16 font-display text-[6rem] font-bold leading-none text-dialac-brown/[0.035] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1"
                  >
                    {reason.number}
                  </span>

                  {/* Indicador lateral */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-1 origin-bottom bg-dialac-brown"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            scaleY: 0,
                          }
                    }
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                  />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export default HomeWhyUs;
import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const commitments = [
  {
    number: "01",
    title: "Calidad",
    description:
      "Seleccionamos productos frescos y alternativas que respondan a las necesidades de nuestros clientes.",
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
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cercanía",
    description:
      "Brindamos una atención amable, personalizada y con la esencia de una empresa familiar.",
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
        <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Bienestar",
    description:
      "Promovemos experiencias que inviten a cuidarse, alimentarse y disfrutar.",
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
        <path d="M20 4C12 4 6 8 5 16c5 2 10 .5 13-3 3-3 3-6 2-9Z" />
        <path d="M5 20c2-6 6-10 12-13" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Responsabilidad ambiental",
    description:
      "Incorporamos prácticas responsables, incluyendo el uso de empaques biodegradables.",
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
        <path d="M12 22V8" />
        <path d="M5 12c0-4 3-7 7-7v7H5Z" />
        <path d="M19 12c0-4-3-7-7-7v7h7Z" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
];

function AboutCommitments() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f8f4ee] px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
      {/* DECORACIÓN */}
      <FloatingShape
        duration={8}
        distance={8}
        className="pointer-events-none absolute -left-24 top-14 -z-10"
      >
        <div className="h-48 w-48 rounded-full border-[30px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={9}
        delay={0.6}
        distance={10}
        className="pointer-events-none absolute -bottom-24 right-[5%] -z-10"
      >
        <div className="h-52 w-52 rounded-[40%_60%_35%_65%] bg-dialac-brown/5" />
      </FloatingShape>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(153, 82, 47, 0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO COMPACTO */}
        <Reveal direction="right">
          <div className="flex flex-col gap-3 border-b border-dialac-border pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
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

                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Nuestro compromiso
                </p>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
                La esencia que guía nuestro trabajo
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-dialac-charcoal sm:text-right">
              Cuatro compromisos que orientan la manera en la que creamos cada
              experiencia en DIALAC.
            </p>
          </div>
        </Reveal>

        {/* CONTENIDO */}
        <div className="mt-6 grid overflow-hidden rounded-[1.5rem] border border-dialac-border bg-white shadow-[0_15px_40px_rgba(38,40,42,0.07)] lg:grid-cols-[0.7fr_1.3fr]">
          {/* IMAGEN */}
          <Reveal direction="right" className="h-full">
            <div className="relative min-h-[250px] overflow-hidden bg-[#ead8c7] sm:min-h-[300px] lg:h-full lg:min-h-[360px]">
              <motion.img
                src="/images/9 FOTOS/8.png"
                alt="Detalle preparado por DIALAC"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.035,
                      }
                }
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"
              />

              {/* IMAGEN SECUNDARIA */}
              <motion.div
                className="absolute right-4 top-4 h-20 w-20 overflow-hidden rounded-xl border-[3px] border-white bg-white shadow-lg sm:h-24 sm:w-24"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 15,
                        rotate: 3,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 3,
                }}
                viewport={{ once: true }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 0,
                        scale: 1.04,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="/images/servicios/ANCHETAS Y DESAYUNOS2/1.png"
                  alt="Alfajor artesanal de DIALAC"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* SELLO */}
              <motion.div
                className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-dialac-brown text-center font-display text-[9px] font-bold uppercase leading-3 tracking-[0.06em] text-white shadow-lg sm:h-16 sm:w-16 sm:text-[10px]"
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
              >
                Esencia
                <br />
                DIALAC
              </motion.div>

              {/* TEXTO SOBRE LA IMAGEN */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
                  Calidad en cada detalle
                </p>

                <p className="mt-2 max-w-xs font-display text-xl font-bold leading-tight sm:text-2xl">
                  Experiencias creadas para compartir y disfrutar
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />

                  <span className="text-xs font-semibold">
                    Cercanía, sabor y dedicación
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* COMPROMISOS EN CUADRÍCULA */}
<div className="grid grid-cols-2">
  {commitments.map((commitment, index) => (
    <Reveal
      key={commitment.number}
      direction="up"
      delay={index * 0.06}
      className="h-full"
    >
      <motion.article
        className={`group relative h-full min-h-[210px] overflow-hidden px-3 py-4 sm:min-h-[180px] sm:px-6 sm:py-5 ${
          index === 0
            ? "border-b border-r border-dialac-border"
            : ""
        } ${
          index === 1
            ? "border-b border-dialac-border"
            : ""
        } ${
          index === 2
            ? "border-r border-dialac-border"
            : ""
        }`}
        whileHover={
          reduceMotion
            ? undefined
            : {
                backgroundColor: "#f9f1e9",
              }
        }
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-2 font-display text-5xl font-bold text-dialac-brown/[0.05] transition-transform duration-500 group-hover:scale-110 sm:-top-3 sm:text-6xl"
        >
          {commitment.number}
        </span>

        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          <motion.span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f1dfd0] text-dialac-brown-dark sm:h-10 sm:w-10"
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
            {commitment.icon}
          </motion.span>

          <span className="font-display text-[10px] font-bold tracking-[0.1em] text-dialac-brown sm:text-[11px] sm:tracking-[0.12em]">
            {commitment.number}
          </span>
        </div>

        <h3 className="relative mt-3 font-display text-base font-bold leading-tight text-dialac-charcoal sm:mt-4 sm:text-xl">
          {commitment.title}
        </h3>

        <p className="relative mt-2 text-xs leading-5 text-dialac-charcoal sm:text-sm sm:leading-6">
          {commitment.description}
        </p>

        <motion.div
          aria-hidden="true"
          className="relative mt-3 h-1 w-7 rounded-full bg-dialac-brown sm:mt-4"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  width: 52,
                }
          }
          transition={{
            duration: 0.3,
          }}
        />
      </motion.article>
    </Reveal>
  ))}
</div>
        </div>

        {/* CIERRE COMPACTO */}
        <Reveal direction="up" delay={0.1}>
          <motion.div
            className="relative mt-5 flex flex-col items-center justify-between gap-3 overflow-hidden rounded-2xl border border-dialac-border bg-[#ead8c7] px-5 py-5 text-center sm:flex-row sm:px-7 sm:text-left"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -2,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-12 h-32 w-32 rounded-full border-[24px] border-white/25"
            />

            <p className="relative font-display text-xl font-bold text-dialac-charcoal sm:text-2xl">
              Cuídate <span className="text-dialac-brown">•</span>{" "}
              Aliméntate <span className="text-dialac-brown">•</span>{" "}
              Disfruta
            </p>

            <div className="relative flex items-center gap-3">
              <span className="hidden h-px w-10 bg-dialac-brown/35 sm:block" />

              <p className="max-w-md text-sm leading-6 text-dialac-charcoal">
                Acompañamos pequeños y grandes momentos con la esencia que nos
                representa.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutCommitments;
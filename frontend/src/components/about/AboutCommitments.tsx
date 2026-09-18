import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const commitments = [
  {
    number: "01",
    title: "Calidad",
    description:
      "Seleccionamos productos frescos y alternativas que respondan a las necesidades de nuestros clientes.",
    size: "lg:col-span-5",
    accent: "bg-dialac-brown",
    accentText: "text-dialac-brown-dark",
    iconBackground: "bg-[#f4e8de]",
    icon: (
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
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cercanía",
    description:
      "Brindamos una atención amable, personalizada y con la esencia de una empresa familiar.",
    size: "lg:col-span-7",
    accent: "bg-dialac-green",
    accentText: "text-dialac-green-dark",
    iconBackground: "bg-[#e9eddf]",
    icon: (
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
    ),
  },
  {
    number: "03",
    title: "Bienestar",
    description:
      "Promovemos experiencias que inviten a cuidarse, alimentarse y disfrutar.",
    size: "lg:col-span-7",
    accent: "bg-dialac-green",
    accentText: "text-dialac-green-dark",
    iconBackground: "bg-[#e9eddf]",
    icon: (
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
    ),
  },
  {
    number: "04",
    title: "Responsabilidad ambiental",
    description:
      "Incorporamos prácticas responsables, incluyendo el uso de empaques biodegradables.",
    size: "lg:col-span-5",
    accent: "bg-dialac-brown",
    accentText: "text-dialac-brown-dark",
    iconBackground: "bg-[#f4e8de]",
    icon: (
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
    <section className="relative isolate overflow-hidden bg-[#f7f5f1] px-6 py-20 sm:py-24 lg:py-28">
      {/* DECORACIÓN SUTIL */}
      <FloatingShape
        duration={8}
        distance={12}
        className="pointer-events-none absolute -left-28 top-24 -z-10"
      >
        <div className="h-64 w-64 rounded-full border-[42px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={9}
        delay={0.6}
        distance={14}
        className="pointer-events-none absolute -bottom-28 right-[5%] -z-10"
      >
        <div className="h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <Reveal direction="right">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
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
                  Nuestro compromiso
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                La esencia que guía nuestro trabajo
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-dialac-charcoal">
              Cuatro compromisos que orientan la manera en la que creamos cada
              experiencia en DIALAC.
            </p>
          </div>
        </Reveal>

        {/* CUADRÍCULA DE COMPROMISOS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {commitments.map((commitment, index) => (
            <Reveal
              key={commitment.number}
              direction="up"
              delay={index * 0.08}
              className={commitment.size}
            >
              <motion.article
                className="group relative h-full min-h-[285px] overflow-hidden rounded-[2rem] border border-dialac-border bg-white p-7 shadow-[0_10px_30px_rgba(38,40,42,0.05)] sm:p-8"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 24px 55px rgba(38, 40, 42, 0.11)",
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* LÍNEA SUPERIOR */}
                <motion.div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-1.5 w-full origin-left ${commitment.accent}`}
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* NÚMERO DECORATIVO */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-2 font-display text-9xl font-bold text-dialac-charcoal/[0.035]"
                >
                  {commitment.number}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-5">
                    <motion.span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${commitment.iconBackground} ${commitment.accentText}`}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              rotate: 7,
                              scale: 1.1,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {commitment.icon}
                    </motion.span>

                    <span
                      className={`font-display text-sm font-bold ${commitment.accentText}`}
                    >
                      {commitment.number}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-md font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
                    {commitment.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-dialac-charcoal">
                    {commitment.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <motion.div
                      aria-hidden="true"
                      className={`h-1.5 rounded-full ${commitment.accent}`}
                      initial={{
                        width: 32,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              width: 80,
                            }
                      }
                      transition={{
                        duration: 0.35,
                      }}
                    />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* CIERRE DE LA PÁGINA */}
        <Reveal direction="up" delay={0.15}>
          <motion.div
            className="relative mt-14 overflow-hidden rounded-[2rem] border border-dialac-border bg-gradient-to-r from-[#efe4da] via-white to-[#e9eddf] px-7 py-12 text-center sm:px-10 sm:py-14"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -5,
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -left-16 -top-16 h-48 w-48 rounded-full border-[35px] border-dialac-brown/5"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                  }
              }
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[40px] border-dialac-green/5"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                  }
              }
              transition={{
                duration: 34,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="mx-auto flex w-fit items-center gap-3"
              >
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-dialac-green"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <span className="h-px w-12 bg-dialac-border" />

                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    delay: 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <p className="mt-6 font-display text-3xl font-bold text-dialac-charcoal sm:text-4xl">
                Cuídate <span className="text-dialac-brown">•</span>{" "}
                Aliméntate <span className="text-dialac-green-dark">•</span>{" "}
                Disfruta
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dialac-charcoal">
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
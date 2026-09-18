import { motion, useReducedMotion } from "motion/react";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

const cards = [
  {
    number: "01",
    eyebrow: "Nuestro propósito",
    title: "Misión",
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
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </svg>
    ),
    paragraphs: [
      "Brindar alimentos frescos, deliciosos y de calidad que acompañen y hagan especial cada momento, ofreciendo una amplia variedad de productos, refrigerios y soluciones personalizadas para personas, empresas y eventos.",
      "En DIALAC trabajamos con dedicación, cercanía y responsabilidad ambiental, buscando satisfacer los gustos y necesidades de nuestros clientes a través de experiencias que inviten a cuidarse, alimentarse y disfrutar.",
    ],
  },
  {
    number: "02",
    eyebrow: "Hacia dónde vamos",
    title: "Visión",
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
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M17.5 4.5 19 3" />
        <path d="M6.5 4.5 5 3" />
      </svg>
    ),
    paragraphs: [
      "Ser una empresa reconocida por la calidad, variedad e innovación de nuestros productos y servicios alimenticios, consolidando a DIALAC como una marca de confianza para personas, empresas y eventos.",
      "Aspiramos a crecer de manera sostenible, ampliar nuestra presencia y continuar creando experiencias memorables mediante alimentos frescos, opciones para diferentes gustos y necesidades, atención cercana y un compromiso permanente con el bienestar y el medio ambiente.",
    ],
  },
];

function MissionVision() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f5f1] px-6 py-20 sm:py-24 lg:py-28">
      {/* DECORACIÓN SUTIL */}
      <FloatingShape
        duration={8}
        distance={12}
        className="pointer-events-none absolute -left-32 top-20 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[48px] border-dialac-brown/5" />
      </FloatingShape>

      <FloatingShape
        duration={9}
        delay={0.5}
        distance={14}
        className="pointer-events-none absolute -bottom-40 right-[3%] -z-10"
      >
        <div className="h-80 w-80 rounded-full bg-dialac-green/5" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
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
                Lo que nos guía
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Nuestro presente y nuestro futuro
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Trabajamos con un propósito claro y una visión que orienta cada
              paso de DIALAC.
            </p>
          </div>
        </Reveal>

        {/* TARJETAS */}
        <div className="relative mt-14 grid gap-7 lg:grid-cols-2">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-dialac-border lg:block"
          />

          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              direction={index === 0 ? "right" : "left"}
              delay={index * 0.12}
            >
              <motion.article
                className="group relative h-full overflow-hidden rounded-[2rem] border border-dialac-border bg-white p-7 shadow-[0_12px_35px_rgba(38,40,42,0.06)] sm:p-9 lg:p-10"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 24px 60px rgba(38, 40, 42, 0.12)",
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* ACENTO SUPERIOR */}
                <motion.div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-1.5 w-full origin-left ${card.accent}`}
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* NÚMERO DECORATIVO */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-4 font-display text-8xl font-bold text-dialac-charcoal/[0.035] sm:text-9xl"
                >
                  {card.number}
                </span>

                <div className="relative">
                  <div className="flex items-center justify-between gap-5">
                    <motion.div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBackground} ${card.accentText}`}
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
                      {card.icon}
                    </motion.div>

                    <span
                      className={`font-display text-sm font-bold ${card.accentText}`}
                    >
                      {card.number}
                    </span>
                  </div>

                  <p
                    className={`mt-7 font-display text-sm font-semibold uppercase tracking-[0.16em] ${card.accentText}`}
                  >
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-bold text-dialac-charcoal">
                    {card.title}
                  </h3>

                  <div className="mt-6 h-px bg-dialac-border" />

                  <div className="mt-6 space-y-5">
                    {card.paragraphs.map((paragraph, paragraphIndex) => (
                      <motion.p
                        key={paragraph}
                        className="leading-8 text-dialac-charcoal"
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 15,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.5,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            0.2 +
                            index * 0.1 +
                            paragraphIndex * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  <motion.div
                    aria-hidden="true"
                    className={`mt-8 h-2 w-16 rounded-full ${card.accent}`}
                    initial={reduceMotion ? false : { width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.5 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
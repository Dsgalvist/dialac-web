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
    iconBackground: "bg-[#f1dfd1]",
    cardBackground: "bg-[#fffdf9]",
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
    accent: "bg-[#b48262]",
    accentText: "text-[#81462d]",
    iconBackground: "bg-[#eadac9]",
    cardBackground: "bg-[#f5efe6]",
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
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
      {/* TEXTURA DEL FONDO */}
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
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-white/70 to-transparent"
      />

      {/* DECORACIÓN */}
      <FloatingShape
        duration={9}
        distance={12}
        className="pointer-events-none absolute -left-32 top-16 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[48px] border-dialac-brown/[0.045]" />
      </FloatingShape>

      <FloatingShape
        duration={10}
        delay={0.5}
        distance={14}
        className="pointer-events-none absolute -bottom-40 right-[3%] -z-10"
      >
        <div className="h-80 w-80 rounded-[42%_58%_54%_46%] bg-dialac-brown/[0.04]" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO EDITORIAL */}
        <div className="grid gap-5 border-b border-dialac-border pb-7 lg:grid-cols-[0.38fr_1fr] lg:items-end lg:gap-12">
          <Reveal direction="right">
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
                          opacity: [1, 0.6, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dialac-brown-dark sm:text-sm">
                  Lo que nos guía
                </p>
              </div>

              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 block h-px w-20 origin-left bg-dialac-brown"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.08}>
            <div>
              <h2 className="max-w-4xl font-display text-[2.5rem] font-bold leading-[0.96] tracking-[-0.035em] text-dialac-charcoal sm:text-5xl lg:text-[3.75rem]">
                Nuestro presente y nuestro futuro
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Trabajamos con un propósito claro y una visión que orienta cada
                paso de DIALAC.
              </p>
            </div>
          </Reveal>
        </div>

        {/* TARJETAS */}
        <div className="relative mt-8 grid gap-5 lg:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              direction={index === 0 ? "right" : "left"}
              delay={index * 0.1}
            >
              <motion.article
                className={`group relative h-full overflow-hidden rounded-[2rem] border border-dialac-border p-6 shadow-[0_14px_38px_rgba(90,60,42,0.08)] sm:p-7 lg:p-8 ${card.cardBackground}`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        boxShadow:
                          "0 24px 55px rgba(90, 60, 42, 0.14)",
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* ACENTO LATERAL */}
                <motion.div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 top-0 w-1.5 origin-top ${card.accent}`}
                  initial={reduceMotion ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* FORMAS DECORATIVAS */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[34px] border-dialac-brown/[0.035] transition-transform duration-700 group-hover:scale-110"
                />

                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-3 font-display text-[7rem] font-bold leading-none text-dialac-brown/[0.045] sm:text-[8rem]"
                >
                  {card.number}
                </span>

                <div className="relative">
                  {/* CABECERA DE LA TARJETA */}
                  <div className="flex items-center justify-between gap-5">
                    <motion.div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${card.iconBackground} ${card.accentText}`}
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
                      className={`font-display text-xs font-bold tracking-[0.12em] ${card.accentText}`}
                    >
                      {card.number}
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p
                        className={`font-display text-xs font-bold uppercase tracking-[0.17em] ${card.accentText}`}
                      >
                        {card.eyebrow}
                      </p>

                      <h3 className="mt-2 font-display text-3xl font-bold leading-none text-dialac-charcoal sm:text-4xl">
                        {card.title}
                      </h3>
                    </div>

                    <motion.span
                      aria-hidden="true"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.35 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`mb-1 hidden h-1 w-14 origin-right rounded-full sm:block ${card.accent}`}
                    />
                  </div>

                  <div className="my-5 h-px bg-dialac-border" />

                  {/* TEXTO */}
                  <div className="space-y-4">
                    {card.paragraphs.map((paragraph, paragraphIndex) => (
                      <motion.p
                        key={paragraph}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 12,
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
                        transition={{
                          duration: 0.45,
                          delay:
                            0.18 +
                            index * 0.1 +
                            paragraphIndex * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-sm leading-6 text-dialac-charcoal sm:text-base sm:leading-7"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {/* FIRMA VISUAL */}
                  <div className="mt-6 flex items-center gap-3">
                    <motion.span
                      aria-hidden="true"
                      initial={reduceMotion ? false : { width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`h-1.5 rounded-full ${card.accent}`}
                    />

                    <span className="h-1.5 w-1.5 rounded-full bg-dialac-brown/25" />

                    <span className="h-1.5 w-1.5 rounded-full bg-dialac-brown/15" />
                  </div>
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
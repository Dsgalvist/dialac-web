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
    <section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">
      {/* FORMAS DECORATIVAS */}
      <FloatingShape
        duration={8}
        distance={16}
        className="pointer-events-none absolute -right-28 top-16 -z-10"
      >
        <div className="h-72 w-72 rounded-full border-[52px] border-dialac-green/5" />
      </FloatingShape>

      <FloatingShape
        duration={7}
        delay={0.5}
        distance={12}
        className="pointer-events-none absolute -bottom-24 left-[35%] -z-10"
      >
        <div className="h-56 w-56 rounded-[40%_60%_62%_38%] bg-dialac-brown/5" />
      </FloatingShape>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* BLOQUE PRINCIPAL */}
          <Reveal direction="right">
            <motion.div
              className="relative h-full overflow-hidden rounded-[2rem] bg-dialac-brown p-8 text-white shadow-lg sm:p-10"
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
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[38px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-16 h-52 w-52 rounded-[45%_55%_38%_62%] bg-white/5"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <motion.span
                    aria-hidden="true"
                    className="h-3 w-3 rounded-full bg-white"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.35, 1],
                            opacity: [1, 0.65, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <p className="font-display text-sm font-semibold tracking-[0.15em] text-white">
                    POR QUÉ ELEGIRNOS
                  </p>
                </div>

                <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white">
                  Cercanía, calidad y dedicación en cada experiencia
                </h2>

                <motion.div
                  className="mt-6 h-1.5 w-20 overflow-hidden rounded-full bg-white/25"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full rounded-full bg-white"
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

                <p className="mt-6 text-lg leading-8 text-white">
                  En DIALAC combinamos nuestra experiencia familiar con una
                  atención personalizada para acompañar momentos cotidianos,
                  reuniones y eventos.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="font-display text-3xl font-bold text-white">
                      2009
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white">
                      Año en que comenzó nuestra historia
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
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

                    <p className="mt-2 text-sm leading-5 text-white">
                      Atención cercana y personalizada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RAZONES */}
          <StaggerContainer className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <StaggerItem
                key={reason.number}
                className="h-full"
              >
                <motion.article
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-dialac-border bg-dialac-cream p-7 shadow-sm"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                          scale: 1.015,
                          boxShadow:
                            "0 18px 36px rgba(38, 40, 42, 0.12)",
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* LÍNEA SUPERIOR */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1.5 w-full origin-left bg-dialac-brown"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: Number(reason.number) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[22px] border-dialac-brown/5 transition-transform duration-500 group-hover:scale-125"
                  />

                  <div className="relative flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dialac-brown font-display text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {reason.number}
                    </span>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-dialac-brown transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>

                  <h3 className="relative mt-6 font-display text-2xl font-bold text-dialac-charcoal">
                    {reason.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-dialac-charcoal">
                    {reason.description}
                  </p>
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
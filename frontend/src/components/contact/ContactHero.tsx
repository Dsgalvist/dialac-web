import { motion, useReducedMotion } from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";
import FloatingShape from "../animations/FloatingShape";
import Reveal from "../animations/Reveal";

function ContactHero() {
  const reduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#fffaf3] via-white to-[#edf0e7] px-6 py-12 sm:py-16">
      {/* DECORACIÓN GENERAL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-[30%] h-72 w-72 rounded-full border-[45px] border-dialac-green/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-[8%] hidden h-32 w-32 rounded-full border-[22px] border-dialac-brown/5 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* INFORMACIÓN */}
          <Reveal direction="right">
            <div className="py-8 sm:py-10 lg:py-16">
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-dialac-green"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.65, 1],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
                  Atención personalizada
                </p>
              </div>

              <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl lg:text-6xl">
                ¿Necesitas información o una{" "}
                <span className="relative inline-block text-dialac-brown-dark">
                  cotización?
                  <motion.span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-dialac-brown"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-dialac-charcoal">
                Estamos listos para ayudarte a encontrar productos,
                refrigerios y soluciones adecuadas para personas, empresas y
                eventos.
              </p>

              <motion.div
                className="mt-8 w-fit"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.02,
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
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_10px_25px_rgba(139,78,47,0.22)] outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
                >
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
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                  </svg>

                  Contáctanos por WhatsApp

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
                </button>
              </motion.div>
            </div>
          </Reveal>

          {/* INTERFAZ DE CONVERSACIÓN */}
          <Reveal direction="left" delay={0.12}>
            <div className="relative mx-auto flex min-h-[500px] w-full max-w-[570px] items-center justify-center py-10">
              {/* TARJETA PRINCIPAL */}
              <motion.div
                role="img"
                aria-label="Representación de una conversación con DIALAC"
                className="relative w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-dialac-border bg-white p-5 shadow-[0_25px_70px_rgba(38,40,42,0.12)] sm:p-7"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                        rotate: 2,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        rotate: -1,
                      }
                }
              >
                {/* DECORACIÓN INTERIOR */}
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-dialac-brown/5"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-dialac-green/5"
                />

                {/* ENCABEZADO */}
                <div className="relative flex items-center justify-between border-b border-dialac-border pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dialac-border bg-[#fffaf3] p-2">
                      <img
                        src="/images/LOGO/logotransparente.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="font-display font-bold text-dialac-charcoal">
                        DIALAC
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <motion.span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-dialac-green"
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  opacity: [1, 0.45, 1],
                                }
                          }
                          transition={{
                            duration: 1.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />

                        <span className="text-xs text-dialac-charcoal">
                          Atención personalizada
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-dialac-brown/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-dialac-green/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-dialac-charcoal/15" />
                  </div>
                </div>

                {/* MENSAJES */}
                <div
                  aria-hidden="true"
                  className="relative space-y-5 py-7"
                >
                  {/* MENSAJE DEL USUARIO */}
                  <motion.div
                    className="ml-auto max-w-[82%] rounded-[1.5rem_1.5rem_0.35rem_1.5rem] border border-[#e4d3c3] bg-[#f5eade] p-5"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 35,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dialac-brown text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21a8 8 0 0 1 16 0" />
                        </svg>
                      </span>

                      <div className="flex-1 space-y-2 pt-1">
                        <span className="block h-2.5 w-full rounded-full bg-dialac-brown/25" />
                        <span className="block h-2.5 w-[82%] rounded-full bg-dialac-brown/20" />
                        <span className="block h-2.5 w-[55%] rounded-full bg-dialac-brown/15" />
                      </div>
                    </div>
                  </motion.div>

                  {/* RESPUESTA DE DIALAC */}
                  <motion.div
                    className="max-w-[88%] rounded-[1.5rem_1.5rem_1.5rem_0.35rem] border border-[#dce2d2] bg-[#eef1e8] p-5"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -35,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dialac-green text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
                        </svg>
                      </span>

                      <div className="flex-1 space-y-2 pt-1">
                        <span className="block h-2.5 w-full rounded-full bg-dialac-green/25" />
                        <span className="block h-2.5 w-[90%] rounded-full bg-dialac-green/20" />
                        <span className="block h-2.5 w-[70%] rounded-full bg-dialac-green/15" />
                      </div>
                    </div>
                  </motion.div>

                  {/* CONFIRMACIÓN */}
                  <motion.div
                    className="ml-auto flex max-w-[75%] items-center gap-3 rounded-[1.5rem_1.5rem_0.35rem_1.5rem] border border-[#d5ddc8] bg-[#e5eadc] p-4"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dialac-green text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <div className="flex-1 space-y-2">
                      <span className="block h-2.5 w-full rounded-full bg-dialac-green/25" />
                      <span className="block h-2.5 w-[65%] rounded-full bg-dialac-green/15" />
                    </div>
                  </motion.div>
                </div>

                {/* CAMPO DE MENSAJE */}
                <motion.div
                  aria-hidden="true"
                  className="relative flex items-center gap-3 rounded-2xl border border-dialac-border bg-[#f7f5f1] p-3"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 1.4,
                  }}
                >
                  <div className="flex h-10 flex-1 items-center rounded-xl border border-dialac-border bg-white px-4">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="h-2 w-2 rounded-full bg-dialac-charcoal/35"
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  y: [0, -4, 0],
                                  opacity: [0.45, 1, 0.45],
                                }
                          }
                          transition={{
                            duration: 1.2,
                            delay: dot * 0.18,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dialac-brown text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* ICONO FLOTANTE DE WHATSAPP */}
              <FloatingShape
                duration={6}
                distance={10}
                className="absolute -right-1 top-[8%] z-20 sm:right-[2%]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dialac-green text-white shadow-[0_15px_35px_rgba(78,92,50,0.25)]">
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
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                  </svg>
                </div>
              </FloatingShape>

              {/* ICONO FLOTANTE DE CORREO */}
              <FloatingShape
                duration={7}
                delay={0.6}
                distance={12}
                className="absolute -left-1 bottom-[10%] z-20 sm:left-[1%]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dialac-border bg-white text-dialac-brown shadow-lg">
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
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
              </FloatingShape>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { contactWhatsApp } from "../../services/whatsapp";
import Reveal from "../animations/Reveal";

const requestItems = [
  {
    name: "Productos seleccionados",
    value: "3",
  },
  {
    name: "Fecha requerida",
    value: "Programada",
  },
  {
    name: "Formato",
    value: "PDF",
  },
];

function HomeCta() {
  const reduceMotion = useReducedMotion();

  const handleWhatsAppContact = () => {
    contactWhatsApp(
      "Hola, estuve visitando la página de DIALAC y me gustaría recibir asesoría para realizar una solicitud.",
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf9] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
      {/* TEXTURA EXTERIOR */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(153,78,43,0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full border-[52px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[10%] -z-10 h-80 w-80 rounded-full bg-[#eadac9]/45"
      />

      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-dialac-charcoal text-white shadow-[0_30px_80px_rgba(55,39,28,0.22)] sm:rounded-[2.5rem]">
          {/* IMAGEN DE FONDO */}
          <motion.img
            src="/images/servicios/ANCHETAS Y DESAYUNOS2/2.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.035, 1],
                  }
            }
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* CAPAS DE CONTRASTE */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,29,26,0.98)_0%,rgba(31,29,26,0.94)_42%,rgba(31,29,26,0.73)_72%,rgba(31,29,26,0.56)_100%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
          />

          {/* FORMAS DECORATIVAS */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-[42%] bg-dialac-brown/35 blur-sm"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 12, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-dialac-brown/45 blur-sm"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 20, 0],
                    y: [0, -14, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid items-center gap-6 px-5 py-8 sm:px-9 sm:py-10 lg:min-h-[650px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12 lg:py-14 xl:px-16">
            {/* CONTENIDO */}
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md">
                  <motion.span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-white"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.6, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-xs">
                    Solicitudes disponibles 24/7
                  </span>
                </div>

                <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[clamp(3rem,4.6vw,5rem)]">
                  Convierte tus ideas en una solicitud organizada
                </h2>

                <motion.div
                  className="mt-5 h-1.5 w-20 overflow-hidden rounded-full bg-white/20"
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
                    className="h-full origin-left rounded-full bg-[#d59a75]"
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

                <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Explora el catálogo, selecciona lo que necesitas y genera un
                  PDF con toda la información de tu solicitud.
                </p>

                {/* ACCIONES */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <motion.div
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
                            scale: 0.98,
                          }
                    }
                  >
                    <Link
                      to="/productos"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
                    >
                      Explorar productos

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
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

                  <motion.div
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
                            scale: 0.98,
                          }
                    }
                  >
                    <button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/70 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-dialac-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:gap-3 sm:px-6 sm:py-3.5"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 shrink-0"
                      >
                        <path d="M12.04 2a9.84 9.84 0 0 0-8.4 14.96L2 22l5.18-1.61A9.94 9.94 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm5.82 14.12c-.25.7-1.45 1.34-2.01 1.41-.52.07-1.18.1-1.91-.13-.44-.14-1.01-.33-1.74-.65-3.06-1.32-5.05-4.4-5.2-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.24 1.06-2.55.28-.3.61-.38.81-.38h.59c.19 0 .44-.07.69.53.25.6.85 2.07.92 2.22.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.53-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.73-.18 1.43Z" />
                      </svg>

                      Hablar con DIALAC
                    </button>
                  </motion.div>
                </div>

                {/* RECORDATORIO */}
                <div className="mt-7 flex max-w-xl items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5efe6] text-dialac-brown-dark">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <p className="text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                    Realiza tu pedido con mínimo tres días de anticipación.
                    Nuestro equipo te contactará dentro de los horarios de
                    atención.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* VISTA PREVIA: OCULTA SOLAMENTE EN RESPONSIVE */}
            <Reveal
              direction="right"
              delay={0.15}
              className="hidden lg:block"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: [0, 0.5, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative mx-auto w-full max-w-md"
              >
                {/* HOJAS POSTERIORES */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rotate-3 rounded-[2rem] bg-dialac-brown shadow-xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -inset-1 -rotate-2 rounded-[2rem] bg-[#e7d8c8]"
                />

                {/* DOCUMENTO */}
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#fffdf9] p-5 text-dialac-charcoal shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:p-7">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-2 bg-dialac-brown"
                  />

                  <div className="flex items-center justify-between gap-4 border-b border-dialac-border pb-5 pt-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                        DIALAC
                      </p>

                      <h3 className="mt-1 font-display text-xl font-bold text-dialac-charcoal sm:text-2xl">
                        Resumen de solicitud
                      </h3>
                    </div>

                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              rotate: [0, -5, 5, 0],
                            }
                      }
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f1e5d8] text-dialac-brown-dark"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                        <path d="M14 2v6h6" />
                        <path d="M8 13h8M8 17h8" />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {requestItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 24,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.45,
                          delay: reduceMotion
                            ? 0
                            : 0.25 + index * 0.12,
                        }}
                        className="flex items-center justify-between gap-4 rounded-xl border border-[#e7dacb] bg-[#f6efe6] px-4 py-3"
                      >
                        <span className="text-sm font-medium text-dialac-charcoal">
                          {item.name}
                        </span>

                        <span className="text-sm font-bold text-dialac-brown-dark">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
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
                      delay: reduceMotion ? 0 : 0.5,
                    }}
                    className="mt-5 h-2 origin-left overflow-hidden rounded-full bg-[#eadfd3]"
                  >
                    <div className="h-full w-full rounded-full bg-dialac-brown" />
                  </motion.div>

                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-dialac-border bg-white p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dialac-brown text-white">
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

                    <div>
                      <p className="font-display font-bold text-dialac-charcoal">
                        Lista para generar
                      </p>

                      <p className="mt-1 text-sm text-dialac-charcoal">
                        Revisa tus datos antes de continuar.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-dialac-border pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-dialac-brown-dark">
                      Solicitud DIALAC
                    </span>

                    <span className="text-xs font-medium text-dialac-charcoal/70">
                      Documento PDF
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCta;
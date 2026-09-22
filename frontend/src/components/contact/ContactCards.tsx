import { motion, useReducedMotion } from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";

const cardStyles =
  "group relative flex min-h-[165px] min-w-0 flex-col overflow-hidden rounded-[1.15rem] border border-dialac-border p-3 shadow-[0_12px_32px_rgba(75,52,39,0.07)] sm:min-h-[175px] sm:rounded-[1.4rem] sm:p-5";

const linkStyles =
  "group/link mt-auto inline-flex min-w-0 w-fit items-center gap-1 pt-3 text-[11px] font-semibold leading-4 text-dialac-charcoal outline-none transition hover:text-dialac-brown-dark focus-visible:rounded focus-visible:ring-4 focus-visible:ring-dialac-brown/25 sm:gap-2 sm:pt-4 sm:text-base sm:leading-normal";

const iconStyles =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-white/70 bg-white/75 text-dialac-brown-dark shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-xl";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ContactCards() {
  const reduceMotion = useReducedMotion();

  const emailSubject =
    "Solicitud de información desde el sitio web - DIALAC";

  const emailBody = `Hola, equipo de DIALAC:

Me comunico desde su sitio web y quisiera recibir información sobre sus productos y servicios.

Nombre:
Número de contacto:
Producto o servicio de interés:
Mensaje:

Gracias.`;

  const emailUrl = `mailto:Acosdie@gmail.com?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  const cardAnimation = {
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 24,
        },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.25,
    },
  };

  const cardHover = reduceMotion
    ? undefined
    : {
        y: -6,
        boxShadow: "0 20px 45px rgba(75, 52, 39, 0.12)",
      };

  return (
    <section
      aria-label="Datos de contacto"
      className="relative isolate overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 lg:py-16"
    >
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
          backgroundSize: "23px 23px",
        }}
      />

      {/* FORMAS DECORATIVAS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 -z-10 h-44 w-44 rounded-full border-[30px] border-dialac-brown/[0.045]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[4%] -z-10 h-56 w-56 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.035]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -10, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-7 grid items-end gap-5 border-b border-dialac-border pb-6 sm:mb-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
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

              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-xs">
                DIALAC
              </p>
            </div>

            <div className="mt-4 h-px w-16 bg-dialac-brown/45" />
          </div>

          <div className="flex items-end justify-between gap-5">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-dialac-charcoal sm:text-4xl">
              Canales de contacto
            </h2>

            <span className="hidden font-display text-xs font-bold text-dialac-brown-dark sm:block">
              01 — 04
            </span>
          </div>
        </motion.div>

        {/* CONVERSACIÓN Y CANALES */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* REPRESENTACIÓN DE LA CONVERSACIÓN */}
          <motion.div
            role="img"
            aria-label="Representación visual de una conversación con DIALAC"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-h-[460px] overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f7f2eb] p-4 shadow-[0_20px_50px_rgba(75,52,39,0.10)] sm:p-6 lg:flex lg:min-h-full"
          >
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 h-44 w-44 rounded-full border-[30px] border-dialac-brown/[0.045]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-dialac-brown/[0.035]"
            />

            <motion.div
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
              className="relative m-auto w-full overflow-hidden rounded-[1.5rem] border border-dialac-border bg-white p-4 shadow-[0_16px_40px_rgba(75,52,39,0.10)] sm:p-5"
            >
              {/* CABECERA */}
              <div className="flex items-center justify-between border-b border-dialac-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dialac-border bg-[#f5efe6] p-2">
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

                    <div className="mt-0.5 flex items-center gap-2">
                      <motion.span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-dialac-brown"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: [1, 0.4, 1],
                                scale: [1, 1.2, 1],
                              }
                        }
                        transition={{
                          duration: 1.8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />

                      <span className="text-xs text-dialac-charcoal/75">
                        Atención personalizada
                      </span>
                    </div>
                  </div>
                </div>

                <span className="rounded-full border border-dialac-border bg-[#f5efe6] px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-dialac-brown-dark">
                  En línea
                </span>
              </div>

              {/* MENSAJES */}
              <div
                aria-hidden="true"
                className="space-y-4 py-5"
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 30,
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
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  className="ml-auto max-w-[88%] rounded-[1.3rem_1.3rem_0.3rem_1.3rem] border border-[#ddc7b4] bg-[#f1dfcf] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dialac-brown text-white">
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
                      <span className="block h-2 w-full rounded-full bg-dialac-brown/25" />
                      <span className="block h-2 w-[82%] rounded-full bg-dialac-brown/20" />
                      <span className="block h-2 w-[55%] rounded-full bg-dialac-brown/15" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -30,
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
                    duration: 0.5,
                    delay: 0.45,
                  }}
                  className="max-w-[92%] rounded-[1.3rem_1.3rem_1.3rem_0.3rem] border border-dialac-border bg-[#f7f2eb] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dialac-brown-dark text-white">
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
                      <span className="block h-2 w-full rounded-full bg-dialac-brown/22" />
                      <span className="block h-2 w-[90%] rounded-full bg-dialac-brown/18" />
                      <span className="block h-2 w-[70%] rounded-full bg-dialac-brown/12" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.92,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.65,
                  }}
                  className="ml-auto flex max-w-[80%] items-center gap-3 rounded-[1.3rem_1.3rem_0.3rem_1.3rem] border border-[#d8c1ae] bg-[#ead6c4] p-3.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dialac-brown text-white">
                    <svg
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
                  </span>

                  <div className="flex-1 space-y-2">
                    <span className="block h-2 w-full rounded-full bg-dialac-brown/25" />
                    <span className="block h-2 w-[65%] rounded-full bg-dialac-brown/15" />
                  </div>
                </motion.div>
              </div>

              {/* CAMPO VISUAL */}
              <div
                aria-hidden="true"
                className="flex items-center gap-3 rounded-xl border border-dialac-border bg-[#f7f3ed] p-2.5"
              >
                <div className="flex h-9 flex-1 items-center rounded-lg border border-dialac-border bg-white px-4">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-dialac-brown/40"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                y: [0, -3, 0],
                                opacity: [0.4, 1, 0.4],
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

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dialac-brown text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* TARJETAS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* DIRECCIÓN */}
            <motion.article
              {...cardAnimation}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={cardHover}
              className={`${cardStyles} bg-[#ead8c5]`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[24px] border-white/20 transition-transform duration-500 group-hover:scale-110"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[-1rem] right-4 font-display text-[6rem] font-bold leading-none text-white/22"
              >
                01
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div className={iconStyles}>
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
                    <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                    <circle cx="12" cy="9" r="2" />
                  </svg>
                </div>

                <span className="font-display text-xs font-bold text-dialac-brown-dark">
                  01
                </span>
              </div>

              <h3 className="relative mt-3 font-display text-base font-bold leading-tight text-dialac-charcoal sm:mt-4 sm:text-xl">
                Dirección
              </h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className={linkStyles}
              >
                <span>
                  Calle 6 #2B-45
                  <br />
                  Chía, Cundinamarca
                </span>

                <ArrowIcon />
              </a>
            </motion.article>

            {/* CORREO */}
            <motion.article
              {...cardAnimation}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={cardHover}
              className={`${cardStyles} bg-[#f7f2eb]`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[24px] border-dialac-brown/[0.045] transition-transform duration-500 group-hover:scale-110"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[-1rem] right-4 font-display text-[6rem] font-bold leading-none text-dialac-brown/[0.045]"
              >
                02
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div className={iconStyles}>
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

                <span className="font-display text-xs font-bold text-dialac-brown-dark">
                  02
                </span>
              </div>

              <h3 className="relative mt-3 font-display text-base font-bold leading-tight text-dialac-charcoal sm:mt-4 sm:text-xl">
                Correo
              </h3>

              <a
                href={emailUrl}
                className={`${linkStyles} break-all`}
              >
                <span>Acosdie@gmail.com</span>
                <ArrowIcon />
              </a>
            </motion.article>

            {/* TELÉFONO */}
            <motion.article
              {...cardAnimation}
              transition={{
                duration: 0.5,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={cardHover}
              className={`${cardStyles} bg-[#f7f2eb] sm:bg-[#ead8c5]`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[24px] border-dialac-brown/[0.045] transition-transform duration-500 group-hover:scale-110"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[-1rem] right-4 font-display text-[6rem] font-bold leading-none text-dialac-brown/[0.045]"
              >
                03
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div className={iconStyles}>
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
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
                  </svg>
                </div>

                <span className="font-display text-xs font-bold text-dialac-brown-dark">
                  03
                </span>
              </div>

              <h3 className="relative mt-3 font-display text-base font-bold leading-tight text-dialac-charcoal sm:mt-4 sm:text-xl">
                Teléfono
              </h3>

              <a
                href="tel:+573163552643"
                className={linkStyles}
              >
                <span>+57 316 355 2643</span>
                <ArrowIcon />
              </a>
            </motion.article>

            {/* WHATSAPP */}
            <motion.article
              {...cardAnimation}
              transition={{
                duration: 0.5,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={cardHover}
              className={`${cardStyles} bg-[#ead8c5] sm:bg-[#f7f2eb]`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[24px] border-white/20 transition-transform duration-500 group-hover:scale-110"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[-1rem] right-4 font-display text-[6rem] font-bold leading-none text-white/22"
              >
                04
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div className={iconStyles}>
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
                </div>

                <span className="font-display text-xs font-bold text-dialac-brown-dark">
                  04
                </span>
              </div>

              <h3 className="relative mt-3 font-display text-base font-bold leading-tight text-dialac-charcoal sm:mt-4 sm:text-xl">
                WhatsApp
              </h3>

              <button
                type="button"
                onClick={handleWhatsApp}
                className={`${linkStyles} cursor-pointer`}
              >
                <span>316 355 2643</span>
                <ArrowIcon />
              </button>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCards;
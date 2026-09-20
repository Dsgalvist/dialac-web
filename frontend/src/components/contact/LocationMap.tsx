import { motion, useReducedMotion } from "motion/react";

function LocationMap() {
  const reduceMotion = useReducedMotion();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45%2C+Ch%C3%ADa%2C+Cundinamarca%2C+Colombia";

  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=Calle%206%20%232B-45%2C%20Ch%C3%ADa%2C%20Cundinamarca%2C%20Colombia&output=embed";

  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
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

      {/* ELEMENTOS DECORATIVOS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[18%] -z-10 h-52 w-52 rounded-full border-[36px] border-dialac-brown/[0.045]"
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
        className="pointer-events-none absolute -bottom-24 right-[3%] -z-10 h-60 w-60 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.035]"
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
        {/* ENCABEZADO EDITORIAL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-7 grid items-end gap-6 border-b border-dialac-border pb-6 sm:mb-8 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div>
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-dialac-brown text-white shadow-[0_10px_25px_rgba(122,63,37,0.2)]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 3,
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
                  className="h-5 w-5"
                >
                  <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </motion.span>

              <div>
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-xs">
                  Visítanos
                </p>

                <div className="mt-3 h-px w-14 bg-dialac-brown/45" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-dialac-charcoal sm:text-4xl lg:text-[2.75rem]">
                Nuestra ubicación en Chía
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-dialac-charcoal">
                Encuéntranos en la Calle 6 #2B-45, Chía, Cundinamarca.
              </p>
            </div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.01,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-dialac-brown px-5 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(122,63,37,0.2)] outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 sm:w-fit"
            >
              Abrir en Google Maps

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path d="M14 5h5v5" />
                <path d="M10 14 19 5" />
                <path d="M19 13v6H5V5h6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* MAPA */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#f5efe6] p-2 shadow-[0_22px_55px_rgba(75,52,39,0.12)] sm:rounded-[2rem] sm:p-3"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 h-1.5 w-full bg-dialac-brown"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-5 z-20 hidden items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm sm:flex"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-dialac-brown" />

            <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-dialac-charcoal">
              DIALAC · Chía
            </span>
          </div>

          <div className="relative h-[380px] overflow-hidden rounded-[1.25rem] sm:h-[430px] sm:rounded-[1.45rem] lg:h-[470px]">
            <iframe
              title="Ubicación de DIALAC en Chía"
              src={googleMapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* FRANJA INFERIOR */}
          <div className="grid gap-3 px-2 pb-1 pt-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-3">
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dialac-brown text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </span>

              <div>
                <p className="font-display text-sm font-bold text-dialac-charcoal">
                  Calle 6 #2B-45
                </p>

                <p className="mt-0.5 text-sm text-dialac-charcoal/75">
                  Chía, Cundinamarca
                </p>
              </div>
            </div>

            <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-dialac-brown-dark">
              Cuídate · Aliméntate · Disfruta
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationMap;
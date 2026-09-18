import { motion, useReducedMotion } from "motion/react";

function LocationMap() {
  const reduceMotion = useReducedMotion();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45%2C+Ch%C3%ADa%2C+Cundinamarca%2C+Colombia";

  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=Calle%206%20%232B-45%2C%20Ch%C3%ADa%2C%20Cundinamarca%2C%20Colombia&output=embed";

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f1] px-5 py-20 sm:px-8 sm:py-24">
      {/* ELEMENTOS DECORATIVOS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full border-[42px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        {/* ENCABEZADO */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
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
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9eddf] text-dialac-green-dark"
              >
                <svg
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
              </span>

              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
                Visítanos
              </p>
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
              Nuestra ubicación en Chía
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-dialac-charcoal">
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
            className="inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(139,78,47,0.20)] transition hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
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
              className="h-5 w-5"
            >
              <path d="M14 5h5v5" />
              <path d="M10 14 19 5" />
              <path d="M19 13v6H5V5h6" />
            </svg>
          </motion.a>
        </motion.div>

        {/* MAPA */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
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
          className="relative overflow-hidden rounded-[2rem] border border-dialac-border bg-white shadow-[0_20px_60px_rgba(38,40,42,0.10)]"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 h-1.5 w-full bg-dialac-brown"
          />

          <div className="h-[440px] sm:h-[500px] lg:h-[560px]">
            <iframe
              title="Ubicación de DIALAC en Chía"
              src={googleMapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationMap;
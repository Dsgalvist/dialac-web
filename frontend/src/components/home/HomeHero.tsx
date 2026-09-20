import {
  useEffect,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import type { Variants } from "motion/react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    id: "eventos",
    image:
      "/images/servicios/FIESTAS TEMATICAS 2/1.2.png",
    alt: "Evento preparado por DIALAC",
    label: "Eventos y reuniones",
  },
  {
    id: "eventos",
    image:
      "/images/servicios/EVENTOS Y REUNIONES 2/4.2.png",
    alt: "Desayuno personalizado preparado por DIALAC",
    label: "Detalles personalizados",
  },
  {
    id: "artesanales",
    image:
      "/images/servicios/ANCHETAS Y DESAYUNOS2/2.png",
    alt: "Productos artesanales DIALAC",
    label: "Productos artesanales",
  },
];

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HomeHero() {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide(
        (currentSlide) =>
          (currentSlide + 1) % heroSlides.length,
      );
    }, 6500);

    return () => {
      window.clearInterval(interval);
    };
  }, [reduceMotion]);

  const selectedSlide = heroSlides[activeSlide];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-76px)] overflow-hidden bg-dialac-charcoal text-white">
      {/* CARRUSEL DE FONDO */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="sync">
          <motion.img
            key={selectedSlide.id}
            src={selectedSlide.image}
            alt={selectedSlide.alt}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 1.06,
                  }
            }
            animate={{
              opacity: 1,
              scale: reduceMotion ? 1 : 1.015,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    scale: 1,
                  }
            }
            transition={{
              opacity: {
                duration: reduceMotion ? 0 : 1.1,
                ease: "easeInOut",
              },
              scale: {
                duration: reduceMotion ? 0 : 7,
                ease: "linear",
              },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* CAPAS DE CONTRASTE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,18,16,0.9)_0%,rgba(24,21,18,0.76)_43%,rgba(22,20,18,0.3)_75%,rgba(20,18,16,0.18)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-transparent to-black/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-dialac-brown/5"
      />

      {/* BORDE SUPERIOR */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left bg-[#d1a47f]"
        initial={
          reduceMotion
            ? false
            : {
                scaleX: 0,
              }
        }
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* INFORMACIÓN SUPERIOR */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -14,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="flex items-center justify-between gap-4"
        >
          <div className="inline-flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[#e1b896]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.45, 1],
                      opacity: [1, 0.55, 1],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:text-xs">
              Empresa familiar desde 2009
            </p>
          </div>

          <p className="hidden font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:block">
            Chía · Cajicá · Bogotá
          </p>
        </motion.div>

        {/* CONTENIDO CENTRAL */}
        <motion.div
          variants={contentVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="my-auto max-w-4xl py-14 sm:py-20 lg:py-24"
        >
          <motion.div
            variants={contentItemVariants}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#ddb494] sm:w-14" />

            <p className="font-display text-xs font-semibold uppercase tracking-[0.23em] text-[#f0d3bd] sm:text-sm">
              Cuídate · Aliméntate · Disfruta
            </p>
          </motion.div>

          <motion.h1
            variants={contentItemVariants}
            className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Todo lo que necesitas en una sola solicitud
          </motion.h1>

          <motion.p
            variants={contentItemVariants}
            className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 lg:text-xl"
          >
            Productos, sabores y experiencias preparadas para acompañar tus
            momentos cotidianos, reuniones y celebraciones.
          </motion.p>

          <motion.div
            variants={contentItemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
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
              <Link
                to="/productos"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-7 py-4 font-semibold text-white shadow-[0_15px_35px_rgba(0,0,0,0.28)] transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Explorar productos

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
              </Link>
            </motion.div>

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
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
              <Link
                to="/servicios"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-white/80 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-dialac-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Ver servicios

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
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CONTROLES INFERIORES */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.8,
          }}
          className="flex flex-col gap-6 border-t border-white/25 pt-6 sm:flex-row sm:items-end sm:justify-between"
        >
          {/* INDICADORES */}
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              Descubre DIALAC
            </p>

            <div
              className="mt-3 flex items-center gap-2"
              role="group"
              aria-label="Seleccionar imagen del Hero"
            >
              {heroSlides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Mostrar ${slide.label}`}
                    aria-pressed={isActive}
                    className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                      isActive
                        ? "w-12 bg-white"
                        : "w-2.5 bg-white/45 hover:bg-white/75"
                    }`}
                  >
                    {isActive && !reduceMotion && (
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 bg-[#d19b75]"
                        initial={{
                          width: "0%",
                        }}
                        animate={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 6.5,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* NOMBRE DE LA IMAGEN */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSlide.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 14,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      x: -14,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.35,
              }}
              className="flex items-center gap-3 sm:text-right"
            >
              <span className="h-2 w-2 rounded-full bg-[#e1b896]" />

              <p className="font-display text-sm font-semibold text-white">
                {selectedSlide.label}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* INDICADOR DE DESPLAZAMIENTO */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 1.2,
        }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Descubre más
        </span>

        <div className="flex h-9 w-6 justify-center rounded-full border-2 border-white/50 pt-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-white"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 12, 0],
                    opacity: [1, 0.25, 1],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
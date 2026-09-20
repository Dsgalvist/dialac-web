import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Reveal from "../animations/Reveal";

const heroImages = [
  {
    src: "/images/servicios/EVENTOS Y REUNIONES 2/2.2.png",
    alt: "Experiencia preparada por DIALAC para eventos y reuniones",
    label: "Eventos y reuniones",
    number: "01",
    position: "center",
  },
  {
    src: "/images/servicios/REFRIGERIOS2/2,2.png",
    alt: "Desayuno sorpresa preparado por DIALAC",
    label: "Refrigerios",
    number: "02",
    position: "center",
  },
  {
    src: "/images/servicios/PRODUCTOS ARTESANALES2/GALLETITAS2.png",
    alt: "Producto artesanal elaborado por DIALAC",
    label: "Productos artesanales",
    number: "03",
    position: "center",
  },
];

function AboutHero() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage(
        (currentImage) => (currentImage + 1) % heroImages.length,
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [reduceMotion]);

  const currentImage = heroImages[activeImage];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-8 sm:px-6 sm:py-10 lg:flex lg:min-h-[650px] lg:items-center lg:py-12">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
          backgroundSize: "23px 23px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-white/80 to-transparent"
      />

      {/* FORMAS DECORATIVAS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-[18%] -z-10 h-60 w-60 rounded-full border-[42px] border-dialac-brown/[0.045]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -10, 0],
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
        className="pointer-events-none absolute -bottom-28 right-[4%] -z-10 h-72 w-72 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.04]"
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

      {/* TEXTO DECORATIVO */}
      <motion.p
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 25,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -bottom-4 left-0 -z-10 hidden whitespace-nowrap font-display text-[8rem] font-bold leading-none tracking-[-0.05em] text-dialac-brown/[0.035] xl:block"
      >
        HISTORIA · FAMILIA · SABOR
      </motion.p>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 xl:gap-14">
        {/* CONTENIDO */}
        <Reveal direction="right">
          <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            {/* ETIQUETA */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <motion.span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.45, 1],
                        opacity: [1, 0.6, 1],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-sm">
                Conoce DIALAC
              </p>

              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px w-12 origin-left bg-dialac-brown/50 sm:w-16"
              />
            </div>

            {/* TÍTULO */}
            <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[0.94] tracking-[-0.04em] text-dialac-charcoal sm:text-5xl lg:text-[3.6rem] xl:text-[4.25rem]">
              Una historia familiar construida alrededor del{" "}
              <span className="relative inline-block text-dialac-brown-dark">
                buen sabor
                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-[5px] w-full origin-left rounded-full bg-dialac-brown sm:-bottom-2 sm:h-1.5"
                />
              </span>
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8 lg:mx-0">
              Conoce la esencia que nos inspira a crear experiencias para
              cuidarte, alimentarte y disfrutar cada momento.
            </p>

            {/* ESENCIA */}
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
                duration: 0.6,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-7 flex max-w-lg items-center gap-4 border-l-2 border-dialac-brown pl-4 text-left lg:mx-0"
            >
              <motion.span
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, -5, 5, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dialac-brown text-white shadow-[0_10px_22px_rgba(148,79,44,0.2)]"
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
                  <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                </svg>
              </motion.span>

              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-dialac-brown-dark">
                  Nuestra esencia
                </p>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal sm:text-base">
                  Alimentos y experiencias hechas con dedicación.
                </p>
              </div>
            </motion.div>

            {/* VALORES */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {["Familia", "Calidad", "Cercanía"].map(
                (value, index) => (
                  <motion.span
                    key={value}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-full border border-dialac-border bg-white/80 px-4 py-2 text-xs font-semibold text-dialac-charcoal shadow-sm backdrop-blur-sm"
                  >
                    <span className="mr-2 text-dialac-brown">
                      0{index + 1}
                    </span>

                    {value}
                  </motion.span>
                ),
              )}
            </motion.div>
          </div>
        </Reveal>

        {/* PANEL FOTOGRÁFICO */}
        <Reveal direction="left" delay={0.1}>
          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="relative h-[400px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#eadac9] shadow-[0_28px_70px_rgba(75,52,39,0.16)] sm:h-[500px] sm:rounded-[2.25rem] lg:h-[540px]">
              {/* IMAGEN ACTIVA */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={currentImage.src}
                  className="absolute inset-0"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 1.05,
                      }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.98,
                      }
                  }
                  transition={{
                    opacity: {
                      duration: reduceMotion ? 0 : 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      duration: reduceMotion ? 0 : 5,
                      ease: "linear",
                    },
                  }}
                >
                  <motion.img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition: currentImage.position,
                    }}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.035],
                          }
                    }
                    transition={{
                      duration: 5,
                      ease: "linear",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#211711]/80 via-transparent to-[#211711]/10"
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 p-6 pb-24 text-white sm:p-8 sm:pb-28">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
                      Experiencias DIALAC
                    </p>

                    <p className="mt-2 max-w-sm font-display text-2xl font-bold leading-tight sm:text-3xl">
                      Momentos preparados con dedicación
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              {/* NÚMERO */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`number-${currentImage.number}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -12,
                      }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 12,
                      }
                  }
                  transition={{
                    duration: 0.35,
                  }}
                  className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-[#211711]/45 font-display text-lg font-bold text-white backdrop-blur-md sm:left-7 sm:top-7 sm:h-16 sm:w-16"
                >
                  {currentImage.number}
                </motion.div>
              </AnimatePresence>

              {/* SELLO */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0,
                        rotate: -10,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.65,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 5,
                        scale: 1.05,
                      }
                }
                className="absolute right-5 top-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f5efe6] bg-dialac-brown text-center shadow-[0_14px_32px_rgba(99,53,31,0.28)] sm:right-7 sm:top-7 sm:h-24 sm:w-24"
              >
                <span className="font-display text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-xs">
                  Familia
                  <br />
                  DIALAC
                </span>
              </motion.div>

              {/* SELECTOR INFERIOR */}
              <div className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-[#211711]/55 p-2 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:gap-3">
                {heroImages.map((image, index) => {
                  const isActive = activeImage === index;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Mostrar ${image.label}`}
                      aria-pressed={isActive}
                      className={`group relative overflow-hidden rounded-xl border outline-none transition focus-visible:ring-2 focus-visible:ring-white ${
                        isActive
                          ? "border-[#e1b699] bg-white/15"
                          : "border-white/15 bg-black/10 hover:border-white/40"
                      }`}
                    >
                      <div className="relative h-12 overflow-hidden sm:h-16">
                        <motion.img
                          src={image.src}
                          alt=""
                          className="h-full w-full object-cover"
                          style={{
                            objectPosition: image.position,
                          }}
                          animate={{
                            scale: isActive ? 1.07 : 1,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                        />

                        <div
                          aria-hidden="true"
                          className={`absolute inset-0 transition ${
                            isActive
                              ? "bg-black/10"
                              : "bg-black/40 group-hover:bg-black/20"
                          }`}
                        />

                        <span className="absolute bottom-1.5 left-2 right-2 truncate text-left font-display text-[9px] font-bold text-white sm:text-[10px]">
                          {image.label}
                        </span>
                      </div>

                      {isActive && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-0.5 bg-[#e1b699]"
                          initial={{
                            width: "0%",
                          }}
                          animate={{
                            width: "100%",
                          }}
                          transition={{
                            duration: reduceMotion ? 0 : 5,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FRASE FLOTANTE */}
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
                duration: 0.55,
                delay: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-dialac-border bg-white px-5 py-3 shadow-[0_14px_32px_rgba(75,52,39,0.16)]"
            >
              <motion.span
                aria-hidden="true"
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
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <span className="font-display text-xs font-bold text-dialac-charcoal sm:text-sm">
                Cuídate · Aliméntate · Disfruta
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutHero;
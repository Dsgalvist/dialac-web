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
  const [imagesReady, setImagesReady] = useState(false);

  /*
   * Precarga y decodifica las tres imágenes antes de activar
   * la rotación automática. Esto evita que el marco quede
   * temporalmente mostrando solamente el fondo crema.
   */
  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      await Promise.all(
        heroImages.map(
          (image) =>
            new Promise<void>((resolve) => {
              const preloadImage = new Image();

              preloadImage.onload = async () => {
                try {
                  await preloadImage.decode();
                } catch {
                  /*
                   * La imagen ya cargó. Algunos navegadores pueden
                   * rechazar decode() aunque puedan mostrarla.
                   */
                }

                resolve();
              };

              /*
               * No bloqueamos permanentemente el hero si una ruta
               * presenta un problema.
               */
              preloadImage.onerror = () => resolve();
              preloadImage.src = image.src;
            }),
        ),
      );

      if (isMounted) {
        setImagesReady(true);
      }
    };

    void preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !imagesReady) {
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
  }, [imagesReady, reduceMotion]);

  const currentImage = heroImages[activeImage];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-6 sm:px-6 sm:py-8 lg:py-9">
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
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/80 to-transparent"
      />

      {/* FORMAS DECORATIVAS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[14%] -z-10 h-48 w-48 rounded-full border-[34px] border-dialac-brown/[0.045]"
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
        className="pointer-events-none absolute -bottom-20 right-[3%] -z-10 h-56 w-56 rounded-[42%_58%_52%_48%] bg-dialac-brown/[0.04]"
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

      <div className="mx-auto max-w-7xl">
        {/* BARRA SUPERIOR */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -10,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between border-b border-dialac-border pb-3"
        >
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
              Conoce DIALAC
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden font-display text-[9px] font-bold uppercase tracking-[0.18em] text-dialac-charcoal/65 sm:inline">
              Una empresa familiar
            </span>

            <span className="h-px w-7 bg-dialac-brown/35 sm:w-10" />

            <AnimatePresence mode="wait">
              <motion.span
                key={`header-number-${currentImage.number}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: -6,
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
                        y: 6,
                      }
                }
                transition={{
                  duration: 0.3,
                }}
                className="font-display text-xs font-bold text-dialac-brown-dark"
              >
                {currentImage.number}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* TÍTULO EDITORIAL */}
        <Reveal direction="up">
          <div className="relative z-10 py-5 text-center sm:py-6 lg:py-7">
            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.12,
              }}
              className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-[10px]"
            >
              Historia · Familia · Sabor
            </motion.p>

            <h1 className="mx-auto mt-3 max-w-5xl font-display text-[2.35rem] font-bold leading-[0.92] tracking-[-0.04em] text-dialac-charcoal sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]">
              Una historia familiar construida alrededor del{" "}
              <span className="relative inline-block text-dialac-brown-dark">
                buen sabor

                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-dialac-brown sm:-bottom-1.5 sm:h-1.5"
                />
              </span>
            </h1>
          </div>
        </Reveal>

        {/* ESCENARIO FOTOGRÁFICO */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                  scale: 0.98,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-2 sm:mt-3 lg:mt-4"
        >
          <div className="relative h-[390px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#eadac9] shadow-[0_24px_55px_rgba(75,52,39,0.15)] sm:h-[430px] sm:rounded-[1.85rem] lg:h-[400px]">
            {/* IMAGEN */}
            <AnimatePresence initial={false}>
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
                  decoding="async"
                  fetchPriority={activeImage === 0 ? "high" : "auto"}
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
                  className="absolute inset-0 bg-gradient-to-r from-[#20150f]/85 via-[#20150f]/28 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#20150f]/70 via-transparent to-[#20150f]/10"
                />
              </motion.figure>
            </AnimatePresence>

            {/* CONTENIDO SOBRE LA IMAGEN */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white sm:p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                {/* NÚMERO */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`main-number-${currentImage.number}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -12,
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
                            x: 12,
                          }
                    }
                    transition={{
                      duration: 0.35,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {currentImage.number}
                    </span>

                    <span className="h-px w-8 bg-white/60" />

                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-[10px]">
                      {currentImage.label}
                    </span>
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
                    duration: 0.55,
                    delay: 0.6,
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
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-[#f5efe6] bg-dialac-brown text-center shadow-[0_12px_28px_rgba(0,0,0,0.24)] sm:h-20 sm:w-20"
                >
                  <span className="font-display text-[8px] font-bold uppercase leading-tight tracking-[0.1em] text-white sm:text-[10px]">
                    Familia
                    <br />
                    DIALAC
                  </span>
                </motion.div>
              </div>

              {/* INFORMACIÓN INFERIOR */}
              <div className="grid items-end gap-4 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                    Conoce la esencia que nos inspira a crear experiencias para
                    cuidarte, alimentarte y disfrutar cada momento.
                  </p>

                  <div className="mt-3 flex items-center gap-3">
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
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-dialac-brown shadow-lg"
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
                        <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                      </svg>
                    </motion.span>

                    <div>
                      <p className="font-display text-[9px] font-bold uppercase tracking-[0.15em] text-[#e8c4a9] sm:text-[10px]">
                        Nuestra esencia
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-white sm:text-sm">
                        Alimentos y experiencias hechas con dedicación.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VALORES */}
                <div className="flex flex-wrap gap-1.5 lg:max-w-[245px] lg:justify-end">
                  {["Familia", "Calidad", "Cercanía"].map(
                    (value, index) => (
                      <motion.span
                        key={value}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -2,
                                backgroundColor:
                                  "rgba(255,255,255,0.22)",
                              }
                        }
                        transition={{
                          duration: 0.25,
                        }}
                        className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-xs"
                      >
                        <span className="mr-1.5 text-[#e8c4a9]">
                          0{index + 1}
                        </span>

                        {value}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SELECTOR */}
          <div className="relative z-20 mx-auto -mt-4 grid max-w-2xl grid-cols-3 gap-1.5 rounded-xl border border-dialac-border bg-white p-1.5 shadow-[0_14px_32px_rgba(75,52,39,0.14)] sm:gap-2 sm:p-2">
            {heroImages.map((image, index) => {
              const isActive = activeImage === index;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Mostrar ${image.label}`}
                  aria-pressed={isActive}
                  className={`group relative overflow-hidden rounded-lg border outline-none transition focus-visible:ring-4 focus-visible:ring-dialac-brown/25 ${
                    isActive
                      ? "border-dialac-brown bg-[#f3e7dc]"
                      : "border-transparent bg-[#f7f3ee] hover:border-dialac-border"
                  }`}
                >
                  <div className="relative h-10 overflow-hidden sm:h-12">
                    <motion.img
                      src={image.src}
                      alt=""
                      decoding="async"
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
                          : "bg-black/35 group-hover:bg-black/20"
                      }`}
                    />

                    <span className="absolute inset-x-1.5 bottom-1 truncate text-left font-display text-[8px] font-bold text-white sm:text-[9px]">
                      {image.label}
                    </span>
                  </div>

                  {isActive && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-0.5 bg-dialac-brown"
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
        </motion.div>

        {/* FRASE FINAL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 flex items-center justify-center gap-2.5"
        >
          <span className="h-px w-7 bg-dialac-brown/40 sm:w-10" />

          <motion.span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-dialac-brown"
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

          <p className="font-display text-[10px] font-bold text-dialac-charcoal sm:text-xs">
            Cuídate · Aliméntate · Disfruta
          </p>

          <span className="h-px w-7 bg-dialac-brown/40 sm:w-10" />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
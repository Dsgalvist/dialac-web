import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const navigation = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Productos", path: "/productos" },
  { name: "Contacto", path: "/contacto" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { totalItems, totalPrice } = useCart();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formattedTotal = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const mobileLinkStyles = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-3.5 font-semibold transition-colors duration-300 ${
      isActive
        ? "bg-dialac-brown text-white shadow-[0_10px_24px_rgba(148,79,44,0.2)]"
        : "text-dialac-charcoal hover:bg-dialac-cream hover:text-dialac-brown-dark"
    }`;

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80 }}
      animate={{
        y: 0,
        boxShadow: hasScrolled
          ? "0 12px 40px rgba(42, 35, 30, 0.10)"
          : "0 0 0 rgba(42, 35, 30, 0)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-dialac-border/80 bg-[#fffdf9]/95 backdrop-blur-xl"
    >
      <nav
        aria-label="Navegación principal"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-5 ${
          hasScrolled ? "py-1.5" : "py-2.5"
        }`}
      >
        {/* LOGO */}
        <motion.div
          className="min-w-0 shrink"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.025,
                  rotate: -0.5,
                }
          }
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <NavLink
            to="/"
            aria-label="Ir al inicio de DIALAC"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
          >
            <img
              src="/images/LOGO/logotransparente.png"
              alt="DIALAC - Cuídate, aliméntate y disfruta"
              className={`w-28 object-contain transition-all duration-300 sm:w-36 ${
                hasScrolled ? "h-12" : "h-14"
              }`}
            />
          </NavLink>
        </motion.div>

        {/* NAVEGACIÓN DE ESCRITORIO */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center rounded-2xl border border-dialac-border/60 bg-white/70 p-1 shadow-[0_4px_18px_rgba(42,35,30,0.04)]">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="group relative overflow-hidden rounded-xl px-4 py-2.5 font-semibold text-dialac-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-navigation"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-xl border border-dialac-border bg-dialac-cream shadow-[0_6px_16px_rgba(148,79,44,0.1)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${
                        isActive
                          ? "text-dialac-brown-dark"
                          : "text-dialac-charcoal group-hover:text-dialac-brown"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          aria-hidden="true"
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  scale: 0,
                                }
                          }
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-dialac-brown"
                        />
                      )}

                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CARRITO DE ESCRITORIO */}
          <motion.div
            className="ml-3"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <NavLink
              to="/solicitud"
              aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
              className="group relative inline-flex items-center gap-3 overflow-visible rounded-2xl bg-dialac-brown px-5 py-3 font-semibold text-white shadow-[0_10px_24px_rgba(148,79,44,0.24)] transition duration-300 hover:bg-dialac-brown-dark hover:shadow-[0_14px_30px_rgba(148,79,44,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={formattedTotal}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -8,
                          scale: 0.9,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 8,
                          scale: 0.9,
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className="min-w-max"
                >
                  {formattedTotal}
                </motion.span>
              </AnimatePresence>

              <span
                aria-hidden="true"
                className="h-5 w-px bg-white/25"
              />

              <motion.svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                animate={
                  reduceMotion || totalItems === 0
                    ? undefined
                    : {
                        rotate: [0, -8, 8, 0],
                      }
                }
                transition={{
                  duration: 0.45,
                }}
              >
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </motion.svg>

              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: [1, 1.25, 1],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                    }}
                    className="absolute -right-2 -top-2 flex min-h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-[#eadac9] px-1.5 text-xs font-bold text-dialac-brown-dark shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          </motion.div>
        </div>

        {/* CONTROLES MÓVILES */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {/* CARRITO MÓVIL */}
          <motion.div
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            <NavLink
              to="/solicitud"
              aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
              onClick={() => setIsOpen(false)}
              className="relative inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-dialac-brown px-3 font-semibold text-white shadow-[0_8px_18px_rgba(148,79,44,0.22)] transition duration-300 hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={formattedTotal}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -6,
                          scale: 0.9,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: 6,
                          scale: 0.9,
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className="max-[370px]:hidden text-xs sm:text-sm"
                >
                  {formattedTotal}
                </motion.span>
              </AnimatePresence>

              <motion.svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
                animate={
                  reduceMotion || totalItems === 0
                    ? undefined
                    : {
                        rotate: [0, -8, 8, 0],
                      }
                }
                transition={{
                  duration: 0.45,
                }}
              >
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </motion.svg>

              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: [1, 1.25, 1],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                    }}
                    className="absolute -right-1.5 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#eadac9] px-1 text-[10px] font-bold text-dialac-brown-dark shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          </motion.div>

          {/* BOTÓN DEL MENÚ MÓVIL */}
          <motion.button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown ${
              isOpen
                ? "border-dialac-brown bg-dialac-brown text-white shadow-md"
                : "border-dialac-border bg-white text-dialac-charcoal shadow-sm hover:border-dialac-brown hover:bg-dialac-cream hover:text-dialac-brown"
            }`}
          >
            <span className="sr-only">
              {isOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <motion.span
              aria-hidden="true"
              animate={isOpen ? "open" : "closed"}
              className="relative block h-6 w-6"
            >
              <motion.span
                className="absolute left-0 top-[5px] block h-0.5 w-6 rounded-full bg-current"
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                  },
                  open: {
                    rotate: 45,
                    y: 6,
                  },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              />

              <motion.span
                className="absolute left-0 top-[11px] block h-0.5 w-6 rounded-full bg-current"
                variants={{
                  closed: {
                    opacity: 1,
                    scaleX: 1,
                  },
                  open: {
                    opacity: 0,
                    scaleX: 0,
                  },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              />

              <motion.span
                className="absolute left-0 top-[17px] block h-0.5 w-6 rounded-full bg-current"
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                  },
                  open: {
                    rotate: -45,
                    y: -6,
                  },
                }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              />
            </motion.span>
          </motion.button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-dialac-border/80 bg-[#fffdf9] md:hidden"
          >
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-5 pt-4 sm:px-5"
            >
              <div className="mb-1 flex items-center gap-3 px-2">
                <span className="h-px flex-1 bg-dialac-border" />

                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-dialac-brown">
                  Navegación
                </span>

                <span className="h-px flex-1 bg-dialac-border" />
              </div>

              {navigation.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -18,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={mobileLinkStyles}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">
                          {item.name}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`relative z-10 h-2 w-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-white"
                              : "scale-0 bg-dialac-brown opacity-0 group-hover:scale-100 group-hover:opacity-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACENTO INFERIOR */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: hasScrolled ? 1 : 0.55,
        }}
        transition={{ duration: 0.3 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-dialac-brown/45 to-transparent"
      />
    </motion.header>
  );
}

export default Navbar;
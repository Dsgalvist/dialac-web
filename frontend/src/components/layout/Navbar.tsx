import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
    `rounded-xl px-4 py-3 font-medium transition ${
      isActive
        ? "bg-dialac-green text-white"
        : "text-dialac-charcoal hover:bg-dialac-cream"
    }`;

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80 }}
      animate={{
        y: 0,
        boxShadow: hasScrolled
          ? "0 10px 30px rgba(38, 40, 42, 0.10)"
          : "0 0 0 rgba(38, 40, 42, 0)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-dialac-border bg-white/95 backdrop-blur-md"
    >
      <nav
        aria-label="Navegación principal"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-5 ${
          hasScrolled ? "py-2" : "py-3"
        }`}
      >
        {/* LOGO */}
        <motion.div
          className="min-w-0 shrink"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.03,
                  rotate: -1,
                }
          }
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <NavLink
            to="/"
            aria-label="Ir al inicio de DIALAC"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
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
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative overflow-hidden rounded-lg px-4 py-2 font-medium text-dialac-charcoal transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-green"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-navigation"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-dialac-green"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-dialac-charcoal hover:text-dialac-brown-dark"
                    }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}

          {/* CARRITO DE ESCRITORIO */}
          <motion.div
            className="ml-3"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <NavLink
              to="/solicitud"
              aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
              className="group relative inline-flex items-center gap-3 overflow-visible rounded-xl bg-dialac-brown px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-dialac-brown-dark hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dialac-brown"
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
                    className="absolute -right-2 -top-2 flex min-h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-dialac-green px-1.5 text-xs font-bold text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          </motion.div>
        </div>

        {/* CONTROLES MÓVILES: CARRITO Y MENÚ */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {/* CARRITO MÓVIL */}
          <motion.div
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            <NavLink
              to="/solicitud"
              aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
              onClick={() => setIsOpen(false)}
              className="relative inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-dialac-brown px-3 font-semibold text-white shadow-sm transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown"
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
                    className="absolute -right-1.5 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-dialac-green px-1 text-[10px] font-bold text-white"
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
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-dialac-charcoal text-dialac-charcoal transition hover:bg-dialac-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dialac-brown"
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
              duration: reduceMotion ? 0 : 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-dialac-border bg-white md:hidden"
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
              className="flex flex-col gap-2 px-5 py-5"
            >
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
                  transition={{ duration: 0.25 }}
                >
                  <NavLink
                    to={item.path}
                    className={mobileLinkStyles}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
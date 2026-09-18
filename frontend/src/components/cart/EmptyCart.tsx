import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

function EmptyCart() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
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
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-labelledby="empty-cart-title"
      className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-dialac-border bg-white px-6 py-12 text-center shadow-[0_12px_35px_rgba(38,40,42,0.05)] sm:px-10 sm:py-14"
    >
      {/* DETALLE DECORATIVO SUTIL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-1.5 w-full bg-dialac-brown"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* ICONO */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -7, 0],
                }
          }
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-dialac-border bg-[#f4e8de] text-dialac-brown-dark shadow-sm sm:h-24 sm:w-24"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9 sm:h-11 sm:w-11"
          >
            <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span
            aria-hidden="true"
            className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-dialac-green px-1 text-xs font-bold text-white sm:h-8 sm:min-w-8 sm:text-sm"
          >
            0
          </span>
        </motion.div>

        {/* CONTENIDO */}
        <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
          Tu solicitud
        </p>

        <h2
          id="empty-cart-title"
          className="mt-3 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl"
        >
          Tu carrito está vacío
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
          Explora nuestro catálogo y agrega los productos que deseas incluir
          en tu solicitud.
        </p>

        {/* BOTÓN PRINCIPAL */}
        <motion.div
          className="mt-7"
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
                  scale: 0.97,
                }
          }
        >
          <Link
            to="/productos"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
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
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </motion.div>

        {/* INFORMACIÓN */}
        <div className="mx-auto mt-8 grid max-w-xl gap-3 border-t border-dialac-border pt-6 text-left sm:grid-cols-2 sm:gap-5">
          <div className="flex items-center gap-3 rounded-xl bg-[#f7f5f1] px-4 py-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-dialac-green"
            />

            <span className="text-sm text-dialac-charcoal">
              Revisa precios y cantidades
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-[#f7f5f1] px-4 py-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-dialac-brown"
            />

            <span className="text-sm text-dialac-charcoal">
              Solicita con 3 días de anticipación
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default EmptyCart;
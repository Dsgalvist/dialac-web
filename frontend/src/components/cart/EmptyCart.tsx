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
      className="relative flex min-h-[460px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-dialac-border bg-white px-6 py-14 text-center shadow-[0_14px_40px_rgba(38,40,42,0.06)] sm:px-10 sm:py-16"
    >
      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      <div className="relative">
        {/* ICONO */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dialac-border bg-[#f7f5f1] text-dialac-brown-dark shadow-sm"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-11 w-11"
          >
            <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-dialac-green text-sm font-bold text-white"
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
          className="mt-3 font-display text-3xl font-bold text-dialac-charcoal sm:text-4xl"
        >
          Tu carrito está vacío
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
          Explora nuestro catálogo y agrega los productos que deseas incluir
          en tu solicitud.
        </p>

        {/* BOTÓN PRINCIPAL */}
        <motion.div
          className="mt-8"
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
        <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 border-t border-dialac-border pt-6 text-left sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-dialac-green"
            />

            <span className="text-sm text-dialac-charcoal">
              Revisa precios y cantidades
            </span>
          </div>

          <div className="flex items-center gap-2">
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
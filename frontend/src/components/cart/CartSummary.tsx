import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

type CartSummaryProps = {
  totalItems: number;
  totalPrice: number;
  onContinue: () => void;
  onClear: () => void;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

function CartSummary({
  totalItems,
  totalPrice,
  onContinue,
  onClear,
}: CartSummaryProps) {
  const reduceMotion = useReducedMotion();
  const isEmpty = totalItems === 0;

  return (
    <motion.aside
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 24,
            }
      }
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-labelledby="cart-summary-title"
      className="overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_16px_45px_rgba(38,40,42,0.08)]"
    >
      <div className="h-1.5 w-full bg-dialac-brown" />

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-dialac-brown-dark">
              Tu pedido
            </p>

            <h2
              id="cart-summary-title"
              className="mt-2 font-display text-2xl font-bold text-dialac-charcoal"
            >
              Resumen de la solicitud
            </h2>
          </div>

          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
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
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </span>
        </div>

        {/* CANTIDAD */}
        <div className="mt-7 flex items-center justify-between gap-4 border-b border-dialac-border pb-5">
          <span className="text-dialac-charcoal">
            {totalItems === 1
              ? "Producto seleccionado"
              : "Productos seleccionados"}
          </span>

          <motion.span
            key={totalItems}
            initial={
              reduceMotion
                ? false
                : {
                    scale: 0.85,
                    opacity: 0.5,
                  }
            }
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="flex min-h-9 min-w-9 items-center justify-center rounded-full bg-[#e9eddf] px-3 font-display font-bold text-dialac-green-dark"
          >
            {totalItems}
          </motion.span>
        </div>

        {/* TOTAL */}
        <div className="flex items-end justify-between gap-4 py-6">
          <div>
            <p className="text-sm font-semibold text-dialac-charcoal">
              Total de la solicitud
            </p>

            <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
              Valor calculado según las cantidades seleccionadas.
            </p>
          </div>

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.p
              key={totalPrice}
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
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="shrink-0 text-right font-display text-2xl font-bold text-dialac-brown-dark sm:text-3xl"
            >
              {formatCurrency(totalPrice)}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* INFORMACIÓN IMPORTANTE */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-dialac-border bg-[#faf8f4] p-4">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f4e8de] text-dialac-brown-dark"
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>

            <div>
              <p className="font-display text-sm font-bold text-dialac-charcoal">
                Mínimo 3 días de anticipación
              </p>

              <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                La solicitud debe realizarse al menos 3 días antes de la fecha
                requerida.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-dialac-border bg-[#faf8f4] p-4">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e9eddf] text-dialac-green-dark"
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
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A8 8 0 1 1 21 15Z" />
              </svg>
            </span>

            <div>
              <p className="font-display text-sm font-bold text-dialac-charcoal">
                Solicitudes disponibles 24/7
              </p>

              <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                Puedes enviarla a cualquier hora. DIALAC se comunicará contigo
                dentro de sus horarios de atención.
              </p>
            </div>
          </div>
        </div>

        {/* CONTINUAR: SOLO ESCRITORIO */}
        <motion.button
          type="button"
          onClick={onContinue}
          disabled={isEmpty}
          whileHover={
            reduceMotion || isEmpty
              ? undefined
              : {
                  y: -2,
                }
          }
          whileTap={
            reduceMotion || isEmpty
              ? undefined
              : {
                  scale: 0.98,
                }
          }
          className="group mt-6 hidden w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-5 py-3.5 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 disabled:cursor-not-allowed disabled:bg-[#6f6f6f] disabled:text-white lg:inline-flex"
        >
          Continuar solicitud

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
        </motion.button>

        <button
          type="button"
          onClick={onClear}
          disabled={isEmpty}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-dialac-error outline-none transition hover:bg-[#fff1f1] focus-visible:ring-4 focus-visible:ring-[#efcaca] disabled:cursor-not-allowed disabled:text-[#767676] disabled:hover:bg-transparent"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M4 7h16" />
            <path d="M9 7V4h6v3" />
            <path d="m7 7 1 13h8l1-13" />
          </svg>

          Vaciar carrito
        </button>
      </div>
    </motion.aside>
  );
}

export default CartSummary;
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CartItem } from "../../context/CartContext";

type RequestOrderSummaryProps = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

function RequestOrderSummary({
  items,
  totalItems,
  totalPrice,
}: RequestOrderSummaryProps) {
  const reduceMotion = useReducedMotion();

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
      aria-labelledby="request-order-summary-title"
      className="overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_16px_45px_rgba(38,40,42,0.08)]"
    >
      <div className="h-1.5 w-full bg-dialac-brown" />

      <div className="p-5 sm:p-7">
        {/* ENCABEZADO */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-dialac-brown-dark">
              Tu pedido
            </p>

            <h2
              id="request-order-summary-title"
              className="mt-2 font-display text-2xl font-bold text-dialac-charcoal"
            >
              Resumen de productos
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

        {/* CANTIDAD TOTAL */}
        <div className="mt-7 flex items-center justify-between gap-4 border-b border-dialac-border pb-5">
          <span className="text-sm font-semibold text-dialac-charcoal">
            {totalItems === 1
              ? "Producto seleccionado"
              : "Productos seleccionados"}
          </span>

          <span className="flex min-h-9 min-w-9 items-center justify-center rounded-full bg-[#e9eddf] px-3 font-display font-bold text-dialac-green-dark">
            {totalItems}
          </span>
        </div>

        {/* PRODUCTOS */}
        <div className="max-h-[420px] divide-y divide-dialac-border overflow-y-auto overscroll-contain [scrollbar-color:#cdb9a8_transparent] [scrollbar-width:thin]">
          {items.map((item) => {
            const subtotal = item.price * item.quantity;

            return (
              <article
                key={item.id}
                className="flex gap-3 py-4"
              >
                {/* IMAGEN */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dialac-border bg-white">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-dialac-brown-dark"
                    >
                      <path d="M8 3h8l1 4v13H7V7l1-4Z" />
                      <path d="M7 8h10" />
                      <path d="M10 12h4" />
                    </svg>
                  )}
                </div>

                {/* INFORMACIÓN */}
                <div className="min-w-0 flex-1">
                  {item.code && (
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.1em] text-dialac-green-dark">
                      Código {item.code}
                    </p>
                  )}

                  <h3 className="mt-1 line-clamp-2 font-display text-sm font-bold leading-5 text-dialac-charcoal">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-end justify-between gap-3">
                    <p className="text-xs text-dialac-charcoal">
                      {item.quantity}{" "}
                      {item.quantity === 1
                        ? "unidad"
                        : "unidades"}
                    </p>

                    <p className="shrink-0 font-display text-sm font-bold text-dialac-brown-dark">
                      {formatCurrency(subtotal)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* TOTAL */}
        <div className="border-t border-dialac-border pt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-sm font-bold text-dialac-charcoal">
                Total de la solicitud
              </p>

              <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                Calculado según las cantidades seleccionadas.
              </p>
            </div>

            <motion.p
              key={totalPrice}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0.6,
                      scale: 0.97,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="shrink-0 text-right font-display text-2xl font-bold text-dialac-brown-dark"
            >
              {formatCurrency(totalPrice)}
            </motion.p>
          </div>
        </div>

        {/* EDITAR CARRITO */}
        <Link
          to="/solicitud"
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dialac-brown px-5 py-3 text-sm font-semibold text-dialac-brown-dark outline-none transition hover:bg-[#f4e8de] focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </svg>

          Editar productos
        </Link>

        {/* INFORMACIÓN */}
        <div className="mt-5 rounded-xl border border-dialac-border bg-[#faf8f4] p-4">
          <div className="flex items-start gap-3">
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
                Solicitud sujeta a confirmación
              </p>

              <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                DIALAC revisará la disponibilidad, dirección y fecha
                antes de confirmar el pedido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export default RequestOrderSummary;
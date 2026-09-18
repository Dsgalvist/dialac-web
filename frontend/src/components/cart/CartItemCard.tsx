import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { CartItem } from "../../context/CartContext";

type CartItemCardProps = {
  item: CartItem;
  onUpdateQuantity: (
    productId: string,
    quantity: number,
  ) => void;
  onRemove: (productId: string) => void;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemCardProps) {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const subtotal = item.price * item.quantity;
  const showImage = Boolean(item.image) && !imageError;

  useEffect(() => {
    setImageError(false);
  }, [item.image]);

  const decreaseQuantity = () => {
    if (item.quantity <= 1) return;

    onUpdateQuantity(item.id, item.quantity - 1);
  };

  const increaseQuantity = () => {
    if (item.quantity >= 99) return;

    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -20,
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
              x: -20,
              height: 0,
              marginBottom: 0,
            }
      }
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-[0_10px_30px_rgba(38,40,42,0.05)]"
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-4 sm:gap-5">
          {/* IMAGEN */}
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dialac-border bg-[#f7f5f1] sm:h-32 sm:w-32">
            {showImage ? (
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                onError={() => setImageError(true)}
                className="h-full w-full object-contain p-2.5 sm:p-3"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-dialac-brown-dark">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <path d="M8 3h8l1 4v13H7V7l1-4Z" />
                  <path d="M7 8h10" />
                  <path d="M10 12h4" />
                </svg>

                <span className="mt-1 text-[10px] font-semibold sm:text-xs">
                  Sin imagen
                </span>
              </div>
            )}
          </div>

          {/* INFORMACIÓN */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {item.code && (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-dialac-green-dark sm:text-xs">
                    Código {item.code}
                  </p>
                )}

                <h2 className="mt-1 break-words font-display text-lg font-bold leading-snug text-dialac-charcoal sm:text-2xl">
                  {item.name}
                </h2>
              </div>

              <motion.button
                type="button"
                onClick={() => onRemove(item.id)}
                aria-label={`Eliminar ${item.name} de la solicitud`}
                title="Eliminar producto"
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.92,
                      }
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent text-dialac-error outline-none transition hover:border-[#efcaca] hover:bg-[#fff1f1] focus-visible:ring-4 focus-visible:ring-[#efcaca]"
              >
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
                  <path d="M4 7h16" />
                  <path d="M9 7V4h6v3" />
                  <path d="m7 7 1 13h8l1-13" />
                  <path d="M10 11v5" />
                  <path d="M14 11v5" />
                </svg>
              </motion.button>
            </div>

            <div className="mt-3">
              <p className="text-xs text-dialac-charcoal sm:text-sm">
                Precio unitario
              </p>

              <p className="mt-0.5 font-display text-base font-bold text-dialac-charcoal sm:text-lg">
                {formatCurrency(item.price)}
              </p>
            </div>
          </div>
        </div>

        {/* CANTIDAD Y SUBTOTAL */}
        <div className="mt-5 flex flex-col gap-4 border-t border-dialac-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold text-dialac-charcoal">
              Cantidad
            </p>

            <div className="inline-flex items-center overflow-hidden rounded-xl border border-dialac-border bg-white">
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={item.quantity <= 1}
                aria-label={`Disminuir cantidad de ${item.name}`}
                className="flex h-11 w-11 items-center justify-center text-dialac-charcoal outline-none transition hover:bg-[#f4f0e9] focus-visible:bg-[#f4f0e9] disabled:cursor-not-allowed disabled:text-[#8b8b8b]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>

              <span
                aria-live="polite"
                className="flex h-11 min-w-12 items-center justify-center border-x border-dialac-border px-3 font-display font-bold text-dialac-charcoal"
              >
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                disabled={item.quantity >= 99}
                aria-label={`Aumentar cantidad de ${item.name}`}
                className="flex h-11 w-11 items-center justify-center text-dialac-charcoal outline-none transition hover:bg-[#f4f0e9] focus-visible:bg-[#f4f0e9] disabled:cursor-not-allowed disabled:text-[#8b8b8b]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-semibold text-dialac-charcoal">
              Subtotal
            </p>

            <motion.p
              key={subtotal}
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
              className="mt-1 font-display text-xl font-bold text-dialac-brown-dark sm:text-2xl"
            >
              {formatCurrency(subtotal)}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CartItemCard;
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
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
  const [showRemoveConfirmation, setShowRemoveConfirmation] =
    useState(false);

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

  const confirmRemove = () => {
    onRemove(item.id);
    setShowRemoveConfirmation(false);
  };

  return (
    <>
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
        className="overflow-hidden rounded-2xl border border-dialac-border bg-[#f4f0e9] shadow-[0_10px_30px_rgba(38,40,42,0.05)]"
      >
        <div className="bg-[#f4f0e9] p-4 sm:p-5">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* IMAGEN: ÚNICA ZONA CON FONDO BLANCO */}
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dialac-border bg-white sm:h-32 sm:w-32">
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

            {/* INFORMACIÓN: FONDO CREMA */}
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
                  onClick={() => setShowRemoveConfirmation(true)}
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

          {/* CANTIDAD Y SUBTOTAL: FONDO CREMA */}
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
                transition={{
                  duration: reduceMotion ? 0 : 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-1 font-display text-xl font-bold text-dialac-brown-dark sm:text-2xl"
              >
                {formatCurrency(subtotal)}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.article>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showRemoveConfirmation && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`remove-product-title-${item.id}`}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-dialac-charcoal/60 px-4 backdrop-blur-sm"
                onClick={() => setShowRemoveConfirmation(false)}
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                          scale: 0.96,
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
                          y: 16,
                          scale: 0.97,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={(event) => event.stopPropagation()}
                  className="w-full max-w-md rounded-[1.75rem] border border-dialac-border bg-white p-6 shadow-2xl sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1f1] text-dialac-error"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                    >
                      <path d="M4 7h16" />
                      <path d="M9 7V4h6v3" />
                      <path d="m7 7 1 13h8l1-13" />
                      <path d="M10 11v5" />
                      <path d="M14 11v5" />
                    </svg>
                  </div>

                  <h2
                    id={`remove-product-title-${item.id}`}
                    className="mt-5 font-display text-2xl font-bold text-dialac-charcoal"
                  >
                    ¿Eliminar este producto?
                  </h2>

                  <p className="mt-3 leading-7 text-dialac-charcoal">
                    Se eliminará{" "}
                    <strong className="font-semibold">
                      {item.name}
                    </strong>{" "}
                    y su cantidad seleccionada de tu solicitud.
                  </p>

                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        setShowRemoveConfirmation(false)
                      }
                      className="inline-flex items-center justify-center rounded-xl border border-dialac-border px-5 py-3 font-semibold text-dialac-charcoal outline-none transition hover:bg-[#f7f5f1] focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      onClick={confirmRemove}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-dialac-error px-5 py-3 font-semibold text-white outline-none transition hover:brightness-90 focus-visible:ring-4 focus-visible:ring-[#efcaca]"
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

                      Sí, eliminar producto
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export default CartItemCard;
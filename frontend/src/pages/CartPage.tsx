import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../hooks/useCart";

function CartPage() {
  const reduceMotion = useReducedMotion();

  const {
    items,
    totalItems,
    totalPrice,
    removeProduct,
    updateQuantity,
    clearCart,
  } = useCart();

  const [showClearConfirmation, setShowClearConfirmation] =
    useState(false);

  const isEmpty = items.length === 0;

  useEffect(() => {
    if (!showClearConfirmation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowClearConfirmation(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showClearConfirmation]);

  const handleContinue = () => {
    /*
     * Aquí conectaremos el formulario de datos,
     * la fecha requerida, la generación del PDF
     * y el envío de la solicitud.
     */
  };

  const handleConfirmClear = () => {
    clearCart();
    setShowClearConfirmation(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f1]">
      {/* ENCABEZADO */}
      <section className="relative w-full overflow-hidden border-b border-dialac-border bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[48px] border-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[12%] h-56 w-56 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
        />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
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
          className="relative mx-auto flex max-w-[1480px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                Mi solicitud
              </p>
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Revisa tus productos
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Verifica las cantidades y el valor total antes de continuar con
              los datos de tu solicitud.
            </p>
          </div>

          <Link
            to="/productos"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border-2 border-dialac-brown px-5 py-3 font-semibold text-dialac-brown-dark outline-none transition hover:bg-dialac-brown hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>

            Seguir agregando productos
          </Link>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <section className="w-full px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1480px]">
          {isEmpty ? (
            <EmptyCart />
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr] xl:grid-cols-[1.35fr_0.65fr]">
              {/* PRODUCTOS */}
              <section aria-labelledby="cart-products-title">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-dialac-green-dark">
                      Productos seleccionados
                    </p>

                    <h2
                      id="cart-products-title"
                      className="mt-2 font-display text-2xl font-bold text-dialac-charcoal sm:text-3xl"
                    >
                      Tu carrito
                    </h2>
                  </div>

                  <p className="text-sm font-semibold text-dialac-charcoal">
                    {totalItems}{" "}
                    {totalItems === 1 ? "producto" : "productos"}
                  </p>
                </div>

                <motion.div layout className="space-y-4">
                  <AnimatePresence initial={false} mode="popLayout">
                    {items.map((item) => (
                      <CartItemCard
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeProduct}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </section>

              {/* RESUMEN */}
              <div className="lg:sticky lg:top-28">
                <CartSummary
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  onContinue={handleContinue}
                  onClear={() => setShowClearConfirmation(true)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONFIRMACIÓN PARA VACIAR EL CARRITO */}
      <AnimatePresence>
        {showClearConfirmation && (
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowClearConfirmation(false);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dialac-charcoal/65 px-5 py-8 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="clear-cart-title"
              aria-describedby="clear-cart-description"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-md overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
            >
              <div className="h-1.5 w-full bg-dialac-error" />

              <div className="p-6 sm:p-7">
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
                  id="clear-cart-title"
                  className="mt-5 font-display text-2xl font-bold text-dialac-charcoal"
                >
                  ¿Vaciar el carrito?
                </h2>

                <p
                  id="clear-cart-description"
                  className="mt-3 leading-7 text-dialac-charcoal"
                >
                  Se eliminarán todos los productos y cantidades que agregaste
                  a esta solicitud.
                </p>

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowClearConfirmation(false)}
                    className="rounded-xl border-2 border-dialac-charcoal px-5 py-3 font-semibold text-dialac-charcoal outline-none transition hover:bg-dialac-charcoal hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-charcoal/25"
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmClear}
                    className="rounded-xl bg-dialac-error px-5 py-3 font-semibold text-white outline-none transition hover:bg-[#841717] focus-visible:ring-4 focus-visible:ring-[#efcaca]"
                  >
                    Sí, vaciar carrito
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default CartPage;
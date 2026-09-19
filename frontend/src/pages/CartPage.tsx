import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../hooks/useCart";

function CartPage() {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

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
    if (isEmpty) {
      setShowClearConfirmation(false);
    }
  }, [isEmpty]);

  const handleContinue = () => {
  navigate("/solicitud/datos");
};

  const handleClearCart = () => {
    clearCart();
    setShowClearConfirmation(false);
  };

  return (
    <main
      className={`min-h-screen overflow-x-clip bg-[#f7f5f1] ${
        isEmpty ? "" : "pb-24 lg:pb-0"
      }`}
    >
      <section className="relative px-3 py-10 sm:px-8 sm:py-14 lg:py-16">
        {/* DECORACIÓN */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-24 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
        />

        <div className="relative mx-auto max-w-[1480px]">
          {/* ENCABEZADO */}
          <header className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
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

              <p className="mt-4 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Verifica las cantidades y el valor total antes de continuar
                con los datos de tu solicitud.
              </p>
            </div>

            <Link
              to="/productos"
              className="group hidden w-fit items-center justify-center gap-3 rounded-xl border-2 border-dialac-brown px-6 py-3 font-semibold text-dialac-brown-dark outline-none transition hover:bg-dialac-brown hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25 lg:inline-flex"
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
          </header>

          {isEmpty ? (
            <EmptyCart />
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-8">
              {/* PRODUCTOS: SEGUNDO EN RESPONSIVE */}
              <section
                aria-labelledby="cart-products-title"
                className="order-2 lg:order-1"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-dialac-green-dark">
                      Productos seleccionados
                    </p>

                    <h2
                      id="cart-products-title"
                      className="mt-1 font-display text-2xl font-bold text-dialac-charcoal"
                    >
                      Tu carrito
                    </h2>
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={totalItems}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: -8,
                              scale: 0.8,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: [0.8, 1.2, 1],
                      }}
                      exit={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: 8,
                              scale: 0.8,
                            }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                      }}
                      className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-dialac-green px-3 font-display font-bold text-white"
                    >
                      {totalItems}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onRemove={removeProduct}
                      onUpdateQuantity={updateQuantity}
                    />
                  ))}
                </div>
              </section>

              {/* RESUMEN: PRIMERO EN RESPONSIVE */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-28">
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
      {showClearConfirmation && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="clear-cart-title"
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
          className="fixed inset-0 z-[90] flex items-center justify-center bg-dialac-charcoal/60 px-4 backdrop-blur-sm"
          onClick={() => setShowClearConfirmation(false)}
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
              </svg>
            </div>

            <h2
              id="clear-cart-title"
              className="mt-5 font-display text-2xl font-bold text-dialac-charcoal"
            >
              ¿Vaciar el carrito?
            </h2>

            <p className="mt-3 leading-7 text-dialac-charcoal">
              Se eliminarán todos los productos y cantidades seleccionadas.
              Esta acción no se puede deshacer.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowClearConfirmation(false)}
                className="inline-flex items-center justify-center rounded-xl border border-dialac-border px-5 py-3 font-semibold text-dialac-charcoal transition hover:bg-[#f7f5f1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleClearCart}
                className="inline-flex items-center justify-center rounded-xl bg-dialac-error px-5 py-3 font-semibold text-white transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#efcaca]"
              >
                Sí, vaciar carrito
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}

export default CartPage;
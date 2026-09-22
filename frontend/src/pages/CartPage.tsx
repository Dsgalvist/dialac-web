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
    <main className="min-h-screen overflow-x-clip bg-[#f7f5f1]">
      {/* ACCIONES RESPONSIVE */}
      {!isEmpty && (
        <div className="sticky top-[61px] z-40 border-b border-dialac-border bg-[#f7f5f1]/95 px-3 py-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-xl grid-cols-[auto_minmax(0,1fr)] gap-2">
            <Link
              to="/productos"
              aria-label="Seguir explorando productos"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-dialac-brown bg-white px-3 font-semibold text-dialac-brown-dark outline-none transition hover:bg-[#f4e8de] focus-visible:ring-4 focus-visible:ring-dialac-brown/25"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
              </svg>

              <span className="hidden min-[390px]:inline">
                Productos
              </span>
            </Link>

            <motion.button
              type="button"
              onClick={handleContinue}
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="group inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl bg-dialac-brown px-4 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
            >
              <span className="truncate">
                Continuar solicitud
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </motion.button>
          </div>
        </div>
      )}

      <section className="relative px-3 pb-10 pt-3 sm:px-8 sm:pb-14 sm:pt-4 lg:pb-16 lg:pt-5">
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
          <header
            data-tour="cart-header"
            className="mb-6 flex flex-col gap-5 sm:mb-7 lg:flex-row lg:items-end lg:justify-between"
          >
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

              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                Revisa tus productos
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Verifica las cantidades y el valor total antes de continuar con
                los datos de tu solicitud.
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

          {/* INFORMACIÓN DE DOMICILIO Y COBERTURA */}
          {!isEmpty && (
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-[0_12px_35px_rgba(38,40,42,0.06)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-stretch">
                {/* ETIQUETA DESTACADA */}
                <div className="relative flex items-center gap-3 overflow-hidden bg-dialac-brown px-5 py-4 text-white sm:min-w-[210px]">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full border-[20px] border-white/10"
                  />

                  <span
                    aria-hidden="true"
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15"
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
                      <path d="M3 7h11v10H3Z" />
                      <path d="M14 10h4l3 3v4h-7Z" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </svg>
                  </span>

                  <p className="relative font-display text-sm font-bold uppercase tracking-[0.16em]">
                    Domicilio
                  </p>
                </div>

                {/* INFORMACIÓN */}
                <div className="relative flex-1 overflow-hidden bg-[#f7f2eb] px-5 py-4">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-white/60"
                  />

                  <div className="relative">
                    <p className="font-display font-bold text-dialac-charcoal">
                      Entregas en Bogotá, Chía y Cajicá
                    </p>

                    <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                      El domicilio está sujeto a cobertura, disponibilidad y
                      posible costo adicional.
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-dialac-brown-dark">
                      DIALAC confirmará las condiciones antes de confirmar el
                      pedido.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {isEmpty ? (
            <EmptyCart />
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-8">
              {/* PRODUCTOS: SEGUNDO EN RESPONSIVE */}
              <section
                aria-labelledby="cart-products-title"
                data-tour="cart-items"
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

                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
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
              <div
                data-tour="cart-summary"
                className="order-1 lg:order-2 lg:sticky lg:top-28"
              >
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
              Se eliminarán todos los productos y cantidades seleccionadas. Esta
              acción no se puede deshacer.
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
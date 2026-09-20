import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProductFilters from "../components/products/ProductFilters";
import ProductsCatalog from "../components/products/ProductCatalog";
import { useCart } from "../hooks/useCart";
import {
  type Product,
  type ProductBrand,
  type ProductCategory,
} from "../data/products";

function ProductsPage() {
  const { addProduct } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("todos");
  const [activeBrand, setActiveBrand] =
    useState<ProductBrand>("todas");
  const [addedProductName, setAddedProductName] = useState("");

  const notificationTimeout = useRef<
    ReturnType<typeof setTimeout> | undefined
  >(undefined);

  useEffect(() => {
    return () => {
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
    };
  }, []);

  const handleCategoryChange = (category: ProductCategory) => {
    setActiveCategory(category);

    /*
     * Al cambiar la categoría mostramos inicialmente
     * los productos de todas las marcas.
     */
    setActiveBrand("todas");
  };

  const handleAddToCart = (product: Product) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || undefined,
      code: product.code,
    });

    setAddedProductName(product.name);

    if (notificationTimeout.current) {
      clearTimeout(notificationTimeout.current);
    }

    notificationTimeout.current = setTimeout(() => {
      setAddedProductName("");
    }, 3000);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f5f1]">
      {/* FILTRO RESPONSIVE DEBAJO DEL NAVBAR */}
      <ProductFilters
        mode="mobile"
        activeCategory={activeCategory}
        activeBrand={activeBrand}
        onCategoryChange={handleCategoryChange}
        onBrandChange={setActiveBrand}
      />

      {/* PRODUCTOS: ENCABEZADO, FILTROS Y CATÁLOGO */}
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
          {/* ENCABEZADO INTEGRADO */}
          <header className="mb-6 grid gap-5 sm:mb-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(600px,1.15fr)] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-dialac-brown"
                />

                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Productos DIALAC
                </p>
              </div>

              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                Encuentra lo que necesitas
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
                Explora nuestros productos por categoría y marca, y agrega al
                carrito las opciones que prefieras.
              </p>
            </div>

            {/* INFORMACIÓN IMPORTANTE */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* DOMICILIO */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-dialac-border bg-white p-4 shadow-[0_12px_35px_rgba(38,40,42,0.07)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-dialac-brown/[0.045]"
                />

                <div className="relative flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead8c5] text-dialac-brown-dark"
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
                      <path d="M3 7h11v10H3Z" />
                      <path d="M14 10h4l3 3v4h-7Z" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="font-display font-bold text-dialac-charcoal">
                      Información de domicilio
                    </p>

                    <p className="mt-1 text-sm leading-5 text-dialac-charcoal">
                      El domicilio está sujeto a disponibilidad y posible costo
                      adicional.
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-dialac-brown-dark">
                      DIALAC confirmará las condiciones antes de confirmar el
                      pedido.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* COBERTURA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-dialac-border bg-[#f7f2eb] p-4 shadow-[0_12px_35px_rgba(38,40,42,0.07)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-white/45"
                />

                <div className="relative flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead8c5] text-dialac-brown-dark"
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
                      <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                      <circle cx="12" cy="9" r="2" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="font-display font-bold text-dialac-charcoal">
                      Cobertura actual
                    </p>

                    <p className="mt-1 text-sm leading-5 text-dialac-charcoal">
                      Actualmente realizamos entregas únicamente en Bogotá, Chía
                      y Cajicá.
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-dialac-brown-dark">
                      La dirección será verificada antes de confirmar el pedido.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </header>

          {/* FILTROS DE ESCRITORIO Y CATÁLOGO */}
          <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)] xl:gap-8">
            <ProductFilters
              mode="desktop"
              activeCategory={activeCategory}
              activeBrand={activeBrand}
              onCategoryChange={handleCategoryChange}
              onBrandChange={setActiveBrand}
            />

            <ProductsCatalog
              searchTerm={searchTerm}
              activeCategory={activeCategory}
              activeBrand={activeBrand}
              onSearchChange={setSearchTerm}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </section>

      {/* CONFIRMACIÓN AL AGREGAR UN PRODUCTO */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-4 bottom-5 z-[70] flex justify-center sm:inset-x-auto sm:bottom-7 sm:right-7"
      >
        <AnimatePresence>
          {addedProductName && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-auto flex w-full max-w-md items-start gap-4 rounded-2xl border border-dialac-border bg-white p-4 shadow-[0_18px_50px_rgba(38,40,42,0.18)]"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dialac-green text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m6 12 4 4 8-8" />
                </svg>
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-display font-bold text-dialac-charcoal">
                  Producto agregado
                </p>

                <p className="mt-1 truncate text-sm text-dialac-charcoal">
                  {addedProductName} fue agregado al carrito.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAddedProductName("")}
                aria-label="Cerrar confirmación"
                className="pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-dialac-charcoal transition hover:bg-[#f4f0e9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/25"
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
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default ProductsPage;
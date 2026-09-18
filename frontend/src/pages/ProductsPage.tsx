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
          {/* ENCABEZADO INTEGRADO */}
          <header className="mb-10 max-w-3xl sm:mb-12">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                Productos DIALAC
              </p>
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Encuentra lo que necesitas
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg">
              Explora nuestros productos por categoría y marca, y agrega al
              carrito las opciones que prefieras.
            </p>
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
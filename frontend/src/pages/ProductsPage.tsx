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
    <main className="overflow-hidden bg-white">
      <ProductFilters
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        activeBrand={activeBrand}
        onSearchChange={setSearchTerm}
        onCategoryChange={handleCategoryChange}
        onBrandChange={setActiveBrand}
      />

      <ProductsCatalog
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        activeBrand={activeBrand}
        onAddToCart={handleAddToCart}
      />

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
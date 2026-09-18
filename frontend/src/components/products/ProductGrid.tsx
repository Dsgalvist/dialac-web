import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const PRODUCTS_PER_PAGE = 24;

function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const productsKey = useMemo(
    () => products.map((product) => product.id).join("|"),
    [products],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(products.length / PRODUCTS_PER_PAGE),
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [productsKey]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const visibleProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return products.slice(start, start + PRODUCTS_PER_PAGE);
  }, [currentPage, products]);

  const visiblePages = useMemo(() => {
    const firstPage = Math.max(
      1,
      Math.min(currentPage - 2, totalPages - 4),
    );
    const lastPage = Math.min(totalPages, firstPage + 4);

    return Array.from(
      { length: lastPage - firstPage + 1 },
      (_, index) => firstPage + index,
    );
  }, [currentPage, totalPages]);

  const changePage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);

    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section ref={sectionRef} className="scroll-mt-24">
      {products.length === 0 ? (
        <div className="rounded-2xl border border-dialac-border bg-white px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-dialac-charcoal">
            No encontramos productos
          </h2>
          <p className="mt-3 text-dialac-charcoal">
            Prueba con otra categoría, marca o término de búsqueda.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="Paginación de productos"
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-dialac-border bg-white px-3 py-2 text-sm font-semibold text-dialac-charcoal transition hover:border-dialac-brown hover:text-dialac-brown-dark disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                ← Anterior
              </button>

              {visiblePages.map((page) => (
                <button
                  key={page}
                  type="button"
                  aria-label={`Ir a la página ${page}`}
                  aria-current={page === currentPage ? "page" : undefined}
                  onClick={() => changePage(page)}
                  className={`h-10 min-w-10 rounded-lg px-3 text-sm font-bold transition ${
                    page === currentPage
                      ? "bg-dialac-brown text-white"
                      : "border border-dialac-border bg-white text-dialac-charcoal hover:border-dialac-brown hover:text-dialac-brown-dark"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-dialac-border bg-white px-3 py-2 text-sm font-semibold text-dialac-charcoal transition hover:border-dialac-brown hover:text-dialac-brown-dark disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                Siguiente →
              </button>
            </nav>
          )}

          <p className="mt-4 text-center text-sm text-dialac-charcoal">
            Página {currentPage} de {totalPages} · {products.length} productos
          </p>
        </>
      )}
    </section>
  );
}

export default ProductGrid;

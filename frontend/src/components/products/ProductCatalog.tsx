import { useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  productBrands,
  productCategories,
  products,
  type Product,
  type ProductBrand,
  type ProductCategory,
} from "../../data/products";
import ProductCard from "./ProductCard";

type ProductsCatalogProps = {
  searchTerm: string;
  activeCategory: ProductCategory;
  activeBrand: ProductBrand;
  onAddToCart: (product: Product) => void;
};

function ProductsCatalog({
  searchTerm,
  activeCategory,
  activeBrand,
  onAddToCart,
}: ProductsCatalogProps) {
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLocaleLowerCase("es-CO");

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "todos" ||
        product.category === activeCategory;

      const matchesBrand =
        activeBrand === "todas" ||
        product.brand === activeBrand;

      const searchableContent = [
        product.name,
        product.description,
        product.categoryName,
        product.brandName,
      ]
        .join(" ")
        .toLocaleLowerCase("es-CO");

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch);

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [searchTerm, activeCategory, activeBrand]);

  const selectedCategory = productCategories.find(
    (category) => category.id === activeCategory,
  );

  const selectedBrand = productBrands.find(
    (brand) => brand.id === activeBrand,
  );

  const hasActiveFilters =
    activeCategory !== "todos" ||
    activeBrand !== "todas" ||
    searchTerm.trim().length > 0;

  const getCatalogTitle = () => {
    if (
      activeCategory === "todos" &&
      activeBrand === "todas"
    ) {
      return "Todos nuestros productos";
    }

    if (
      activeCategory !== "todos" &&
      activeBrand === "todas"
    ) {
      return selectedCategory?.name ?? "Productos";
    }

    if (
      activeCategory === "todos" &&
      activeBrand !== "todas"
    ) {
      return `Productos ${selectedBrand?.name ?? ""}`;
    }

    return `${selectedCategory?.name ?? "Productos"} ${
      selectedBrand?.name ?? ""
    }`;
  };

  return (
    <section
      id="catalogo-productos"
      className="relative w-full overflow-hidden bg-white px-3 py-14 sm:px-8 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-20 h-56 w-56 rounded-full border-[42px] border-dialac-brown/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        {/* ENCABEZADO DEL CATÁLOGO */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
              Catálogo DIALAC
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
              {getCatalogTitle()}
            </h2>

            {hasActiveFilters && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeCategory !== "todos" && (
                  <span className="rounded-full border border-dialac-brown bg-[#f4e8de] px-3 py-1.5 text-xs font-semibold text-dialac-brown-dark">
                    {selectedCategory?.name}
                  </span>
                )}

                {activeBrand !== "todas" && (
                  <span className="rounded-full border border-dialac-green bg-[#e9eddf] px-3 py-1.5 text-xs font-semibold text-dialac-green-dark">
                    {selectedBrand?.name}
                  </span>
                )}

                {searchTerm.trim().length > 0 && (
                  <span className="max-w-full truncate rounded-full border border-dialac-border bg-[#f7f5f1] px-3 py-1.5 text-xs font-semibold text-dialac-charcoal">
                    Búsqueda: “{searchTerm.trim()}”
                  </span>
                )}
              </div>
            )}
          </div>

          <p
            aria-live="polite"
            className="text-sm font-semibold text-dialac-charcoal"
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "producto"
              : "productos"}
          </p>
        </div>

        {/* PRODUCTOS */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key={`${activeCategory}-${activeBrand}-${searchTerm}`}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 rounded-[2rem] border border-dashed border-dialac-border bg-[#faf8f4] px-6 py-14 text-center sm:px-10 sm:py-20"
          >
            <div
              aria-hidden="true"
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-dialac-border bg-white text-dialac-brown-dark shadow-sm"
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
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
                <path d="M8.5 11h5" />
              </svg>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold text-dialac-charcoal">
              {products.length === 0
                ? "Próximamente agregaremos los productos"
                : "No encontramos productos"}
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-dialac-charcoal">
              {products.length === 0
                ? "El catálogo está preparado para recibir los productos, precios e imágenes de cada marca."
                : "Intenta cambiar la categoría, seleccionar otra marca o utilizar una búsqueda diferente."}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProductsCatalog;
import { useMemo } from "react";
import { motion } from "motion/react";
import {
  productBrands,
  productCategories,
  products,
  type Product,
  type ProductBrand,
  type ProductCategory,
} from "../../data/products";
import ProductGrid from "./ProductGrid";

type ProductsCatalogProps = {
  searchTerm: string;
  activeCategory: ProductCategory;
  activeBrand: ProductBrand;
  onSearchChange: (value: string) => void;
  onAddToCart: (product: Product) => void;
};

function ProductsCatalog({
  searchTerm,
  activeCategory,
  activeBrand,
  onSearchChange,
  onAddToCart,
}: ProductsCatalogProps) {
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLocaleLowerCase("es-CO");

    return products
      .filter((product) => {
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
          product.code ?? "",
        ]
          .join(" ")
          .toLocaleLowerCase("es-CO");

        const matchesSearch =
          normalizedSearch.length === 0 ||
          searchableContent.includes(normalizedSearch);

        return matchesCategory && matchesBrand && matchesSearch;
      })
      .sort((firstProduct, secondProduct) =>
        firstProduct.name.localeCompare(
          secondProduct.name,
          "es-CO",
          {
            sensitivity: "base",
            numeric: true,
          },
        ),
      );
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
    <section id="catalogo-productos" className="min-w-0">
      {/* BUSCADOR */}
      <div className="rounded-2xl border border-dialac-border bg-white p-4 shadow-[0_8px_25px_rgba(38,40,42,0.04)]">
        <label
          htmlFor="product-search"
          className="sr-only"
        >
          Buscar un producto
        </label>

        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dialac-green-dark"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            id="product-search"
            type="search"
            value={searchTerm}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Buscar por nombre, producto o código..."
            className="h-12 w-full rounded-xl border border-dialac-border bg-[#faf9f7] pl-12 pr-4 text-dialac-charcoal outline-none transition placeholder:text-slate-500 focus:border-dialac-brown focus:bg-white focus:ring-4 focus:ring-dialac-brown/10"
          />
        </div>
      </div>

      {/* ENCABEZADO DEL CATÁLOGO */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-dialac-green-dark sm:text-sm">
            Catálogo DIALAC
          </p>

          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
            {getCatalogTitle()}
          </h2>

          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              {activeCategory !== "todos" && (
                <span className="rounded-full border border-dialac-brown bg-[#f4e8de] px-3 py-1 text-xs font-semibold text-dialac-brown-dark">
                  {selectedCategory?.name}
                </span>
              )}

              {activeBrand !== "todas" && (
                <span className="rounded-full border border-dialac-green bg-[#e9eddf] px-3 py-1 text-xs font-semibold text-dialac-green-dark">
                  {selectedBrand?.name}
                </span>
              )}

              {searchTerm.trim().length > 0 && (
                <span className="max-w-full truncate rounded-full border border-dialac-border bg-white px-3 py-1 text-xs font-semibold text-dialac-charcoal">
                  Búsqueda: “{searchTerm.trim()}”
                </span>
              )}
            </div>
          )}
        </div>

        <p
          aria-live="polite"
          className="shrink-0 text-sm font-semibold text-dialac-charcoal"
        >
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "producto"
            : "productos"}
        </p>
      </div>

      {/* PRODUCTOS PAGINADOS */}
      {filteredProducts.length > 0 ? (
        <div className="mt-7">
          <ProductGrid
            products={filteredProducts}
            onAddToCart={onAddToCart}
          />
        </div>
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
          className="mt-7 rounded-2xl border border-dashed border-dialac-border bg-white px-6 py-14 text-center sm:px-10 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-dialac-border bg-[#faf8f4] text-dialac-brown-dark"
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
    </section>
  );
}

export default ProductsCatalog;
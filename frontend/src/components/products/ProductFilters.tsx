import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  productBrands,
  productCategories,
  type ProductBrand,
  type ProductCategory,
} from "../../data/products";

type ProductFiltersProps = {
  activeCategory: ProductCategory;
  activeBrand: ProductBrand;
  onCategoryChange: (category: ProductCategory) => void;
  onBrandChange: (brand: ProductBrand) => void;
};

const categoryColors: Record<ProductCategory, string> = {
  todos: "bg-dialac-charcoal",
  leches: "bg-[#a05a35]",
  yogures: "bg-[#61733d]",
  quesos: "bg-[#98731a]",
  avenas: "bg-[#9b632b]",
  kumis: "bg-[#357176]",
  mantequillas: "bg-[#8a7a18]",
  cremas: "bg-[#84536c]",
  arequipes: "bg-[#9a4f2a]",
  bebidas: "bg-[#356779]",
  compotas: "bg-[#8a4a62]",
  carnicos: "bg-[#80433a]",
  complementos: "bg-[#59606b]",
};

const brandColors: Record<ProductBrand, string> = {
  todas: "bg-dialac-charcoal",
  alpina: "bg-[#31506f]",
  colanta: "bg-dialac-green",
  "dona-leche": "bg-dialac-brown",
};

function ProductFilters({
  activeCategory,
  activeBrand,
  onCategoryChange,
  onBrandChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeFilters =
    Number(activeCategory !== "todos") +
    Number(activeBrand !== "todas");

  const filterContent = (
    <>
      {/* CATEGORÍAS */}
      <fieldset>
        <legend className="font-display text-sm font-bold uppercase tracking-[0.12em] text-dialac-charcoal">
          Categorías
        </legend>

        <div className="mt-4 space-y-1">
          {productCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onCategoryChange(category.id)}
                className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold outline-none transition ${
                  isActive
                    ? "bg-[#f4f0e9] text-dialac-charcoal"
                    : "text-dialac-charcoal hover:bg-[#faf8f4]"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      categoryColors[category.id]
                    }`}
                  />

                  <span className="truncate">{category.name}</span>
                </span>

                {isActive && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-dialac-brown-dark"
                  >
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="my-6 h-px bg-dialac-border" />

      {/* MARCAS */}
      <fieldset>
        <legend className="font-display text-sm font-bold uppercase tracking-[0.12em] text-dialac-charcoal">
          Marcas
        </legend>

        <div className="mt-4 space-y-1">
          {productBrands.map((brand) => {
            const isActive = activeBrand === brand.id;

            return (
              <button
                key={brand.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onBrandChange(brand.id)}
                className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold outline-none transition ${
                  isActive
                    ? "bg-[#f4f0e9] text-dialac-charcoal"
                    : "text-dialac-charcoal hover:bg-[#faf8f4]"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      brandColors[brand.id]
                    }`}
                  />

                  <span className="truncate">{brand.name}</span>
                </span>

                {isActive && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-dialac-brown-dark"
                  >
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* RESTABLECER */}
      {activeFilters > 0 && (
        <button
          type="button"
          onClick={() => {
            onCategoryChange("todos");
            onBrandChange("todas");
          }}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dialac-brown px-4 py-2.5 text-sm font-semibold text-dialac-brown-dark transition hover:bg-dialac-brown hover:text-white"
        >
          Limpiar filtros
        </button>
      )}
    </>
  );

  return (
    <aside className="sticky top-20 z-40 self-start lg:relative lg:top-auto lg:z-20 lg:self-stretch">
      {/* FILTROS RESPONSIVE */}
      <div className="rounded-b-2xl bg-[#f7f5f1] pb-3 lg:hidden">
        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="product-filter-panel"
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-between rounded-xl border border-dialac-border bg-white px-4 py-3 font-semibold text-dialac-charcoal shadow-[0_8px_25px_rgba(38,40,42,0.10)]"
        >
          <span className="flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 6h16" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>

            Filtros
          </span>

          <span className="flex items-center gap-3">
            {activeFilters > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-dialac-brown px-1.5 text-xs font-bold text-white">
                {activeFilters}
              </span>
            )}

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-5 w-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>

        {/* PANEL MÓVIL */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="product-filter-panel"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden"
            >
              <div className="mt-3 max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain rounded-2xl border border-dialac-border bg-white p-5 shadow-[0_12px_35px_rgba(38,40,42,0.12)] [scrollbar-color:#cdb9a8_transparent] [scrollbar-width:thin]">
                {filterContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PANEL ESCRITORIO */}
      <div className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain rounded-2xl border border-dialac-border bg-white p-5 shadow-[0_10px_30px_rgba(38,40,42,0.05)] [scrollbar-color:#cdb9a8_transparent] [scrollbar-width:thin] lg:block">
        <div className="mb-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4e8de] text-dialac-brown-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M4 6h16" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
          </span>

          <div>
            <h2 className="font-display text-lg font-bold text-dialac-charcoal">
              Filtros
            </h2>

            <p className="text-xs text-dialac-charcoal">
              Refina tu búsqueda
            </p>
          </div>
        </div>

        {filterContent}
      </div>
    </aside>
  );
}

export default ProductFilters;
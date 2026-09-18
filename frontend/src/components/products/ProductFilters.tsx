import { motion, useReducedMotion } from "motion/react";
import {
  productBrands,
  productCategories,
  type ProductBrand,
  type ProductCategory,
} from "../../data/products";

type ProductFiltersProps = {
  searchTerm: string;
  activeCategory: ProductCategory;
  activeBrand: ProductBrand;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: ProductCategory) => void;
  onBrandChange: (brand: ProductBrand) => void;
};

const categoryStyles: Record<
  ProductCategory,
  {
    active: string;
    dot: string;
    hover: string;
    focus: string;
  }
> = {
  todos: {
    active: "border-dialac-charcoal bg-dialac-charcoal text-white",
    dot: "bg-dialac-charcoal",
    hover: "hover:border-dialac-charcoal",
    focus: "focus-visible:ring-dialac-charcoal/25",
  },
  leches: {
    active: "border-dialac-brown bg-dialac-brown text-white",
    dot: "bg-dialac-brown",
    hover: "hover:border-dialac-brown",
    focus: "focus-visible:ring-dialac-brown/25",
  },
  yogures: {
    active: "border-dialac-green bg-dialac-green text-white",
    dot: "bg-dialac-green",
    hover: "hover:border-dialac-green",
    focus: "focus-visible:ring-dialac-green/25",
  },
  quesos: {
    active: "border-[#6b5518] bg-[#6b5518] text-white",
    dot: "bg-[#6b5518]",
    hover: "hover:border-[#6b5518]",
    focus: "focus-visible:ring-[#d8c98e]",
  },
};

const brandStyles: Record<
  ProductBrand,
  {
    active: string;
    dot: string;
    hover: string;
    focus: string;
  }
> = {
  todas: {
    active: "border-dialac-charcoal bg-dialac-charcoal text-white",
    dot: "bg-dialac-charcoal",
    hover: "hover:border-dialac-charcoal",
    focus: "focus-visible:ring-dialac-charcoal/25",
  },
  alpina: {
    active: "border-[#31506f] bg-[#31506f] text-white",
    dot: "bg-[#31506f]",
    hover: "hover:border-[#31506f]",
    focus: "focus-visible:ring-[#a9bfd2]",
  },
  colanta: {
    active: "border-dialac-green bg-dialac-green text-white",
    dot: "bg-dialac-green",
    hover: "hover:border-dialac-green",
    focus: "focus-visible:ring-dialac-green/25",
  },
  "dona-leche": {
    active: "border-dialac-brown bg-dialac-brown text-white",
    dot: "bg-dialac-brown",
    hover: "hover:border-dialac-brown",
    focus: "focus-visible:ring-dialac-brown/25",
  },
};

function ProductFilters({
  searchTerm,
  activeCategory,
  activeBrand,
  onSearchChange,
  onCategoryChange,
  onBrandChange,
}: ProductFiltersProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f1] px-5 py-12 sm:px-8 sm:py-16">
      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[48px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-[40%_60%_38%_62%] bg-dialac-green/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        {/* ENCABEZADO Y BUSCADOR */}
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
          className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                Productos DIALAC
              </p>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Encuentra lo que necesitas
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-dialac-charcoal">
              Explora nuestros productos por categoría y marca, y agrega al
              carrito las opciones que prefieras.
            </p>
          </div>

          <div>
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-semibold text-dialac-charcoal"
            >
              Buscar un producto
            </label>

            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dialac-green-dark"
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
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </span>

              <input
                id="product-search"
                type="search"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Ej. Leche, yogur o queso"
                autoComplete="off"
                className="w-full rounded-xl border border-dialac-border bg-white py-3.5 pl-12 pr-4 text-dialac-charcoal outline-none transition placeholder:text-[#64748b] focus:border-dialac-brown focus:ring-4 focus:ring-dialac-brown/15"
              />
            </div>
          </div>
        </motion.div>

        {/* PANEL DE FILTROS */}
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-[0_10px_30px_rgba(38,40,42,0.05)]"
        >
          {/* CATEGORÍAS */}
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:px-5 sm:py-4">
            <div className="flex shrink-0 items-center gap-2 sm:w-28">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f4e8de] text-dialac-brown-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h10" />
                  <path d="M4 18h7" />
                </svg>
              </span>

              <p className="text-sm font-bold text-dialac-charcoal">
                Categorías
              </p>
            </div>

            <div
              aria-label="Filtrar por categoría"
              className="flex flex-wrap gap-2"
            >
              {productCategories.map((category) => {
                const isActive = activeCategory === category.id;
                const styles = categoryStyles[category.id];

                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onCategoryChange(category.id)}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.96,
                          }
                    }
                    className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-4 ${
                      isActive
                        ? styles.active
                        : `border-dialac-border bg-white text-dialac-charcoal ${styles.hover}`
                    } ${styles.focus}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-white" : styles.dot
                      }`}
                    />

                    {category.name}

                    {isActive && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m6 12 4 4 8-8" />
                      </svg>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* MARCAS */}
          <div className="flex flex-col gap-4 border-t border-dialac-border p-4 sm:flex-row sm:items-center sm:px-5 sm:py-4">
            <div className="flex shrink-0 items-center gap-2 sm:w-28">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e9eddf] text-dialac-green-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M20 12 12 20 4 12V4h8l8 8Z" />
                  <circle cx="9" cy="9" r="1" />
                </svg>
              </span>

              <p className="text-sm font-bold text-dialac-charcoal">
                Marcas
              </p>
            </div>

            <div
              aria-label="Filtrar por marca"
              className="flex flex-wrap gap-2"
            >
              {productBrands.map((brand) => {
                const isActive = activeBrand === brand.id;
                const styles = brandStyles[brand.id];

                return (
                  <motion.button
                    key={brand.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onBrandChange(brand.id)}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.96,
                          }
                    }
                    className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-4 ${
                      isActive
                        ? styles.active
                        : `border-dialac-border bg-white text-dialac-charcoal ${styles.hover}`
                    } ${styles.focus}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-white" : styles.dot
                      }`}
                    />

                    {brand.name}

                    {isActive && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m6 12 4 4 8-8" />
                      </svg>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductFilters;
import { motion, useReducedMotion } from "motion/react";

export type ServiceCategory =
  | "todos"
  | "celebraciones"
  | "empresas"
  | "complementos";

type ServicesCategoriesProps = {
  activeCategory: ServiceCategory;
  onCategoryChange: (category: ServiceCategory) => void;
};

const categories: {
  id: ServiceCategory;
  name: string;
  description: string;
  activeStyles: string;
  dotStyles: string;
  focusStyles: string;
}[] = [
  {
    id: "todos",
    name: "Todos",
    description: "Explora todos nuestros servicios.",
    activeStyles: "border-dialac-charcoal bg-dialac-charcoal text-white",
    dotStyles: "bg-dialac-charcoal",
    focusStyles: "focus-visible:ring-dialac-charcoal/25",
  },
  {
    id: "celebraciones",
    name: "Celebraciones",
    description: "Experiencias para momentos especiales.",
    activeStyles: "border-dialac-brown bg-dialac-brown text-white",
    dotStyles: "bg-dialac-brown",
    focusStyles: "focus-visible:ring-dialac-brown/25",
  },
  {
    id: "empresas",
    name: "Empresas",
    description: "Soluciones para equipos y reuniones.",
    activeStyles: "border-dialac-green bg-dialac-green text-white",
    dotStyles: "bg-dialac-green",
    focusStyles: "focus-visible:ring-dialac-green/25",
  },
  {
    id: "complementos",
    name: "Complementos",
    description: "Opciones para completar cada ocasión.",
    activeStyles: "border-[#6b5518] bg-[#6b5518] text-white",
    dotStyles: "bg-[#6b5518]",
    focusStyles: "focus-visible:ring-[#d8c98e]",
  },
];

function ServicesCategories({
  activeCategory,
  onCategoryChange,
}: ServicesCategoriesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f1] px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[48px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-[40%_60%_38%_62%] bg-dialac-green/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-7 lg:grid-cols-[1fr_0.85fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                Servicios DIALAC
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Soluciones para cada ocasión
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-dialac-charcoal">
              Encuentra servicios personalizados para personas, empresas,
              reuniones, celebraciones y eventos.
            </p>
          </div>

          <div className="rounded-2xl border border-dialac-border bg-white p-5 shadow-[0_12px_35px_rgba(38,40,42,0.06)]">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9eddf] text-dialac-green-dark"
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>

              <div className="min-w-0">
                <p className="font-display font-bold text-dialac-charcoal">
                  Solicita con anticipación
                </p>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Los pedidos deben realizarse con mínimo 3 días de
                  anticipación.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          aria-label="Filtrar servicios"
          className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

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
                        y: -3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                className={`relative min-w-0 overflow-hidden rounded-xl border p-4 text-left outline-none transition focus-visible:ring-4 sm:min-h-[88px] sm:px-5 sm:py-4 ${
                  isActive
                    ? category.activeStyles
                    : "border-dialac-border bg-white text-dialac-charcoal hover:border-dialac-brown"
                } ${category.focusStyles}`}
              >
                {!isActive && (
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-1 w-full ${category.dotStyles}`}
                  />
                )}

                <span className="block break-words font-display text-sm font-bold leading-5 sm:text-base">
                  {category.name}
                </span>

                <span
                  className={`mt-1.5 hidden text-xs leading-5 sm:block ${
                    isActive ? "text-white" : "text-dialac-charcoal"
                  }`}
                >
                  {category.description}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesCategories;
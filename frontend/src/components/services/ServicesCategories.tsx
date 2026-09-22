import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import type { ServiceCategory } from "../../data/services";

export type { ServiceCategory } from "../../data/services";

type ServicesCategoriesProps = {
  mode: "mobile" | "desktop";
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
    activeStyles:
      "border-dialac-charcoal bg-dialac-charcoal text-white",
    dotStyles: "bg-dialac-charcoal",
    focusStyles: "focus-visible:ring-dialac-charcoal/25",
  },
  {
    id: "celebraciones",
    name: "Celebraciones",
    description: "Experiencias para momentos especiales.",
    activeStyles:
      "border-dialac-brown bg-dialac-brown text-white",
    dotStyles: "bg-dialac-brown",
    focusStyles: "focus-visible:ring-dialac-brown/25",
  },
  {
    id: "empresas",
    name: "Empresas",
    description: "Soluciones para equipos y reuniones.",
    activeStyles:
      "border-dialac-green bg-dialac-green text-white",
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
  mode,
  activeCategory,
  onCategoryChange,
}: ServicesCategoriesProps) {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory,
  );

  const selectCategory = (category: ServiceCategory) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  const categoryButtons = (
    <div className="space-y-2">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <motion.button
            key={category.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => selectCategory(category.id)}
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.98,
                  }
            }
            className={`group relative flex w-full items-start gap-3 overflow-hidden rounded-xl border px-3 py-3 text-left outline-none transition focus-visible:ring-4 ${
              isActive
                ? category.activeStyles
                : "border-transparent bg-transparent text-dialac-charcoal hover:border-dialac-border hover:bg-[#faf8f4]"
            } ${category.focusStyles}`}
          >
            <span
              aria-hidden="true"
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                isActive ? "bg-white" : category.dotStyles
              }`}
            />

            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-3">
                <span className="block font-display text-sm font-bold">
                  {category.name}
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
                    className="h-4 w-4 shrink-0"
                  >
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                )}
              </span>

              <span
                className={`mt-1 block text-xs leading-5 ${
                  isActive
                    ? "text-white/90"
                    : "text-dialac-charcoal"
                }`}
              >
                {category.description}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );

  if (mode === "mobile") {
  return (
    <aside className="sticky top-[61px] z-40 w-full border-b border-dialac-border bg-[#fffdf9]/95 backdrop-blur-xl lg:hidden">
      {/* BOTÓN RESPONSIVE RECTANGULAR */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="service-category-panel"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between bg-[#fffdf9] px-5 py-3.5 font-semibold text-dialac-charcoal outline-none transition hover:bg-[#faf8f4] focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-dialac-brown/20"
      >
        <span className="flex min-w-0 items-center gap-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0 text-dialac-brown-dark"
          >
            <path d="M4 6h16" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
          </svg>

          <span className="truncate">
            Servicios: {selectedCategory?.name ?? "Todos"}
          </span>
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* PANEL RESPONSIVE */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="service-category-panel"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-dialac-border bg-white"
          >
            <div className="p-3">
              {categoryButtons}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}

  return (
    <aside className="sticky top-28 hidden self-start lg:block">
      {/* PANEL ESCRITORIO */}
      <div className="rounded-2xl border border-dialac-border bg-white p-5 shadow-[0_10px_30px_rgba(38,40,42,0.05)]">
        <div className="mb-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e8de] text-dialac-brown-dark"
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
              <path d="M4 6h16" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
          </span>

          <div className="min-w-0">
            <h2 className="font-display text-lg font-bold text-dialac-charcoal">
              Categorías
            </h2>

            <p className="text-xs text-dialac-charcoal">
              Explora nuestros servicios
            </p>
          </div>
        </div>

        {categoryButtons}

        <div className="mt-6 border-t border-dialac-border pt-5">
          <div className="flex items-start gap-3 rounded-xl bg-[#faf8f4] p-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e9eddf] text-dialac-green-dark"
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>

            <div>
              <p className="font-display text-xs font-bold text-dialac-charcoal">
                Mínimo 3 días
              </p>

              <p className="mt-1 text-[11px] leading-5 text-dialac-charcoal">
                Solicita el servicio con anticipación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ServicesCategories;
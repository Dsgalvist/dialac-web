import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const brandStyles: Record<
  Product["brand"],
  {
    badge: string;
    decoration: string;
    icon: string;
    button: string;
    focus: string;
  }
> = {
  alpina: {
    badge: "bg-[#31506f] text-white",
    decoration: "bg-[#31506f]/10",
    icon: "text-[#31506f]",
    button: "bg-[#31506f] hover:bg-[#243e57]",
    focus: "focus-visible:ring-[#a9bfd2]",
  },
  colanta: {
    badge: "bg-dialac-green text-white",
    decoration: "bg-dialac-green/10",
    icon: "text-dialac-green-dark",
    button: "bg-dialac-green hover:bg-dialac-green-dark",
    focus: "focus-visible:ring-dialac-green/25",
  },
  "dona-leche": {
    badge: "bg-dialac-brown text-white",
    decoration: "bg-dialac-brown/10",
    icon: "text-dialac-brown-dark",
    button: "bg-dialac-brown hover:bg-dialac-brown-dark",
    focus: "focus-visible:ring-dialac-brown/25",
  },
};

function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(product.price);

  const styles = brandStyles[product.brand];
  const showImage = Boolean(product.image) && !imageError;

  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
              scale: 0.98,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={
        reduceMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.96,
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              boxShadow: "0 20px 45px rgba(38, 40, 42, 0.11)",
            }
      }
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex min-h-[390px] min-w-0 flex-col overflow-hidden rounded-2xl border border-dialac-border bg-white shadow-[0_12px_32px_rgba(38,40,42,0.07)] sm:min-h-[490px] sm:rounded-[1.75rem]"
    >
      {/* IMAGEN */}
      <div className="relative h-44 overflow-hidden bg-[#f4f0e9] sm:h-64">
        {showImage ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105 sm:p-6"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              aria-hidden="true"
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full sm:h-44 sm:w-44 ${styles.decoration}`}
            />

            <div
              aria-hidden="true"
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-dialac-border bg-white shadow-md sm:h-20 sm:w-20 ${styles.icon}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 sm:h-9 sm:w-9"
              >
                <path d="M8 3h8l1 4v13H7V7l1-4Z" />
                <path d="M7 8h10" />
                <path d="M10 12h4" />
              </svg>
            </div>

            <span className="absolute bottom-3 px-2 text-center text-[11px] font-semibold text-dialac-charcoal sm:bottom-5 sm:text-sm">
              Imagen próximamente
            </span>
          </div>
        )}

        <span
          className={`absolute left-2 top-2 max-w-[calc(100%-1rem)] rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] shadow-sm sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em] ${styles.badge}`}
        >
          {product.brandName}
        </span>
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-dialac-green-dark sm:text-sm">
          {product.categoryName}
        </p>

        <h2 className="mt-2 break-words font-display text-base font-bold leading-snug text-dialac-charcoal sm:mt-3 sm:text-2xl">
          {product.name}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-5 text-dialac-charcoal sm:mt-4 sm:text-base sm:leading-7">
          {product.description}
        </p>

        <div className="mt-auto pt-5 sm:pt-7">
          <p className="font-display text-lg font-bold text-dialac-charcoal sm:text-2xl">
            {formattedPrice}
          </p>

          <motion.button
            type="button"
            onClick={() => onAddToCart(product)}
            aria-label={`Agregar ${product.name} al carrito por ${formattedPrice}`}
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.96,
                  }
            }
            className={`mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-white outline-none transition focus-visible:ring-4 sm:gap-3 sm:px-5 sm:text-base ${styles.button} ${styles.focus}`}
          >
            <span className="sm:hidden">Agregar</span>

            <span className="hidden sm:inline">
              Agregar al carrito
            </span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
            >
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <path d="M12 9v4" />
              <path d="M10 11h4" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
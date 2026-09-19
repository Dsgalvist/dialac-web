import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
  onView: (service: Service) => void;
  onConsult: (serviceName: string) => void;
};

const categoryStyles: Record<
  Service["category"],
  {
    badge: string;
    decoration: string;
    icon: string;
    button: string;
    focus: string;
  }
> = {
  celebraciones: {
    badge: "bg-dialac-brown text-white",
    decoration: "bg-dialac-brown/10",
    icon: "text-dialac-brown-dark",
    button: "bg-dialac-brown hover:bg-dialac-brown-dark",
    focus: "focus-visible:ring-dialac-brown/25",
  },
  empresas: {
    badge: "bg-dialac-green text-white",
    decoration: "bg-dialac-green/10",
    icon: "text-dialac-green-dark",
    button: "bg-dialac-green hover:bg-dialac-green-dark",
    focus: "focus-visible:ring-dialac-green/25",
  },
  complementos: {
    badge: "bg-[#6b5518] text-white",
    decoration: "bg-[#6b5518]/10",
    icon: "text-[#5d4810]",
    button: "bg-[#6b5518] hover:bg-[#59460f]",
    focus: "focus-visible:ring-[#d8c98e]",
  },
};

function ServiceCard({
  service,
  index,
  onView,
  onConsult,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const styles = categoryStyles[service.category];
  const mainImage = service.images[0];
  const showImage = Boolean(mainImage) && !imageError;

  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 25,
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
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              boxShadow: "0 20px 45px rgba(38,40,42,0.11)",
            }
      }
      className="group flex min-h-[390px] min-w-0 flex-col overflow-hidden rounded-2xl border border-dialac-border bg-[#f4f0e9] shadow-[0_12px_32px_rgba(38,40,42,0.07)] sm:min-h-[470px] sm:rounded-[1.75rem]"
    >
      {/* IMAGEN */}
      <div className="relative h-40 overflow-hidden border-b border-dialac-border bg-white sm:h-60">
        {showImage ? (
          <img
            src={mainImage}
            alt={service.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div
              aria-hidden="true"
              className={`absolute -right-10 -top-10 h-28 w-28 rounded-full sm:-right-12 sm:-top-12 sm:h-40 sm:w-40 ${styles.decoration}`}
            />

            <div
              aria-hidden="true"
              className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-dialac-border bg-white shadow-md sm:h-16 sm:w-16 ${styles.icon}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-7 sm:w-7"
              >
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <circle cx="9" cy="10" r="2" />
                <path d="m21 15-5-5L5 20" />
              </svg>
            </div>

            <span className="absolute bottom-3 px-2 text-center text-[11px] font-semibold text-dialac-charcoal sm:bottom-5 sm:text-sm">
              Imágenes próximamente
            </span>
          </div>
        )}

        <span
          className={`absolute left-2 top-2 max-w-[calc(100%-1rem)] rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] shadow-sm sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em] ${styles.badge}`}
        >
          {service.categoryName}
        </span>

        {service.images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-dialac-charcoal/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {service.images.length} imágenes
          </span>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-1 flex-col bg-[#f4f0e9] p-3.5 sm:p-7">
        <h2 className="break-words font-display text-base font-bold leading-snug text-dialac-charcoal sm:text-2xl">
          {service.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-5 text-dialac-charcoal sm:mt-4 sm:text-base sm:leading-7">
          {service.description}
        </p>

        <div className="mt-auto space-y-3 pt-5 sm:pt-7">
          <motion.button
            type="button"
            onClick={() => onView(service)}
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white outline-none transition focus-visible:ring-4 sm:text-base ${styles.button} ${styles.focus}`}
          >
            Ver servicio

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
              <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </motion.button>

          <button
            type="button"
            onClick={() => onConsult(service.title)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dialac-border bg-white px-4 py-3 text-sm font-semibold text-dialac-charcoal outline-none transition hover:border-dialac-brown hover:text-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/20 sm:text-base"
          >
            Consultar por WhatsApp

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
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
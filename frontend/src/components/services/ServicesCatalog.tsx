import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  services,
  type Service,
  type ServiceCategory,
} from "../../data/services";
import { contactWhatsApp } from "../../services/whatsapp";
import ServiceCard from "./ServiceCard";
import ServiceGallery from "./ServiceGallery";

type ServicesCatalogProps = {
  activeCategory: ServiceCategory;
};

function ServicesCatalog({
  activeCategory,
}: ServicesCatalogProps) {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "todos") {
      return services;
    }

    return services.filter(
      (service) => service.category === activeCategory,
    );
  }, [activeCategory]);

  const handleServiceConsultation = useCallback(
    (serviceName: string) => {
      contactWhatsApp(
        `Hola, me gustaría consultar por el servicio "${serviceName}". ¿Me podrían brindar más información?`,
      );
    },
    [],
  );

  const openService = useCallback((service: Service) => {
    setSelectedService(service);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${service.id}`,
    );
  }, []);

  const closeService = useCallback(() => {
    setSelectedService(null);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }, []);

  useEffect(() => {
    const openServiceFromHash = () => {
      const serviceId = window.location.hash.replace("#", "").trim();

      if (!serviceId) {
        setSelectedService(null);
        return;
      }

      const matchingService = services.find(
        (service) => service.id === serviceId,
      );

      if (matchingService) {
        setSelectedService(matchingService);
      }
    };

    openServiceFromHash();

    window.addEventListener("hashchange", openServiceFromHash);

    return () => {
      window.removeEventListener(
        "hashchange",
        openServiceFromHash,
      );
    };
  }, []);

  const selectedCategoryName = useMemo(() => {
    if (activeCategory === "todos") {
      return "Todos nuestros servicios";
    }

    const matchingService = services.find(
      (service) => service.category === activeCategory,
    );

    return matchingService
      ? `Servicios para ${matchingService.categoryName.toLocaleLowerCase(
          "es-CO",
        )}`
      : "Nuestros servicios";
  }, [activeCategory]);

  return (
    <>
      <section
        id="catalogo-servicios"
        className="min-w-0 scroll-mt-28"
      >
        {/* ENCABEZADO DEL CATÁLOGO */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-dialac-green-dark sm:text-sm">
              Explora DIALAC
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
              {selectedCategoryName}
            </h2>
          </div>

          <p
            aria-live="polite"
            className="shrink-0 text-sm font-semibold text-dialac-charcoal"
          >
            {filteredServices.length}{" "}
            {filteredServices.length === 1
              ? "servicio"
              : "servicios"}
          </p>
        </div>

        {/* CATÁLOGO */}
        {filteredServices.length > 0 ? (
          <motion.div
            layout
            className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onView={openService}
                  onConsult={handleServiceConsultation}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
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
              No encontramos servicios
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-dialac-charcoal">
              Intenta seleccionar una categoría diferente para
              explorar otras alternativas.
            </p>
          </motion.div>
        )}
      </section>

      <ServiceGallery
        service={selectedService}
        onClose={closeService}
        onConsult={handleServiceConsultation}
      />
    </>
  );
}

export default ServicesCatalog;
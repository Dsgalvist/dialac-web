import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { services, type Service, type ServiceCategory } from "../../data/services";
import { contactWhatsApp } from "../../services/whatsapp";
import ServiceCard from "./ServiceCard";
import ServiceGallery from "./ServiceGallery";

type ServicesCatalogProps = {
  activeCategory: ServiceCategory;
};

const catalogPath = "/servicios";
const anchetasPath = "/servicios/anchetas-y-desayunos-sorpresa";
const anchetasId = "anchetas-desayunos";
const anchetasTitle = "Anchetas y desayunos sorpresa en Bogotá y Chía | DIALAC";
const anchetasDescription =
  "Anchetas personalizadas y desayunos sorpresa a domicilio en Bogotá, Chía y Sabana Norte. Explora las opciones de DIALAC y consulta por WhatsApp.";

function readServiceUrl() {
  return {
    pathname: window.location.pathname.replace(/\/$/, ""),
    hash: window.location.hash,
  };
}

function ServicesCatalog({ activeCategory }: ServicesCatalogProps) {
  const location = useLocation();
  const [serviceUrl, setServiceUrl] = useState(readServiceUrl);
  const { pathname, hash } = serviceUrl;
  const isAnchetasRoute = pathname === anchetasPath;
  const isUnknownRoute = pathname !== catalogPath && !isAnchetasRoute;
  const selectedId = isAnchetasRoute
    ? anchetasId
    : pathname === catalogPath
      ? hash.slice(1).trim()
      : "";
  const selectedService = services.find(({ id }) => id === selectedId) ?? null;

  useEffect(() => {
    const syncServiceUrl = () => setServiceUrl(readServiceUrl());
    syncServiceUrl();
    window.addEventListener("hashchange", syncServiceUrl);
    window.addEventListener("popstate", syncServiceUrl);
    return () => {
      window.removeEventListener("hashchange", syncServiceUrl);
      window.removeEventListener("popstate", syncServiceUrl);
    };
  }, [location]);

  useEffect(() => {
    if (!isAnchetasRoute) return;
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = anchetasTitle;
    if (meta) meta.content = anchetasDescription;

    return () => {
      if (document.title === anchetasTitle) document.title = previousTitle;
      if (meta?.content === anchetasDescription && previousDescription !== undefined) {
        meta.content = previousDescription;
      }
    };
  }, [isAnchetasRoute]);

  const filteredServices = useMemo(
    () =>
      activeCategory === "todos"
        ? services
        : services.filter(({ category }) => category === activeCategory),
    [activeCategory],
  );

  const handleServiceConsultation = useCallback((serviceName: string) => {
    contactWhatsApp(
      `Hola, me gustaría consultar por el servicio "${serviceName}". ¿Me podrían brindar más información?`,
    );
  }, []);

  const replaceServiceUrl = useCallback((nextPath: string, nextHash = "") => {
    window.history.replaceState(
      window.history.state,
      "",
      `${nextPath}${window.location.search}${nextHash}`,
    );
    setServiceUrl(readServiceUrl());
  }, []);

  const openService = useCallback((service: Service) => {
    if (service.id === anchetasId) {
      replaceServiceUrl(anchetasPath);
      return;
    }
    replaceServiceUrl(catalogPath, `#${service.id}`);
  }, [replaceServiceUrl]);

  const closeService = useCallback(() => {
    replaceServiceUrl(catalogPath);
  }, [replaceServiceUrl]);

  const selectedCategoryName = useMemo(() => {
    if (activeCategory === "todos") return "Todos nuestros servicios";
    const matchingService = services.find(({ category }) => category === activeCategory);
    return matchingService
      ? `Servicios para ${matchingService.categoryName.toLocaleLowerCase("es-CO")}`
      : "Nuestros servicios";
  }, [activeCategory]);

  if (isUnknownRoute) {
    return (
      <section className="rounded-2xl border border-dialac-border bg-white p-6">
        <h2 className="font-display text-2xl font-bold">Servicio no encontrado</h2>
        <Link className="mt-3 inline-block underline" to={catalogPath}>
          Volver a todos los servicios
        </Link>
      </section>
    );
  }

  return (
    <>
      <section id="catalogo-servicios" className="min-w-0 scroll-mt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-dialac-green-dark sm:text-sm">
              Explora DIALAC
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-dialac-charcoal sm:text-3xl">
              {selectedCategoryName}
            </h2>
          </div>
          <p aria-live="polite" className="shrink-0 text-sm font-semibold text-dialac-charcoal">
            {filteredServices.length}{" "}
            {filteredServices.length === 1 ? "servicio" : "servicios"}
          </p>
        </div>

        {filteredServices.length > 0 ? (
          <motion.div layout className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 rounded-2xl border border-dashed border-dialac-border bg-white px-6 py-14 text-center sm:px-10 sm:py-20"
          >
            <div
              aria-hidden="true"
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-dialac-border bg-[#faf8f4] text-dialac-brown-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
                <path d="M8.5 11h5" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-dialac-charcoal">
              No encontramos servicios
            </h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-dialac-charcoal">
              Intenta seleccionar una categoría diferente para explorar otras alternativas.
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

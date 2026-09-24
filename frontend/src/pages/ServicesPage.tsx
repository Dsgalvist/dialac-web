import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ServicesCatalog from "../components/services/ServicesCatalog";
import ServicesCategories from "../components/services/ServicesCategories";
import type { ServiceCategory } from "../data/services";

function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("todos");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f5f1]">
      {/* FILTRO RESPONSIVE DEBAJO DEL NAVBAR */}
      <ServicesCategories
        mode="mobile"
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* SERVICIOS: ENCABEZADO, CATEGORÍAS Y CATÁLOGO */}
      <section className="relative px-3 pb-10 pt-3 sm:px-8 sm:pb-14 sm:pt-4 lg:pb-16 lg:pt-5">
        {/* DECORACIÓN */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-24 h-72 w-72 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
        />

        <div className="relative mx-auto max-w-[1480px]">
          {/* ENCABEZADO INTEGRADO */}
          <motion.header
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
            className="mb-6 grid gap-5 sm:mb-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(600px,1.15fr)] lg:items-center"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-dialac-brown"
                />

                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                  Servicios DIALAC
                </p>
              </div>

              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
                Soluciones para cada ocasión
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-dialac-charcoal sm:text-lg sm:leading-8">
                Explora nuestros servicios para celebraciones, empresas,
                reuniones y eventos. Cada alternativa puede personalizarse de
                acuerdo con tus necesidades.
              </p>
            </div>

            {/* INFORMACIÓN IMPORTANTE */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* ANTICIPACIÓN */}
              <div className="rounded-2xl border border-dialac-border bg-white p-4 shadow-[0_12px_35px_rgba(38,40,42,0.06)]">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9eddf] text-dialac-green-dark"
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

                  <div className="min-w-0">
                    <p className="font-display font-bold text-dialac-charcoal">
                      Solicita con anticipación
                    </p>

                    <p className="mt-1 text-sm leading-5 text-dialac-charcoal">
                      Los servicios deben solicitarse con mínimo 3 días de
                      anticipación.
                    </p>
                  </div>
                </div>
              </div>

              {/* COBERTURA */}
              <div className="rounded-2xl border border-dialac-border bg-[#f7f2eb] p-4 shadow-[0_12px_35px_rgba(38,40,42,0.06)]">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ead8c5] text-dialac-brown-dark"
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
                      <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                      <circle cx="12" cy="9" r="2" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="font-display font-bold text-dialac-charcoal">
                      Cobertura actual
                    </p>

                    <p className="mt-1 text-sm leading-5 text-dialac-charcoal">
                      Prestamos nuestros servicios en Bogotá & Sabana Norte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* CATEGORÍAS Y CATÁLOGO INTEGRADOS */}
          <div className="grid items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)] xl:gap-8">
            {/* FILTRO EXCLUSIVO DE ESCRITORIO */}
            <ServicesCategories
              mode="desktop"
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <ServicesCatalog activeCategory={activeCategory} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
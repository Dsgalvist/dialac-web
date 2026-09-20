import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import Reveal from "../animations/Reveal";

type CatalogItem = {
  title: string;
  description: string;
  path: string;
  video?: string;
  poster?: string;
  label?: string;
};

const services: CatalogItem[] = [
  {
    title: "Eventos y reuniones",
    description:
      "Soluciones personalizadas para acompañar reuniones, celebraciones y momentos especiales.",
    path: "/servicios#eventos-reuniones",
    video: "",
    poster:
      "/images/servicios/EVENTOS Y REUNIONES 2/4.2.png",
    label: "Servicio destacado",
  },
  {
    title: "Refrigerios",
    description:
      "Opciones prácticas y deliciosas para empresas, instituciones y todo tipo de eventos.",
    path: "/servicios#refrigerios",
    video: "",
    poster: "/images/servicios/REFRIGERIOS2/1,2.png",
  },
  {
    title: "Desayunos personalizados",
    description:
      "Experiencias preparadas especialmente para sorprender y compartir.",
    path: "/servicios#anchetas-desayunos",
    video: "",
    poster:
      "/images/servicios/ANCHETAS Y DESAYUNOS2/1.png",
  },
];

const products: CatalogItem[] = [
  {
    title: "Productos lácteos",
    description:
      "Diferentes marcas, presentaciones y alternativas para cada necesidad.",
    path: "/productos",
    video: "",
    poster: "/images/servicios/BREAK LACTEO/1.png",
  },
  {
    title: "Productos artesanales",
    description:
      "Productos preparados con dedicación, calidad y mucho sabor.",
    path: "/productos",
    video: "",
    poster:
      "/images/servicios/PRODUCTOS ARTESANALES2/ALFAJOR2.png",
  },
  {
    title: "Opciones para compartir",
    description:
      "Alternativas pensadas para disfrutar en familia, reuniones y celebraciones.",
    path: "/productos",
    video: "",
    poster:
      "/images/servicios/TABLA DE QUESOS2/1.2.png",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MediaPlaceholder({
  type,
  featured = false,
}: {
  type: "service" | "product";
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full min-h-52 items-center justify-center overflow-hidden ${
        featured
          ? "bg-gradient-to-br from-[#40372f] via-dialac-charcoal to-[#343832]"
          : "bg-gradient-to-br from-[#f7eee2] via-[#fffaf3] to-[#ead9c8]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-12 -top-12 h-36 w-36 rounded-full border-[25px] ${
          featured ? "border-white/5" : "border-dialac-brown/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`absolute -bottom-12 -left-10 h-32 w-32 rounded-full ${
          featured ? "bg-white/5" : "bg-dialac-green/10"
        }`}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-sm ${
            featured
              ? "bg-white/10 text-white"
              : "bg-white text-dialac-brown"
          }`}
        >
          {type === "service" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M12 3v3" />
              <path d="M5.6 5.6 7.7 7.7" />
              <path d="M3 12h3" />
              <path d="M18 12h3" />
              <path d="m16.3 7.7 2.1-2.1" />
              <path d="M8 15a4 4 0 1 1 8 0v1H8v-1Z" />
              <path d="M6 19h12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
              <path d="M9 12h6" />
            </svg>
          )}
        </div>

        <p
          className={`mt-4 font-display text-sm font-semibold uppercase tracking-[0.16em] ${
            featured ? "text-white" : "text-dialac-charcoal"
          }`}
        >
          Imagen próximamente
        </p>
      </div>
    </div>
  );
}

function CatalogMedia({
  item,
  type,
  featured = false,
}: {
  item: CatalogItem;
  type: "service" | "product";
  featured?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasPoster = Boolean(item.poster) && !imageError;
  const hasVideo = Boolean(item.video);

  useEffect(() => {
    setImageError(false);
  }, [item.poster]);

  useEffect(() => {
    const video = videoRef.current;

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  const canUseHover = () => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
  };

  const startVideo = async () => {
    const video = videoRef.current;

    if (!video || !hasVideo || reduceMotion) {
      return;
    }

    try {
      video.currentTime = 0;
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    if (canUseHover()) {
      void startVideo();
    }
  };

  const handleMouseLeave = () => {
    if (canUseHover()) {
      stopVideo();
    }
  };

  if (!hasPoster) {
    return (
      <MediaPlaceholder
        type={type}
        featured={featured}
      />
    );
  }

  return (
    <div
      role={hasVideo ? "group" : undefined}
      aria-label={
        hasVideo ? `Vista previa de ${item.title}` : undefined
      }
      tabIndex={hasVideo ? 0 : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => void startVideo()}
      onBlur={stopVideo}
      className="relative h-full min-h-52 overflow-hidden bg-[#eee5db] outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown focus-visible:ring-inset"
    >
      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        onError={() => setImageError(true)}
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
          isPlaying
            ? "scale-105 opacity-0"
            : "scale-100 opacity-100 group-hover:scale-105"
        }`}
      />

      {hasVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
            isPlaying
              ? "scale-105 opacity-100"
              : "scale-100 opacity-0"
          }`}
        >
          <source
            src={item.video}
            type="video/mp4"
          />
        </video>
      )}

      {hasVideo && !reduceMotion && (
        <div
          aria-hidden="true"
          className={`absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold shadow-md backdrop-blur-sm transition duration-300 ${
            isPlaying
              ? "bg-dialac-brown text-white"
              : "bg-white/90 text-dialac-charcoal"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isPlaying
                ? "animate-pulse bg-white"
                : "bg-dialac-green"
            }`}
          />

          {isPlaying ? "Reproduciendo" : "Pasa el cursor"}
        </div>
      )}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          featured
            ? "bg-gradient-to-t from-[#211b17]/95 via-[#211b17]/25 to-transparent"
            : "bg-gradient-to-t from-black/35 via-black/5 to-transparent"
        }`}
      />
    </div>
  );
}

function HomeCategories() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6] px-4 py-14 text-dialac-charcoal sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(153,78,43,0.13) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-[18%] -z-10 h-80 w-80 rounded-full border-[56px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-[10%] -z-10 h-96 w-96 rounded-full bg-white/35"
      />

      <div className="mx-auto max-w-[1500px]">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="grid gap-6 border-b border-dialac-brown/25 pb-7 lg:grid-cols-[0.42fr_1.58fr] lg:items-end lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                />

                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-sm">
                  Explora DIALAC
                </p>
              </div>

              <motion.div
                aria-hidden="true"
                className="mt-5 h-px w-32 origin-left bg-dialac-brown"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-dialac-charcoal sm:text-5xl lg:text-[clamp(3rem,4.5vw,4.8rem)]">
                Soluciones para cada momento
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-dialac-charcoal/85 sm:text-lg sm:leading-8">
                Primero encuentra el servicio que necesitas y después selecciona
                los productos que harán parte de tu solicitud.
              </p>
            </div>
          </div>
        </Reveal>

        {/* SERVICIOS */}
        <div className="mt-10 sm:mt-12">
          <Reveal direction="right">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dialac-brown sm:text-sm">
                  01 · Servicios
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold text-dialac-charcoal sm:text-3xl">
                  Comencemos por lo que necesitas
                </h3>
              </div>

              <Link
                to="/servicios"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-dialac-brown/35 bg-white/55 px-5 py-2.5 text-sm font-semibold text-dialac-brown-dark transition hover:border-dialac-brown hover:bg-white"
              >
                Conocer todos los servicios
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 lg:h-[570px] lg:grid-cols-[1.18fr_0.82fr]">
            {/* SERVICIO DESTACADO */}
            <Reveal
              direction="right"
              className="min-h-0"
            >
              <motion.article
                className="group relative h-full min-h-[460px] overflow-hidden rounded-[1.75rem] bg-dialac-charcoal shadow-[0_24px_65px_rgba(64,45,33,0.18)] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-0"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute inset-0">
                  <CatalogMedia
                    item={services[0]}
                    type="service"
                    featured
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-9">
                  {services[0].label && (
                    <span className="inline-flex rounded-full border border-white/40 bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-dialac-brown-dark shadow-lg sm:text-xs">
                      {services[0].label}
                    </span>
                  )}

                  <h4 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {services[0].title}
                  </h4>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                    {services[0].description}
                  </p>

                  <Link
                    to={services[0].path}
                    className="pointer-events-auto group/link mt-5 inline-flex items-center gap-3 rounded-full bg-dialac-brown px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-dialac-brown-dark sm:text-base"
                  >
                    Explorar servicio

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover/link:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>

            {/* SERVICIOS SECUNDARIOS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-5">
              {services.slice(1).map((service, index) => (
                <Reveal
                  key={service.title}
                  direction="left"
                  delay={index * 0.1}
                  className="min-h-0"
                >
                  <motion.article
                    className="group relative h-full min-h-[360px] overflow-hidden rounded-[1.75rem] bg-dialac-charcoal shadow-[0_16px_42px_rgba(64,45,33,0.12)] sm:min-h-[400px] lg:min-h-0"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="absolute inset-0">
                      <CatalogMedia
                        item={service}
                        type="service"
                        featured
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                        Servicio
                      </p>

                      <h4 className="mt-2 font-display text-2xl font-bold leading-tight text-white">
                        {service.title}
                      </h4>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
                        {service.description}
                      </p>

                      <Link
                        to={service.path}
                        className="pointer-events-auto group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        Ver servicio
                        <ArrowIcon />
                      </Link>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTOS */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#e8d8c7] px-5 py-9 shadow-[0_22px_60px_rgba(64,45,33,0.09)] sm:mt-20 sm:px-8 sm:py-11 lg:rounded-[2.5rem] lg:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[42px] border-white/30"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/20"
          />

          <Reveal direction="right">
            <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dialac-brown sm:text-sm">
                  02 · Productos
                </p>

                <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
                  Complementa tu solicitud
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-dialac-charcoal/85">
                  Agrega los productos que necesitas y visualiza el valor de tu
                  solicitud en el carrito.
                </p>
              </div>

              <Link
                to="/productos"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-dialac-brown/35 bg-white/70 px-5 py-2.5 text-sm font-semibold text-dialac-brown-dark transition hover:border-dialac-brown hover:bg-white"
              >
                Explorar todos los productos
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="relative mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.article
                  className="group relative h-[420px] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_14px_38px_rgba(64,45,33,0.10)] sm:h-[450px]"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                          boxShadow:
                            "0 24px 55px rgba(64,45,33,0.17)",
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="absolute inset-0">
                    <CatalogMedia
                      item={product}
                      type="product"
                      featured
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 text-white">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                      Producto
                    </p>

                    <h4 className="mt-2 font-display text-2xl font-bold leading-tight text-white">
                      {product.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-white/90 sm:text-base">
                      {product.description}
                    </p>

                    <Link
                      to={product.path}
                      className="pointer-events-auto group/link mt-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-dialac-brown-dark shadow-lg transition hover:bg-white"
                    >
                      Explorar productos
                      <ArrowIcon />
                    </Link>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
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
    path: "/servicios",
    video: "",
    poster: "",
    label: "Servicio destacado",
  },
  {
    title: "Refrigerios",
    description:
      "Opciones prácticas y deliciosas para empresas, instituciones y todo tipo de eventos.",
    path: "/servicios",
    video: "",
    poster: "",
  },
  {
    title: "Desayunos personalizados",
    description:
      "Experiencias preparadas especialmente para sorprender y compartir.",
    path: "/servicios",
    video: "",
    poster: "",
  },
];

const products: CatalogItem[] = [
  {
    title: "Productos lácteos",
    description:
      "Diferentes marcas, presentaciones y alternativas para cada necesidad.",
    path: "/productos",
    video: "",
    poster: "",
  },
  {
    title: "Productos artesanales",
    description:
      "Productos preparados con dedicación, calidad y mucho sabor.",
    path: "/productos",
    video: "",
    poster: "",
  },
  {
    title: "Opciones para compartir",
    description:
      "Alternativas pensadas para disfrutar en familia, reuniones y celebraciones.",
    path: "/productos",
    video: "",
    poster: "",
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
          Video próximamente
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

  const hasMedia = Boolean(item.video && item.poster);

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

    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  };

  const startVideo = async () => {
    const video = videoRef.current;

    if (!video || !hasMedia || reduceMotion) {
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

  if (!hasMedia) {
    return (
      <MediaPlaceholder
        type={type}
        featured={featured}
      />
    );
  }

  return (
    <div
      role="group"
      aria-label={`Vista previa de ${item.title}`}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => void startVideo()}
      onBlur={stopVideo}
      className="relative h-full min-h-52 overflow-hidden bg-dialac-charcoal outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown focus-visible:ring-inset"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
          isPlaying ? "scale-105 opacity-100" : "scale-100 opacity-0"
        }`}
      >
        <source
          src={item.video}
          type="video/mp4"
        />
      </video>

      <img
        src={item.poster}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
          isPlaying ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {!reduceMotion && (
        <div
          aria-hidden="true"
          className={`absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold shadow-md backdrop-blur-sm transition duration-300 ${
            isPlaying
              ? "bg-dialac-brown text-white"
              : "bg-white/95 text-dialac-charcoal"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isPlaying ? "animate-pulse bg-white" : "bg-dialac-green"
            }`}
          />

          {isPlaying ? "Reproduciendo" : "Pasa el cursor"}
        </div>
      )}

      {reduceMotion && (
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-dialac-charcoal shadow-md">
          Vista previa
        </div>
      )}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          featured
            ? "bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            : "bg-gradient-to-t from-black/20 via-transparent to-transparent"
        }`}
      />
    </div>
  );
}

function HomeCategories() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-36 top-32 -z-10 h-80 w-80 rounded-full bg-dialac-cream"
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 bottom-20 -z-10 h-96 w-96 rounded-full border-[60px] border-dialac-green/5"
      />

      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-dialac-green"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-green-dark">
                Explora DIALAC
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-5xl">
              Soluciones para cada momento
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dialac-charcoal">
              Primero encuentra el servicio que necesitas y después selecciona
              los productos que harán parte de tu solicitud.
            </p>
          </div>
        </Reveal>

        {/* SERVICIOS */}
        <div className="mt-16">
          <Reveal direction="right">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-dialac-brown">
                  01 · Servicios
                </p>

                <h3 className="mt-2 font-display text-3xl font-bold text-dialac-charcoal">
                  Comencemos por lo que necesitas
                </h3>
              </div>

              <Link
                to="/servicios"
                className="group inline-flex w-fit items-center gap-2 font-semibold text-dialac-brown-dark underline-offset-4 transition hover:underline"
              >
                Conocer todos los servicios
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* SERVICIO DESTACADO */}
            <Reveal direction="right">
              <motion.article
                className="group relative h-full min-h-[490px] overflow-hidden rounded-[2rem] bg-dialac-charcoal shadow-lg"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
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

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-7 text-white sm:p-9">
                  {services[0].label && (
                    <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-dialac-brown-dark">
                      {services[0].label}
                    </span>
                  )}

                  <h4 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                    {services[0].title}
                  </h4>

                  <p className="mt-3 max-w-xl leading-7 text-white">
                    {services[0].description}
                  </p>

                  <Link
                    to={services[0].path}
                    className="pointer-events-auto group/link mt-6 inline-flex items-center gap-3 rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
                  >
                    Explorar servicio

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            </Reveal>

            {/* SERVICIOS SECUNDARIOS */}
            <div className="grid gap-6">
              {services.slice(1).map((service, index) => (
                <Reveal
                  key={service.title}
                  direction="left"
                  delay={index * 0.1}
                >
                  <motion.article
                    className="group grid min-h-[232px] overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-sm sm:grid-cols-[0.9fr_1.1fr]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            boxShadow: "0 18px 45px rgba(38, 40, 42, 0.12)",
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CatalogMedia
                      item={service}
                      type="service"
                    />

                    <div className="flex flex-col justify-center p-6">
                      <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-dialac-green-dark">
                        Servicio
                      </span>

                      <h4 className="mt-3 font-display text-2xl font-bold text-dialac-charcoal">
                        {service.title}
                      </h4>

                      <p className="mt-3 leading-7 text-dialac-charcoal">
                        {service.description}
                      </p>

                      <Link
                        to={service.path}
                        className="group/link mt-5 inline-flex w-fit items-center gap-2 font-semibold text-dialac-brown-dark"
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
                          className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTOS */}
        <div className="mt-24 rounded-[2.5rem] bg-dialac-cream px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <Reveal direction="right">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-dialac-green-dark">
                  02 · Productos
                </p>

                <h3 className="mt-2 font-display text-3xl font-bold text-dialac-charcoal">
                  Complementa tu solicitud
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-dialac-charcoal">
                  Agrega los productos que necesitas y visualiza el valor de tu
                  solicitud en el carrito.
                </p>
              </div>

              <Link
                to="/productos"
                className="group inline-flex w-fit items-center gap-2 font-semibold text-dialac-brown-dark underline-offset-4 transition hover:underline"
              >
                Explorar todos los productos
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.article
                  className="group h-full overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                          boxShadow: "0 20px 50px rgba(38, 40, 42, 0.12)",
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <CatalogMedia
                      item={product}
                      type="product"
                    />
                  </div>

                  <div className="p-6">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-dialac-green-dark">
                      Producto
                    </p>

                    <h4 className="mt-3 font-display text-2xl font-bold text-dialac-charcoal">
                      {product.title}
                    </h4>

                    <p className="mt-3 leading-7 text-dialac-charcoal">
                      {product.description}
                    </p>

                    <Link
                      to={product.path}
                      className="group/link mt-6 inline-flex items-center gap-2 font-semibold text-dialac-brown-dark"
                    >
                      Explorar productos

                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 transition-transform group-hover/link:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
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
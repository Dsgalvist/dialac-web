import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { useGuidedTour } from "../tour/GuidedTourContext";

const footerNavigation = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Productos", path: "/productos" },
  { name: "Servicios", path: "/servicios" },
  { name: "Contacto", path: "/contacto" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/acosdie/",
    icon: (
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
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/dialacteos/photos",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M13.5 22v-8h2.8l.42-3.27H13.5V8.64c0-.95.26-1.59 1.62-1.59h1.73V4.13A23 23 0 0 0 14.33 4C11.84 4 10.14 5.52 10.14 8.31v2.42H7.33V14h2.81v8h3.36Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/dialac/",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 12.97c0-3.17-1.69-4.64-3.95-4.64a3.42 3.42 0 0 0-3.1 1.71V8.5H10V19h3.39v-5.2c0-1.37.26-2.69 1.96-2.69 1.68 0 1.7 1.57 1.7 2.78V19h3.39v-6.03Z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const columnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Footer() {
  const { startTour } = useGuidedTour();
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const emailSubject =
    "Solicitud de información desde el sitio web - DIALAC";

  const emailBody = `Hola, equipo de DIALAC:

Me comunico desde su sitio web y quisiera recibir información sobre sus productos y servicios.

Nombre:
Número de contacto:
Producto o servicio de interés:
Mensaje:

Gracias.`;

  const emailUrl = `mailto:Acosdie@gmail.com?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappMessage =
    "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios. ¿Me podrían ayudar?";

  const whatsappUrl = `https://wa.me/573163552643?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      className="relative overflow-hidden border-t border-[#4a3b32] bg-[#2f2b28] text-[#f8f3ea]"
    >
      {/* ACENTO SUPERIOR */}
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 h-1 w-full origin-left bg-gradient-to-r from-dialac-brown via-[#d5b99f] to-dialac-brown"
      />

      {/* DECORACIÓN */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full border-[38px] border-[#f5efe6]/[0.035]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 10, 0],
                y: [0, -12, 0],
              }
        }
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-[42%_58%_55%_45%] bg-dialac-brown/[0.08]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -10, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 13,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] top-0 hidden font-display text-[15rem] font-bold leading-none text-white/[0.018] lg:block"
      >
        D
      </div>

      <motion.div
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-8 px-4 py-9 sm:gap-x-10 sm:gap-y-10 sm:px-6 sm:py-12 lg:grid-cols-[1.2fr_0.65fr_0.95fr_1.2fr] lg:gap-10 lg:py-14"
      >
        {/* MARCA Y REDES */}
        <motion.div
          variants={columnVariants}
          className="col-span-2 min-w-0 lg:col-span-1"
        >
          <div className="flex items-start justify-between gap-5 lg:block">
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      rotate: -0.5,
                      scale: 1.015,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex shrink-0"
            >
              <Link
                to="/"
                aria-label="Ir al inicio de DIALAC"
                className="inline-flex rounded-2xl border border-white/10 bg-[#f5efe6] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5efe6]"
              >
                <img
                  src="/images/LOGO/logotransparente.png"
                  alt="DIALAC - Cuídate, aliméntate y disfruta"
                  className="h-11 w-auto object-contain sm:h-13"
                />
              </Link>
            </motion.div>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#eee4da] sm:text-base sm:leading-7">
            Alimentos, refrigerios y soluciones personalizadas para cuidarte,
            alimentarte y disfrutar cada momento.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#d5b99f]">
              Síguenos
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#d5b99f]/50"
            />

            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar ${social.name} de DIALAC`}
                  title={social.name}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.6,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.08,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          rotate: index % 2 === 0 ? -5 : 5,
                          scale: 1.08,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.92,
                        }
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[#f8f3ea] transition-colors duration-300 hover:border-dialac-brown hover:bg-dialac-brown hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NAVEGACIÓN */}
        <motion.div
          variants={columnVariants}
          className="min-w-0"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-dialac-brown"
            />

            <h2 className="font-display text-lg font-bold text-white">
              Navegación
            </h2>
          </div>

          <nav
            aria-label="Navegación del pie de página"
            className="mt-4"
          >
            <ul className="space-y-2.5">
              {footerNavigation.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -12,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: reduceMotion ? 0 : 0.2 + index * 0.06,
                  }}
                >
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 rounded text-sm text-[#eee4da] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-[#d5b99f] transition-all duration-300 group-hover:w-4"
                    />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={startTour}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-[#eee4da] transition hover:border-dialac-brown hover:bg-dialac-brown hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.7-2.3 2-2.3 3.5" />
              <path d="M12 17h.01" />
            </svg>

            Ver guía de solicitud
          </button>
        </motion.div>

        {/* CONTACTO */}
        <motion.div
          variants={columnVariants}
          className="min-w-0"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-dialac-brown"
            />

            <h2 className="font-display text-lg font-bold text-white">
              Contacto
            </h2>
          </div>

          <address className="mt-4 space-y-4 not-italic">
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d5b99f]">
                Dirección
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm leading-6 text-[#eee4da] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                Calle 6 #2B-45
                <br />
                Chía, Cundinamarca
              </a>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d5b99f]">
                WhatsApp
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm text-[#eee4da] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-[#d5b99f]"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                </svg>

                +57 316 355 2643
              </a>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d5b99f]">
                Correo
              </p>

              <a
                href={emailUrl}
                className="mt-1 inline-flex max-w-full items-center gap-2 text-sm text-[#eee4da] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-[#d5b99f]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <span className="min-w-0 break-all">
                  Acosdie@gmail.com
                </span>
              </a>
            </motion.div>
          </address>
        </motion.div>

        {/* HORARIOS Y SOLICITUD */}
        <motion.div
          variants={columnVariants}
          className="col-span-2 min-w-0 lg:col-span-1"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-dialac-brown"
            />

            <h2 className="font-display text-lg font-bold text-white">
              Horarios de atención
            </h2>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex justify-between gap-3 border-b border-white/10 pb-2 text-sm">
              <span className="font-semibold text-[#f8f3ea]">
                Lunes a viernes
              </span>

              <span className="text-right text-[#d9cec4]">
                8:00 a. m. – 6:00 p. m.
              </span>
            </div>

            <div className="flex justify-between gap-3 border-b border-white/10 pb-2 text-sm">
              <span className="font-semibold text-[#f8f3ea]">
                Sábado
              </span>

              <span className="text-right text-[#d9cec4]">
                8:00 a. m. – 1:00 p. m.
              </span>
            </div>
          </div>

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    borderColor: "rgba(213, 185, 159, 0.55)",
                  }
            }
            transition={{ duration: 0.25 }}
            className="relative mt-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.045] p-4"
          >
            <div
              aria-hidden="true"
              className="absolute -right-7 -top-7 h-20 w-20 rounded-full border-[15px] border-dialac-brown/10"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#d5b99f]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.45, 1],
                          opacity: [1, 0.55, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display text-sm font-bold text-white">
                  Solicitudes disponibles 24/7
                </p>
              </div>

              <p className="mt-2 text-sm leading-5 text-[#eee4da]">
                Puedes enviar tu solicitud a cualquier hora. Te contactaremos
                dentro de nuestros horarios de atención.
              </p>

              <p className="mt-2 text-sm font-semibold leading-5 text-[#d5b99f]">
                Recuerda realizar tu pedido con mínimo 3 días de anticipación.
              </p>
            </div>
          </motion.div>

          <motion.div
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
            className="inline-flex"
          >
            <Link
              to="/productos"
              className="group mt-4 inline-flex items-center gap-3 rounded-xl bg-dialac-brown px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-dialac-brown-dark hover:shadow-[0_14px_30px_rgba(0,0,0,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            >
              Explorar productos

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CRÉDITOS */}
      <div className="relative z-10 border-t border-white/10 bg-[#252220]">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
          }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-[#d9cec4] sm:flex-row sm:px-6 sm:text-left sm:text-sm"
        >
          <p>© {currentYear} DIALAC. Todos los derechos reservados.</p>

          <motion.a
            href="https://portfolio-next-tan-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="group rounded transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Diseñado y desarrollado por{" "}
            <span className="font-semibold text-[#f8f3ea] underline-offset-4 group-hover:underline">
              Diego Galvis
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

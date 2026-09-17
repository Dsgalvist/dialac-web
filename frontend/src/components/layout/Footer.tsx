import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

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
      staggerChildren: 0.13,
    },
  },
};

const columnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const emailSubject = "Solicitud de información desde el sitio web - DIALAC";

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
      className="relative overflow-hidden border-t border-white/10 bg-[#343832] text-[#F8F3EA]"
    >
      {/* Línea superior animada */}
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 1.1,
          ease: "easeOut",
        }}
        className="absolute left-0 top-0 h-1 w-full origin-left bg-dialac-brown"
      />

      {/* Formas decorativas */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full border-[35px] border-white/5"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-[42%] bg-dialac-green opacity-20"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -12, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.7fr_1fr_1.15fr]"
      >
        {/* MARCA Y REDES */}
        <motion.div variants={columnVariants}>
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -4,
                    rotate: -1,
                    scale: 1.02,
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="inline-flex"
          >
            <Link
              to="/"
              aria-label="Ir al inicio de DIALAC"
              className="inline-flex rounded-xl bg-[#F3EBE0] px-4 py-3 shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <img
                src="/images/LOGO/logocompleto.png"
                alt="DIALAC - Cuídate, aliméntate y disfruta"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </motion.div>

          <p className="mt-5 max-w-sm leading-7 text-[#F8F3EA]">
            Alimentos, refrigerios y soluciones personalizadas para cuidarte,
            alimentarte y disfrutar cada momento.
          </p>

          <div className="mt-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#F2C9AB]">
              Síguenos
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
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
                          scale: 0.5,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : 0.3 + index * 0.1,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          rotate: index % 2 === 0 ? -6 : 6,
                          scale: 1.08,
                      }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D6C2B0] text-[#F8F3EA] transition-colors hover:border-dialac-brown hover:bg-dialac-brown hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NAVEGACIÓN */}
        <motion.div variants={columnVariants}>
          <h2 className="font-display text-lg font-bold text-white">
            Navegación
          </h2>

          <nav
            aria-label="Navegación del pie de página"
            className="mt-5"
          >
            <ul className="space-y-3">
              {footerNavigation.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.07,
                  }}
                >
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 rounded text-[#F8F3EA] transition hover:text-[#F2C9AB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block w-0 overflow-hidden text-[#F2C9AB] opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100"
                    >
                      →
                    </span>

                    <span className="underline-offset-4 group-hover:underline">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* CONTACTO */}
        <motion.div variants={columnVariants}>
          <h2 className="font-display text-lg font-bold text-white">
            Contacto
          </h2>

          <address className="mt-5 space-y-5 not-italic">
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-[#F2C9AB]">
                Dirección
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block leading-6 text-[#F8F3EA] transition hover:text-[#F2C9AB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Calle 6 #2B-45
                <br />
                Chía, Cundinamarca
              </a>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-[#F2C9AB]">
                WhatsApp
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-[#F8F3EA] transition hover:text-[#F2C9AB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                </svg>

                +57 316 355 2643
              </a>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-[#F2C9AB]">
                Correo
              </p>

              <a
                href={emailUrl}
                className="mt-1 inline-flex items-center gap-2 break-all text-[#F8F3EA] transition hover:text-[#F2C9AB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                Acosdie@gmail.com
              </a>
            </motion.div>
          </address>
        </motion.div>

        {/* HORARIOS Y SOLICITUD */}
        <motion.div variants={columnVariants}>
          <h2 className="font-display text-lg font-bold text-white">
            Horarios de atención
          </h2>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between gap-4">
              <span className="font-semibold text-[#F8F3EA]">
                Lunes a viernes
              </span>

              <span className="text-right text-[#F8F3EA]">
                8:00 a. m. – 6:00 p. m.
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-semibold text-[#F8F3EA]">
                Sábado
              </span>

              <span className="text-right text-[#F8F3EA]">
                8:00 a. m. – 1:00 p. m.
              </span>
            </div>
          </div>

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -4,
                    borderColor: "rgba(242, 201, 171, 0.65)",
                  }
            }
            transition={{ duration: 0.25 }}
            className="relative mt-6 overflow-hidden rounded-xl border border-white/25 bg-white/5 p-4"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-dialac-brown opacity-20"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.2, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <motion.span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#F2C9AB]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.6, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <p className="font-display font-bold text-white">
                  Solicitudes disponibles 24/7
                </p>
              </div>

              <p className="mt-2 text-sm leading-6 text-[#F8F3EA]">
                Puedes enviar tu solicitud a cualquier hora. Te contactaremos
                dentro de nuestros horarios de atención.
              </p>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#F2C9AB]">
                Recuerda realizar tu pedido con mínimo 3 días de anticipación.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="inline-flex"
          >
            <Link
              to="/productos"
              className="group mt-5 inline-flex items-center gap-3 rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
      <div className="relative z-10 border-t border-white/15 bg-[#292C28]">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
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
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-sm text-white sm:flex-row sm:text-left"
        >
          <p>© {currentYear} DIALAC. Todos los derechos reservados.</p>

          <motion.a
            href="https://portfolio-next-tan-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="group rounded text-white underline-offset-4 transition hover:text-[#F2C9AB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Diseñado y desarrollado por{" "}
            <span className="font-semibold group-hover:underline">
              Diego Galvis
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
import { motion, useReducedMotion } from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";

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

function ContactInfo() {
  const reduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  return (
    <motion.section
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -30,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-[#ead8c5] p-6 shadow-[0_20px_50px_rgba(75,52,39,0.1)] sm:p-8 lg:p-9"
    >
      {/* TEXTURA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-[36px] border-white/20"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-[38%_62%_46%_54%] bg-white/15"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 10, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-3 font-display text-[7rem] font-bold leading-none text-white/20 sm:text-[9rem]"
      >
        01
      </span>

      <div className="relative flex h-full flex-col">
        {/* ENCABEZADO */}
        <div>
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-dialac-brown text-white shadow-[0_10px_25px_rgba(122,63,37,0.22)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 4, 0, -4, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A8 8 0 1 1 21 15Z" />
                <path d="M8 11h8" />
                <path d="M8 15h5" />
              </svg>
            </motion.span>

            <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-dialac-brown-dark sm:text-xs">
              Atención personalizada
            </p>
          </div>

          <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-dialac-charcoal sm:text-4xl">
            ¿Cómo podemos ayudarte?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-dialac-charcoal">
            Cuéntanos qué necesitas y te ayudaremos a encontrar una opción
            adecuada para tu ocasión.
          </p>
        </div>

        {/* OPCIONES DE ATENCIÓN */}
        <div className="relative mt-7">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[21px] top-5 w-px bg-dialac-brown/25"
          />

          <div className="space-y-3">
            {/* PEDIDOS Y COTIZACIONES */}
            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -18,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.45,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 5,
                    }
              }
              className="group relative grid grid-cols-[44px_1fr] items-start gap-3 rounded-2xl border border-white/65 bg-white/70 p-4 shadow-[0_8px_22px_rgba(75,52,39,0.06)] backdrop-blur-sm"
            >
              <div
                aria-hidden="true"
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-dialac-brown text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
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
                  <path d="M3 6h18v12H3z" />
                  <path d="m3 8 9 6 9-6" />
                </svg>
              </div>

              <div className="pt-0.5">
                <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
                  Pedidos y cotizaciones
                </h3>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Solicita información sobre productos, cantidades y precios.
                </p>
              </div>
            </motion.article>

            {/* EMPRESAS Y EVENTOS */}
            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -18,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.45,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 5,
                    }
              }
              className="group relative grid grid-cols-[44px_1fr] items-start gap-3 rounded-2xl border border-white/65 bg-white/70 p-4 shadow-[0_8px_22px_rgba(75,52,39,0.06)] backdrop-blur-sm"
            >
              <div
                aria-hidden="true"
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd8968] text-white transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <div className="pt-0.5">
                <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
                  Empresas y eventos
                </h3>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Encuentra refrigerios y soluciones personalizadas para
                  reuniones y eventos.
                </p>
              </div>
            </motion.article>

            {/* ATENCIÓN CERCANA */}
            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -18,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.45,
                delay: 0.19,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 5,
                    }
              }
              className="group relative grid grid-cols-[44px_1fr] items-start gap-3 rounded-2xl border border-white/65 bg-white/70 p-4 shadow-[0_8px_22px_rgba(75,52,39,0.06)] backdrop-blur-sm"
            >
              <div
                aria-hidden="true"
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-dialac-brown-dark text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
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
                  <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
                </svg>
              </div>

              <div className="pt-0.5">
                <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
                  Atención cercana
                </h3>

                <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                  Recibe orientación de acuerdo con tus gustos y necesidades.
                </p>
              </div>
            </motion.article>
          </div>
        </div>

        {/* WHATSAPP */}
        <motion.button
          type="button"
          onClick={handleWhatsApp}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -3,
                  scale: 1.01,
                }
          }
          whileTap={
            reduceMotion
              ? undefined
              : {
                  scale: 0.98,
                }
          }
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(122,63,37,0.22)] outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
        >
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

          Hablar por WhatsApp
        </motion.button>

        {/* REDES SOCIALES */}
        <div className="mt-auto pt-8">
          <div className="border-t border-dialac-brown/20 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
                Encuéntranos en redes
              </h3>

              <div className="flex flex-wrap gap-2.5">
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
                            scale: 0.8,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            rotate: 4,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.92,
                          }
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-dialac-brown/30 bg-white/75 text-dialac-brown-dark shadow-sm outline-none transition hover:border-dialac-brown hover:bg-dialac-brown hover:text-white focus-visible:ring-4 focus-visible:ring-dialac-brown/25"
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactInfo;
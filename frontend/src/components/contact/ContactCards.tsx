import { motion, useReducedMotion } from "motion/react";
import { contactWhatsApp } from "../../services/whatsapp";

const cardStyles =
  "group relative flex min-h-[245px] flex-col overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white px-6 py-8 shadow-[0_12px_35px_rgba(38,40,42,0.06)]";

const linkStyles =
  "group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 font-semibold text-dialac-charcoal outline-none transition hover:text-dialac-brown-dark focus-visible:rounded focus-visible:ring-4 focus-visible:ring-dialac-brown/25";

const iconStyles =
  "flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110";

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
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ContactCards() {
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

  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  const cardAnimation = {
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 28,
        },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.3,
    },
  };

  const cardHover = reduceMotion
    ? undefined
    : {
        y: -8,
        boxShadow: "0 22px 50px rgba(38, 40, 42, 0.11)",
      };

  return (
    <section
      aria-label="Datos de contacto"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16"
    >
      {/* FORMAS DECORATIVAS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full border-[24px] border-dialac-brown/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-[40%_60%_35%_65%] bg-dialac-green/5"
      />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {/* DIRECCIÓN */}
          <motion.article
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={cardHover}
            className={cardStyles}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-brown"
            />

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-dialac-brown/5"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div
                className={`${iconStyles} bg-[#f4e8de] text-dialac-brown-dark`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </div>

              <span className="font-display text-sm font-bold text-dialac-brown-dark">
                01
              </span>
            </div>

            <h2 className="relative mt-7 font-display text-2xl font-bold text-dialac-charcoal">
              Dirección
            </h2>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
              target="_blank"
              rel="noreferrer"
              className={linkStyles}
            >
              <span>
                Calle 6 #2B-45
                <br />
                Chía, Cundinamarca
              </span>

              <ArrowIcon />
            </a>
          </motion.article>

          {/* CORREO */}
          <motion.article
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={cardHover}
            className={cardStyles}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-green"
            />

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-dialac-green/5"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div
                className={`${iconStyles} bg-[#e9eddf] text-dialac-green-dark`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <span className="font-display text-sm font-bold text-dialac-green-dark">
                02
              </span>
            </div>

            <h2 className="relative mt-7 font-display text-2xl font-bold text-dialac-charcoal">
              Correo
            </h2>

            <a href={emailUrl} className={`${linkStyles} break-all`}>
              <span>Acosdie@gmail.com</span>
              <ArrowIcon />
            </a>
          </motion.article>

          {/* TELÉFONO */}
          <motion.article
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={cardHover}
            className={cardStyles}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-brown"
            />

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-dialac-brown/5"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div
                className={`${iconStyles} bg-[#f4e8de] text-dialac-brown-dark`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
                </svg>
              </div>

              <span className="font-display text-sm font-bold text-dialac-brown-dark">
                03
              </span>
            </div>

            <h2 className="relative mt-7 font-display text-2xl font-bold text-dialac-charcoal">
              Teléfono
            </h2>

            <a href="tel:+573163552643" className={linkStyles}>
              <span>+57 316 355 2643</span>
              <ArrowIcon />
            </a>
          </motion.article>

          {/* WHATSAPP */}
          <motion.article
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={cardHover}
            className={cardStyles}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1.5 w-full bg-dialac-green"
            />

            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-dialac-green/5"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div
                className={`${iconStyles} bg-[#e9eddf] text-dialac-green-dark`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                </svg>
              </div>

              <span className="font-display text-sm font-bold text-dialac-green-dark">
                04
              </span>
            </div>

            <h2 className="relative mt-7 font-display text-2xl font-bold text-dialac-charcoal">
              WhatsApp
            </h2>

            <button
              type="button"
              onClick={handleWhatsApp}
              className={`${linkStyles} cursor-pointer`}
            >
              <span>316 355 2643</span>
              <ArrowIcon />
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default ContactCards;
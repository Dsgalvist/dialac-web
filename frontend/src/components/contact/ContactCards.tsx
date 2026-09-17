import { contactWhatsApp } from "../../services/whatsapp";

const iconContainer =
  "flex h-12 w-12 items-center justify-center rounded-full bg-dialac-green text-white xl:h-16 xl:w-16";

const cardStyles =
  "flex min-h-[190px] flex-col items-center justify-center rounded-xl border border-dialac-border bg-white p-4 text-center xl:min-h-[240px] xl:p-6";

const linkStyles =
  "mt-2 text-sm leading-5 text-dialac-charcoal transition hover:text-dialac-brown xl:mt-3 xl:text-base";

function ContactCards() {
  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios.",
    );
  };

  return (
    <section
      aria-label="Datos de contacto"
      className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4"
    >
      <article className={cardStyles}>
        <div className={iconContainer}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <path d="M12 21s6-5.3 6-12a6 6 0 1 0-12 0c0 6.7 6 12 6 12Z" />
            <circle cx="12" cy="9" r="2" />
          </svg>
        </div>

        <h2 className="mt-4 font-display text-lg font-semibold text-dialac-charcoal xl:mt-5 xl:text-2xl">
          Dirección
        </h2>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
          target="_blank"
          rel="noreferrer"
          className={linkStyles}
        >
          Calle 6 #2B-45
          <br />
          Chía, Cundinamarca
        </a>
      </article>

      <article className={cardStyles}>
        <div className={iconContainer}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <h2 className="mt-4 font-display text-lg font-semibold text-dialac-charcoal xl:mt-5 xl:text-2xl">
          Correo
        </h2>

        <a
          href="mailto:Acosdie@gmail.com?subject=Solicitud%20de%20información%20-%20DIALAC"
          className={`${linkStyles} break-all`}
        >
          Acosdie@gmail.com
        </a>
      </article>

      <article className={cardStyles}>
        <div className={iconContainer}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
          </svg>
        </div>

        <h2 className="mt-4 font-display text-lg font-semibold text-dialac-charcoal xl:mt-5 xl:text-2xl">
          Teléfono
        </h2>

        <a href="tel:+573163552643" className={linkStyles}>
          +57 316 355 2643
        </a>
      </article>

      <article className={cardStyles}>
        <div className={iconContainer}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 xl:h-8 xl:w-8"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
          </svg>
        </div>

        <h2 className="mt-4 font-display text-lg font-semibold text-dialac-charcoal xl:mt-5 xl:text-2xl">
          WhatsApp
        </h2>

        <button
          type="button"
          onClick={handleWhatsApp}
          className={linkStyles}
        >
          316 355 2643
        </button>
      </article>
    </section>
  );
}

export default ContactCards;
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
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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
        className="h-6 w-6"
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
        className="h-6 w-6"
      >
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 12.97c0-3.17-1.69-4.64-3.95-4.64a3.42 3.42 0 0 0-3.1 1.71V8.5H10V19h3.39v-5.2c0-1.37.26-2.69 1.96-2.69 1.68 0 1.7 1.57 1.7 2.78V19h3.39v-6.03Z" />
      </svg>
    ),
  },
];

function ContactInfo() {
  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me gustaría recibir atención personalizada de DIALAC.",
    );
  };

  return (
    <section className="h-full rounded-xl border border-dialac-border bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
        Atención personalizada
      </p>

      <h2 className="mt-2 font-display text-2xl font-bold text-dialac-charcoal">
        ¿Cómo podemos ayudarte?
      </h2>

      <p className="mt-3 leading-7 text-dialac-charcoal">
        Cuéntanos qué necesitas y te ayudaremos a encontrar una opción adecuada
        para tu ocasión.
      </p>

      <div className="mt-8 space-y-6">
        <div className="border-l-2 border-dialac-brown pl-4">
          <h3 className="font-display font-semibold text-dialac-charcoal">
            Pedidos y cotizaciones
          </h3>

          <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
            Solicita información sobre productos, cantidades y precios.
          </p>
        </div>

        <div className="border-l-2 border-dialac-brown pl-4">
          <h3 className="font-display font-semibold text-dialac-charcoal">
            Empresas y eventos
          </h3>

          <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
            Encuentra refrigerios y soluciones personalizadas para reuniones y
            eventos.
          </p>
        </div>

        <div className="border-l-2 border-dialac-brown pl-4">
          <h3 className="font-display font-semibold text-dialac-charcoal">
            Atención cercana
          </h3>

          <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
            Recibe orientación de acuerdo con tus gustos y necesidades.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleWhatsApp}
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
      >
        Hablar por WhatsApp
      </button>

      <div className="mt-10 border-t border-dialac-border pt-6">
        <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
          Encuéntranos en redes
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar ${social.name} de DIALAC`}
              title={social.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dialac-green text-dialac-green-dark transition hover:bg-dialac-green hover:text-white"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
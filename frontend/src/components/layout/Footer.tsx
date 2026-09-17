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

function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="border-t border-white/10 bg-[#343832] text-[#F8F3EA]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.7fr_1fr_1.15fr]">
        {/* MARCA Y REDES */}
        <div>
          <Link
            to="/"
            aria-label="Ir al inicio de DIALAC"
            className="inline-flex rounded-xl bg-[#F3EBE0] px-4 py-3 transition hover:bg-white"
          >
            <img
              src="/images/LOGO/logocompleto.png"
              alt="DIALAC - Cuídate, aliméntate y disfruta"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-[#F8F3EA]">
            Alimentos, refrigerios y soluciones personalizadas para cuidarte,
            alimentarte y disfrutar cada momento.
          </p>

          <div className="mt-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#F2C9AB]">
              Síguenos
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar ${social.name} de DIALAC`}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D6C2B0] text-[#F8F3EA] transition hover:border-dialac-brown hover:bg-dialac-brown hover:text-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h2 className="font-display text-lg font-bold text-white">
            Navegación
          </h2>

          <nav
            aria-label="Navegación del pie de página"
            className="mt-5"
          >
            <ul className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="rounded text-[#F8F3EA] underline-offset-4 transition hover:text-[#F2C9AB] hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CONTACTO */}
        <div>
          <h2 className="font-display text-lg font-bold text-white">
            Contacto
          </h2>

          <address className="mt-5 space-y-5 not-italic">
            <div>
              <p className="text-sm font-semibold text-[#F2C9AB]">
                Dirección
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block leading-6 text-[#F8F3EA] transition hover:text-[#F2C9AB]"
              >
                Calle 6 #2B-45
                <br />
                Chía, Cundinamarca
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#F2C9AB]">
                WhatsApp
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-[#F8F3EA] transition hover:text-[#F2C9AB]"
              >
                +57 316 355 2643
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#F2C9AB]">
                Correo
              </p>

              <a
                href={emailUrl}
                className="mt-1 block break-all text-[#F8F3EA] transition hover:text-[#F2C9AB]"
              >
                Acosdie@gmail.com
              </a>
            </div>
          </address>
        </div>

        {/* HORARIOS Y SOLICITUD */}
        <div>
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

          <div className="mt-6 rounded-xl border border-white/25 bg-white/5 p-4">
            <p className="font-display font-bold text-white">
              Solicitudes disponibles 24/7
            </p>

            <p className="mt-2 text-sm leading-6 text-[#F8F3EA]">
              Puedes enviar tu solicitud a cualquier hora. Te contactaremos
              dentro de nuestros horarios de atención.
            </p>

            <p className="mt-3 text-sm font-semibold leading-6 text-[#F2C9AB]">
              Recuerda realizar tu pedido con mínimo 3 días de anticipación.
            </p>
          </div>

          <Link
            to="/productos"
            className="mt-5 inline-flex rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
          >
            Explorar productos
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15 bg-[#292C28]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-sm text-white sm:flex-row sm:text-left">
          <p>© {currentYear} DIALAC. Todos los derechos reservados.</p>

          <a
            href="https://portfolio-next-tan-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded text-white underline-offset-4 transition hover:text-[#F2C9AB] hover:underline"
          >
            Diseñado y desarrollado por Diego Galvis
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";

const footerNavigation = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Productos", path: "/productos" },
  { name: "Servicios", path: "/servicios" },
  { name: "Contacto", path: "/contacto" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dialac-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Link
            to="/"
            aria-label="Ir al inicio de DIALAC"
            className="inline-block rounded-lg bg-white p-2"
          >
            <img
              src="/images/LOGO/logotransparente.png"
              alt="DIALAC - Cuídate, aliméntate y disfruta"
              className="h-16 w-40 object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-white">
            Productos seleccionados para cuidarte, alimentarte y disfrutar
            cada momento.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">
            Navegación
          </h2>

          <nav aria-label="Navegación del pie de página">
            <ul className="mt-5 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="rounded text-white underline-offset-4 transition hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">
            Haz tu solicitud
          </h2>

          <p className="mt-5 leading-7 text-white">
            Selecciona tus productos, revisa el valor total y genera tu
            solicitud en PDF.
          </p>

          <Link
            to="/productos"
            className="mt-6 inline-flex rounded-lg bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
          >
            Explorar productos
          </Link>
        </div>
      </div>

      <div className="border-t border-white/30">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-white">
          © {currentYear} DIALAC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const navigation = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Productos", path: "/productos" },
  { name: "Contacto", path: "/contacto" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  const formattedTotal = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-2 font-medium transition ${
      isActive
        ? "bg-dialac-green text-white"
        : "text-dialac-charcoal hover:bg-dialac-cream"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-dialac-border bg-white">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"
      >
        <NavLink to="/" aria-label="Ir al inicio de DIALAC">
          <img
            src="/images/LOGO/logotransparente.png"
            alt="DIALAC - Cuídate, aliméntate y disfruta"
            className="h-14 w-36 object-contain"
          />
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkStyles}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/solicitud"
            aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
            className="relative ml-3 inline-flex items-center gap-3 rounded-lg bg-dialac-brown px-5 py-2.5 font-semibold text-white transition hover:bg-dialac-brown-dark"
          >
            <span>{formattedTotal}</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex min-h-6 min-w-6 items-center justify-center rounded-full bg-dialac-green px-1.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg border border-dialac-charcoal p-2 text-dialac-charcoal md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-dialac-border bg-white px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkStyles}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/solicitud"
              aria-label={`Ir al carrito. Total ${formattedTotal}. ${totalItems} productos.`}
              onClick={() => setIsOpen(false)}
              className="relative mt-2 flex items-center justify-center gap-3 rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white"
            >
              <span>{formattedTotal}</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex min-h-6 min-w-6 items-center justify-center rounded-full bg-dialac-green px-1.5 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
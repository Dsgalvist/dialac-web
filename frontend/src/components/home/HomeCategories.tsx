import { Link } from "react-router-dom";

function HomeCategories() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-dialac-brown">
            EXPLORA DIALAC
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-dialac-charcoal">
            ¿Qué estás buscando?
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-dialac-border bg-dialac-cream p-8">
            <span className="font-display text-sm font-semibold text-dialac-brown">
              01
            </span>

            <h3 className="mt-5 font-display text-2xl font-bold text-dialac-charcoal">
              Productos
            </h3>

            <p className="mt-4 leading-7 text-dialac-charcoal">
              Consulta el catálogo, selecciona cantidades y agrega productos
              a tu carrito.
            </p>

            <Link
              to="/productos"
              className="mt-7 inline-flex rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
            >
              Ir al catálogo
            </Link>
          </article>

          <article className="rounded-3xl border border-dialac-border bg-white p-8">
            <span className="font-display text-sm font-semibold text-dialac-green">
              02
            </span>

            <h3 className="mt-5 font-display text-2xl font-bold text-dialac-charcoal">
              Servicios
            </h3>

            <p className="mt-4 leading-7 text-dialac-charcoal">
              Conoce las soluciones personalizadas que DIALAC ofrece para
              diferentes ocasiones.
            </p>

            <Link
              to="/servicios"
              className="mt-7 inline-flex rounded-lg bg-dialac-green px-5 py-3 font-semibold text-white transition hover:bg-dialac-green-dark"
            >
              Conocer servicios
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
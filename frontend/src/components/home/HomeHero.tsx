import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="bg-dialac-cream px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-dialac-green">
            CUÍDATE · ALIMÉNTATE · DISFRUTA
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-dialac-charcoal sm:text-6xl">
            Todo lo que necesitas en una sola solicitud
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-dialac-charcoal">
            Explora productos lácteos, opciones artesanales y servicios
            personalizados. Selecciona lo que necesitas y genera fácilmente
            tu solicitud.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/productos"
              className="rounded-lg bg-dialac-brown px-6 py-3 text-center font-semibold text-white transition hover:bg-dialac-brown-dark"
            >
              Explorar productos
            </Link>

            <Link
              to="/servicios"
              className="rounded-lg border-2 border-dialac-green px-6 py-3 text-center font-semibold text-dialac-green transition hover:bg-dialac-green hover:text-white"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <aside
          aria-label="Opciones disponibles en DIALAC"
          className="rounded-3xl bg-dialac-charcoal p-6 shadow-xl sm:p-8"
        >
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-white">
            ENCUENTRA EN DIALAC
          </p>

          <ul className="mt-6 space-y-4">
            <li className="rounded-2xl bg-white p-5">
              <p className="font-display text-lg font-semibold text-dialac-charcoal">
                Productos lácteos
              </p>
              <p className="mt-2 text-dialac-charcoal">
                Diferentes marcas, presentaciones y alternativas.
              </p>
            </li>

            <li className="rounded-2xl bg-dialac-cream p-5">
              <p className="font-display text-lg font-semibold text-dialac-charcoal">
                Productos artesanales
              </p>
              <p className="mt-2 text-dialac-charcoal">
                Opciones preparadas para disfrutar y compartir.
              </p>
            </li>

            <li className="rounded-2xl bg-dialac-green p-5 text-white">
              <p className="font-display text-lg font-semibold">
                Servicios personalizados
              </p>
              <p className="mt-2">
                Soluciones para momentos cotidianos y especiales.
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default HomeHero;
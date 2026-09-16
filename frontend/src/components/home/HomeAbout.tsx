import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <section className="bg-dialac-green px-6 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.15em]">
            SOBRE DIALAC
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold">
            Una empresa familiar desde 2009
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8">
            En DIALAC creamos experiencias alrededor del buen sabor,
            manteniendo nuestra esencia familiar, el compromiso con la
            calidad y una atención cercana para cada uno de nuestros
            clientes.
          </p>

          <p className="mt-5 leading-7">
            Ofrecemos alimentos, refrigerios, desayunos, productos
            artesanales y soluciones personalizadas para diferentes gustos,
            necesidades y ocasiones.
          </p>

          <Link
            to="/nosotros"
            className="mt-7 inline-flex rounded-lg border-2 border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-dialac-green"
          >
            Conoce nuestra historia
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
import { Link } from "react-router-dom";

function HomeCta() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-dialac-charcoal px-7 py-12 text-center text-white sm:px-12">
        <h2 className="font-display text-4xl font-bold">
          Comienza tu solicitud
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
          Explora el catálogo, selecciona los productos y revisa
          automáticamente el valor de tu solicitud.
        </p>

        <Link
          to="/productos"
          className="mt-8 inline-flex rounded-lg bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}

export default HomeCta;
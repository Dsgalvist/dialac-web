function AboutStory() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-dialac-brown">
            NUESTRA ESENCIA
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-dialac-charcoal">
            Quiénes somos
          </h2>

          <p className="mt-6 text-lg leading-8 text-dialac-charcoal">
            DIALAC es una empresa familiar dedicada a crear experiencias
            alrededor del buen sabor por medio de alimentos, productos y
            soluciones para diferentes momentos y ocasiones.
          </p>
        </div>

        <article className="rounded-3xl bg-dialac-cream p-8 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-dialac-charcoal">
            Nuestra propuesta
          </h3>

          <p className="mt-5 leading-8 text-dialac-charcoal">
            Ofrecemos alimentos, refrigerios, desayunos, productos
            artesanales y soluciones para eventos y reuniones. Nuestra
            propuesta busca adaptarse a diferentes gustos y necesidades,
            tanto para el día a día como para momentos especiales.
          </p>

          <div
            aria-label="Clientes de DIALAC"
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="rounded-full border-2 border-dialac-green px-4 py-2 font-semibold text-dialac-green">
              Personas
            </span>

            <span className="rounded-full border-2 border-dialac-green px-4 py-2 font-semibold text-dialac-green">
              Empresas
            </span>

            <span className="rounded-full border-2 border-dialac-green px-4 py-2 font-semibold text-dialac-green">
              Eventos y reuniones
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutStory;
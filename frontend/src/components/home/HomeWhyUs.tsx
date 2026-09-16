const reasons = [
  {
    number: "01",
    title: "Experiencia familiar",
    description:
      "Desde 2009 trabajamos manteniendo nuestra esencia familiar, dedicación y atención cercana.",
  },
  {
    number: "02",
    title: "Calidad y frescura",
    description:
      "Seleccionamos productos frescos y de calidad para diferentes gustos, necesidades y ocasiones.",
  },
  {
    number: "03",
    title: "Atención personalizada",
    description:
      "Escuchamos las necesidades de cada cliente para ofrecer alternativas para personas, empresas y eventos.",
  },
  {
    number: "04",
    title: "Compromiso responsable",
    description:
      "Promovemos el bienestar e incorporamos prácticas responsables, como el uso de empaques biodegradables.",
  },
];

function HomeWhyUs() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-dialac-brown p-8 text-white sm:p-10">
            <p className="font-display text-sm font-semibold tracking-[0.15em]">
              POR QUÉ ELEGIRNOS
            </p>

            <h2 className="mt-5 font-display text-4xl font-bold">
              Cercanía, calidad y dedicación en cada experiencia
            </h2>

            <p className="mt-6 text-lg leading-8">
              En DIALAC combinamos nuestra experiencia familiar con una
              atención personalizada para acompañar momentos cotidianos,
              reuniones y eventos.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-3xl border border-dialac-border bg-dialac-cream p-7 transition hover:border-dialac-brown"
              >
                <span className="font-display text-sm font-bold text-dialac-brown">
                  {reason.number}
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold text-dialac-charcoal">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-dialac-charcoal">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhyUs;
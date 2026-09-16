const commitments = [
  {
    number: "01",
    title: "Calidad",
    description:
      "Seleccionamos productos frescos y alternativas que respondan a las necesidades de nuestros clientes.",
  },
  {
    number: "02",
    title: "Cercanía",
    description:
      "Brindamos una atención amable, personalizada y con la esencia de una empresa familiar.",
  },
  {
    number: "03",
    title: "Bienestar",
    description:
      "Promovemos experiencias que inviten a cuidarse, alimentarse y disfrutar.",
  },
  {
    number: "04",
    title: "Responsabilidad ambiental",
    description:
      "Incorporamos prácticas responsables, incluyendo el uso de empaques biodegradables.",
  },
];

function AboutCommitments() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-dialac-brown">
            NUESTRO COMPROMISO
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-dialac-charcoal">
            La esencia que guía nuestro trabajo
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment) => (
            <article
              key={commitment.number}
              className="rounded-3xl border border-dialac-border bg-dialac-cream p-7"
            >
              <span className="font-display text-sm font-bold text-dialac-brown">
                {commitment.number}
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold text-dialac-charcoal">
                {commitment.title}
              </h3>

              <p className="mt-4 leading-7 text-dialac-charcoal">
                {commitment.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-dialac-charcoal px-7 py-10 text-center text-white">
          <p className="font-display text-2xl font-bold">
            Cuídate • Aliméntate • Disfruta
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-7">
            Acompañamos pequeños y grandes momentos con la esencia que nos
            representa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCommitments;
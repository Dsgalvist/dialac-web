const steps = [
  {
    number: "01",
    title: "Explora",
    description:
      "Consulta los productos disponibles y encuentra las opciones que necesitas.",
  },
  {
    number: "02",
    title: "Selecciona",
    description:
      "Agrega productos, define cantidades y revisa automáticamente el valor.",
  },
  {
    number: "03",
    title: "Genera tu solicitud",
    description:
      "Completa tus datos y genera el documento con el resumen de tu pedido.",
  },
];

function HomeProcess() {
  return (
    <section className="bg-dialac-cream px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-dialac-brown">
            PROCESO SENCILLO
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-dialac-charcoal">
            ¿Cómo funciona?
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-dialac-border bg-white p-7"
            >
              <span className="font-display text-sm font-bold text-dialac-brown">
                {step.number}
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold text-dialac-charcoal">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-dialac-charcoal">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;
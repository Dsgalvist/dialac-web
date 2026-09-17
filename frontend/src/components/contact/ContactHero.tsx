import { contactWhatsApp } from "../../services/whatsapp";

function ContactHero() {
  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me gustaría recibir información sobre los productos y servicios de DIALAC.",
    );
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-dialac-border bg-white">
      <div className="grid md:grid-cols-2">
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-dialac-green p-10 md:min-h-[400px]">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/30"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-white/30"
          />

          <div className="relative rounded-full bg-white p-5 shadow-xl">
            <img
              src="/images/LOGO/LOGO-CIRCULAR.jpg"
              alt="Logo de DIALAC"
              className="h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52"
            />
          </div>
        </div>

        <div className="flex items-center px-6 py-10 md:px-10 lg:px-12">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
              Atención personalizada
            </p>

            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-dialac-charcoal md:text-4xl">
              ¿Necesitas información o una cotización?
            </h1>

            <div className="mt-4 h-1 w-12 bg-dialac-brown" />

            <p className="mt-4 leading-7 text-dialac-charcoal">
              Estamos listos para ayudarte a encontrar productos, refrigerios
              y soluciones adecuadas para personas, empresas y eventos.
            </p>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
            >
              Contáctanos por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
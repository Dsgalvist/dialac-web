import BusinessHours from "../components/contact/BusinessHours";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";

function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <ContactHero />

      {/* DATOS DE CONTACTO */}
      <ContactCards />

      {/* HORARIOS */}
      <BusinessHours />

      {/* INFORMACIÓN Y FORMULARIO */}
      <section className="relative isolate w-full overflow-hidden border-y border-dialac-border bg-white px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        {/* TEXTURA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7a3f25 1px, transparent 1px)",
            backgroundSize: "23px 23px",
          }}
        />

        {/* ELEMENTOS DECORATIVOS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 -z-10 h-48 w-48 rounded-full border-[34px] border-dialac-brown/[0.045]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-[3%] -z-10 h-52 w-52 rounded-[38%_62%_46%_54%] bg-dialac-brown/[0.035]"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* ENCABEZADO */}
          <div className="mb-7 grid items-end gap-5 border-b border-dialac-border pb-6 sm:mb-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
                />

                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark sm:text-xs">
                  Estamos para ayudarte
                </p>
              </div>

              <div className="mt-4 h-px w-16 bg-dialac-brown/45" />
            </div>

            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-dialac-charcoal sm:text-4xl lg:text-[2.75rem]">
              Cuéntanos cómo podemos acompañarte
            </h2>
          </div>

          {/* INFORMACIÓN Y FORMULARIO */}
          <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <LocationMap />
    </main>
  );
}

export default ContactPage;
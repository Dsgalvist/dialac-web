import BusinessHours from "../components/contact/BusinessHours";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";

function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO A PANTALLA COMPLETA */}
      <ContactHero />

      {/* DATOS DE CONTACTO */}
      <ContactCards />

      {/* HORARIOS */}
      <BusinessHours />

      {/* INFORMACIÓN Y FORMULARIO */}
      <section className="relative w-full border-y border-dialac-border bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-10 h-24 w-24 rounded-full border-[18px] border-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-[5%] h-20 w-20 rounded-[35%_65%_40%_60%] bg-dialac-green/5"
        />

        <div className="relative mx-auto max-w-[1480px]">
          <div className="mb-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-dialac-brown"
              />

              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-dialac-brown-dark">
                Estamos para ayudarte
              </p>
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
              Cuéntanos cómo podemos acompañarte
            </h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
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
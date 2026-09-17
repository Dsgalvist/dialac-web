import BusinessHours from "../components/contact/BusinessHours";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";

function ContactPage() {
  return (
    <main className="bg-dialac-cream">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:py-16">
        <ContactHero />

        <ContactCards />
        <BusinessHours />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        <LocationMap />
      </div>
    </main>
  );
}

export default ContactPage;
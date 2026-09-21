import { contactWhatsApp } from "../../services/whatsapp";

export default function WhatsAppFloating() {
  const handleWhatsApp = () => {
    contactWhatsApp(
      "Hola, me comunico desde la página web de DIALAC y me gustaría recibir información sobre sus productos y servicios. ¿Me podrían ayudar?",
    );
  };

  return (
    <button
      type="button"
      onClick={handleWhatsApp}
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-dialac-brown text-white shadow-[0_12px_30px_rgba(139,78,47,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30 focus-visible:ring-offset-2 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </button>
  );
}

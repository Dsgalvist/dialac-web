const DIALAC_WHATSAPP_NUMBER = "573163552643";

export function contactWhatsApp(message: string) {
  const url = `https://wa.me/${DIALAC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

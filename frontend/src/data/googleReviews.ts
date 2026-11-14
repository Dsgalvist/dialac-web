export type GoogleReview = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  publishedAt?: string;
  avatar?: string;
  reply?: string;
  replyIsExcerpt?: boolean;
};

// Orden de Google: de la más reciente a la más antigua.
// Agrega las nuevas arriba, aunque solo tengas una fecha relativa.
export const googleReviews: readonly GoogleReview[] = [
  {
    id: "christian",
    author: "christian gonzalez",
    rating: 5,
    text: "Excelente servicio, los productos que manejan son de alta calidad... Super recomendados",
    reply:
      "Nuestro compromiso va de la mano con las necesidades de nuestros clientes 😊",
    avatar: "christian.png",
  },
  {
    id: "gestionar-proyectos",
    author: "GESTIONAR PROYECTOS EU EU",
    rating: 4,
    text: "buenos precios, entregas a tiempo!!!",
    reply:
      "Ayudar a la economía y nuestro cumplimiento hacen parte de nuestros pilares!",
    avatar: "gestionar-proyectos.png",
  },
  {
    id: "antoine",
    author: "Antoine Eudoro Acosta Castillo",
    rating: 5,
    text: "He realizado varios pedidos con ellos y son cumplidos. Los productos los entregan con buena fecha de vencimiento y manejan marcas conocidas. Los recomiendo al 100%",
    reply:
      "En la variedad, y entregas de productos reconocidos dan fe de nuestra calidad 💪",
    avatar: "antoine.png",
  },
  {
    id: "sebastian",
    author: "Sebastian Rodriguez",
    rating: 5,
    text: "Excelentes productos y precios.",
    avatar: "sebastian.png",
  },
  {
    id: "andres-david",
    author: "Andres David Ariza Moreno",
    rating: 5,
    text: "Espectaculares los productos y la atención, ahora tengo mi nevera llena solo de Dialac",
    avatar: "andres-david.png",
  },
  {
    id: "cv-medical",
    author: "C&V MEDICAL GROUP",
    rating: 5,
    text: "Gracias por su buen servicio. Lo recomiendo 100%",
    avatar: "cv-medical.png",
  },
  {
    id: "olga",
    author: "olga lucia gutierrez mejia",
    rating: 5,
    text: "Excelentes precios 💗💗💗",
    avatar: "olga.png",
    reply: "Vamos acorde a las necesidades de nuestros clientes.",
  },
  {
    id: "juan-david",
    author: "JUAN DAVID HERNANDEZ",
    rating: 5,
    text: "El día de hoy con mis compañeros en la empresa les compramos unos yogures sabor guanábana y me hicieron recordar a mi infancias , súper recomendados ✌🏻",
    avatar: "juan-david.png",
    reply:
      "Los buenos recuerdos forman parte de nuestro amor por complacer los antojos de nuestros…",
    replyIsExcerpt: true,
  },
  {
    id: "juan-camilo",
    author: "Juan Camilo Gutiérrez",
    rating: 5,
    text: "Excelente, productos frescos y a un muy buen precio",
    reply:
      "¡¡Complacer y ayudar a la economía hacen parte de nuestra responsabilidad con nuestros clientes!",
  },
  {
    id: "lucia",
    author: "LUCIA MEDINA",
    rating: 5,
    text: "",
    avatar: "lucia.png",
    reply:
      "Calificaciones cómo está hacen que nuestro trabajo por complacer a los clientes valga la pena 😊",
  },
];

export function getLatestGoogleReviews(
  reviews: readonly GoogleReview[],
): GoogleReview[] {
  const seen = new Set<string>();
  const latest: GoogleReview[] = [];

  for (const review of reviews) {
    if (seen.has(review.id)) continue;
    seen.add(review.id);
    latest.push(review);
    if (latest.length === 10) break;
  }

  return latest;
}

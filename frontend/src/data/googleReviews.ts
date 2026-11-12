export type GoogleReview = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  publishedAt?: string;
  avatar?: string;
};

// Agrega las nuevas reseñas arriba. Si tienes la fecha exacta, usa YYYY-MM-DD.
// Conserva el orden de Google para las reseñas que solo tienen fechas relativas.
export const googleReviews: readonly GoogleReview[] = [
  {
    id: "olga",
    author: "olga lucia gutierrez mejia",
    rating: 5,
    text: "Excelentes precios 💗💗💗",
    avatar: "olga.png",
  },
  {
    id: "juan-david",
    author: "JUAN DAVID HERNANDEZ",
    rating: 5,
    text: "El día de hoy con mis compañeros en la empresa les compramos unos yogures sabor guanábana y me hicieron recordar a mi infancias , súper recomendados ✌🏻 …",
    avatar: "juan-david.png",
  },
  {
    id: "diego",
    author: "diego galvis",
    rating: 5,
    text: "excelente servicio lo recomiendo",
    avatar: "diego.png",
  },
  {
    id: "juan-camilo",
    author: "Juan Camilo Gutiérrez",
    rating: 5,
    text: "Excelente, productos frescos y a un muy buen precio",
  },
  {
    id: "lucia",
    author: "LUCIA MEDINA",
    rating: 5,
    text: "",
    avatar: "lucia.png",
  },
  {
    id: "johan",
    author: "Johan Nicolás Rodríguez Castañeda",
    rating: 5,
    text: "",
  },
  { id: "sara", author: "Sara Acosta Gutierrez", rating: 5, text: "" },
  {
    id: "raul",
    author: "Raul Fabian Rincon Castro",
    rating: 5,
    text: "",
    avatar: "raul.png",
  },
  {
    id: "mauricio",
    author: "Mauricio Agudelo",
    rating: 1,
    text: "",
    avatar: "mauricio.png",
  },
  {
    id: "carolina",
    author: "Carolina Poulain",
    rating: 3,
    text: "",
    avatar: "carolina.png",
  },
  {
    id: "luz-marina",
    author: "luz Marina Villamil Arevalo",
    rating: 3,
    text: "",
    avatar: "luz-marina.png",
  },
];

export function getLatestGoogleReviews(
  reviews: readonly GoogleReview[],
): GoogleReview[] {
  const sorted = [...reviews].sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""),
  );
  const seen = new Set<string>();
  const latest: GoogleReview[] = [];

  for (const review of sorted) {
    if (seen.has(review.id)) continue;
    seen.add(review.id);
    latest.push(review);
    if (latest.length === 10) break;
  }

  return latest;
}

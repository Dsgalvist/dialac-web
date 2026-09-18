export type ProductCategory = "todos" | "leches" | "yogures" | "quesos";

export type ProductBrand = "todas" | "alpina" | "colanta" | "dona-leche";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Exclude<ProductCategory, "todos">;
  categoryName: string;
  brand: Exclude<ProductBrand, "todas">;
  brandName: string;
  price: number;
  image: string;
};

export const productCategories: {
  id: ProductCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "todos",
    name: "Todos",
    description: "Explora el catálogo completo.",
  },
  {
    id: "leches",
    name: "Leches",
    description: "Encuentra todas las presentaciones de leche.",
  },
  {
    id: "yogures",
    name: "Yogures",
    description: "Opciones para diferentes gustos.",
  },
  {
    id: "quesos",
    name: "Quesos",
    description: "Variedades para disfrutar y compartir.",
  },
];

export const productBrands: {
  id: ProductBrand;
  name: string;
}[] = [
  {
    id: "todas",
    name: "Todas las marcas",
  },
  {
    id: "alpina",
    name: "Alpina",
  },
  {
    id: "colanta",
    name: "Colanta",
  },
  {
    id: "dona-leche",
    name: "Doña Leche",
  },
];

/*
 * Agregaremos aquí los productos reales cuando tengamos
 * sus nombres, precios, presentaciones e imágenes.
 */
export const products: Product[] = [];

import { alpinaProducts } from "./products/alpina";
import { colantaProducts } from "./products/colanta";
import { donaLecheProducts } from "./products/donaLeche";

export type ProductCategory =
  | "todos"
  | "leches"
  | "yogures"
  | "quesos"
  | "avenas"
  | "kumis"
  | "mantequillas"
  | "cremas"
  | "arequipes"
  | "bebidas"
  | "compotas"
  | "carnicos"
  | "complementos";

export type ProductBrand = "todas" | "alpina" | "colanta" | "dona-leche";

export type Product = {
  id: string;
  code?: string;
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
    description: "Leches en diferentes presentaciones.",
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
  {
    id: "avenas",
    name: "Avenas",
    description: "Bebidas de avena listas para disfrutar.",
  },
  {
    id: "kumis",
    name: "Kumis",
    description: "Kumis en distintas presentaciones.",
  },
  {
    id: "mantequillas",
    name: "Mantequillas",
    description: "Opciones con y sin sal.",
  },
  {
    id: "cremas",
    name: "Cremas",
    description: "Cremas y acompañamientos lácteos.",
  },
  {
    id: "arequipes",
    name: "Arequipes",
    description: "Presentaciones para consumir o compartir.",
  },
  {
    id: "bebidas",
    name: "Bebidas",
    description: "Bebidas lácteas, vegetales y de fruta.",
  },
  {
    id: "compotas",
    name: "Compotas",
    description: "Alternativas de fruta en diferentes sabores.",
  },
  {
    id: "carnicos",
    name: "Cárnicos",
    description: "Productos cárnicos y carnes frías.",
  },
  {
    id: "complementos",
    name: "Complementos",
    description: "Productos adicionales para cada ocasión.",
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

export const products: Product[] = [
  ...donaLecheProducts,
  ...colantaProducts,
  ...alpinaProducts,
];

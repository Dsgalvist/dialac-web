export type ServiceCategory =
  | "todos"
  | "celebraciones"
  | "empresas"
  | "complementos";

export type Service = {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "todos">;
  categoryName: string;
  description: string;
  images: string[];
};

const serviceImagesBasePath = "/images/servicios";

export const services: Service[] = [
  {
    id: "refrigerios",
    title: "Refrigerios",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Opciones prácticas y personalizadas para reuniones, empresas, instituciones y eventos.",
    images: [
      `${serviceImagesBasePath}/REFRIGERIOS/REFRIGERIO 3.png`,
      `${serviceImagesBasePath}/REFRIGERIOS/REFRIGERIO1.png`,
      `${serviceImagesBasePath}/REFRIGERIOS/REFRIGERIO2.png`,
    ],
  },
  {
    id: "postres",
    title: "Postres",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Preparaciones dulces para compartir y hacer más especial cada ocasión.",
    images: [
      `${serviceImagesBasePath}/POSTRES/1.png`,
      `${serviceImagesBasePath}/POSTRES/2.png`,
      `${serviceImagesBasePath}/POSTRES/3.png`,
      `${serviceImagesBasePath}/POSTRES/4.png`,
      `${serviceImagesBasePath}/POSTRES/5.png`,
      `${serviceImagesBasePath}/POSTRES/6.png`,
    ],
  },
  {
    id: "anchetas-desayunos",
    title: "Anchetas y desayunos sorpresa",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Detalles personalizados para celebrar cumpleaños, fechas especiales y momentos inolvidables.",
    images: [
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/ANCHETAS 1 .png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/ANCHETA.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/ANCHETAS-NAVIDENAS.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/ANCHETAS.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/DESAYUNO-SORPRESA-LEON.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/DESAYUNO-SORPRESA-OSO.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/DESAYUNO-SORPRESA.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/DESAYUNOS-PERSONALIZABLE.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS SORPRESAS/TABLA DE QUESO.png`,
    ],
  },
  {
    id: "tabla-quesos",
    title: "Tablas de quesos personalizadas",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Tablas preparadas para compartir y personalizadas de acuerdo con cada ocasión.",
    images: [
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-DE-QUESO-3.jpg`,
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-DE-QUESO.jpg`,
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-DE-QUESO2.jpg`,
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-DE-QUESOS.png`,
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-PERSONALIZADA.jpg`,
      `${serviceImagesBasePath}/TABLAS DE QUESOS/TABLA-PERSONALIZADA2.jpg`,
    ],
  },
  {
    id: "frescos",
    title: "Frescos",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Opciones frescas preparadas para acompañar y completar cada experiencia.",
    images: [
      `${serviceImagesBasePath}/FRESCOS/1.png`,
      `${serviceImagesBasePath}/FRESCOS/2.png`,
      `${serviceImagesBasePath}/FRESCOS/3.png`,
      `${serviceImagesBasePath}/FRESCOS/4.png`,
    ],
  },
  {
    id: "eventos-reuniones",
    title: "Eventos y reuniones",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Soluciones alimenticias para encuentros familiares, sociales, empresariales y reuniones especiales.",
    images: [
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES/EVENTO1.png`,
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES/EVENTO2.png`,
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES/EVENTO3.png`,
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES/EVENTO4.png`,
    ],
  },
  {
    id: "fiestas-tematicas",
    title: "Fiestas temáticas",
    category: "celebraciones",
    categoryName: "Celebraciones",
    description:
      "Alternativas adaptadas al concepto, la decoración y las necesidades de cada celebración.",
    images: [
      `${serviceImagesBasePath}/FIESTAS TEMATICAS/FIESTA1.png`,
      `${serviceImagesBasePath}/FIESTAS TEMATICAS/FIESTA2.png`,
      `${serviceImagesBasePath}/FIESTAS TEMATICAS/FIESTA3.png`,
    ],
  },
  {
    id: "coffee-break",
    title: "Coffee Break",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Pausas preparadas para acompañar jornadas, capacitaciones, conferencias y reuniones empresariales.",
    images: [
      `${serviceImagesBasePath}/COFFEE BREAK/1.png`,
      `${serviceImagesBasePath}/COFFEE BREAK/2.png`,
      `${serviceImagesBasePath}/COFFEE BREAK/3.png`,
      `${serviceImagesBasePath}/COFFEE BREAK/4.png`,
    ],
  },
  {
    id: "cajas-dialac",
    title: "Cajas DIALAC",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Presentaciones completas, prácticas y organizadas para equipos, encuentros y actividades especiales.",
    images: [
      `${serviceImagesBasePath}/CAJAS/1.png`,
      `${serviceImagesBasePath}/CAJAS/2.png`,
      `${serviceImagesBasePath}/CAJAS/3.png`,
      `${serviceImagesBasePath}/CAJAS/4.png`,
    ],
  },
  {
    id: "break-lacteo",
    title: "Break Lácteo",
    category: "empresas",
    categoryName: "Empresas",
    description:
      "Combinaciones variadas con productos lácteos y acompañamientos para disfrutar durante una pausa.",
    images: [
      `${serviceImagesBasePath}/BREAK LACTEO/1.png`,
      `${serviceImagesBasePath}/BREAK LACTEO/2.png`,
      `${serviceImagesBasePath}/BREAK LACTEO/3.png`,
    ],
  },
  {
    id: "bocaditos",
    title: "Bocaditos",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Pequeñas preparaciones para compartir y complementar reuniones, celebraciones y eventos.",
    images: [
      `${serviceImagesBasePath}/BOCADITOS/1.png`,
      `${serviceImagesBasePath}/BOCADITOS/2.png`,
      `${serviceImagesBasePath}/BOCADITOS/3.png`,
      `${serviceImagesBasePath}/BOCADITOS/4.png`,
      `${serviceImagesBasePath}/BOCADITOS/5.png`,
      `${serviceImagesBasePath}/BOCADITOS/6.png`,
      `${serviceImagesBasePath}/BOCADITOS/7.png`,
      `${serviceImagesBasePath}/BOCADITOS/8.png`,
    ],
  },
  {
    id: "pasabocas",
    title: "Pasabocas",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Alternativas variadas y fáciles de compartir para complementar diferentes tipos de eventos.",
    images: [
      `${serviceImagesBasePath}/PASABOCAS/1.png`,
      `${serviceImagesBasePath}/PASABOCAS/2.png`,
      `${serviceImagesBasePath}/PASABOCAS/3.png`,
      `${serviceImagesBasePath}/PASABOCAS/4.png`,
    ],
  },
  {
    id: "productos-artesanales",
    title: "Productos artesanales",
    category: "complementos",
    categoryName: "Complementos",
    description:
      "Alfajores, galletas y panderitos artesanales para complementar regalos, reuniones y celebraciones.",
    images: [
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES/ALFAJORES.JPG`,
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES/GALLETAS.JPG`,
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES/PANDERITOS.JPG`,
    ],
  },
];

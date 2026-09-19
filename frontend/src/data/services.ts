export type ServiceCategory =
  | "todos"
  | "celebraciones"
  | "empresas"
  | "complementos";

export type ServiceExample = {
  name: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "todos">;
  categoryName: string;
  description: string;
  images: string[];
  examples: ServiceExample[];
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
      `${serviceImagesBasePath}/REFRIGERIOS2/1,2.png`,
      `${serviceImagesBasePath}/REFRIGERIOS2/2,2.png`,
      `${serviceImagesBasePath}/REFRIGERIOS2/3,2.png`,
    ],
    examples: [
      {
        name: "Refrigerio clásico y delicioso",
        description:
          "Sándwich en pan brioche, focaccia o pan árabe con jamón inglés, queso mozzarella, verduras y salsa de la casa; acompañado de jugo natural, fruta de temporada y dulce o galleta.",
      },
      {
        name: "Refrigerio mediterráneo vegano",
        description:
          "Sándwich en pan integral con garbanzos, pepinillos, apio, lechuga romana y mayonesa vegana; acompañado de jugo natural y galleta artesanal de avena y pasas.",
      },
      {
        name: "Berry Crunch",
        description:
          "Yogur griego natural acompañado de fresas, moras, arándanos y granola.",
      },
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
    examples: [
      {
        name: "Mini brownie",
        description: "Brownie de chocolate.",
      },
      {
        name: "Mini cheesecake",
        description: "Base de galleta y crema de queso.",
      },
      {
        name: "Mini tres leches",
        description: "Bizcochuelo, tres leches y crema.",
      },
      {
        name: "Mini mousse de maracuyá",
        description: "Pulpa de maracuyá, crema y leche condensada.",
      },
      {
        name: "Mini torta de zanahoria",
        description: "Torta de zanahoria con cobertura ligera.",
      },
      {
        name: "Galleta artesanal de avena",
        description: "Avena, harina, panela y chips opcionales.",
      },
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
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS2/1.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS2/2.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS2/3.png`,
      `${serviceImagesBasePath}/ANCHETAS Y DESAYUNOS2/4.png`,
    ],
    examples: [
      {
        name: "Ancheta personalizada",
        description:
          "Detalle preparado y personalizado de acuerdo con la ocasión.",
      },
      {
        name: "Desayuno sorpresa",
        description:
          "Presentación especial para cumpleaños, celebraciones y fechas importantes.",
      },
      {
        name: "Desayuno temático",
        description:
          "Alternativa personalizada según el concepto de la celebración.",
      },
      {
        name: "Bandeja personalizada",
        description:
          "Bandeja adaptable a los gustos y necesidades de cada persona.",
      },
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
      `${serviceImagesBasePath}/TABLA DE QUESOS2/1.2.png`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/2.2.png`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/3.2.png`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/4.2.png`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/6aec84fc-57d3-4ea3-87b7-bf81065c98d5.JPG`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/TABLA-PERSONALIZADA.jpg`,
      `${serviceImagesBasePath}/TABLA DE QUESOS2/TABLA-PERSONALIZADA2.jpg`,
    ],
    examples: [
      {
        name: "Tabla de quesos clásica",
        description: "Selección de quesos y acompañamientos para compartir.",
      },
      {
        name: "Tabla de quesos especial",
        description:
          "Presentación preparada para encuentros y ocasiones especiales.",
      },
      {
        name: "Tabla de quesos para celebración",
        description:
          "Alternativa diseñada para acompañar celebraciones y reuniones.",
      },
      {
        name: "Tabla de quesos para compartir",
        description:
          "Combinación presentada para disfrutar entre varias personas.",
      },
      {
        name: "Tabla personalizada",
        description:
          "Selección adaptada a la ocasión y a las preferencias del cliente.",
      },
      {
        name: "Tabla personalizada con mensaje",
        description:
          "Presentación especial que puede personalizarse para regalar.",
      },
      {
        name: "Tabla personalizada para eventos",
        description: "Alternativa preparada según el tipo y tamaño del evento.",
      },
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
    examples: [
      {
        name: "Brocheta de frutas",
        description: "Fresa, uva, piña y/o melón.",
      },
      {
        name: "Vaso de yogur y granola",
        description: "Yogur, fruta y granola.",
      },
      {
        name: "Ensalada de frutas premium",
        description:
          "Combinación de tres o cuatro frutas, con queso opcional y crema aparte.",
      },
      {
        name: "Avena fría con fruta",
        description: "Avena, leche o yogur, fruta y canela.",
      },
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
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES 2/4.2.png`,
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES 2/2.2.png`,
      `${serviceImagesBasePath}/EVENTOS Y REUNIONES 2/3.2.png`,
    ],
    examples: [
      {
        name: "Eventos sociales",
        description:
          "Soluciones alimenticias adaptadas al tipo y tamaño del evento.",
      },
      {
        name: "Reuniones empresariales",
        description:
          "Alternativas organizadas para encuentros de trabajo y actividades corporativas.",
      },
      {
        name: "Celebraciones personalizadas",
        description:
          "Propuestas preparadas de acuerdo con las necesidades de cada ocasión.",
      },
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
      `${serviceImagesBasePath}/FIESTAS TEMATICAS 2/1.2.png`,
      `${serviceImagesBasePath}/FIESTAS TEMATICAS 2/2;2.png`,
      `${serviceImagesBasePath}/FIESTAS TEMATICAS 2/3;2.png`,
    ],
    examples: [
      {
        name: "Fiesta temática personalizada",
        description:
          "Propuesta adaptada al concepto y la decoración de la celebración.",
      },
      {
        name: "Mesa temática",
        description:
          "Presentación organizada para complementar la temática del evento.",
      },
      {
        name: "Celebración especial",
        description:
          "Alternativa personalizada según la ocasión y las necesidades del cliente.",
      },
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
    examples: [
      {
        name: "Coffee Break Ejecutivo",
        description: "Mini sándwich, empanada, brownie, fruta y jugo.",
      },
      {
        name: "Coffee Break Premium",
        description:
          "Croissant, empanada, brocheta de frutas, cheesecake y jugo.",
      },
      {
        name: "Coffee Break Saludable",
        description: "Wrap vegetariano, fruta, yogur, galleta y jugo.",
      },
      {
        name: "Coffee Break Café",
        description: "Sándwich, empanada, brownie, galleta y café.",
      },
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
    examples: [
      {
        name: "Caja DIALAC Business",
        description: "Sándwich, empanada, brownie, fruta y jugo.",
      },
      {
        name: "Caja DIALAC Premium",
        description:
          "Croissant, empanada gourmet, brocheta de frutas, cheesecake y jugo.",
      },
      {
        name: "Caja DIALAC Healthy",
        description: "Wrap, fruta, yogur, galleta y jugo.",
      },
      {
        name: "Caja Desayuno Corporativo",
        description: "Sándwich, fruta, yogur, producto de panadería y bebida.",
      },
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
    examples: [
      {
        name: "Opción 1",
        description: "Mini sándwich, yogur, fruta y galleta.",
      },
      {
        name: "Opción 2",
        description: "Mini empanada, yogur, fruta y galleta.",
      },
      {
        name: "Opción 3",
        description: "Mini croissant, yogur sin granola, fruta y jugo.",
      },
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
    examples: [
      {
        name: "Mini sándwich de pollo",
        description:
          "Pan mini, pollo desmechado, lechuga, tomate y salsa de la casa.",
      },
      {
        name: "Mini sándwich de jamón y queso",
        description: "Pan mini, jamón, queso mozzarella y salsa de la casa.",
      },
      {
        name: "Mini croissant de pollo",
        description: "Croissant mini, pollo cremoso y queso.",
      },
      {
        name: "Mini croissant de jamón y queso",
        description: "Croissant mini, jamón y queso.",
      },
      {
        name: "Mini wrap de pollo",
        description: "Tortilla, pollo, vegetales y salsa de yogur.",
      },
      {
        name: "Mini wrap vegetariano",
        description: "Tortilla, hummus, vegetales y lechuga.",
      },
      {
        name: "Canapé de pollo",
        description: "Tostada, pollo cremoso y tomate cherry.",
      },
      {
        name: "Canapé de atún",
        description: "Tostada, atún, maíz, mayonesa y cebollín.",
      },
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
    examples: [
      {
        name: "Mini empanada DIALAC de carne",
        description: "Masa de maíz, carne desmechada y papa.",
      },
      {
        name: "Mini empanada de pollo",
        description: "Masa de maíz, pollo y papa.",
      },
      {
        name: "Mini empanada de queso",
        description: "Masa de maíz y queso.",
      },
      {
        name: "Mini pastel de pollo",
        description: "Masa hojaldrada y relleno de pollo.",
      },
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
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES2/ALFAJOR2.png`,
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES2/GALLETITAS2.png`,
      `${serviceImagesBasePath}/PRODUCTOS ARTESANALES2/PANDERITOS2.png`,
    ],
    examples: [
      {
        name: "Alfajores",
        description:
          "Producto artesanal para complementar regalos y celebraciones.",
      },
      {
        name: "Galletas artesanales",
        description: "Galletas preparadas artesanalmente para compartir.",
      },
      {
        name: "Panderitos",
        description:
          "Panderitos artesanales ideales para acompañar diferentes ocasiones.",
      },
    ],
  },
];

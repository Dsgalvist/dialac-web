import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type RouteMetadataItem = {
  title: string;
  description: string;
};

const defaultMetadata: RouteMetadataItem = {
  title: "DIALAC | Alimentos y experiencias",
  description:
    "DIALAC ofrece alimentos, refrigerios, desayunos, productos artesanales y soluciones personalizadas para personas, empresas y eventos.",
};

const routeMetadata: Record<string, RouteMetadataItem> = {
  "/": {
    title: "DIALAC | Inicio",
    description:
      "Conoce DIALAC y descubre alimentos, productos y experiencias preparadas para diferentes gustos, necesidades y ocasiones.",
  },
  "/nosotros": {
    title: "DIALAC | Nosotros",
    description:
      "Conoce la historia, esencia, misión y visión de DIALAC, una empresa familiar dedicada al buen sabor desde 2009.",
  },
  "/servicios": {
    title: "DIALAC | Servicios",
    description:
      "Explora los servicios DIALAC para celebraciones, empresas, reuniones y eventos especiales.",
  },
  "/productos": {
    title: "DIALAC | Productos",
    description:
      "Explora el catálogo de productos DIALAC y agrega tus opciones preferidas a la solicitud.",
  },
  "/contacto": {
    title: "DIALAC | Contacto",
    description:
      "Comunícate con DIALAC, consulta nuestros horarios y encuentra nuestra ubicación en Chía, Cundinamarca.",
  },
  "/solicitud": {
    title: "DIALAC | Mi solicitud",
    description:
      "Revisa los productos, cantidades y valor total de tu solicitud DIALAC.",
  },
  "/solicitud/datos": {
    title: "DIALAC | Datos de la solicitud",
    description:
      "Completa tus datos de contacto, entrega y fecha para generar tu solicitud DIALAC.",
  },
};

function updateMetaDescription(description: string) {
  let descriptionElement =
    document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

  if (!descriptionElement) {
    descriptionElement = document.createElement("meta");
    descriptionElement.name = "description";
    document.head.appendChild(descriptionElement);
  }

  descriptionElement.content = description;
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata =
      routeMetadata[pathname] ?? defaultMetadata;

    document.title = metadata.title;
    updateMetaDescription(metadata.description);
  }, [pathname]);

  return null;
}

export default RouteMetadata;

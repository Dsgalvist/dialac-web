import { useState } from "react";
import ServicesCatalog from "../components/services/ServicesCatalog";
import ServicesCategories, {
  type ServiceCategory,
} from "../components/services/ServicesCategories";

function ServicesPage() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("todos");

  return (
    <main className="overflow-hidden bg-white">
      <ServicesCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ServicesCatalog activeCategory={activeCategory} />
    </main>
  );
}

export default ServicesPage;
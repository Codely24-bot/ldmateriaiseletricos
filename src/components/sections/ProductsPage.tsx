import { useState } from "react";
import { FeaturedProducts } from "./FeaturedProducts";

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <FeaturedProducts
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
}

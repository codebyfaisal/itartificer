import { PageHeader, ServiceSection } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { products } from "@/shared/db/products";
import * as LucideIcons from "lucide-react";

const Products = () => {
  const cards = products.map((product) => {
    const Icon = LucideIcons[product.icon];
    return {
      ...product,
      icon: <Icon strokeWidth={2} />,
    };
  });

  return (
    <>
      <SEO
        title="Products"
        description="Check out our range of products designed to help you succeed."
        path="/products"
      />
      <PageHeader title="Products" />
      <ServiceSection cards={cards} />
    </>
  );
};

export default Products;

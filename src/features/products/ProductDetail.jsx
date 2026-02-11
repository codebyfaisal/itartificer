import { PageHeader } from "@/shared/components";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { slug, subSlug } = useParams();
  console.log(slug, subSlug);
  return (
    <>
      <PageHeader title={subSlug.replace(/-/g, " ")} />
    </>
  );
}

export default ProductDetail
import { PageHeader } from "@/shared/components";
import { useLocation, Navigate } from "react-router";
import { products } from "@/shared/db/products";
import * as LucideIcons from "lucide-react";
import { Link } from "react-router";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const product = products.find((p) => p.slug === pathname);

  if (!product) return <Navigate to="/404" />;

  const Icon = LucideIcons[product.icon] || LucideIcons.Package;

  return (
    <>
      <PageHeader title={product.title} />
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <Link to="/products" aria-label="Products">
            Products
          </Link>
          <div className="flex items-center">
            <LucideIcons.ChevronRight size={16} />
            <LucideIcons.ChevronRight size={16} />
          </div>
          <p className="opacity-70">{product.title}</p>
        </div>
      </div>
      <section className="container pb-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="bg-primary/5 p-6 rounded-xl inline-block">
              {Icon && <Icon size={64} className="text-primary" />}
            </div>
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {product.description}
            </p>

            {/* Extended content dummy placeholder if not in DB yet */}
            <div className="space-y-4 text-foreground/70">
              <p>
                Our {product.title} is designed to streamline your operations
                and boost productivity. Built with the latest technology, it
                offers scalability, security, and a user-friendly interface.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Feature-rich dashboard</li>
                <li>Real-time analytics</li>
                <li>Seamless integration capabilities</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-muted p-6 rounded-xl shadow-sm space-y-6">
              <h3 className="text-xl font-semibold">Interested?</h3>
              <p className="text-sm text-foreground/70">
                Contact us today to schedule a demo or get a quote.
              </p>
              {/* Could add a contact form or button here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

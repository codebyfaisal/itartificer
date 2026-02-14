import { useEffect } from "react";
import { useParams } from "react-router";
import { PageHeader, FaqList } from "@/shared/components";
import { services } from "@/shared/db/services";
import ServiceIntro from "./components/ServiceIntro";
import Divider from "@/shared/ui/Divider";
import SEO from "@/shared/components/SEO";
import "./service.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const details = service?.details;

  useEffect(() => {
    document.querySelectorAll(".serviceDetail li").forEach((li) => {
      li.classList.add("styled-list");
    });
  }, []);

  if (!service || !details) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-muted-foreground">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  const { intro, faq, image } = details;

  return (
    <>
      <SEO
        title={intro?.title || service.title}
        description={intro?.description || service.description}
        path={`/services/${slug}`}
      />
      <PageHeader title={intro?.title || service.title} />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 serviceDetail">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-6 space-y-12">
            {intro && <ServiceIntro {...intro} />}
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-4 space-y-8">
            {!image && (
              <div className="rounded-2xl drop-shadow-lg">
                <img
                  src="/images/contact-us.webp"
                  alt={intro?.title || "Service Image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            {image && (
              <div className="rounded-2xl drop-shadow-lg">
                <img
                  src={image}
                  alt={intro?.title || "Service Image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
          {faq && (
            <div className="col-span-full">
              <Divider className="mb-12" />
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary">
                  {faq.title}
                </h2>
                <FaqList items={faq.items} title="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

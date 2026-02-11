import { useEffect } from "react";
import { useParams } from "react-router";
import { PageHeader, FaqList } from "@/shared/components";
import { services } from "@/shared/data/services";
import ServiceIntro from "./components/ServiceIntro";
import Divider from "@/shared/ui/Divider";
import "./service.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services[slug];

  useEffect(() => {
    document.querySelectorAll(".serviceDetail li").forEach((li) => {
      li.classList.add("styled-list");
    });
  }, []);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-muted-foreground">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <PageHeader title={service.intro?.title || slug.replace(/-/g, " ")} />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 serviceDetail">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-6 space-y-12">
            {service.intro && <ServiceIntro {...service.intro} />}
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-4 space-y-8">
            {!service.image && (
              <div className="rounded-2xl drop-shadow-lg">
                <img
                  src="/images/contact-us.webp"
                  alt={service.intro?.title || "Service Image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
          {service.faq && (
            <div className="col-span-full">
              <Divider className="mb-12" />
              <FaqList {...service.faq} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

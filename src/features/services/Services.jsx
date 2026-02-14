import { PageHeader, ServiceSection } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { services } from "@/shared/db/services";
import * as LucideIcons from "lucide-react";

const Services = () => {
  const cards = services.map((service) => {
    const Icon = LucideIcons[service.icon];
    return {
      ...service,
      icon: <Icon strokeWidth={2} />,
    };
  });

  return (
    <>
      <SEO
        title="Services"
        description="Explore IT Artificer's comprehensive range of software development, digital marketing, and IT consulting services."
        path="/services"
      />
      <PageHeader title="Services" />
      <ServiceSection cards={cards} />
    </>
  );
};

export default Services;

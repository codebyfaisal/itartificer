import HomeHero from "./components/Hero";
import WorkflowProcess from "./components/WorkflowProcess";
import ContactPromo from "./components/ContactPromo";
import {
  TeamSection,
  StatsSection,
  TestemonialsSection,
  ClientBrandsSection,
  ServiceSection,
} from "@/shared/components";
import IndustrySectors from "./components/IndustrySectors";
import LatestUpdates from "./components/LatestUpdates";

import { services } from "@/shared/db/services";
import * as LucideIcons from "lucide-react";
import SEO from "@/shared/components/SEO";

const selectedServices = [
  "Software Development",
  "Domain & Cloud Hosting",
  "AI & Data Solutions",
  "Digital Marketing Services",
  "Career Consultation",
  "Data Security Services",
];

const servicesCards = services
  .filter((service) => selectedServices.includes(service.title))
  .map((service) => {
    const Icon = LucideIcons[service.icon];
    return {
      ...service,
      icon: <Icon strokeWidth={2} />,
    };
  });

const Home = () => {
  return (
    <>
      <SEO
        title="Best Software company In Peshawar"
        description="IT Artificer is a leading software development company specializing in custom software development, mobile app development, and web development services."
        path="/"
        image="/images/logo.png"
      />
      <HomeHero />
      <WorkflowProcess />
      <ContactPromo />
      <div className="p-8 lg:p-10"></div>
      <ServiceSection
        cards={servicesCards}
        title="Built to Scale, Designed to Perform"
      />
      <div className="p-8 lg:p-10"></div>
      <TeamSection />
      <div className="p-8 lg:p-10"></div>
      <StatsSection />
      <div className="p-8 lg:p-10"></div>
      <TestemonialsSection sectionTitle="Our Client Success are Ours" />
      <div className="p-8 lg:p-10"></div>
      <IndustrySectors />
      <div className="p-8 lg:p-10"></div>
      <LatestUpdates />
      <div className="p-8 lg:p-10"></div>
      <ClientBrandsSection />
    </>
  );
};

export default Home;

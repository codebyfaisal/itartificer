import HomeHero from "./components/HomeHero";
import WorkflowProcess from "./components/WorkflowProcess";
import ContactPromo from "./components/ContactPromo";
import {
  LeadershipTeam,
  CompanyStats,
  ClientFeedback,
  ClientBrands,
  ServiceHighlights,
} from "@/shared/components";
import IndustrySectors from "./components/IndustrySectors";
import LatestUpdates from "./components/LatestUpdates";
import SubscriptionCta from "./components/SubscriptionCta";

import {
  ArrowRight,
  Code,
  Cloud,
  Brain,
  Megaphone,
  User,
  Shield,
} from "lucide-react";
import SEO from "@/shared/components/SEO";

const servicesCards = [
  {
    icon: <Code strokeWidth={2} />,
    title: "Software Development",
    description:
      "IT Artificer delivers custom software solutions tailored for growth—powering businesses with innovation, reliability…",
    link: "/software-development",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    title: "Domain & Cloud Hosting",
    description:
      "Get fast, secure, and scalable domain & cloud hosting solutions with IT Artificer—perfect for businesses, startups, and…",
    link: "/domain-cloud-hosting",
  },
  {
    icon: <Brain strokeWidth={2} />,
    title: "AI & Data Solutions",
    description:
      "Unlock smarter business decisions with IT Artificer's AI and data solutions—driven by automation, analytics …",
    link: "/ai-data-solutions",
  },
  {
    icon: <Megaphone strokeWidth={2} />,
    title: "Digital Marketing Services",
    description:
      "Drive growth and engagement with IT Artificer's data-driven digital marketing solutions tailored to amplify your brand's online presence",
    link: "/digital-marketing-services",
  },
  {
    icon: <User strokeWidth={2} />,
    title: "Career Consultation",
    description:
      "Get personalized career guidance from top industry experts—online or onsite, just $4 for a 30-minute session with IT Artificer.",
    link: "/career-consultation",
  },
  {
    icon: <Shield strokeWidth={2} />,
    title: "Data Security Services",
    description:
      "Safeguard your business with IT Artificer's comprehensive data security services—protecting your data from threats with expert solutions.",
    link: "/data-security-services",
  },
];

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
      <ServiceHighlights
        cards={servicesCards}
        title="Built to Scale, Designed to Perform"
      />
      <LeadershipTeam />
      <CompanyStats />
      <ClientFeedback sectionTitle="Our Client Success are Ours" />
      <IndustrySectors />
      <LatestUpdates />
      <ClientBrands />
      <SubscriptionCta />
    </>
  );
};

export default Home;

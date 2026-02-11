import { PageHeader, ServiceHighlights } from "@/shared/components";
import {
  Code,
  Cloud,
  Brain,
  Megaphone,
  Shield,
  Smartphone,
  GraduationCap,
  Briefcase,
  Database,
  Rocket,
  Users,
} from "lucide-react";

const cards = [
  {
    title: "Mobile Application Development",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/mobile-application-development",
    icon: <Smartphone strokeWidth={2} />,
  },
  {
    title: "NAVTTC Career Program",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/navttc-career-program",
    icon: <GraduationCap strokeWidth={2} />,
  },
  {
    title: "High-Tech Professional Training",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/high-tech-professional-training",
    icon: <Brain strokeWidth={2} />,
  },
  {
    title: "Software Development",
    description:
      "IT Artificer delivers custom software solutions tailored for growth—powering businesses with innovation, reliability…",
    link: "/services/software-development",
    icon: <Code strokeWidth={2} />,
  },
  {
    title: "Domain & Cloud Hosting",
    description:
      "Get fast, secure, and scalable domain & cloud hosting solutions with IT Artificer—perfect for businesses, startups, and…",
    link: "/services/domain-cloud-hosting",
    icon: <Cloud strokeWidth={2} />,
  },
  {
    title: "NAVTTC Training Program",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/navttc-training-program",
    icon: <GraduationCap strokeWidth={2} />,
  },
  {
    title: "AI & Data Solutions",
    description:
      "Unlock smarter business decisions with IT Artificer's AI and data solutions—driven by automation, analytics …",
    link: "/services/ai-data-solutions",
    icon: <Database strokeWidth={2} />,
  },
  {
    title: "Digital Marketing Services",
    description:
      "Drive growth and engagement with IT Artificer's data-driven digital marketing solutions tailored to amplify your brand's online presence",
    link: "/services/digital-marketing-services",
    icon: <Megaphone strokeWidth={2} />,
  },
  {
    title: "Career Consultation",
    description:
      "Get personalized career guidance from top industry experts—online or onsite, just $4 for a 30-minute session with IT Artificer.",
    link: "/services/career-consultation",
    icon: <Briefcase strokeWidth={2} />,
  },
  {
    title: "Data Security Services",
    description:
      "Safeguard your business with IT Artificer's comprehensive data security services—protecting your data from threats with expert solutions.",
    link: "/services/data-security-services",
    icon: <Shield strokeWidth={2} />,
  },
  {
    title: "ITA Launch Space",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/ita-launch-space",
    icon: <Rocket strokeWidth={2} />,
  },
  {
    title: "KPITB Internship Program",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/kpitb-internship-program",
    icon: <Users strokeWidth={2} />,
  },
  {
    title: "PSEB Internship Program",
    description:
      "Advance your career with expert-led, industry-certified training—choose from self-paid or NAVTTC-sponsored programs at IT Artificer.",
    link: "/services/pseb-internship-program",
    icon: <Users strokeWidth={2} />,
  },
];

const Services = () => {
  return (
    <>
      <PageHeader title="Services" />
      <ServiceHighlights cards={cards} />
    </>
  );
};

export default Services;

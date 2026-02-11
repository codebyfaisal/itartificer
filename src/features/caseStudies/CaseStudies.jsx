import { PageHeader, SectionHeader } from "@/shared/components";
import {
  ShoppingCart,
  Smartphone,
  Landmark,
  Volume2,
  GraduationCap,
  Wheat,
  School,
  Droplets,
  Building2,
  Database,
  Factory,
  BookOpen,
  ClipboardList,
  Truck,
  AlertTriangle,
  Globe,
  MessageSquareWarning,
  ShieldCheck,
  HeartPulse,
  FileKey,
  SquareArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    title:
      "DMart Islamabad Android Application & Website for E-Commerce and Home Health Services",
    description:
      "To help expand its reach and streamline operations, DMart Islamabad, a growing e-commerce platform, required a scalable Android application and website with integrated home health services.",
    Icon: ShoppingCart,
  },
  {
    title:
      "Local Government Kpk iOS App & Website for Civic Awareness in Newly Merged Areas",
    description:
      "To support the integration of newly merged tribal districts into Khyber Pakhtunkhwa's governance structure, an iOS app and website were developed to promote civic awareness.",
    Icon: Landmark,
  },
  {
    title:
      "Local Government Kpk Android App & Website for Public Awareness in Newly Merged Areas",
    description:
      "In support of the Government of Khyber Pakhtunkhwa's initiative, an Android app and website were built to empower citizens in newly merged tribal districts with public information.",
    Icon: Smartphone,
  },
  {
    title: "Audio-Pedia: Multilingual Legal Awareness Platform",
    description:
      "In collaboration with GIZ Pakistan, the Local Government of Khyber Pakhtunkhwa launched Audio-Pedia—a multilingual platform designed to spread legal awareness through audio content.",
    Icon: Volume2,
  },
  {
    title: "GPI Hayatabad, GPI Karak & GTC Charsadda",
    description:
      "Government Polytechnic Institutes Hayatabad and Karak, along with Government Technical College Charsadda, required digital systems to modernize academic and administrative operations.",
    Icon: GraduationCap,
  },
  {
    title: "Livestock & Dairy Farm Department",
    description:
      "The Livestock & Dairy Development Department of Khyber Pakhtunkhwa needed a centralized system to improve information sharing and operational efficiency.",
    Icon: Wheat,
  },
  {
    title: "Higher Education Department (HED)",
    description:
      "The Higher Education Department of Khyber Pakhtunkhwa required a comprehensive Management Information System to digitize institutional data and processes.",
    Icon: School,
  },
  {
    title: "WATSAN Cell (Gov Khyber Pakhtunkhwa)",
    description:
      "The WATSAN Cell needed a secure and reliable digital solution for sanitation monitoring and reporting across Khyber Pakhtunkhwa.",
    Icon: Droplets,
  },
  {
    title: "KP BOIT Official Website & Hosting Infrastructure",
    description:
      "The Board of Investment & Trade Khyber Pakhtunkhwa required a modern, responsive website and reliable hosting infrastructure to represent its mission and services.",
    Icon: Building2,
  },
  {
    title: "Agriculture University MIS and Web Portal",
    description:
      "Agriculture University Peshawar needed a secure MIS and web portal to modernize student admissions, fee submission, and evaluation systems.",
    Icon: Database,
  },
  {
    title: "Modernizing of KPTEVTA Through ERP",
    description:
      "KP TEVTA required a full-scale ERP system to streamline technical and vocational training operations across the province.",
    Icon: Factory,
  },
  {
    title: "School Management System of NIPHS",
    description:
      "New Islamia School & College partnered with IT Artificer to implement a full-featured School ERP covering academics, administration, and reporting.",
    Icon: BookOpen,
  },
  {
    title: "All-in-One ERP Solution for High-Volume Typing & Document Services",
    description:
      "Dar Al Eitemad Center in the UAE partnered with IT Artificer to build a unified ERP system for high-volume typing, translation, and visa processing services.",
    Icon: ClipboardList,
  },
  {
    title:
      "E-Commerce Platform with Inventory & Delivery MIS for Retail Growth",
    description:
      "DMart Islamabad required an integrated e-commerce platform with inventory and delivery MIS to support retail growth and operational efficiency.",
    Icon: Truck,
  },
  {
    title:
      "Real-Time Disaster Alert & Forecasting Apps for Emergency Preparedness",
    description:
      "The Provincial Disaster Management Authority partnered with IT Artificer to develop real-time disaster alert and forecasting applications.",
    Icon: AlertTriangle,
  },
  {
    title:
      "Strengthening Local Governance Through a Bilingual LMS & Civic Awareness Platform",
    description:
      "With support from WHH and WEPP-Cowater, a bilingual LMS and civic awareness platform was developed to digitally equip local governance institutions.",
    Icon: Globe,
  },
  {
    title:
      "Citizen-Centric Complaint Management System to Improve Local Governance",
    description:
      "In collaboration with the International Rescue Committee, IT Artificer developed a complaint management system to improve public service delivery.",
    Icon: MessageSquareWarning,
  },
  {
    title:
      "Mission-Critical MIS for Operational Efficiency in Military Command",
    description:
      "Frontier Corps KP North required a robust, secure MIS to support mission-critical operational and command-level efficiency.",
    Icon: ShieldCheck,
  },
  {
    title:
      "Digitizing International Healthcare Operations with a Unified ERP & Telemedicine Platform",
    description:
      "UTP Medics partnered with IT Artificer to digitize healthcare operations through a unified ERP and telemedicine platform across multiple countries.",
    Icon: HeartPulse,
  },
  {
    title:
      "Ministry of Energy – Department of Explosives (Pakistan) National Explosives Licensing & Compliance MIS",
    description:
      "In partnership with the Petroleum Division, IT Artificer designed and implemented a national MIS for explosives licensing and regulatory compliance.",
    Icon: FileKey,
  },
];

const CaseStudies = () => {
  return (
    <>
      <PageHeader title="Case Studies" />

      <section>
        <div className="container">
          <SectionHeader
            title="Our Last Month Case Studies"
            description="Discover How We Turn Ideas Into Impact — Explore Real Success Stories from Last Month's Projects Across Industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-4 justify-between shadow-md rounded-md p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon
                      strokeWidth={2}
                      size={40}
                      className="text-primary min-w-8 min-h-8"
                    />
                    <Link to="/" className="text-xl! font-semibold text-secondary hover:text-primary transition-colors">
                      {title}
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {description}
                  </p>
                </div>
                <Link
                  to="/"
                  className="text-secondary font-medium flex items-center gap-2 hover:underline decoration-2 underline-offset-4 transition-all whitespace-nowrap w-full lg:w-auto group"
                >
                  More Details
                  <SquareArrowRight className="transition-all duration-100 size-4 group-hover:size-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

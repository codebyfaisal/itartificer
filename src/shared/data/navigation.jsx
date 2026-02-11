import {
  Home,
  Info,
  Briefcase,
  Package,
  Factory,
  Phone,
  FileText,
  Users,
  Newspaper,
  HeartHandshake,
  BadgeQuestionMark,
} from "lucide-react";

export const navigations = [
  {
    name: "Home",
    path: "/",
    icon: <Home size={18} />,
    navbar: true,
  },
  {
    name: "About Us",
    path: "/about",
    icon: <Info size={18} />,
    navbar: true,
  },
  {
    name: "Services",
    path: "/services",
    icon: <Briefcase size={18} />,
    navbar: true,
    children: [
      {
        name: "Career Consultation",
        path: "/services/career-consultation",
      },
      {
        name: "Domain & Cloud Hosting",
        path: "/services/domain-&-cloud-hosting",
      },
      {
        name: "Software Development",
        path: "/services/software-development",
      },
      {
        name: "Digital Marketing Services",
        path: "/services/digital-marketing-services",
      },
      {
        name: "AI & Data Solutions",
        path: "/services/ai-&-data-solutions",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
      },
      {
        name: "Data Security Services",
        path: "/services/data-security-services",
      },
      {
        name: "Launching Space",
        path: "/services/launching-space",
      },
      {
        name: "High Tech Trainings",
        path: "/services/high-tech-trainings",
      },
      {
        name: "NAVTTC Training Program",
        path: "/services/navttc-training-program",
      },
      {
        name: "PSEB Internship Program",
        path: "/services/pseb-internship-program",
      },
      {
        name: "KPITB Internship Program",
        path: "/services/kpitb-internship-program",
      },
    ],
  },
  {
    name: "Products",
    path: "/products",
    icon: <Package size={18} />,
    navbar: true,
    children: [
      {
        name: "Business & Enterprise",
        path: null,
        children: [
          {
            name: "Business Automation ERP",
            path: "/products/business-enterprise/business-automation-erp",
          },
          {
            name: "ITA Smart CRM",
            path: "/products/business-enterprise/ita-smart-crm",
          },
          {
            name: "Billing & Invoice Software",
            path: "/products/business-enterprise/billing-&-invoice-software",
          },
          {
            name: "Document Management System",
            path: "/products/business-enterprise/document-management-system",
          },
          {
            name: "HR & Payroll Software",
            path: "/products/business-enterprise/hr-&-payroll-software",
          },
          {
            name: "Inventory & POS Software",
            path: "/products/business-enterprise/inventory-&-pos-software",
          },
        ],
      },
      {
        name: "Commerce & Marketplace",
        path: null,
        children: [
          {
            name: "E-Commerce Platform",
            path: "/products/commerce-&-marketplace/e-commerce-platform",
          },
          {
            name: "Property Management System",
            path: "/products/commerce-&-marketplace/property-management-system",
          },
        ],
      },
      {
        name: "Healthcare & Education",
        path: null,
        children: [
          {
            name: "Learning Management System",
            path: "/products/healthcare-&-education/learning-management-system",
          },
          {
            name: "School & College Software",
            path: "/products/healthcare-&-education/school-&-college-software",
          },
          {
            name: "Clinic & Hospital MIS",
            path: "/products/healthcare-&-education/clinic-&-hospital-mis",
          },
          {
            name: "Appointment Booking App",
            path: "/products/healthcare-&-education/appointment-booking-app",
          },
        ],
      },
      {
        name: "Industry Focused Systems",
        path: null,
        children: [
          {
            name: "Real Estate Listing Platform",
            path: "/products/industry-focused-systems/real-estate-listing-platform",
          },
          {
            name: "Fleet Management System",
            path: "/products/industry-focused-systems/fleet-management-system",
          },
        ],
      },
      {
        name: "AI & Smart Solutions",
        path: null,
        children: [
          {
            name: "AI Chatbot Builder",
            path: "/products/ai-&-smart-solutions/ai-chatbot-builder",
          },
          {
            name: "Visitor Management System",
            path: "/products/ai-&-smart-solutions/visitor-management-system",
          },
        ],
      },
    ],
  },
  {
    name: "Owned Brands",
    path: "/brands",
    icon: <Factory size={18} />,
    navbar: false,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Phone size={18} />,
    navbar: true,
  },
  {
    name: "Case Studies",
    path: "/case-studies",
    icon: <FileText size={18} />,
    navbar: false,
  },
  {
    name: "Careers",
    path: "/careers",
    icon: <Users size={18} />,
    navbar: true,
  },
  {
    name: "News | Events",
    path: "/news-events",
    icon: <Newspaper size={18} />,
    navbar: true,
  },
  {
    name: "Features",
    path: "/features",
    icon: <Newspaper size={18} />,
    navbar: false,
  },
  {
    name: "Life AT ITA",
    path: "/life-at-ita",
    icon: <HeartHandshake size={18} />,
    navbar: false,
  },
  {
    name: "FAQ",
    path: "/faq",
    icon: <BadgeQuestionMark size={18} />,
    navbar: false,
  },
  {
    name: "Terms & Conditions",
    path: "/terms-&-conditions",
    icon: <BadgeQuestionMark size={18} />,
    navbar: false,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    icon: <BadgeQuestionMark size={18} />,
    navbar: false,
  },
];

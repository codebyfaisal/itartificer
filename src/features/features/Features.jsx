import { PageHeader, SectionHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import {
  Cloud,
  Database,
  HardDrive,
  Globe,
  LineChart,
  ShieldCheck,
  Monitor,
  Mail,
  Layers,
  Smartphone,
  Code,
  Paintbrush,
  ShoppingCart,
  Printer,
  Layout,
} from "lucide-react";

const features = [
  {
    title: "Cloud Databases",
    icon: Database,
  },
  {
    title: "File storage",
    icon: HardDrive,
  },
  {
    title: "Website hosting",
    icon: Globe,
  },
  {
    title: "Forex trading",
    icon: LineChart,
  },
  {
    title: "File backups",
    icon: ShieldCheck,
  },
  {
    title: "Remote desktop",
    icon: Monitor,
  },
  {
    title: "Email servers",
    icon: Mail,
  },
  {
    title: "Hybrid cloud",
    icon: Layers,
  },
];

const services = [
  {
    title: "Responsive design",
    icon: Layout,
  },
  {
    title: "React web development",
    icon: Code,
  },
  {
    title: "Android apps development",
    icon: Smartphone,
  },
  {
    title: "Laravel web development",
    icon: Code,
  },
  {
    title: "iOS apps development",
    icon: Smartphone,
  },
  {
    title: "UX/UI design",
    icon: Paintbrush,
  },
  {
    title: "E-commerce development",
    icon: ShoppingCart,
  },
  {
    title: "Print ready design",
    icon: Printer,
  },
];

const Features = () => {
  return (
    <>
      <SEO
        title="Features"
        description="Explore the powerful features and technologies offered by IT Artificer."
        path="/features"
      />
      <PageHeader title="Features" />

      <Section
        title="Experience The Best Features Ever"
        background="bg-linear-to-t from-primary/5 to-transparent pb-20"
        cards={features}
        order={[1, 2]}
        image="/images/features/best-features.webp"
      />
      <Section
        title="What Our Software Can Do For You"
        background="bg-linear-to-b from-secondary/5 to-transparent pt-20"
        cards={services}
        order={[2, 1]}
        image="/images/features/services.webp"
      />
    </>
  );
};

const Section = ({ background, title, cards, order, image }) => {
  return (
    <section className={background}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            className="max-w-md mx-auto relative group"
            style={{ order: order[0] }}
          >
            <img
              src="/images/features/circle-shape.webp"
              alt=""
              className="animate-spin [animation-duration:100s] w-full h-auto object-cover aspect-square transition-all duration-500 drop-shadow-xs group-hover:scale-105"
            />
            <img
              src={image}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-1/2 object-cover group-hover:scale-98 transition-all duration-500"
            />
          </div>

          <div className="space-y-8" style={{ order: order[1] }}>
            <SectionHeader title={title} align="left" className="py-0" />
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-md font-semibold shadow-[0_0_10px_0] shadow-secondary/5 bg-background transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 group"
                >
                  <span>
                    <card.icon className="text-primary transition-all duration-500 group-hover:text-primary-foreground" />
                  </span>
                  {card.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

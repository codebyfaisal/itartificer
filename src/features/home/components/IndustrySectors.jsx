import SectionHeader from "@/shared/components/SectionHeader";

import {
  Activity,
  Truck,
  ShoppingCart,
  Wallet,
  Building2,
  GraduationCap,
  Plane,
  Factory,
  Car,
  Clapperboard,
  HardHat,
  Landmark,
  HandHeart,
  Scale,
  Leaf,
  Wifi,
} from "lucide-react";

const cards = [
  { icon: <Activity />, title: "Healthcare" },
  { icon: <Truck />, title: "Transport" },
  { icon: <ShoppingCart />, title: "Ecommerce & Retail" },
  { icon: <Wallet />, title: "Finance & Fintech" },
  { icon: <Building2 />, title: "Real Estate" },
  { icon: <GraduationCap />, title: "Education" },
  { icon: <Plane />, title: "Travel & Hospitality" },
  { icon: <Factory />, title: "Manufacturing" },
  { icon: <Car />, title: "Fleet Management" },
  { icon: <Clapperboard />, title: "Entertainment" },
  { icon: <HardHat />, title: "Construction" },
  { icon: <Landmark />, title: "Government Sector" },
  { icon: <HandHeart />, title: "NonProfits & NGOs" },
  { icon: <Scale />, title: "Legal & Consultancy" },
  { icon: <Leaf />, title: "Agriculture" },
  { icon: <Wifi />, title: "Telecommunication" },
];

const IndustrySectors = () => {
  return (
    <section>
      <div className="min-h-screen relative py-20">
        <div
          className="bg-primary h-full absolute top-0 left-0 w-full -z-10"
          style={{
            backgroundImage: "url(/itartificer-home-deliver2-image.webp)",
            backgroundSize: "50%",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container">
          <SectionHeader
            title="Delivering Value, No Matter the Industry"
            description="From startups to enterprises, IT Artificer delivers tailored tech solutions across a wide range of industries — helping businesses innovate, streamline, and scale."
            className="*:text-primary-foreground!"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-4 p-6 bg-background rounded-md shadow-md relative group overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-secondary after:transition-all after:duration-300 hover:after:left-0"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-primary group-hover:text-primary-foreground transition-all duration-300">
                    {card.icon}
                  </span>
                  <h4 className="text-secondary font-semibold group-hover:text-primary-foreground! transition-all duration-300">
                    {card.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;

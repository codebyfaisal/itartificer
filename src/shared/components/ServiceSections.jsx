import SectionHeader from "@/shared/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const ServiceHighlights = ({ cards = [], title = "Our Best IT Services" }) => {
  return (
    <section className="bg-primary/6">
      <div className="container py-20">
        <SectionHeader
          title={title}
          description="From idea to execution, ITA delivers end-to-end digital solutions — including software development, cloud infrastructure, AI and more.."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards?.length > 0 &&
            cards.map((card, index) => (
              <div
                key={index}
                className="group relative space-y-4 px-8 pt-20 pb-15 border-none shadow-none hover:shadow-[0_0_20px_0_rgba(54,54,54,0.08)] bg-background rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  WebkitClipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                  clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                }}
              >
                <div className="p-0">
                  <span className="text-md font-medium size-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {card.icon}
                  </span>
                  <h3 className="text-lg font-medium mb-2 leading-none tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    {card.description}
                  </p>

                  <div className="mt-8">
                    <Link
                      to={card.link}
                      className="flex items-center text-primary font-semibold group/link relative w-max"
                    >
                      <ArrowRight
                        strokeWidth={2}
                        size={20}
                        className="relative left-0 group-hover/link:left-[90%] transition-all duration-300"
                      />
                      <span className="relative left-1 group-hover/link:-left-1/6 transition-all duration-300">
                        More Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Card from "@/shared/ui/Card";

const ServiceSection = ({ cards = [] }) => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards?.length > 0 &&
          cards.map((card, index) => (
            <Card
              key={index}
              variant="interactive"
              className="group flex flex-col h-full hover:bg-tech-mesh border-0"
            >
              <div className="mb-6">
                <span className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {card.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6 grow">
                {card.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={card.slug}
                  className="inline-flex items-center text-primary font-semibold text-sm group/slug"
                >
                  <span>More Details</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover/slug:translate-x-1"
                  />
                </Link>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default ServiceSection;

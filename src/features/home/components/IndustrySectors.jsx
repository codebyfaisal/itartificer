import SectionHeader from "@/shared/components/SectionHeader";
import { Card } from "@/shared/ui";

import { industries as cards } from "@/shared/db/industries";
import * as LucideIcons from "lucide-react";

const IndustrySectors = () => {
  return (
    <section>
      <div className="container relative z-10">
        <SectionHeader
          title="Delivering Value, No Matter the Industry"
          description="From startups to enterprises, IT Artificer delivers tailored tech solutions across a wide range of industries — helping businesses innovate, streamline, and scale."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = LucideIcons[card.icon] || LucideIcons.Activity; // Fallback icon
            return (
              <Card
                key={index}
                className="group flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1"
              >
                <div
                  className="text-secondary mb-4 p-4 rounded-full bg-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-lg"
                  aria-hidden="true"
                >
                  <span className="[&>svg]:size-8">
                    <Icon />
                  </span>
                </div>
                <h4 className="text-foreground font-medium text-center text-lg group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h4>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;

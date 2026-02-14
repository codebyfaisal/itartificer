import SectionHeader from "@/shared/components/SectionHeader";
import { QuoteIcon } from "lucide-react";
import { Card } from "../ui";

import { testimonials as cards } from "@/shared/db/testimonials";

const TestemonialsSection = ({ sectionTitle }) => {
  return (
    <section>
      <div className="container">
        <SectionHeader
          title={sectionTitle}
          description="Real stories, real impact. Discover how we help businesses grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ description, name, role }, index) => (
            <div key={index} className="relative group">
              {/* Decorative Quote Icon Background */}
              <div className="absolute -top-6 left-8 z-20 bg-primary text-foreground size-12 rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <QuoteIcon className="size-5 fill-current" />
              </div>

              <Card className="pt-14 pb-8 h-full flex flex-col">
                <p className="text-foreground/80 text-lg leading-relaxed italic mb-8 grow">
                  "{description}"
                </p>

                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <div className="size-12 rounded-full overflow-hidden bg-secondary/20">
                    <img
                      src="/images/profile.webp"
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-base">
                      {name}
                    </h4>
                    <p className="text-primary text-xs uppercase font-bold tracking-wider">
                      {role}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestemonialsSection;

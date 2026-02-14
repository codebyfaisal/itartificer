import { SectionHeader } from "@/shared/components";
import { Button, Card } from "@/shared/ui";
import cn from "../utils/cn";

import { stats as cards } from "@/shared/db/stats";

const StatsSection = ({ variant = "dark" }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="min-h-[80vh] relative flex items-center">
        {variant === "dark" && (
          <div className="absolute inset-0">
            {/* Gradient Background instead of image for consistency */}
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="absolute inset-0 bg-[url('/images/home/deliver.webp')] bg-cover bg-center opacity-10 mix-blend-overlay bg-fixed"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/20"></div>
          </div>
        )}

        <div className="container py-20 relative z-10 flex flex-col items-center justify-center h-full">
          <SectionHeader
            title="Understanding Your Needs. Delivering Beyond Expectations."
            description="At IT Artificer, we listen, adapt, and innovate — ensuring every solution we build aligns perfectly with your goals, challenges, and vision for success."
            className={cn(
              "",
              variant === "dark"
                ? "[&>h2]:text-primary-foreground! [&>p]:text-primary-foreground/75!"
                : "",
            )}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 w-full">
            {cards.map(({ title, description }) => (
              <Card
                key={title}
                variant={variant === "dark" ? "glass" : "default"}
                className={cn(
                  "py-8 px-6 text-center space-y-2 flex flex-col items-center justify-center bg-secondary/20 border-border",
                  variant !== "dark" && "bg-background border-border",
                )}
              >
                <h3 className="text-4xl text-primary font-bold tracking-tight">
                  {title}
                </h3>
                <p
                  className={cn(
                    "text-sm uppercase tracking-widest font-medium",
                    variant === "dark"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground",
                  )}
                >
                  {description}
                </p>
              </Card>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-col md:flex-row items-center justify-between gap-8 p-10 w-full rounded-2xl max-w-4xl backdrop-blur-md shadow-2xl",
              variant === "dark"
                ? "bg-secondary/30 border border-border"
                : "bg-card border border-border",
            )}
          >
            <div className="text-center md:text-left">
              <h4
                className={cn(
                  "text-2xl font-bold mb-2",
                  variant === "dark"
                    ? "text-primary-foreground"
                    : "text-foreground",
                )}
              >
                Have any question about us?
              </h4>
              <p
                className={cn(
                  "text-lg",
                  variant === "dark"
                    ? "text-primary-foreground/75"
                    : "text-muted-foreground",
                )}
              >
                Don't hesitate to contact us. We're here to help.
              </p>
            </div>

            <Button
              className="uppercase px-8 py-4 font-bold text-sm tracking-wider shadow-lg hover:-translate-y-1 transition-transform"
              variant="primary"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

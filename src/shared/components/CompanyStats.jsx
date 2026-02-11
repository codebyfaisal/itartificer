import { SectionHeader } from "@/shared/components";
import { Button } from "@/shared/ui";
import cn from "../utils/cn";

const cards = [
  {
    title: "11 Years",
    description: "Industrial Experience",
  },
  {
    title: "550+",
    description: "Satisfied Customers",
  },
  {
    title: "2300+",
    description: "Projects Delivered",
  },
  {
    title: "23+",
    description: "Countries Served",
  },
];

const CompanyStats = ({ variant = "dark" }) => {
  return (
    <section>
      <div className="min-h-screen relative">
        {variant === "dark" && (
          <div className="absolute w-full h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondary/80 after:blur-lg">
            <img
              src="/images/home/deliver.webp"
              className="w-full h-full object-cover"
              alt="itartificer-home-deliver-image"
            />
          </div>
        )}

        <div className="container py-20 relative pb-10 flex flex-col items-center justify-center h-full">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {cards.map(({ title, description }) => (
              <div
                className="ring-1 ring-foreground/50 py-4 px-10 text-center space-y-2 rounded-md"
                key={title}
              >
                <h3 className="text-3xl text-primary! font-semibold">
                  {title}
                </h3>
                <p
                  className={cn(
                    variant === "dark" ? "text-primary-foreground/85!" : "",
                  )}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-8 p-6 w-full rounded-md ring-1 ring-foreground/50 max-w-2xl">
            <div>
              <h4
                className={cn(
                  "text-lg font-semibold",
                  variant === "dark" && "text-primary-foreground!",
                )}
              >
                Have any question about us?
              </h4>
              <p
                className={cn(
                  variant === "dark" ? "text-primary-foreground/75!" : "",
                )}
              >
                Don't hesitate to contact us
              </p>
            </div>

            <Button className="uppercase" variant="primary">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;

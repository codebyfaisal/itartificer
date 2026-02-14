import { PageHeader, SectionHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { caseStudies as projects } from "@/shared/db/caseStudies";
import * as LucideIcons from "lucide-react";
import { SquareArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Card } from "@/shared/ui";

const CaseStudies = () => {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Discover how IT Artificer has helped businesses transform with custom software solutions. View our case studies."
        path="/case-studies"
      />
      <PageHeader title="Case Studies" />

      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, icon, slug }) => {
            const Icon = LucideIcons[icon];
            return (
              <Card
                key={slug}
                className="flex flex-col gap-4 justify-between h-full hover:bg-secondary/20 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {Icon && (
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Icon strokeWidth={2} size={32} />
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/case-studies/${slug}`}
                    className="block text-xl font-bold text-foreground hover:text-primary transition-colors line-clamp-2"
                    aria-label={title}
                  >
                    {title}
                  </Link>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {description}
                  </p>
                </div>
                <Link
                  to={`/case-studies/${slug}`}
                  className="text-primary font-medium flex items-center gap-2 hover:underline decoration-2 underline-offset-4 transition-all whitespace-nowrap w-full lg:w-auto group mt-4"
                  aria-label={`Read case study: ${title}`}
                >
                  More Details
                  <SquareArrowRight className="transition-all duration-100 size-4 group-hover:size-5" />
                </Link>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

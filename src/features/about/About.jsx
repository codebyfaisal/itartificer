import {
  PageHeader,
  SectionHeader,
  TeamSection,
  TestemonialsSection,
  StatsSection,
  ClientBrandsSection,
} from "@/shared/components";
import { Button } from "@/shared/ui";
import SEO from "@/shared/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="IT Artificer is a leading software development company specializing in custom software development, mobile app development, and web development services."
        path="/about"
        image="/images/about-us.webp"
      />
      <PageHeader title="About Us" />

      <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-20">
        <div>
          <img
            src="/images/about-us.webp"
            alt="About IT Artificer Team"
            className="w-full h-full object-cover drop-shadow-2xl"
            title="About IT Artificer Team"
          />
        </div>
        <div className="space-y-4">
          <SectionHeader
            title="Our 13-Years Evolution"
            align="start"
            className="pb-0"
          />

          <div className="text-foreground/80 space-y-4 leading-relaxed">
            <p>
              Founded in 2012 as a training institute focused on building
              technical talent, IT Artificer began with a simple mission: to
              empower individuals with practical, job-ready skills in software
              and technology.
            </p>

            <p>
              Over time, our passion for quality, innovation, and real-world
              impact led us beyond education and into full-scale software
              development. Today, IT Artificer stands as a dynamic software
              solutions company, delivering custom-built applications,
              enterprise platforms, and digital services to clients across
              industries.
            </p>
            <p>
              Our roots in training have shaped our commitment to excellence,
              making us not just developers—but thoughtful problem-solvers.
              Eleven years on, our journey is still driven by the same values:
              learn deeply, build boldly, and grow continuously.
            </p>
          </div>

          <Button
            variant="outline"
            className="shadow-lg hover:shadow-xl text-foreground border-border hover:bg-secondary/10"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <TeamSection />

      <div className="p-8 lg:p-10"></div>
      <TestemonialsSection sectionTitle="Our Clients Feedback" />
      <div className="p-8 lg:p-10"></div>

      <StatsSection variant="dark" />
      <div className="mt-20 flex items-center justify-center">
        <ClientBrandsSection />
      </div>
    </>
  );
};

export default About;

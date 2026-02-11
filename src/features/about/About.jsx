import {
  PageHeader,
  SectionHeader,
  LeadershipTeam,
  ClientFeedback,
  CompanyStats,
  ClientBrands,
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
        <div className="">
          <img
            src="/images/about-us.webp"
            alt=""
            className="w-full h-full object-cover drop-shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <SectionHeader
            title="Our 13-Years Evolution"
            align="start"
            className="pb-0"
          />

          <p>
            Founded in 2012 as a training institute focused on building
            technical talent, IT Artificer began with a simple mission: to
            empower individuals with practical, job-ready skills in software and
            technology.
          </p>

          <p>
            Over time, our passion for quality, innovation, and real-world
            impact led us beyond education and into full-scale software
            development. Today, IT Artificer stands as a dynamic software
            solutions company, delivering custom-built applications, enterprise
            platforms, and digital services to clients across industries.
          </p>
          <p>
            Our roots in training have shaped our commitment to excellence,
            making us not just developers—but thoughtful problem-solvers. Eleven
            years on, our journey is still driven by the same values: learn
            deeply, build boldly, and grow continuously.
          </p>

          <Button variant="outline" className="shadow-lg hover:shadow-xl">
            Contact Us
          </Button>
        </div>
      </section>

      <LeadershipTeam />

      <ClientFeedback sectionTitle="Our Clients Feedback" />

      <div className="bg-linear-to-b from-transparent to-primary/4">
        <CompanyStats variant="light" />
      </div>

      <ClientBrands />
    </>
  );
};

export default About;

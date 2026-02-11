import { SectionHeader } from "@/shared/components";
import { LaptopMinimalCheck, PackageCheck, Telescope } from "lucide-react";

const cards = [
  {
    icon: <Telescope strokeWidth={2} />,
    title: "Discovery & Planning",
    description:
      "We begin with a deep understanding of your goals, challenges, and vision to build the right strategy for success.",
    bullets: [
      "Requirement Analysis",
      "Technical Consultation",
      "Project Scoping",
      "Timeline & Budget Planning",
    ],
  },

  {
    icon: <LaptopMinimalCheck strokeWidth={2} />,
    title: "Design & Development",
    description:
      "We craft intuitive designs and build scalable, high-performance solutions tailored to your business objectives.",
    bullets: [
      "UI/UX Design",
      "Custom Development",
      "Agile Implementation",
      "Quality Assurance Testing",
    ],
  },
  {
    icon: <PackageCheck strokeWidth={2} />,
    title: "Delivery & Support",
    description:
      "After launch, we ensure smooth deployment, provide training, and offer support to scale up your business.",
    bullets: [
      "Deployment & Launch",
      "Client Training",
      "Ongoing Maintenance",
      "Performance Monitoring",
    ],
  },
];

const WorkflowProcess = () => {
  return (
    <section className="container py-16">
      <SectionHeader
        title="Our Process - From Idea to Execution"
        description="We follow a streamlined, client-focused approach — guiding your project through every phase from initial concept to successful delivery and ongoing support."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="space-y-4 py-8 px-6 hover:-translate-y-2 hover:shadow-[0_0_20px_0_rgba(54,54,54,0.08)] transition-all duration-500 rounded-t-md border-b-0 group"
          >
            <span className="text-md font-medium size-14 flex items-center justify-center rounded-full bg-primary/30 text-primary mb-6">
              {card.icon}
            </span>
            <h3 className="text-lg font-medium">{card.title}</h3>
            <p className="max-w-79">{card.description}</p>
            <ul className="list-disc list-inside pl-4 space-y-1 font-semibold">
              {card.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            <div className="w-full absolute bottom-0 left-0 h-1">
              <span className="absolute bottom-0 left-0 h-full w-0 bg-primary transition-all duration-400 ease-out group-hover:w-1/2"></span>

              <span className="absolute bottom-0 right-0 h-full w-0 bg-primary transition-all duration-400 ease-out group-hover:w-1/2"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowProcess;

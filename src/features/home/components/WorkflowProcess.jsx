import { SectionHeader } from "@/shared/components";
import { LaptopMinimalCheck, PackageCheck, Telescope } from "lucide-react";

const cards = [
  {
    icon: <Telescope strokeWidth={1.5} className="size-8 text-primary" />,
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
    icon: (
      <LaptopMinimalCheck strokeWidth={1.5} className="size-8 text-primary" />
    ),
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
    icon: <PackageCheck strokeWidth={1.5} className="size-8 text-primary" />,
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
    <section className="bg-tech-mesh py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader
          title="Our Process - From Idea to Execution"
          description="We follow a streamlined, client-focused approach — guiding your project through every phase from initial concept to successful delivery and ongoing support."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10">
            <div className="absolute inset-0 bg-primary/50 w-full h-full animate-pulse blur-[1px]" />
          </div>

          {cards.map((card, index) => (
            <div
              key={index}
              className="card-glass p-8 rounded-2xl group relative transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(0,212,219,0.15)] flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 -right-4 text-8xl font-black text-foreground/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Icon & Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_-3px_rgba(var(--color-primary),0.3)]">
                    {card.icon}
                  </div>
                  {/* Floating badge */}
                  <span className="absolute -bottom-3 -right-3 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full shadow-lg">
                    STEP 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {card.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mt-auto border-t border-border pt-6">
                {card.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                  >
                    <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,212,219,0.6)]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;

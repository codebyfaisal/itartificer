import React from "react";
import Button from "@/shared/ui/Button";
import { Boxes, Rocket, SlidersHorizontal } from "lucide-react";
import cn from "@/shared/utils/cn";

const cards = [
  {
    icon: <SlidersHorizontal size={20} strokeWidth={3} />,
    title: "Built Around Your Business",
    description:
      "Every business is unique. That's why our software, apps, and systems are built specifically to match your processes, goals, and vision for your unlimited growth.",
  },
  {
    icon: <Boxes size={20} strokeWidth={3} />,
    title: "Everything Under One Roof",
    description:
      "No need to juggle multiple vendors. We offer full-cycle services: strategy, design, development, deployment, cloud, DevOps, support, and upgrades.",
  },
  {
    icon: <Rocket size={20} strokeWidth={3} />,
    title: "Future Ready Technology",
    description:
      "Our solutions are secure by design and powered by the latest tech. We future-proof your investment with modern frameworks and strong cybersecurity practices.",
  },
];

const HomeHero = () => {
  return (
    <section>
      <div
        style={{
          background: "url(/images/home/hero.webp), #00000061",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-16"
      >
        <div className="container">
          <div className="space-y-8 min-h-[calc(100vh-20px)] flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-semibold lg:font-bold max-w-lg leading-snug text-primary-foreground! ">
              Engineering Digital Excellence For Your Business
            </h1>

            <p className="max-w-lg lg:max-w-md text-[0.95rem]! leading-loose text-primary-foreground!">
              At IT Artificer, we don't just build software — we architect
              intelligent solutions that drive innovation, efficiency, and
              growth. As a full-service IT partner, we deliver scalable, secure,
              and cutting-edge technology meet the demands of your business.
              Built Aro
            </p>
            <Button className="uppercase w-max">GET STARTED</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border border-secondary/50 p-6 space-y-4 rounded-md bg-secondary/10"
              >
                <span className="bg-secondary rounded-full flex items-center justify-center size-12 overflow-hidden">
                  <span className="bg-secondary-foreground/70 text-secondary flex items-center justify-center size-12">
                    {card.icon}
                  </span>
                </span>

                <h3 className="text-lg md:text-lg font-semibold text-primary-foreground!">
                  {card.title}
                </h3>
                <p className="text-primary-foreground/90!">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

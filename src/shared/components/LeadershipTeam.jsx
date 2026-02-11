import SectionHeader from "@/shared/components/SectionHeader";

const cards = [
  {
    name: "Haider Ali",
    role: "CEO & FOUNDER",
    description:
      "Visionary leader driving innovation and excellence at the core of IT Artificer's mission.",
    image: "/images/profile.webp",
  },
  {
    name: "Najm U Din",
    role: "COO - ITA",
    description:
      "Ensures smooth operations and strategic execution across all service departments.",
    image: "/images/profile.webp",
  },
  {
    name: "Norab Ahmad",
    role: "Business Developer",
    description:
      "Focused on building strong client relationships and identifying growth opportunities.",
    image: "/images/profile.webp",
  },
  {
    name: "Sheraz Ahmad",
    role: "Project Manager",
    description:
      "Delivers projects with precision, leading teams from concept to successful completion",
    image: "/images/profile.webp",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="bg-secondary/5">
      <div className="container py-20">
        <SectionHeader
          title="Meet the Minds Behind IT Artificer"
          description="Get to know the passionate professionals, creative thinkers, and tech experts who turn bold ideas into real-world digital solutions at IT Artificer."
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="py-8 px-6 hover:-translate-y-2 hover:shadow-[0_0_20px_0_rgba(54,54,54,0.01)] transition-all duration-500 group bg-background/50 rounded-md flex flex-col justify-center gap-1 items-center"
            >
              <div className="relative w-full aspect-square! mb-6 overflow-hidden rounded-full ring-2 ring-primary">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium capitalize">{card.name}</h3>
              <h4 className="text-md! text-primary! font-semibold uppercase">
                {card.role}
              </h4>
              <p className="max-w-79 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

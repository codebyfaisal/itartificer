import SectionHeader from "@/shared/components/SectionHeader";
import { QuoteIcon } from "lucide-react";

const cards = [
  {
    description:
      "IT Artificer developed a complete booking and dispatch system for our Maxi Taxi business in Australia, and we couldn't be more satisfied. From user-friendly mobile apps to real-time driver tracking",
    name: "James T.",
    role: "Operations Manager, Maxi Taxi",
  },

  {
    description:
      "The digital marketing campaign IT Artificer ran for Fast Chiller Transport took our brand visibility to a whole new level. We saw a 3x increase in website traffic, better leads, and real customer engagement.",
    name: "Saleem K..",
    role: "Director, Fast Chiller Transport",
  },

  {
    description:
      "We trusted IT Artificer to migrate and manage our logistics system on the cloud — and it was the best decision we made. They provided secure, scalable cloud infrastructure that supports our daily operations.",
    name: "Khalid A.",
    role: "IT Head, Logistics Group",
  },
];

const ClientFeedback = ({ sectionTitle }) => {
  return (
    <section className="bg-primary/6">
      <div className="container py-20">
        <SectionHeader
          title={sectionTitle}
          description="Real stories from real clients — discover how IT Artificer has helped businesses grow, innovate, and succeed with powerful tech solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map(({ description, name, role }, index) => (
            <div key={index} className="relative">
              <span className="bg-primary flex items-center justify-center size-16 rounded-full absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2">
                <QuoteIcon className="size-8 rotate-180 text-primary-foreground!" />
              </span>
              <p className="bg-background p-12 rounded-md">{description}</p>

              <div className="pl-8">
                <div className="w-0 h-0 border-l-14 border-r-14 border-t-15 border-t-background border-transparent translate-x-2 mb-2" />

                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img
                      src="https://itartificer.com/wp-content/uploads/2020/11/client-1.jpg.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">-{name}</h4>
                    <p>{role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

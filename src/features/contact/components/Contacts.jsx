import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/shared/ui";

import { itArtificerData } from "@/shared/db/itArtificer";

const contactCards = [
  {
    icon: <Mail size={32} />,
    title: "Mail Here",
    content: [itArtificerData.email.info, itArtificerData.email.sales],
  },
  {
    icon: <MapPin size={32} />,
    title: "Visit Here",
    content: itArtificerData.address,
  },
  {
    icon: <Phone size={32} />,
    title: "Call Us Now",
    content: itArtificerData.phone,
  },
];

const Contacts = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactCards.map((card, index) => (
          <Card
            key={index}
            variant="interactive"
            className="flex flex-col items-center justify-center p-12 text-center group bg-background"
          >
            <div className="mb-6 p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold mb-4 text-heading-foreground">
              {card.title}
            </h3>

            <div className="space-y-1">
              {card.content.map((item, i) => (
                <p key={i} className="text-foreground/70 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Contacts;

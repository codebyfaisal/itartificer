import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactCards = [
  {
    icon: <FaEnvelopeOpen />,
    title: "Mail Here",
    content: ["info@itartificer.com", "sales@itartificer.com"],
  },
  {
    icon: <FaLocationDot />,
    title: "Visit Here",
    content: ["KP IT Park, Zu Business Center Chamkani. Peshawar KP, Pakistan"],
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us Now",
    content: ["+92 333 9296314", "+92 331 9119945"],
  },
];

const Contacts = () => {
  return (
    <section>
      <div className="container py-20 grid grid-cols-1 md:grid-cols-3 items-center text-center gap-8">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-12 hover:-translate-y-1 group border border-border/60 hover:border-primary/50 rounded-lg bg-background text-foreground shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="p-0 flex flex-col items-center">
              <div className="text-primary text-4xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 p-4 rounded-full aspect-square group-hover:scale-110 mb-2">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mt-3 mb-2 leading-none tracking-tight">
                {card.title}
              </h3>
              {card.content.map((item, index) => (
                <p key={index} className="text-secondary/80">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;

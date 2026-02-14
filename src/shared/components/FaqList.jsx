import { useState } from "react";
import { Plus } from "lucide-react";
import cn from "@/shared/utils/cn";

const ServiceFaq = ({ title = "", items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
      <div className="max-w-sm mx-auto md:col-span-2">
        <img
          src="/images/faq.webp"
          alt="faq"
          title="faq"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="space-y-6 md:col-span-3">
        <h2 className="text-3xl font-bold text-secondary">{title}</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-md [box-shadow:0_0_10px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 px-6"
            >
              <div
                className={cn(
                  "flex justify-between items-center list-none text-foreground/90 transition-all duration-100 border-b border-transparent py-4",
                  openIndex === index ? "border-border/30" : "",
                )}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  className={cn(
                    "text-[1rem]! transition-all duration-300",
                    openIndex === index
                      ? "text-primary"
                      : "group-hover:text-primary",
                  )}
                >
                  {item.question}
                </div>
                <Plus
                  className={cn(
                    "w-5 h-5 text-primary transition-transform duration-300",
                    openIndex === index ? "rotate-45" : "",
                  )}
                />
              </div>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground cursor-text py-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;

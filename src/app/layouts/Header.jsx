import { MapPin, Phone } from "lucide-react";
import { GoClockFill } from "react-icons/go";
import { itArtificerData } from "@/shared/db/itArtificer";

const data = [
  {
    icon: <Phone size={18} fill="white" className="stroke-primary stroke-1" />,
    text: itArtificerData.phone[0],
  },
  {
    icon: <MapPin size={18} fill="white" className="stroke-primary stroke-1" />,
    text: itArtificerData.address[0],
  },
  {
    icon: (
      <GoClockFill size={18} fill="white" className="stroke-primary stroke-2" />
    ),
    text: itArtificerData.timings[0],
  },
];

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground text-sm font-medium tracking-wide">
      <div className="flex justify-between gap-4 container py-2.5 h-max">
        {/* Mobile Ticker View */}
        <div className="w-full overflow-hidden whitespace-nowrap mask-linear-gradient">
          <div className="inline-block animate-[scrolling-ticker_40s_linear_infinite]">
            {[...data, ...data, ...data].map((item, index) => (
              <span key={index} className="inline-flex items-center gap-2 mx-4">
                {item.icon}
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

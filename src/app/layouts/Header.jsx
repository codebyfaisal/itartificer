import { MapPin, Phone } from "lucide-react";
import { GoClockFill } from "react-icons/go";
import { itArtificerData } from "@/shared/data/contact";

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
    <header className="bg-primary text-primary-foreground">
      <div className="flex justify-between gap-4 container py-2 h-max">
        <p className="hidden md:block">Innovate Build Launch Grow</p>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between flex-wrap items-center w-full md:w-auto gap-x-4 gap-y-2">
          {data.map((item, index) => (
            <p key={index} className="flex items-center gap-1">
              {item.icon}
              <span>{item.text}</span>
            </p>
          ))}
        </div>

        {/* Mobile Ticker View */}
        <div className="md:hidden w-full overflow-hidden whitespace-nowrap mask-linear-gradient">
          <div className="inline-block animate-[scrolling-ticker_24s_linear_infinite]">
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

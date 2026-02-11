import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import cn from "@/shared/utils/cn";

const SidebarDropdown = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.path}
        className="flex items-center gap-2 h-full px-6 py-3 w-full hover:bg-primary/5 hover:text-primary transition-colors"
      >
        {item.icon && <span>{item.icon}</span>}
        <span>{item.name}</span>
      </Link>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-3 hover:bg-primary/5 hover:text-primary transition-colors"
      >
        <Link
          to={item.path || "#"}
          className="flex items-center gap-2 cursor-pointer"
        >
          {item.icon && <span>{item.icon}</span>}
          <span>{item.name}</span>
        </Link>
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out bg-secondary/5",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {item.children.map((child, index) => (
          <SidebarDropdown key={index} item={child} depth={depth + 1} />
        ))}
      </div>
    </div>
  );
};

export default SidebarDropdown;

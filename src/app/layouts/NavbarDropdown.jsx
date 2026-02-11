import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import cn from "@/shared/utils/cn";

const NavbarDropdown = ({ item, depth = 0, isScrolled }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.path}
        className={cn(
          "opacity-90 hover:opacity-100 block hover:text-primary rounded-sm transition-all whitespace-nowrap",
          pathname === item.path && "text-primary",
          item.navbar
            ? "border-t-2 border-transparent hover:border-primary"
            : "px-4 py-2 hover:bg-primary/10",
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.path || "#"}
        className={cn(
          "flex items-center gap-1 opacity-90 hover:opacity-100 hover:text-primary border-t-2 border-transparent hover:border-primary rounded-md",
          depth > 0 && "px-4 py-2 w-full justify-between border-0",
          pathname.includes(item.path) && "text-primary",
        )}
      >
        {item.name}
        {depth === 0 ? (
          <ChevronDown
            size={14}
            className={cn(
              "transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        ) : (
          <ChevronRight size={14} />
        )}
      </Link>

      <div
        className={cn(
          "absolute bg-background text-secondary shadow-lg rounded-md min-w-50 border border-secondary/10 transition-all duration-300 transform origin-top left-0",
          depth === 0 ? "top-full" : "top-0 left-full",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2 pointer-events-none",
        )}
      >
        {item.children.map((child, index) => (
          <NavbarDropdown
            key={index}
            item={child}
            depth={depth + 1}
            isScrolled={isScrolled}
          />
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;

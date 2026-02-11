import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "@/shared/ui/Button";
import { MenuIcon } from "lucide-react";
import cn from "@/shared/utils/cn";

import { navigations } from "@/shared/data/navigation";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all -mb-21 py-3",
        isScrolled ? "bg-background shadow-md" : "bg-transparent",
        location.pathname !== "/" && "bg-background shadow-md",
        isScrolled && location.pathname !== "/" && "bg-background shadow-md",
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center -translate-x-2 min-w-40 w-40">
          <img
            src="/images/logo/itartificer.webp"
            alt="It Artificer-Logo"
            className={cn(
              "object-contain w-full h-full transition-all duration-300",
              isScrolled || location.pathname !== "/" ? "" : "brightness-0 invert",
            )}
          />
        </div>

        <nav className="hidden mdl:block">
          <ul
            className={cn(
              "flex gap-5 text-md font-medium transition-colors duration-300 items-center",
              isScrolled ? "text-secondary" : "text-primary-foreground",
              location.pathname !== "/" && "text-secondary!",
              isScrolled && location.pathname !== "/" && "text-secondary!",
            )}
          >
            {navigations.map((navigation) =>
              navigation.navbar ? (
                <li key={navigation.name}>
                  <NavbarDropdown item={navigation} isScrolled={isScrolled} />
                </li>
              ) : null,
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <MenuIcon
            size={24}
            onClick={toggleSidebar}
            className={cn(
              "cursor-pointer transition-colors duration-300",
              isScrolled ? "text-secondary" : "text-primary-foreground",
              location.pathname !== "/" && "text-secondary!",
              isScrolled && location.pathname !== "/" && "text-secondary!",
            )}
          />

          <Button
            variant={cn(
              isScrolled ? "primary" : "white",
              location.pathname !== "/" && "primary!",
              isScrolled && location.pathname !== "/" && "white!",
            )}
            className="mdl:px-5 lg:px-8 hidden [@media(min-width:990px)]:block uppercase font-bold"
            onClick={() => navigate("/contact")}
          >
            Contact Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

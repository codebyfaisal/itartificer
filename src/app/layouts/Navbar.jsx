import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "@/shared/ui/Button";
import { MenuIcon } from "lucide-react";
import cn from "@/shared/utils/cn";

import { navigations } from "@/shared/data/navigation";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = ({ toggleSidebar }) => {
  // const location = useLocation();
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
        "fixed w-full top-0 z-50 transition-all duration-300 py-4",
        isScrolled && "nav-glass",
      )}
    >
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center -translate-x-2 min-w-40 w-40"
          aria-label="IT Artificer Home"
        >
          <img
            src="/images/logo/itartificer-white.webp"
            alt="It Artificer-Logo"
            className="object-contain w-full h-full transition-all duration-300"
            title="It Artificer-Logo"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex gap-5 text-md font-medium transition-colors duration-300 items-center">
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
            className="cursor-pointer transition-colors duration-300"
          />

          <Button
            className="md:px-5 lg:px-8 hidden [@media(min-width:990px)]:block uppercase font-bold"
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

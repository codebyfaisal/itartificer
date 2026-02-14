import { useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { X } from "lucide-react";
import { navigations } from "@/shared/data/navigation";
import SidebarDropdown from "./SidebarDropdown";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (!sidebarOpen) return;
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [sidebarOpen, toggleSidebar]);

  useEffect(() => {
    if (sidebarOpen) toggleSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <nav
      className="fixed -right-full top-0 z-9999 w-full h-screen bg-secondary/20 flex items-center justify-end transition-all duration-300 ease-in-out"
      style={{
        right: sidebarOpen ? "0" : "-100%",
        zIndex: sidebarOpen ? "9999" : "-1",
      }}
    >
      <ul
        ref={sidebarRef}
        className="bg-background size-full max-w-xs flex flex-col sidebar border-l border-border shadow-xl overflow-y-auto"
      >
        <li className="bg-primary mb-4 sticky top-0 z-10">
          <button
            type="button"
            className="flex items-center justify-between gap-2 text-primary-foreground w-full hover:bg-primary-foreground/10 py-2 rounded-md transition-all px-6"
            onClick={toggleSidebar}
          >
            <span className="font-semibold text-lg">Menu</span>
            <X size={20} className="stroke-3 cursor-pointer" />
          </button>
        </li>
        {navigations.map((navigation) => (
          <li
            key={navigation.name}
            className="w-full border-b border-secondary/10 font-semibold"
          >
            <SidebarDropdown item={navigation} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

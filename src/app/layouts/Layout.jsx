import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import cn from "@/shared/utils/cn";
import Navbar from "./Navbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Navbar toggleSidebar={toggleSidebar} />
      <main className={cn("overflow-hidden", pathname !== "/" && "mt-20")}>
        <Outlet />
      </main>
      <Footer />
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Layout;

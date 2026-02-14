import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import cn from "@/shared/utils/cn";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Loader } from "@/shared/ui";

const Layout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {navigation.state === "loading" && <Loader />}
      <Navbar toggleSidebar={toggleSidebar} />
      <main className={cn("overflow-hidden")}>
        <Outlet />
      </main>
      <Footer />
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Layout;

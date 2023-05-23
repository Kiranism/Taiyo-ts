import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

type LayoutProps = {};

const Layout: FC<LayoutProps> = () => {
  const location = useLocation();
  const navLinks = [
    { name: "CONTACT", href: "/contact" },
    { name: "LINE GRAPH", href: "/graph" },
    { name: "MAP", href: "/map" },
  ];  

  const activePage = navLinks.find((item) =>
    location.pathname.startsWith(item.href)
  );
  console.log("tets", location, activePage);
  return (
    <>
      <div>
        <Header title={activePage?.name} />
      </div>
      <div className="flex max-h-[calc(100vh-68px)] min-h-[calc(100vh-68px)] ">
        <div className="w-1/5 bg-white hidden sm:block">
          <Sidebar navLinks={navLinks} />
        </div>
        <div className="flex-1 bg-gray-300">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

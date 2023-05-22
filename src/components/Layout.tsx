import { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";

type LayoutProps = {};

const Layout: FC<LayoutProps> = () => {
  const navLinks = [
    { name: "CONTACT PAGE", href: "/" },
    { name: "LINE GRAPH", href: "/graph" },
    { name: "MAP", href: "/map" },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white bg-sky-600 text-center p-4">
          CONTACT PAGE
        </h1>
      </div>
      <div className="flex min-h-[calc(100vh-25px)] ">
        <div className="w-1/5 bg-white">
          <nav>
            <ul>
              {navLinks.map((item) => (
                <li className="flex w-full">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-white bg-black w-full p-2"
                        : "p-2 w-full"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-1 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

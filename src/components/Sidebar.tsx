import { FC } from "react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  navLinks: Array<{
    name: string;
    href: string;
  }>;
  handleSideBarClose?: () => void;
};

const Sidebar: FC<SidebarProps> = ({ navLinks, handleSideBarClose }) => {
  const handleMenu = () => {
    if (handleSideBarClose) {
      handleSideBarClose();
    }
  };
  return (
    <>
      {" "}
      <nav>
        <ul>
          {navLinks.map((item, index) => (
            <li className="flex w-full" key={index}>
              <NavLink
                to={item.href}
                state={{ data: item.name }}
                onClick={handleMenu}
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
    </>
  );
};

export default Sidebar;

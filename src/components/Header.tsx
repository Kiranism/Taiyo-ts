import { FC, useState } from "react";
import Sidebar from "./Sidebar";
import { BiMenuAltLeft } from "react-icons/bi";
type HeaderProps = {
  title?: string;
};

const navLinks = [
  { name: "CONTACT", href: "/contact" },
  { name: "LINE GRAPH", href: "/graph" },
  { name: "MAP", href: "/map" },
];

const Header: FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSideBarClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-sky-600">
      <h1
        className="text-3xl font-bold text-white flex items-center justify-start gap-8
      sm:justify-center text-center p-4"
      >
        <span
          className="text-3xl flex sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiMenuAltLeft />
        </span>{" "}
        {title} PAGE
      </h1>
      {isOpen && (
        <Sidebar handleSideBarClose={handleSideBarClose} navLinks={navLinks} />
      )}
    </div>
  );
};

export default Header;

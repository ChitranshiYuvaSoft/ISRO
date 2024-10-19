import React from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface HeaderProps {
  isOpen: boolean;

  setIsOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-indigo-900 shadow-md">
      <h1 className="w-full h-[auto] flex items-center xl:justify-end px-3 text-3xl font-bold text-sky-400 lg:justify-start md:justify-start">
        <span className="text-orange-400"> IS</span>RO
      </h1>
      <div>
        <button
          className="p-2 text-blue-500 rounded-md lg:hidden" // Hidden on large screens
          onClick={toggleDrawer}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

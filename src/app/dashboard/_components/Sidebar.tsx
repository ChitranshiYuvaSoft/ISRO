// Sidebar.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-blue-950 text-white transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:relative lg:translate-x-0 lg:block`} // Ensures it's always visible on large screens
    >
      <div className="w-full h-[8rem] bg-white p-4 text-lg font-semibold">
        <Image
          src={"/isro-logo.png"}
          alt="isro-logo-not-found"
          width={100}
          height={80}
        />
      </div>
      <ul className="w-full h-[13rem] mt-5 flex items-start justify-around flex-col px-4">
        <Link href={"/dashboard/spacecrafts"}>
          <li className="px-4 py-2 hover:bg-gray-700 text-md font-semibold">
            Spacecrafts
          </li>
        </Link>
        <Link href={"/dashboard/launchers"}>
          <li className="px-4 py-2 hover:bg-gray-700 text-md font-semibold">
            Launchers
          </li>
        </Link>
        <Link href={"/dashboard/customers-satellites"}>
          <li className="px-4 py-2 hover:bg-gray-700 text-md font-semibold">
            Customers Satellites
          </li>
        </Link>
        <Link href={"/dashboard/centres"}>
          <li className="px-4 py-2 hover:bg-gray-700 text-md font-semibold">
            Centres
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

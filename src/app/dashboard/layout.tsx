"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import BreadCrumbs from "../components/BreadCrumbs";

interface DashboardProps {
  children: ReactNode;
}

const Layout: React.FC<DashboardProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full h-screen bg-blue-950 flex relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen || isLargeScreen} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen || isLargeScreen ? "ml-0" : "ml-0"
        } overflow-auto`}
        style={{ zIndex: 1 }}
      >
        <Header isOpen={isOpen || isLargeScreen} setIsOpen={setIsOpen} />

        {/* Main Page */}
        <main className="w-full h-[89vh] bg-slate-100 relative overflow-y-auto">
          <section className="w-[100%] h-[10.8%]">
            <BreadCrumbs
              homeElement={"Home"}
              separator={<span> | </span>}
              activeClasses="text-black"
              containerClasses="flex text-blue-300 text-sm"
              listClasses="hover:underline mx-2 font-bold"
              capitalizeLinks
            />
          </section>
          <section className="w-[100%] h-[89.2%] bg-white"> {children}</section>
        </main>
      </div>
    </section>
  );
};

export default Layout;

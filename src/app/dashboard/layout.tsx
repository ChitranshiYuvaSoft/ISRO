"use client";
import React, { ReactNode, useState } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

interface DashboardProps {
  children: ReactNode;
}

const Layout: React.FC<DashboardProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  return (
    <section className="w-full h-screen bg-blue-950 flex items-center justify-end">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen || isLargeScreen} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header isOpen={isOpen || isLargeScreen} setIsOpen={setIsOpen} />
        {/* Main Page */}
        <main className="w-full h-[89vh] bg-slate-100">
          <section className="w-full h-[20%] bg-blue-100"></section>
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;

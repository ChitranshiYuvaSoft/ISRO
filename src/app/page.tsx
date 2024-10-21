"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-[100vh] bg-blue-900">
        <div className="w-full h-[100%] flex items-center justify-center ">
          <button className="button" onClick={() => router.push("/dashboard")}>
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default page;

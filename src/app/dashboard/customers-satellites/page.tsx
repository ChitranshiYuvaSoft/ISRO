"use client";
import { getsatellitesData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import React, { useEffect } from "react";

const page = () => {
  const { dispatch, satellitesData } = useIsroContext();

  const getSatellitesInfo = async () => {
    const data = await getsatellitesData();
    console.log(data);
    dispatch({
      type: "SET_SATELLITES_DATA",
      payload: data,
    });
  };

  useEffect(() => {
    getSatellitesInfo();
  }, []);

  return (
    <>
      <section className="w-[100%] h-[100%] mt-5 flex flex-wrap items-center xl:justify-start md:justify-around sm:justify-around xs:justify-around py-3">
        {satellitesData.map((data, index) => (
          <>
            <div
              key={index}
              className=" mx-4 my-3 xl:w-[22%] md:w-[44%] lg:w-[45%] sm:w-[80%] xs:w-[85%] p-6 bg-white
 border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-blue-700 bg-gradient-to-br from-blue-800 to-[rgba(75,30,133,0.01)] backdrop-blur-[12px] text-white font-nunito"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
                {data.id}
              </h5>

              <h6 className="mb-3  text-gray-700 dark:text-gray-400 font-semibold">
                {data.country}
              </h6>

              <p>
                {" "}
                <span>Launch Date :</span> {data.launch_date}
              </p>
              <p>
                <span>Mass :</span> {data.mass}
              </p>
              <p>
                <span>launcher :</span> {data.launcher}
              </p>
            </div>
            {/* /* From Uiverse.io by Uncannypotato69 */}
            {/* <div key={index} className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
              <div>
                <h1 className="text-[2em] font-medium">{data.id}</h1>
                <h4 className="text-[2em] font-medium"> {data.country}</h4>
                <p className="text-[0.85em]">
                <span>Launch Date :</span> {data.launch_date}
                </p>
                <p className="text-[0.85em]">
                <span>Mass :</span> {data.mass}
                </p>
                <p className="text-[0.85em]">
                <span>launcher :</span> {data.launcher}
                </p>

              </div>

              <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                <p>More Details..</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div> */}
          </>
        ))}
      </section>
    </>
  );
};

export default page;

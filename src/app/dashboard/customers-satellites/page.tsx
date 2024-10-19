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
      <section className="w-[100%] h-[100%] flex flex-wrap items-center xl:justify-start md:justify-around sm:justify-around xs:justify-around py-3">
        {satellitesData.map((data, index) => (
          <div
            key={index}
            className=" mx-4 my-3 xl:w-[22%] md:w-[44%] lg:w-[45%] sm:w-[80%] xs:w-[85%] p-6 bg-white
 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.id}
            </h5>

            <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
        ))}
      </section>
    </>
  );
};

export default page;

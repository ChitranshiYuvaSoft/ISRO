"use client";
import { getCentresData } from "@/context/IsroAction";
import IsroContext, { useIsroContext } from "@/context/IsroContext";
import React, { useContext, useEffect } from "react";

const page = () => {
  const { dispatch, centresData } = useIsroContext();

  const getCentresInfo = async () => {
    const data = await getCentresData();
    dispatch({
      type: "SET_CENTRES_DATA",
      payload: data,
    });
  };

  useEffect(() => {
    getCentresInfo();
  }, []);

  return (
    <>
      <section className="w-[100%] h-[100%]">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Place
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
              </tr>
            </thead>
            <tbody>
              {centresData.map((data, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.Place}</td>
                  <td className="px-6 py-4">{data.State}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default page;

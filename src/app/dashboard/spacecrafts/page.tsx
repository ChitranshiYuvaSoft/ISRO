"use client"
import { getspacecraftsData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import React, { useEffect } from "react";

const page = () => {
  const { dispatch, spaceCraftsData } = useIsroContext();

  const getSpacecraftsInfo = async () => {
    const data = await getspacecraftsData();
    dispatch({
      type: "SET_SPACECRAFTS_DATA",
      payload: data,
    });
  };

  useEffect(() => {
    getSpacecraftsInfo();
  }, []);

  console.log(spaceCraftsData)

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
               
              </tr>
            </thead>
            <tbody>
              {spaceCraftsData.map((data, index) => (
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

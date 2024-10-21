"use client";
import { getLaunchersData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import React, { useEffect } from "react";

const page = () => {
  const { dispatch, launchersData } = useIsroContext();

  const getLaunchersInfo = async () => {
    const data = await getLaunchersData();
    dispatch({
      type: "SET_LAUNCHERS_DATA",
      payload: data,
    });
  };

  useEffect(() => {
    getLaunchersInfo();
  }, []);

  return (
    <>
      <section className="w-[100%] h-[100%] mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
            </tr>
          </thead>
          <tbody>
            {launchersData.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{data.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default page;

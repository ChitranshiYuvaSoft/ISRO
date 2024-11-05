"use client";
import { getLaunchersData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import { LaunchersData } from "@/context/types";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

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

  // Implement Search Functionality by onkeyUp Event
  const [allCentresData, setAllCentresData] = useState(launchersData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setAllCentresData(launchersData);
      return;
    } else {
      const filterBySearch = launchersData.filter((item: LaunchersData) => {
        if (item.id.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });
      setAllCentresData(filterBySearch);
    }
  }, [launchersData, search]);

  return (
    <>
      <section className="w-[100%] h-[100%] mt-5 flex flex-col items-center justify-center">
        <div className="w-full h-[15%] flex items-center justify-end px-5">
          <span className="w-[40%] h-[50%] flex items-center justify-center bg-white border-b-2 border-slate-300">
            <button className="w-[10%] h-[50%]  flex items-center justify-center first-letter:">
              <FaSearch className="text-xl text-slate-700" />
            </button>

            <input
              type="text"
              id="myInput"
              placeholder="Search for Place.."
              className="w-full h-[100%] py-2 px-3 ml-3 outline-none text-slate-700 "
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>
        <div className="w-full h-[80%] relative overflow-x-auto">
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
              {allCentresData.map((data, index) => (
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
        </div>
      </section>
    </>
  );
};

export default page;

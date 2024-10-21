"use client";
import { getCentresData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchData from "../_components/SearchData";

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

  // Implement Search Functionality by onkeyUp Event
  const [allCentresData, setAllCentresData] = useState(centresData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setAllCentresData(centresData);
      return;
    } else {
      const filterBySearch = centresData.filter((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });
      setAllCentresData(filterBySearch);
    }
  }, [centresData, search]);

  return (
    <>
      <section className="w-[100%] h-[100%]">
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
              {allCentresData.map((data, index) => (
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

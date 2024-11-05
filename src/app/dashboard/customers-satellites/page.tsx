"use client";
import { getsatellitesData } from "@/context/IsroAction";
import { useIsroContext } from "@/context/IsroContext";
import { SatellitesData } from "@/context/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const { dispatch, satellitesData } = useIsroContext();

  const getSatellitesInfo = async () => {
  try {
    const data = await getsatellitesData();
    dispatch({
      type: "SET_SATELLITES_DATA",
      payload: data,
    });
  } catch (error) {
    toast.error("Data Not Get!!")
  }
  };

  useEffect(() => {
    getSatellitesInfo();
  }, []);

  // Implement Search Functionality by onkeyUp Event
  const [allCentresData, setAllCentresData] = useState(satellitesData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setAllCentresData(satellitesData);
      return;
    } else {
      const filterBySearch = satellitesData.filter((item: SatellitesData) => {
        if (item.id.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });
      setAllCentresData(filterBySearch);
    }
  }, [satellitesData, search]);

  // Open Model
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<SatellitesData>();

  const openReadMore = (data: any) => {
    setOpen(true);
    console.log(data);
    setDetails(data);
  };

  const closeReadMore = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="w-[100%] h-[100%] mt-5 flex flex-wrap items-center xl:justify-start md:justify-around sm:justify-around xs:justify-around py-3">
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
        <div className="w-[100%] h-[100%] mt-5 flex flex-wrap items-center xl:justify-start md:justify-around sm:justify-around xs:justify-around py-3">
          {allCentresData.map((data, index) => (
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

                <button
                  className="px-3 py-2 text-center font-bold text-sm border-4 border-black"
                  onClick={() => openReadMore(data)}
                >
                  Read More
                </button>
              </div>
            </>
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 py-4 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-semibold">{details?.id}</h2>
              <p>
                <span>Launch Date :</span> {details?.launch_date}
              </p>
              <p>
                <span>Mass :</span> {details?.mass}
              </p>
              <p>
                <span>launcher :</span> {details?.launcher}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={closeReadMore}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default page;

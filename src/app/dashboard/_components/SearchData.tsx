"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface AllData {
  id: string;
  name: string;
  Place: string;
  State: string;
}

interface SearchDataPrope {
  data: AllData[];
  searchData: 
  setSearchData: () => void;
}

const SearchData: React.FC<SearchDataPrope> = ({data, searchData, setSearchData}) => {
  const [search, setSearch] = useState<string>("");
  // const [data, setData] = useState(Data);

  console.log(data);

  useEffect(() => {
    if (search === "") {
      setSearchData(data);
      return;
    } else {
      const filterBySearch = data.filter((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });
      setSearchData(filterBySearch);
    }
  }, [data, search]);

  return (
    <div className="w-full h-[15%] flex items-center justify-end px-5 mb-3">
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
  );
};

export default SearchData;

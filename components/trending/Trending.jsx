import React, { useState } from "react";
import { useSelector } from "react-redux";

import TrendingComponent from "./TrendingComponent";

export default function Trending() {
  const [shown, setShown] = useState(true);

  const changeButtonNameAndComponentVisibility = () => {
    setShown(!shown);
  };

  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <div
      className={`px-[35px] pt-8 w-full ${
        isDark ? "bg-[#21232d] text-white" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4 gap-x-2">
        <div className="w-10/12">
          <h1 className="font-bold text-2xl">
            Today's Cryptocurrency Prices by Market Cap
          </h1>
        </div>
        <div>
          <button
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={changeButtonNameAndComponentVisibility}
          >
            {shown ? "Hide Component" : "Show"}
          </button>
        </div>
      </div>
      <div className="pb-8"> {shown ? <TrendingComponent /> : null}</div>
    </div>
  );
}

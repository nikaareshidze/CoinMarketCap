import React from "react";
import { useSelector } from "react-redux";

export default function CryptocurrenciesList(props) {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <div
      className={`flex items-center gap-x-6 border-y border-b-gray-300 ${
        isDark ? "bg-[#17171a] text-white" : ""
      }`}
    >
      <h1 className="w-9 h-20 flex justify-start items-center text-sm p-2.5">
        {props.item.id}
      </h1>
      <div className="h-20 w-48 flex justify-start items-center text-sm p-2.5 gap-x-1 ">
        <img src={`${props.item.image}`} width="25" />
        <h1 className="font-bold">{props.item.name}</h1>
        <h1 className="font-extralight">{props.item.symbol}</h1>
      </div>
      <h1 className="h-20 w-28 flex justify-end items-center text-sm p-2.5 ">
        ${props.item.currentPrice}
      </h1>
      {props.item.priceChangePercentage24h > 0 ? (
        <h1 className="h-20 w-40 flex justify-end items-center text-sm p-2.5 text-green-400">
          {props.item.priceChangePercentage24h}%
        </h1>
      ) : (
        <h1 className="h-20 w-40 flex justify-end items-center text-sm p-2.5 text-red-400">
          {props.item.priceChangePercentage24h}%
        </h1>
      )}

      <h1 className="h-20 w-32 flex justify-end items-center text-sm p-2.5 ">
        ${props.item.marketCap}
      </h1>
      <h1 className="h-20 w-64 flex justify-end items-center text-sm p-2.5">
        {props.item.circulatingSupply} {props.item.symbol}
      </h1>
    </div>
  );
}

import React from "react";

export default function CryptocurrenciesListTitles(props) {
  return (
    <div className="flex items-center gap-x-6 font-bold border-y border-b-gray-300">
      <h1 className="w-9 h-10 flex justify-start items-center text-sm p-2.5">
        #
      </h1>
      <div className="h-10 w-48 flex justify-start items-center text-sm p-2.5 gap-x-1 ">
        {props.item.name}
      </div>
      <h1 className="h-10 w-28 flex justify-end items-center text-sm p-2.5 ">
        {props.item.currentPrice}
      </h1>
      <h1 className="h-10 w-40 flex justify-end items-center text-sm p-2.5">
        {props.item.priceChangePercentage24h}
      </h1>
      <h1 className="h-10 w-32 flex justify-center items-center text-sm p-2.5 ">
        {props.item.marketCap}
      </h1>
      <h1 className="h-10 w-64 flex justify-end items-center text-sm p-2.5">
        {props.item.circulatingSupply}
      </h1>
    </div>
  );
}

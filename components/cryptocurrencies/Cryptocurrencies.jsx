import { useState, useEffect } from "react";
import axios from "axios";

export default function Cryptocurrencies() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setData(Object.values(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let cryptocurrenciesList = [
    {
      id: 0,
      name: "Name",
      symbol: "Symbol",
      image: "",
      currentPrice: "Price",
      priceChangePercentage24h: "24h %",
      marketCap: "Market Cap",
      circulatingSupply: "Circulating Supply",
    },
  ];

  if (data) {
    for (let i = 0; i <= 29; i++) {
      cryptocurrenciesList.push({
        id: i + 1,
        name: data[i].name,
        symbol: data[i].symbol,
        image: data[i].image,
        currentPrice: data[i].current_price,
        priceChangePercentage24h:
          data[i].price_change_percentage_24h.toFixed(2),
        marketCap: data[i].market_cap.toLocaleString("en-US"),
        circulatingSupply: data[i].circulating_supply.toLocaleString("en-US", {
          maximumFractionDigits: 0,
        }),
      });
    }
  }

  return (
    <div className="mt-8 mx-5">
      {cryptocurrenciesList.map((item) => {
        return (
          <>
            {item.id == 0 ? (
              <div className="flex items-center gap-x-6 font-bold">
                <h1 className="w-9 h-10 flex justify-start items-center text-sm p-2.5">
                  #
                </h1>
                <div className="h-10 w-48 flex justify-start items-center text-sm p-2.5 gap-x-1 ">
                  Name
                </div>
                <h1 className="h-10 w-28 flex justify-end items-center text-sm p-2.5 ">
                  Price
                </h1>
                <h1 className="h-10 w-40 flex justify-end items-center text-sm p-2.5">
                  24h %
                </h1>
                <h1 className="h-10 w-32 flex justify-center items-center text-sm p-2.5 ">
                  Market Cap
                </h1>
                <h1 className="h-10 w-48 flex justify-end items-center text-sm p-2.5">
                  Circulating Supply
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-x-6">
                <h1 className="w-9 h-20 flex justify-start items-center text-sm p-2.5">
                  {item.id}
                </h1>
                <div className="h-20 w-48 flex justify-start items-center text-sm p-2.5 gap-x-1 ">
                  <img src={`${item.image}`} width="25" />
                  <h1 className="font-bold">{item.name}</h1>
                  <h1 className="font-extralight">{item.symbol}</h1>
                </div>
                <h1 className="h-20 w-28 flex justify-end items-center text-sm p-2.5 ">
                  ${item.currentPrice}
                </h1>
                {item.priceChangePercentage24h > 0 ? (
                  <h1 className="h-20 w-40 flex justify-end items-center text-sm p-2.5 text-green-400">
                    {item.priceChangePercentage24h}%
                  </h1>
                ) : (
                  <h1 className="h-20 w-40 flex justify-end items-center text-sm p-2.5 text-red-400">
                    {item.priceChangePercentage24h}%
                  </h1>
                )}

                <h1 className="h-20 w-32 flex justify-center items-center text-sm p-2.5 ">
                  ${item.marketCap}
                </h1>
                <h1 className="h-20 w-48 flex justify-end items-center text-sm p-2.5">
                  {item.circulatingSupply} {item.symbol}
                </h1>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

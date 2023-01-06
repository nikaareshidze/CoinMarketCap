import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setData(Object.values(res.data)[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let trendingComponentElement = [];

  if (data) {
    for (let i = 0; i <= 2; i++) {
      trendingComponentElement.push({
        name: data[i].item.name,
        symbol: data[i].item.symbol,
        id: data[i].item.score,
        image: data[i].item.small,
        marketCapRank: data[i].item.market_cap_rank,
      });
    }
  }

  return (
    <div className="w-2/6 bg-white px-8 pt-4 pb-8 rounded-xl">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="font-bold">Trending</h1>
        <h1 className="text-sm text-blue-700">Market Cap</h1>
      </div>
      <div>
        {trendingComponentElement.map((item) => {
          return (
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-x-4 h-8 items-center">
                <div className="w-4 flex justify-center items-center">
                  <h1 className="text-xs font-extralight">{item.id + 1}</h1>
                </div>
                <div className="flex items-center gap-x-2">
                  <img src={`${item.image}`} width="15" />
                  <h1 className="text-sm font-medium">{item.name}</h1>
                  <h1 className="text-xs font-extralight">{item.symbol}</h1>
                </div>
              </div>
              <div>
                <h1 className="flex justify-center items-center text-sm">
                  {item.marketCapRank}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function GlobalCryptoInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => {
        setData(Object.values(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const marketCapCryptosObject = [];
  const marketCapCryptosList = [];
  let marketCapSum = 0;

  data
    ? marketCapCryptosObject.push(Object.values(data)[0].total_market_cap)
    : "";

  data
    ? marketCapCryptosList.push(Object.values(marketCapCryptosObject[0]))
    : "";

  marketCapCryptosList.length > 0 ? x() : "";

  function x() {
    for (let i = 0; i < marketCapCryptosList[0].length; i++) {
      marketCapSum = marketCapSum + marketCapCryptosList[0][i];
    }
  }

  return (
    <div className="px-[15px] py-[5px] bg-white w-full border-b border-b-gray-300">
      <div className="mx-[20px] flex items-center h-[40px] gap-x-3">
        <div className="flex gap-x-1 justify-center items-center">
          <h1 className="text-xs">Cryptos:</h1>
          <p className="text-blue-700 text-xs">
            {data
              ? data[0].active_cryptocurrencies.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })
              : null}
          </p>
        </div>
        <div className="flex gap-x-1 justify-center items-center">
          <h1 className="text-xs">Exchanges:</h1>
          <p className="text-blue-700 text-xs">
            {data
              ? data[0].markets.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })
              : null}
          </p>
        </div>
        <div className="flex gap-x-1 justify-center items-center">
          <h1 className="text-xs">Market Cap:</h1>
          <p className="text-blue-700 text-xs">
            {marketCapSum.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

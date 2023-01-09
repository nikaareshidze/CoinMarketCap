import { useState, useEffect } from "react";
import axios from "axios";
import CryptocurrenciesListTitles from "./CryptocurrenciesListTitles";
import CryptocurrenciesList from "./CryptocurrenciesList";
import CryptocurrenciesFilter from "./CryptocurrenciesFilter";

export default function Cryptocurrencies() {
  const [data, setData] = useState(null);
  const [showRowsNumber, setShowRowsNumber] = useState(19);

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
    for (let i = 0; i <= showRowsNumber; i++) {
      cryptocurrenciesList.push({
        id: i + 1,
        name: data[i].name,
        symbol: data[i].symbol,
        image: data[i].image,
        currentPrice: data[i].current_price.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        }),
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
    <div className="flex justify-between mt-8 px-[15px] mx-[20px]">
      <div className="w-10/12">
        {cryptocurrenciesList.map((item) => {
          return (
            <>
              {item.id == 0 ? (
                <CryptocurrenciesListTitles item={item} />
              ) : (
                <CryptocurrenciesList item={item} />
              )}
            </>
          );
        })}
      </div>
      <div>
        <CryptocurrenciesFilter
          showRowsNumber={showRowsNumber}
          setShowRowsNumber={setShowRowsNumber}
        />
      </div>
    </div>
  );
}

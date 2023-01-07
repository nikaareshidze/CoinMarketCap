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
    { name: "Name", symbol: "Symbol", currentPrice: "Price" },
  ];

  if (data) {
    for (let i = 0; i <= 10; i++) {
      cryptocurrenciesList.push({
        name: data[i].name,
        symbol: data[i].symbol,
        currentPrice: data[i].current_price,
      });
    }
  }
  console.log(cryptocurrenciesList);

  return (
    <div>
      {cryptocurrenciesList.map((item) => {
        return (
          <div className="flex">
            <h1>{item.symbol}</h1>
            <h1>{item.name}</h1>
            <h1>{item.currentPrice}</h1>
          </div>
        );
      })}
    </div>
  );
}

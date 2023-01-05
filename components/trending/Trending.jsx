import TrendingComponent from "./TrendingComponent";

export default function Trending() {
  return (
    <div className="px-[15px]">
      <h1 className="mb-4">Today's Cryptocurrency Prices by Market Cap</h1>
      <TrendingComponent />
    </div>
  );
}

import TrendingComponent from "./TrendingComponent";

export default function Trending() {
  return (
    <div className="px-[15px] mx-[20px] mt-8">
      <h1 className="mb-4 font-bold text-2xl">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <TrendingComponent />
    </div>
  );
}

export default function HeaderNavbar() {
  return (
    <>
      <div className="flex items-center gap-x-2 pl-5 text-sm font-medium max-[800px]:hidden">
        <h1 className="px-2">Cryptocurrencies</h1>
        <h1 className="px-2">Exchanges</h1>
        <h1 className="px-2">Community</h1>
        <h1 className="px-2">Products</h1>
        <h1 className="px-2">Learn</h1>
      </div>
      <div className="min-[800px]:hidden">
        <h1 className="px-2">Menu</h1>
      </div>
    </>
  );
}

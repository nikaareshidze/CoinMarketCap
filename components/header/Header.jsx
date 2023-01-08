import HeaderNavbar from "./HeaderNavbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="px-[15px] py-[5px] bg-white w-full border-b border-b-gray-300">
      <div className="mx-[20px] flex items-center h-[60px]">
        <Logo />
        <HeaderNavbar />
      </div>
    </div>
  );
}

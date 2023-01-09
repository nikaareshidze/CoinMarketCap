import { useDispatch, useSelector } from "react-redux";

import HeaderNavbar from "./HeaderNavbar";
import Logo from "./Logo";
import { darkModeActions } from "../../store/darkMode";

export default function Header() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <div
      className={`px-[15px] py-[5px] w-full border-b ${
        isDark
          ? "bg-[#17171a] text-white border-black"
          : "bg-white border-b-gray-300"
      }`}
    >
      <div className="mx-[20px] flex items-center h-[60px]">
        <Logo />
        <HeaderNavbar />
      </div>
    </div>
  );
}

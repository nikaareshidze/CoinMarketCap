import HeaderNavbar from "./HeaderNavbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex items-center px-[15px] py-[5px] h-[60px]">
      <Logo />
      <HeaderNavbar />
    </div>
  );
}

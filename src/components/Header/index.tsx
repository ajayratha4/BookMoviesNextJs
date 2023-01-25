import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between h-full w-full px-2  dark:bg-secondary">
      <div className="h-full flex items-center gap-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/movies"}>Movies</Link>
      </div>
      <div className="h-full flex items-center">
        <ThemeSwitch />
      </div>
    </div>
  );
};
export default Header;

import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="h-full w-full bg-primary dark:bg-secondary">
      <div className=" h-full flex justify-end mr-2 items-center">
        <ThemeSwitch />
      </div>
    </div>
  );
};
export default Header;

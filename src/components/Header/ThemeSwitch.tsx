"use client";

import { useEffect, useState } from "react";
import { DarkIcon, LightIcon } from "@/components/common/icons";

const ThemeSwitch = () => {
  // useEffect(() => {
  //   document.cookie = "username=John Doe";
  // }, []);

  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(true);
    }
  };

  return (
    <div
      id="ripple"
      onClick={toggle}
      className="rounded text-secondary dark:text-white"
    >
      {isDark ? <LightIcon /> : <DarkIcon />}
    </div>
  );
};

export default ThemeSwitch;

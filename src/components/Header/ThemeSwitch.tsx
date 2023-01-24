"use client";

import { useState } from "react";
import { DarkIcon, LightIcon } from "@/components/common/icons";

const ThemeSwitch = () => {
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
    <div id="ripple" onClick={toggle} className="rounded text-white">
      {isDark ? <LightIcon /> : <DarkIcon />}
    </div>
  );
};

export default ThemeSwitch;

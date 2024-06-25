"use client";

import { useThemeContext } from "@/context/themeContext";
import { BsMoon, BsSun } from "react-icons/bs";


export default function ThemeSwitch() {
 const  {theme, toggleTheme} = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="fixed flex items-center justify-center bottom-5 right-5 size-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] rounded-full border border-opacity-40 shadow-2xl border-white bg-white hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

import React, { useCallback, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const handleToggleTheme = useCallback(() => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setCurrentTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setCurrentTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 z-[999]">
      <nav className="px-4 backdrop-blur py-2 mx-auto border dark:border-gray-700 max-w-2xl w-full rounded-md">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h3 className="font-bold">Dodi Aditya</h3>
          </Link>
          <div className="flex items-center">
            <Link to="/projects">
              <p className="text-gray-700 text-sm dark:hover:text-white dark:text-gray-300 cursor-pointer">
                Projects
              </p>
            </Link>
            <p className="mx-2 dark:text-gray-400">|</p>
            <button
              onClick={handleToggleTheme}
              className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md"
            >
              {currentTheme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

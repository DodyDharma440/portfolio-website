import React, { useCallback, useState } from "react";
import { HiExternalLink, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

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
    <>
      <div className="bg-black">
        <div className="max-w-2xl mx-auto py-4">
          <p className="text-sm text-white flex px-4">
            Check my portfolio in Terminal styles!{" "}
            <a
              href="https://dodi-aditya-terminal.vercel.app"
              target="_blank"
              className="underline flex ml-2 items-center"
            >
              Go to website <HiExternalLink className="ml-1" />
            </a>
          </p>
        </div>
      </div>
      <div className="sticky top-4 inset-x-0 z-[999]">
        <div className="mx-auto max-w-2xl">
          <nav className="px-4 backdrop-blur mt-4 py-2 mx-3 border dark:border-gray-700 rounded-md">
            <div className="flex justify-between items-center">
              <Link to="/">
                <h3 className="font-bold">Dodi Aditya</h3>
              </Link>
              <div className="flex items-center">
                <Link to={pathname === "/projects" ? "/" : "/projects"}>
                  <p className="text-gray-700 text-sm dark:hover:text-white dark:text-gray-300 cursor-pointer">
                    {pathname === "/projects" ? "Home" : "Projects"}
                  </p>
                </Link>
                <p className="mx-2 dark:text-gray-400">|</p>
                <button
                  onClick={handleToggleTheme}
                  className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md"
                >
                  {currentTheme === "dark" ? (
                    <HiOutlineSun />
                  ) : (
                    <HiOutlineMoon />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

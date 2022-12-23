import React, { useEffect } from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const colorTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (
      colorTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorTheme]);

  return <AppRoutes />;
};

export default App;

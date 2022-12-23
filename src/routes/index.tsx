import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageLayout } from "../components";
import { About, Home, Projects } from "../pages";

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<>Not found</>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

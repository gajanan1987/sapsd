import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
// import ProtectedRotes from "./ProtectedRotes";

const Home = lazy(() => import("../pages/home/Home"));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

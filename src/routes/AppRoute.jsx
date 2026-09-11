import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRotes from "./ProtectedRotes";
import ProtectedLectureRoutes from "./ProtectedLectureRoutes";
import ClassPage from "../pages/lecture/ClassPage";

const Lecture = lazy(() => import("../pages/lecture/Lecture"));

const Home = lazy(() => import("../pages/home/Home"));
const AuthPage = lazy(() => import("../pages/auth/AuthPage"));

const DefinitionPage = lazy(() => import("../pages/definition/DefineComapany"));

const AccountPage = lazy(() => import("../pages/account/Account"));

const Tcodes = lazy(() => import("../pages/tcodes/SapReference"));

const EnterpriseStructure = lazy(
  () => import("../pages/enterprise/EnterpriseStructure"),
);

const EnterpriseStructureList = lazy(
  () => import("../pages/enterprise/EnterpriseLists"),
);

const CompDetailsPage = lazy(
  () => import("../pages/compdetails/CompanyDetails"),
);

const ResetPassword = lazy(
  () => import("../pages/auth/components/ResetPassword"),
);

// Pricing lectures
const Pricing1 = lazy(() => import("../pages/lecture/pricing/Pricing1"));

const Pricing2 = lazy(() => import("../pages/lecture/pricing/Pricing2"));

const Pricing3 = lazy(() => import("../pages/lecture/pricing/Pricing3"));

const Pricing4 = lazy(() => import("../pages/lecture/pricing/Pricing4"));

const Pricing5 = lazy(() => import("../pages/lecture/pricing/Pricing5"));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />

        {/* NORMAL LOGIN PROTECTION */}
        <Route element={<ProtectedRotes />}>
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/account" element={<AccountPage />} />

          <Route path="/definition" element={<DefinitionPage />} />

          <Route path="/Comp-details" element={<CompDetailsPage />} />

          <Route path="/enterprise" element={<EnterpriseStructure />} />

          <Route path="/sap-tcodes" element={<Tcodes />} />
          <Route path="/lectures" element={<Lecture />} />

          <Route
            path="/enterprise-list"
            element={<EnterpriseStructureList />}
          />
        </Route>

        {/* LECTURE PROTECTION */}
        <Route element={<ProtectedLectureRoutes />}>
          <Route
            path="/lectures/:category/:lectureNo"
            element={<ClassPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

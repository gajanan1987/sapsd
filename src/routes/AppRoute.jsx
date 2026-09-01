import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import ProtectedRotes from "./ProtectedRotes";

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

////
const Pricing1 = lazy(() => import("../pages/lecture/pricing/Pricing1"));
const Pricing2 = lazy(() => import("../pages/lecture/pricing/Pricing2"));
const Pricing3 = lazy(() => import("../pages/lecture/pricing/Pricing3"));
const Pricing4 = lazy(() => import("../pages/lecture/pricing/Pricing4"));
const Pricing5 = lazy(() => import("../pages/lecture/pricing/Pricing5"));
// const Pricing6 = lazy(() => import("../pages/lecture/pricing/Pricing6"));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        {/* PRICING */}
        <Route path="/pricing/lect-65" element={<Pricing1 />} />
        <Route path="/pricing/lect-66" element={<Pricing2 />} />
        <Route path="/pricing/lect-67" element={<Pricing3 />} />
        <Route path="/pricing/lect-68" element={<Pricing4 />} />
        <Route path="/pricing/lect-69" element={<Pricing5 />} />
        {/* <Route path="/pricing/lect-70" element={<Pricing6 />} /> */}

        <Route element={<ProtectedRotes />}>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/Comp-details" element={<CompDetailsPage />} />
          <Route path="/enterprise" element={<EnterpriseStructure />} />
          <Route path="/sap-tcodes" element={<Tcodes />} />
          <Route
            path="/enterprise-list"
            element={<EnterpriseStructureList />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

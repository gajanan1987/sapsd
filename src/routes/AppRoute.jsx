import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import ProtectedRotes from "./ProtectedRotes";

const Home = lazy(() => import("../pages/home/Home"));
const AuthPage = lazy(() => import("../pages/auth/AuthPage"));
const DefinitionPage = lazy(() => import("../pages/definition/codedefinition"));
const AccountPage = lazy(() => import("../pages/account/Account"));
const EnterpriseStructure = lazy(
  () => import("../pages/enterprise/enterprise"),
);

const EnterpriseStructureList = lazy(
  () => import("../pages/enterprise/enterpriseList"),
);
const CompDetailsPage = lazy(
  () => import("../pages/compdetails/CompanyDetails"),
);
const ResetPassword = lazy(
  () => import("../pages/auth/components/ResetPassword"),
);

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route element={<ProtectedRotes />}>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/Comp-details" element={<CompDetailsPage />} />
          <Route path="/enterprise" element={<EnterpriseStructure />} />
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

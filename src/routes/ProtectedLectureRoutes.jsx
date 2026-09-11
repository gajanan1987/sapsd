import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../redux/authSlice";

const ProtectedLectureRoutes = () => {
  const dispatch = useDispatch();

  const { user, profile, profileStatus } = useSelector((state) => state.auth);

  // Load profile
  useEffect(() => {
    if (user && profileStatus === "idle") {
      dispatch(getProfile());
    }
  }, [user, profileStatus, dispatch]);

  // 1. User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Profile is loading
  if (profileStatus === "idle" || profileStatus === "loading") {
    return <div>Loading profile...</div>;
  }

  // 3. Profile loading failed
  if (profileStatus === "failed") {
    return <Navigate to="/" replace />;
  }

  // 4. Get lectallow from profile table
  const lectallow = profile?.[0]?.lectallow;

  // 5. Lecture access denied
  if (lectallow !== true) {
    console.log("❌ Lecture access denied");

    return <Navigate to="/" replace />;
  }

  // 6. Lecture access allowed
  return <Outlet />;
};

export default ProtectedLectureRoutes;

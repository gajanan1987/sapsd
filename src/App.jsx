import AppRoutes from "./routes/AppRoute";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { fetchSession, getProfile } from "./redux/authSlice";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const { session, loading } = useAuth();
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((s) => s.auth);

  const location = useLocation();

  const isLecturePage = location.pathname.includes("lect-");
  useEffect(() => {
    if (!user) {
      dispatch(fetchSession());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getProfile());
    }
  }, [dispatch, user]);
  return (
    <>
      <Header />
      <div
        className={`conatiner-common ${session && user ? "loginuser" : "logoutuser"} ${isLecturePage ? "lectpage" : "diffpage"} `}
      >
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

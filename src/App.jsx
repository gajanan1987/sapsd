import AppRoutes from "./routes/AppRoute";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { fetchSession } from "./redux/authSlice";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
function App() {
  const { session, loading } = useAuth();
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((s) => s.auth);
  useEffect(() => {
    if (!user) {
      dispatch(fetchSession());
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <div
        className={`conatiner-common ${session && user ? "loginuser" : "logoutuser"} `}
      >
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

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

  useEffect(() => {
    const themes = [
      "blue",
      "teal",
      "orange",
      "purple",
      "red",
      "green",
      "gold",
      "indigo",
      "pink",
      "brown",
      "cyan",
    ];

    const checkHeaderClass = () => {
      themes.forEach((theme) => {
        const headerExists = document.querySelector(`.header-${theme}`);

        document.body.classList.toggle(
          `body-${theme}`,
          !!headerExists
        );
      });
    };

    // Check after React renders
    checkHeaderClass();

    // Watch for route/component changes
    const observer = new MutationObserver(checkHeaderClass);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();

      themes.forEach((theme) => {
        document.body.classList.remove(`body-${theme}`);
      });
    };
  }, []);

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

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { fetchDefinition, deleteComp } from "../../redux/definationSlice";
import custMessage from "../../utils/toast";
import CompanyCard from "./component/CompanyCard";
import Banner from "./component/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { session, loading } = useAuth();
  const { user } = useSelector((s) => s.auth);

  const { items, fetchStatus } = useSelector((s) => s.definition);

  useEffect(() => {
    if (user) {
      dispatch(fetchDefinition());
    }
  }, [dispatch, user]);

  const deleteCompById = useCallback(
    (id, cname) => {
      dispatch(deleteComp(id))
        .unwrap()
        .then(() => {
          custMessage.success(`${cname} deleted successfully`);
        })
        .catch((err) => {
          custMessage.error(err.message || "Failed to delete Company Code");
        });
    },
    [dispatch],
  );

  if (loading || fetchStatus === "loading") {
    return <p className="loading">Loading...</p>;
  }
  const renderCompany = () => {
    if (fetchStatus === "loading") return <>Loading...</>;
    if (fetchStatus === "failed")
      return <h1>Error loading loans. Please try again.</h1>;
    if (items?.length > 0) {
      return items.map((item, i) => {
        return (
          <CompanyCard
            key={item.id}
            item={item}
            deleteCompById={deleteCompById}
          />
        );
      });
    }
    return <h1>No Enterprise Structure Definition </h1>;
  };

  return (
    <>
      <Banner session={session} user={user} />

      {user ? <div className="card-wrapper">{renderCompany()}</div> : null}
    </>
  );
};

export default Home;

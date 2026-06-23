import { useDispatch, useSelector } from "react-redux";
import { compDetails } from "../../../redux/definationSlice";
import { useNavigate } from "react-router";
const EnterpriseCard = ({ item, status }) => {
  console.log("🚀 ~ EnterpriseCard ~ status:", status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = item?.[0] || {};

  const { items, fetchStatus } = useSelector((s) => s.definition);

  const handleClick = async (id) => {
    const data = await dispatch(compDetails(id));
    navigate("/enterprise", { state: data.payload });
  };

  return (
    <div className="card-wrapper">
      {/* {status === "loading" && <>Loading...</>}
      {status === "failed" && <h1>Error loading loans. Please try again.</h1>}
      {item.length > 0 ? (
        item.map((data, i) => {
          return (
            <div className={`card`} onClick={() => handleClick(id)}>
              <div className="left">
                <p className="comp-code" style={{ marginBottom: "3px" }}>
                  Company Code: {data.company_code[0].code}
                </p>
                <p className="f14">Name: {data.company_code[0].name}</p>
              </div>
            </div>
          );
        })
      ) : (
        {
          status === "loading" ? "" :<h1 className="no-data-msg">No Enterprise Structure Assignment </h1>
        }
        
      )} */}
      {item?.length > 0 ? (
        item.map((data, i) => (
          <div key={i} className="card" onClick={() => handleClick(data.id)}>
            <div className="left">
              <p className="comp-code" style={{ marginBottom: "3px" }}>
                Company Code: {data.company_code?.[0]?.code}
              </p>
              <p className="f14">Name: {data.company_code?.[0]?.name}</p>
            </div>
          </div>
        ))
      ) : status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <h1 className="no-data-msg">No Enterprise Structure Assignment</h1>
      )}
    </div>
  );
};

export default EnterpriseCard;

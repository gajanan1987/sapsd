import { useDispatch, useSelector } from "react-redux";
import { compDetails } from "../../../redux/definationSlice";
import { useNavigate } from "react-router";
const EnterpriseCard = ({ item, status }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = item?.[0] || {};

  const handleClick = async (id) => {
    const data = await dispatch(compDetails(id));
    console.log("🚀 ~ handleClick ~ data:", data.payload);
    // return;
    navigate("/enterprise", { state: data.payload });
  };

  return (
    <div className="card-wrapper">
      {item.length > 0 &&
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
        })}
    </div>
  );
};

export default EnterpriseCard;

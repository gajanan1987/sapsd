import { useDispatch, useSelector } from "react-redux";
import { compDetails } from "../../redux/definationSlice";
import { useNavigate } from "react-router";
const CompanyCard = ({ item, key, deleteCompById }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cc_code, cc_name, id } = item;
  // const remEmi = remaningEmi === 0;

  const handleClick = async (id) => {
    const data = await dispatch(compDetails(id));
    navigate("/Comp-details", { state: data });
  };

  const handleDelete = (e) => {
    deleteCompById(id, cc_name);
    e.stopPropagation();
  };
  const handleEdit = async (e) => {
    e.stopPropagation();
    getLoanDetails(id, "edit");
  };
  return (
    <div className={`loan-card`} onClick={() => handleClick(id)}>
      <div className="left">
        <p className="loan-name" style={{ marginBottom: "3px" }}>
          Company Code: {cc_name}
        </p>
        <p className="f14">Code: {cc_code}</p>
      </div>
      <div className="right">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-green" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;

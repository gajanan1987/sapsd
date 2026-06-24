import { useDispatch, useSelector } from "react-redux";
import { compDetails } from "../../../redux/definationSlice";
import { useNavigate } from "react-router";
const CompanyCard = ({ item, deleteCompById, editCompById }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { company_code, id } = item;

  const handleClick = async (id) => {
    console.log("🚀 ~ handleClick ~ id:", id);
    const data = await dispatch(compDetails({ Id: id, type: "view" }));
    navigate("/Comp-details", { state: data });
  };

  const handleDelete = (e) => {
    deleteCompById(id, company_code[0].name);
    e.stopPropagation();
  };
  const handleEdit = async (e) => {
    e.stopPropagation();
    editCompById(id, "edit");
    navigate("/definition");
  };
  return (
    <div className={`card`} onClick={() => handleClick(id)}>
      <div className="left">
        <p className="comp-code" style={{ marginBottom: "3px" }}>
          Company Code: {company_code[0].code}
        </p>
        <p className="f14">Name: {company_code[0].name}</p>
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

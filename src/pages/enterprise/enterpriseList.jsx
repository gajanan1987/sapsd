import React, { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { generateEnterpriseAssignments } from "../../utils/enterpriseGenerator";
import { fetchDefinition } from "../../redux/definationSlice";
import AssignmentTable from "./component/AssignmentTable";
import { useLocation } from "react-router-dom";
import EnterpriseCard from "./component/enterpriseCard";

const EnterpriseStructure = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  useEffect(() => {
    if (user) {
      dispatch(fetchDefinition());
    }
  }, [dispatch, user]);
  const { items, fetchStatus } = useSelector((s) => s.definition);
  return (
    <div className="enterprise-list-wrapper">
      <div className="page-header">
        <Link className="btn btn-primary btn-back" to="/">
          Back
        </Link>
        <h1>Enterprise Structure Assignment List</h1>
      </div>
      <div>
        <EnterpriseCard item={items} status={fetchStatus} />
      </div>
    </div>
  );
};

export default EnterpriseStructure;

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { restStatus } from "../../redux/definationSlice";
// import { signOut } from "../../redux/authSlice";
// import {
//   computeScheduleFor,
//   deleteLoan,
//   fetchLoans,
//   loanDetails,
//   removeSummery,
// } from "../../redux/loanSlice";
// import CustomModal from "../../components/CustomModal";
import AddDefinition from "./components/AddDefinition";
// import LoanCard from "./components/LoanCard";
// import LoanDetails from "./components/LoanDetails";
// import custMessage from "../../utils/toast";
// import EditLoan from "./components/EditLoan";

const LoansList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(restStatus());
  }, [dispatch]);

  return (
    <>
      <AddDefinition />
    </>
  );
};

export default LoansList;

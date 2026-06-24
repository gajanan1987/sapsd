import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { restStatus } from "../../redux/definationSlice";

import AddDefinition from "./components/AddDefinition";

const DefineCompany = () => {
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

export default DefineCompany;

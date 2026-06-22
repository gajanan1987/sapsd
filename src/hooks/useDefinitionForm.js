import { useState } from "react";

const useDefinitionForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyNameCode: "",

    companyCodeName: "",
    companyCodeCode: "",

    SalesOrgDomName: "",
    SalesOrgDomCode: "",

    SalesOrgExpName: "",
    SalesOrgExpCode: "",

    DC1DomName: "",
    DC1DomNameCode: "",
    DC2DomName: "",
    DC2DomNameCode: "",
    DC3DomName: "",
    DC3DomNameCode: "",
    DC4DomName: "",
    DC4DomNameCode: "",

    DC1ExpName: "",
    DC1ExpNameCode: "",

    Division1Name: "",
    Division1Code: "",
    Division2Name: "",
    Division2Code: "",
    Division3Name: "",
    Division3Code: "",
    Division4Name: "",
    Division4Code: "",
    Division5Name: "",
    Division5Code: "",
    Division6Name: "",
    Division6Code: "",

    SalesOffName: "",
    SalesOffCode: "",

    SalesGroup1Name: "",
    SalesGroup1Code: "",
    SalesGroup2Name: "",
    SalesGroup2Code: "",

    Plants1Name: "",
    Plants1Code: "",
    Plants2Name: "",
    Plants2Code: "",

    StoLoc1Plant1Name: "",
    StoLoc1Plant1Code: "",
    StoLoc2Plant1Name: "",
    StoLoc2Plant1Code: "",
    StoLoc3Plant1Name: "",
    StoLoc3Plant1Code: "",
    StoLoc4Plant1Name: "",
    StoLoc4Plant1Code: "",
    StoLoc5Plant1Name: "",
    StoLoc5Plant1Code: "",

    StoLoc1Plant2Name: "",
    StoLoc1Plant2Code: "",
    StoLoc2Plant2Name: "",
    StoLoc2Plant2Code: "",
    StoLoc3Plant2Name: "",
    StoLoc3Plant2Code: "",
    StoLoc4Plant2Name: "",
    StoLoc4Plant2Code: "",
    StoLoc5Plant2Name: "",
    StoLoc5Plant2Code: "",

    ShiPoint1Plant1Name: "",
    ShiPoint1Plant1Code: "",
    ShiPoint2Plant1Name: "",
    ShiPoint2Plant1Code: "",
    ShiPoint3Plant1Name: "",
    ShiPoint3Plant1Code: "",

    ShiPoint1Plant2Name: "",
    ShiPoint1Plant2Code: "",
    ShiPoint2Plant2Name: "",
    ShiPoint2Plant2Code: "",
    ShiPoint3Plant2Name: "",
    ShiPoint3Plant2Code: "",
  });

  const [calculated, setCalculated] = useState(false);

  // Required fields only
  const requiredFields = [
    "companyCodeName",
    "companyCodeCode",

    "SalesOrgDomName",
    "SalesOrgDomCode",

    "DC1DomName",
    "DC1DomNameCode",

    "DC1ExpName",
    "DC1ExpNameCode",

    "Division1Name",
    "Division1Code",

    "SalesOffName",
    "SalesOffCode",

    "SalesGroup1Name",
    "SalesGroup1Code",

    "Plants1Name",
    "Plants1Code",

    "StoLoc1Plant1Name",
    "StoLoc1Plant1Code",

    "StoLoc1Plant2Name",
    "StoLoc1Plant2Code",

    "ShiPoint1Plant1Name",
    "ShiPoint1Plant1Code",

    "ShiPoint1Plant2Name",
    "ShiPoint1Plant2Code",
  ];

  // True if ANY required field is empty
  const isInvalid = requiredFields.some((field) => !formData[field]?.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setCalculated(false);
  };

  return {
    formData,
    calculated,
    isInvalid,
    handleChange,
    setCalculated,
    setFormData,
    requiredFields,
  };
};

export default useDefinitionForm;

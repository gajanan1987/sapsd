import { useState } from "react";

const useDefinitionForm = () => {
  const [formData, setFormData] = useState({
    company: [
      {
        name: "",
        code: "",
      },
    ],

    companyCode: [
      {
        name: "",
        code: "",
      },
    ],

    salesOrganizationDom: [
      {
        name: "",
        code: "",
      },
    ],

    salesOrganizationExp: [
      {
        name: "",
        code: "",
      },
    ],

    distributionChannelDom: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    distributionChannelExp: [
      {
        name: "",
        code: "",
      },
    ],

    division: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    salesOffice: [
      {
        name: "",
        code: "",
      },
    ],

    salesGroup: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    plant: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    storageLocationP1: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    storageLocationP2: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    shippingPointP1: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],

    shippingPointP2: [
      {
        name: "",
        code: "",
      },
      {
        name: "",
        code: "",
      },
    ],
  });

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

  return {
    formData,
    setFormData,
  };
};

export default useDefinitionForm;

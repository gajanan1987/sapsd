import { useState } from "react";

export const useEnterpriseForm = () => {
  const [formData, setFormData] = useState({
    company: {
      name: "",
      code: "",
    },

    companyCode: {
      name: "",
      code: "",
    },

    salesOrganization: [
      {
        name: "",
        code: "",
      },
    ],

    distributionChannel: [
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
    ],

    plant: [
      {
        name: "",
        code: "",
      },
    ],
  });

  return {
    formData,
    setFormData,
  };
};

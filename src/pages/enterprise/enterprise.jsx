import React, { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { generateEnterpriseAssignments } from "../../utils/enterpriseGenerator";
import AssignmentTable from "./component/AssignmentTable";
import { useLocation } from "react-router-dom";

const EnterpriseStructure = () => {
  const location = useLocation();
  console.log("🚀 ~ EnterpriseStructure ~ location:", location);

  const compData = location.state;
  const result = generateEnterpriseAssignments(compData);

  return (
    <div className="loan-details-wrapper">
      <Link className="btn btn-primary btn-back" to="/">
        Back
      </Link>
      <AssignmentTable
        title="1. Sales Org To Company Code"
        columns={[
          {
            key: "salesOrgCode",
            label: "SOrg",
            thclass: "sorg",
          },
          { key: "salesOrgName", label: "Name" },
          { key: "companyCode", label: "CCode", thclass: "ccode" },
          { key: "companyName", label: "Name" },
        ]}
        data={result.salesOrgToCompanyCode}
      />

      <AssignmentTable
        title="2. Distribution Channel To Sales Org"
        columns={[
          { key: "salesOrgCode", label: "SOrg", thclass: "sorg" },
          { key: "salesOrgName", label: "Name" },
          { key: "dcCode", label: "DChl", thclass: "dchl", thclass: "dchl" },
          { key: "dcName", label: "Name" },
        ]}
        data={result.distributionChannelToSalesOrg}
      />

      <AssignmentTable
        title="3. Division To Sales Org"
        columns={[
          { key: "salesOrgCode", label: "SOrg", thclass: "sorg" },
          { key: "salesOrgName", label: "Name" },
          {
            key: "divisionCode",
            label: "Division",
            thclass: "division",
          },
          { key: "divisionName", label: "Name" },
        ]}
        data={result.divisionToSalesOrg}
      />

      <AssignmentTable
        title="4. Sales Area"
        columns={[
          { key: "salesOrgCode", label: "SOrg", thclass: "sorg" },
          { key: "salesOrgName", label: "Name" },

          { key: "dcCode", label: "DChl", thclass: "dchl" },
          { key: "dcName", label: "Name" },

          { key: "divisionCode", label: "Division", thclass: "division" },
          { key: "divisionName", label: "Name" },
        ]}
        data={result.salesArea}
      />

      <AssignmentTable
        title="5. Sales Office To Sales Area"
        columns={[
          { key: "salesOrgCode", label: "SOrg", thclass: "sorg" },
          { key: "salesOrgName", label: "Name" },

          { key: "dcCode", label: "DChl", thclass: "dchl" },
          { key: "dcName", label: "Name" },

          { key: "divisionCode", label: "Division", thclass: "division" },
          { key: "divisionName", label: "Name" },

          { key: "salesOfficeCode", label: "Sales Office", thclass: "soffice" },
          { key: "salesOfficeName", label: "Description" },
        ]}
        data={result.salesOfficeToSalesArea}
      />

      <AssignmentTable
        title="6. Sales Group To Sales Office"
        columns={[
          { key: "salesOfficeCode", label: "Sales Office", thclass: "soffice" },
          { key: "salesOfficeName", label: "Description" },

          { key: "salesGroupCode", label: "Sales Group", thclass: "sgroup" },
          { key: "salesGroupName", label: "Group Description" },
        ]}
        data={result.salesGroupToSalesOffice}
      />

      <AssignmentTable
        title="7. Plant To Company Code"
        cclass="revstyle"
        columns={[
          { key: "companyCode", label: "Company Code", thclass: "ccode" },
          { key: "plantCode", label: "Plant", thclass: "plant" },
          { key: "plantName", label: "Name of Plant" },
          { key: "companyName", label: "Company Name" },
        ]}
        data={result.plantToCompanyCode}
      />

      <AssignmentTable
        title="8. Sales Org - Distribution Channel - Plant"
        columns={[
          { key: "salesOrgCode", label: "SOrg", thclass: "sorg" },
          { key: "salesOrgName", label: "Name" },

          { key: "dcCode", label: "DChl", thclass: "dchl" },
          { key: "dcName", label: "Name" },

          { key: "plantCode", label: "Plant", thclass: "plant" },
          { key: "plantName", label: "Name" },
        ]}
        data={result.salesOrgDcPlant}
      />

      <AssignmentTable
        title="9. Shipping Point - Plant"
        columns={[
          { key: "plantCode", label: "SPoint", thclass: "spoint" },
          { key: "plantName", label: "Name" },

          { key: "shippingPointCode", label: "Plant", thclass: "plant" },
          { key: "shippingPointName", label: "Name" },
        ]}
        data={result.shippingPointToPlant}
      />
    </div>
  );
};

export default EnterpriseStructure;

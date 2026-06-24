import React, { useEffect } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import DefinitionTable from "./components/DefinitionTable";

const CompanyDetails = () => {
  const location = useLocation();
  console.log("🚀 ~ CompanyDetails ~ location:", location);
  const navigate = useNavigate();

  const {
    company,
    company_code,
    distribution_channel_dom,
    distribution_channel_exp,
    division,
    plant,
    sales_group,
    sales_office,
    sales_organization_dom,
    sales_organization_exp,
    storage_loc_p1,
    storage_loc_p2,
    shipping_point_p1,
    shipping_point_p2,
  } = location.state?.payload;

  const handleBack = () => {
    navigate("/");
  };

  const handeEnterprise = () => {
    navigate("/enterprise", { state: location.state?.payload });
  };

  useEffect(() => {});

  return (
    <div className="loan-details-wrapper">
      <div className="btn-grp">
        <Link className="btn btn-primary btn-back" to="/">
          Back
        </Link>

        <button className="btn btn-primary" onClick={() => handeEnterprise()}>
          Genrate Enterprise Structure
        </button>
      </div>
      {company_code && (
        <>
          <div className="loan-details-header">
            <div className="loan-details">
              <DefinitionTable
                cname="comap-code"
                name="Comapany Code"
                data={company_code}
              />

              <DefinitionTable
                cname="sales-org"
                name="Sales Organization"
                data={[...sales_organization_dom, ...sales_organization_exp]}
              />

              <DefinitionTable
                cname="dis-channel"
                name="Distribution Channel(Domestic)"
                data={distribution_channel_dom}
              />

              <DefinitionTable
                cname="dis-channel"
                name="Distribution Channel(Export)"
                data={distribution_channel_exp}
              />

              <DefinitionTable
                cname="division"
                name="Division"
                data={division}
              />

              <DefinitionTable
                cname="sales-ofc"
                name="Sales Office"
                data={sales_office}
              />

              <DefinitionTable
                cname="sales-group"
                name="Sales Group"
                data={sales_group}
              />
            </div>

            <div className="loan-details">
              <DefinitionTable cname="plant" name="Plants" data={plant} />
              <DefinitionTable
                cname="st-loc"
                name="Storage Location"
                data={[...storage_loc_p1, ...storage_loc_p2]}
              />

              <DefinitionTable
                cname="sh-point"
                name="Shipping Point"
                data={[...shipping_point_p1, ...shipping_point_p2]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;

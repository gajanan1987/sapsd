import React, { useEffect } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import DefinitionTable from "./components/DefinitionTable";

const CompanyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.payload;
  console.log(data);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {});

  return (
    <div className="loan-details-wrapper">
      <Link className="btn btn-primary btn-back" to="/">
        Back
      </Link>
      {data && (
        <>
          <div className="loan-details-header">
            <div className="loan-details">
              {/* <DefinitionTable
                name="Comapany"
                data={[{ name: data.c_name, code: data.c_code }]}
              /> */}
              <DefinitionTable
                cname="comap-code"
                name="Comapany Code"
                data={[{ name: data.cc_name, code: data.cc_code }]}
              />

              <DefinitionTable
                cname="sales-org"
                name="Sales Organization"
                data={[
                  { name: data.sod_name, code: data.sod_code },
                  { name: data.soe_name, code: data.soe_code },
                ]}
              />

              <DefinitionTable
                cname="dis-channel"
                name="Distribution Channel(Domestic)"
                data={[
                  { name: data.dc1_name, code: data.dc1_code },
                  { name: data.dc2_name, code: data.dc2_code },
                  { name: data.dc3_name, code: data.dc3_code },
                  { name: data.dc4_name, code: data.dc4_code },
                ]}
              />

              <DefinitionTable
                cname="dis-channel"
                name="Distribution Channel(Export)"
                data={[{ name: data.dce_name, code: data.dce_code }]}
              />

              <DefinitionTable
                cname="division"
                name="Division"
                data={[
                  { name: data.d1_name, code: data.d1_code },
                  { name: data.d2_name, code: data.d2_code },
                  { name: data.d3_name, code: data.d3_code },
                  { name: data.d4_name, code: data.d4_code },
                  { name: data.d5_name, code: data.d5_code },
                  { name: data.d6_name, code: data.d6_code },
                ]}
              />

              <DefinitionTable
                cname="sales-ofc"
                name="Sales Office"
                data={[{ name: data.soff_name, code: data.soff_code }]}
              />
            </div>

            <div className="loan-details">
              <DefinitionTable
                cname="sales-group"
                name="Sales Group"
                data={[
                  { name: data.sg1_name, code: data.sg1_code },
                  { name: data.sg2_name, code: data.sg2_code },
                ]}
              />
              <DefinitionTable
                cname="plant"
                name="Plants"
                data={[
                  { name: data.p1_name, code: data.p1_code },
                  { name: data.p2_name, code: data.p2_code },
                ]}
              />
              <DefinitionTable
                cname="st-loc"
                name="Storage Location"
                data={[
                  { name: data.st1p1_name, code: data.st1p1_code },
                  { name: data.st2p1_name, code: data.st2p1_code },
                  { name: data.st3p1_name, code: data.st3p1_code },
                  { name: data.st4p1_name, code: data.st4p1_code },
                  { name: data.st5p1_name, code: data.st5p1_code },
                  { name: data.st1p2_name, code: data.st1p2_code },
                  { name: data.st2p2_name, code: data.st2p2_code },
                  { name: data.st3p2_name, code: data.st3p2_code },
                  { name: data.st4p2_name, code: data.st4p2_code },
                  { name: data.st5p2_name, code: data.st5p2_code },
                ]}
              />

              <DefinitionTable
                cname="sh-point"
                name="Shipping Point (Plant 1)"
                data={[
                  { name: data.sh1p1_name, code: data.sh1p1_code },
                  { name: data.sh2p1_name, code: data.sh2p1_code },
                  { name: data.sh3p1_name, code: data.sh3p1_code },
                  { name: data.sh1p2_name, code: data.sh1p2_code },
                  { name: data.sh2p2_name, code: data.sh2p2_code },
                  { name: data.sh3p2_name, code: data.sh3p2_code },
                ]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;

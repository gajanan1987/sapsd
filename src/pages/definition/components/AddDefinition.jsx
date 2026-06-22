import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/Input";
import useDefinitionForm from "../../../hooks/useDefinitionForm";
import { Link } from "react-router";
import { createDefination } from "../../../redux/definationSlice";
import custMessage from "../../../utils/toast";
import { useNavigate } from "react-router";

const AddLoan = () => {
  const dispatch = useDispatch();
  const {
    user: { id, email },
  } = useSelector((s) => s.auth);

  const navigate = useNavigate();

  const {
    formData,
    handleChange,
    isInvalid,
    setCalculated,
    calculated,
    requiredFields,
  } = useDefinitionForm();

  const handleCalculate = async () => {
    // if (isInvalid) return;
    console.log(requiredFields.filter((field) => !formData[field]?.trim()));

    const data = {
      user_id: id,
      u_email: email,

      c_name: formData.companyName,
      c_code: formData.companyNameCode,

      cc_name: formData.companyCodeName,
      cc_code: formData.companyCodeCode,

      sod_name: formData.SalesOrgDomName,
      sod_code: formData.SalesOrgDomCode,

      soe_name: formData.SalesOrgExpName,
      soe_code: formData.SalesOrgExpCode,

      dc1_name: formData.DC1DomName,
      dc1_code: formData.DC1DomNameCode,

      dc2_name: formData.DC2DomName,
      dc2_code: formData.DC2DomNameCode,

      dc3_name: formData.DC3DomName,
      dc3_code: formData.DC3DomNameCode,

      dc4_name: formData.DC4DomName,
      dc4_code: formData.DC4DomNameCode,

      dce_name: formData.DC1ExpName,
      dce_code: formData.DC1ExpNameCode,

      d1_name: formData.Division1Name,
      d1_code: formData.Division1Code,
      d2_name: formData.Division2Name,
      d2_code: formData.Division2Code,
      d3_name: formData.Division3Name,
      d3_code: formData.Division3Code,
      d4_name: formData.Division4Name,
      d4_code: formData.Division4Code,
      d5_name: formData.Division5Name,
      d5_code: formData.Division5Code,
      d6_name: formData.Division6Name,
      d6_code: formData.Division6Code,

      soff_name: formData.SalesOffName,
      soff_code: formData.SalesOffCode,

      sg1_name: formData.SalesGroup1Name,
      sg1_code: formData.SalesGroup1Code,
      sg2_name: formData.SalesGroup2Name,
      sg2_code: formData.SalesGroup2Code,

      p1_name: formData.Plants1Name,
      p1_code: formData.Plants1Code,
      p2_name: formData.Plants2Name,
      p2_code: formData.Plants2Code,

      st1p1_name: formData.StoLoc1Plant1Name,
      st1p1_code: formData.StoLoc1Plant1Code,
      st2p1_name: formData.StoLoc2Plant1Name,
      st2p1_code: formData.StoLoc2Plant1Code,
      st3p1_name: formData.StoLoc3Plant1Name,
      st3p1_code: formData.StoLoc3Plant1Code,
      st4p1_name: formData.StoLoc4Plant1Name,
      st4p1_code: formData.StoLoc4Plant1Code,
      st5p1_name: formData.StoLoc5Plant1Name,
      st5p1_code: formData.StoLoc5Plant1Code,

      st1p2_name: formData.StoLoc1Plant2Name,
      st1p2_code: formData.StoLoc1Plant2Code,
      st2p2_name: formData.StoLoc2Plant2Name,
      st2p2_code: formData.StoLoc2Plant2Code,
      st3p2_name: formData.StoLoc3Plant2Name,
      st3p2_code: formData.StoLoc3Plant2Code,
      st4p2_name: formData.StoLoc4Plant2Name,
      st4p2_code: formData.StoLoc4Plant2Code,
      st5p2_name: formData.StoLoc5Plant2Name,
      st5p2_code: formData.StoLoc5Plant2Code,

      sh1p1_name: formData.ShiPoint1Plant1Name,
      sh1p1_code: formData.ShiPoint1Plant1Code,
      sh2p1_name: formData.ShiPoint2Plant1Name,
      sh2p1_code: formData.ShiPoint2Plant1Code,
      sh3p1_name: formData.ShiPoint3Plant1Name,
      sh3p1_code: formData.ShiPoint3Plant1Code,

      sh1p2_name: formData.ShiPoint1Plant2Name,
      sh1p2_code: formData.ShiPoint1Plant2Code,
      sh2p2_name: formData.ShiPoint2Plant2Name,
      sh2p2_code: formData.ShiPoint2Plant2Code,
      sh3p2_name: formData.ShiPoint3Plant2Name,
      sh3p2_code: formData.ShiPoint3Plant2Code,
    };

    try {
      await dispatch(
        createDefination({
          definition: data,
        }),
      ).unwrap();

      custMessage.success("Loan added successfully");
      navigate("/");
    } catch (error) {
      custMessage.error(error.message || "Failed to add loan");
    }
  };

  return (
    <div className="add-loan-form comp-definition">
      <h2>Add Enterprise Structure Definition</h2>

      <div className="form">
        {/* <h3>Company</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code"
                name="companyNameCode"
                value={formData.companyNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div> */}

        <h3>Company Code</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code"
                name="companyCodeCode"
                value={formData.companyCodeCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="companyCodeName"
                value={formData.companyCodeName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Sales Organization</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code (Domestic)"
                name="SalesOrgDomCode"
                value={formData.SalesOrgDomCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Domestic)"
                name="SalesOrgDomName"
                value={formData.SalesOrgDomName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code (Export)"
                name="SalesOrgExpCode"
                value={formData.SalesOrgExpCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Export)"
                name="SalesOrgExpName"
                value={formData.SalesOrgExpName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Distribution Channel</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 (Domestic)"
                name="DC1DomNameCode"
                value={formData.DC1DomNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Domestic)"
                name="DC1DomName"
                value={formData.DC1DomName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2 (Domestic)"
                name="DC2DomNameCode"
                value={formData.DC2DomNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Domestic)"
                name="DC2DomName"
                value={formData.DC2DomName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3 (Domestic)"
                name="DC3DomNameCode"
                value={formData.DC3DomNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Domestic)"
                name="DC3DomName"
                value={formData.DC3DomName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 4 (Domestic)"
                name="DC4DomNameCode"
                value={formData.DC4DomNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Domestic)"
                name="DC4DomName"
                value={formData.DC4DomName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 (Export)"
                name="DC1ExpNameCode"
                value={formData.DC1ExpNameCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name (Export)"
                name="DC1ExpName"
                value={formData.DC1ExpName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Division</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1"
                name="Division1Code"
                value={formData.Division1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division1Name"
                value={formData.Division1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2"
                name="Division2Code"
                value={formData.Division2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division2Name"
                value={formData.Division2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3"
                name="Division3Code"
                value={formData.Division3Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division3Name"
                value={formData.Division3Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 4"
                name="Division4Code"
                value={formData.Division4Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division4Name"
                value={formData.Division4Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 5"
                name="Division5Code"
                value={formData.Division5Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division5Name"
                value={formData.Division5Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 6"
                name="Division6Code"
                value={formData.Division6Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Division6Name"
                value={formData.Division6Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Sales Office (Domestic)</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code"
                name="SalesOffCode"
                value={formData.SalesOffCode}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="SalesOffName"
                value={formData.SalesOffName}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Sales Group (Domestic)</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1"
                name="SalesGroup1Code"
                value={formData.SalesGroup1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="SalesGroup1Name"
                value={formData.SalesGroup1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2"
                name="SalesGroup2Code"
                value={formData.SalesGroup2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="SalesGroup2Name"
                value={formData.SalesGroup2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Plants (Domestic)</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1"
                name="Plants1Code"
                value={formData.Plants1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Plants1Name"
                value={formData.Plants1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2"
                name="Plants2Code"
                value={formData.Plants2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="Plants2Name"
                value={formData.Plants2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Storage Location</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 for Plant 1"
                name="StoLoc1Plant1Code"
                value={formData.StoLoc1Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc1Plant1Name"
                value={formData.StoLoc1Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2 for Plant 1"
                name="StoLoc2Plant1Code"
                value={formData.StoLoc2Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc2Plant1Name"
                value={formData.StoLoc2Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3 for Plant 1"
                name="StoLoc3Plant1Code"
                value={formData.StoLoc3Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc3Plant1Name"
                value={formData.StoLoc3Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 4 for Plant 1"
                name="StoLoc4Plant1Code"
                value={formData.StoLoc4Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc4Plant1Name"
                value={formData.StoLoc4Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>

            <div className="combination">
              <Input
                type="text"
                label="Code 5 for Plant 1"
                name="StoLoc5Plant1Code"
                value={formData.StoLoc5Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc5Plant1Name"
                value={formData.StoLoc5Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 for Plant 2"
                name="StoLoc1Plant2Code"
                value={formData.StoLoc1Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc1Plant2Name"
                value={formData.StoLoc1Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2 for Plant 2"
                name="StoLoc2Plant2Code"
                value={formData.StoLoc2Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc2Plant2Name"
                value={formData.StoLoc2Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3 for Plant 2"
                name="StoLoc3Plant2Code"
                value={formData.StoLoc3Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc3Plant2Name"
                value={formData.StoLoc3Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 4 for Plant 2"
                name="StoLoc4Plant2Code"
                value={formData.StoLoc4Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc4Plant2Name"
                value={formData.StoLoc4Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 5 for Plant 2"
                name="StoLoc5Plant2Code"
                value={formData.StoLoc5Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="StoLoc5Plant2Name"
                value={formData.StoLoc5Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <h3>Shipping Point</h3>
        <div className="input-outter">
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 for Plant 1"
                name="ShiPoint1Plant1Code"
                value={formData.ShiPoint1Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint1Plant1Name"
                value={formData.ShiPoint1Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2 for Plant 1"
                name="ShiPoint2Plant1Code"
                value={formData.ShiPoint2Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint2Plant1Name"
                value={formData.ShiPoint2Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3 for Plant 1"
                name="ShiPoint3Plant1Code"
                value={formData.ShiPoint3Plant1Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint3Plant1Name"
                value={formData.ShiPoint3Plant1Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
          <div>
            <div className="combination">
              <Input
                type="text"
                label="Code 1 for Plant 2"
                name="ShiPoint1Plant2Code"
                value={formData.ShiPoint1Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint1Plant2Name"
                value={formData.ShiPoint1Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 2 for Plant 2"
                name="ShiPoint2Plant2Code"
                value={formData.ShiPoint2Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint2Plant2Name"
                value={formData.ShiPoint2Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
            <div className="combination">
              <Input
                type="text"
                label="Code 3 for Plant 2"
                name="ShiPoint3Plant2Code"
                value={formData.ShiPoint3Plant2Code}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
              <Input
                type="text"
                label="Name"
                name="ShiPoint3Plant2Name"
                value={formData.ShiPoint3Plant2Name}
                onChange={handleChange}
                placeholder="Bank Name / Acc. Number"
                required
              />
            </div>
          </div>
        </div>

        <div className="btn-wrapper">
          <button
            className="btn btn-primary-hallow"
            onClick={handleCalculate}
            // disabled={isInvalid}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLoan;

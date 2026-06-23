import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/Input";
import useDefinitionForm from "../../../hooks/useDefinitionForm";
import { Link } from "react-router";
import { createDefinations } from "../../../redux/definationSlice";
import custMessage from "../../../utils/toast";
import { useNavigate } from "react-router";

const AddLoan = () => {
  const dispatch = useDispatch();
  const {
    user: { id, email },
  } = useSelector((s) => s.auth);

  const navigate = useNavigate();

  const { formData, setFormData, requiredFields } = useDefinitionForm();

  const handleSubmit = async () => {
    // if (isInvalid) return;
    // console.log(requiredFields.filter((field) => !formData[field]?.trim()));
    // try {
    //   await dispatch(
    //     createDefination({
    //       definition: data,
    //     }),
    //   ).unwrap();
    //   custMessage.success("Loan added successfully");
    //   navigate("/");
    // } catch (error) {
    //   custMessage.error(error.message || "Failed to add loan");
    // }

    try {
      await dispatch(
        createDefinations({
          definition: {
            user_id: id,
            user_email: email,

            company: formData.company,

            company_code: formData.companyCode,

            sales_organization_dom: formData.salesOrganizationDom,
            sales_organization_exp: formData.salesOrganizationExp,

            distribution_channel_dom: formData.distributionChannelDom,
            distribution_channel_exp: formData.distributionChannelExp,

            division: formData.division,

            sales_office: formData.salesOffice,

            sales_group: formData.salesGroup,

            plant: formData.plant,

            storage_loc_p1: formData.storageLocationP1,
            storage_loc_p2: formData.storageLocationP2,

            shipping_point_p1: formData.shippingPointP1,
            shipping_point_p2: formData.shippingPointP2,
          },
        }),
      ).unwrap();

      custMessage.success("Loan added successfully");
      navigate("/");
    } catch (error) {
      custMessage.error(error.message || "Failed to add loan");
    }
  };

  const handleChange = (index, key, value, fieldName) => {
    setFormData((prev) => {
      const updated = [...prev[fieldName]];

      updated[index] = {
        ...updated[index],
        [key]: value,
      };

      return {
        ...prev,
        [fieldName]: updated,
      };
    });
  };

  const addRow = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: [
        ...prev[fieldName],
        {
          name: "",
          code: "",
        },
      ],
    }));
  };

  return (
    <div className="add-loan-form comp-definition">
      <h2>Add Enterprise Structure Definition</h2>

      <div className="form">
        <h3>Company Code</h3>
        <div className="input-outter">
          <div>
            {formData.companyCode.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(index, "code", e.target.value, "companyCode")
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value, "companyCode")
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Sales Organization</h3>
        <div className="input-outter">
          <div>
            {formData.salesOrganizationDom.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code (Domestic)"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "salesOrganizationDom",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name (Domestic)"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "salesOrganizationDom",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
          <div>
            {formData.salesOrganizationExp.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code (Export)"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "salesOrganizationExp",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name (Export)"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "salesOrganizationExp",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Distribution Channel</h3>
        <div className="input-outter">
          <div>
            {formData.distributionChannelDom.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code (Domestic)"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "distributionChannelDom",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "distributionChannelDom",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("distributionChannelDom")}
              >
                Add More
              </button>
            </div>
          </div>
          <div>
            {formData.distributionChannelExp.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code (Export)"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "distributionChannelExp",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name (Export)"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "distributionChannelExp",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Division</h3>
        <div className="input-outter">
          <div>
            {formData.division.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(index, "code", e.target.value, "division")
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value, "division")
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("division")}
              >
                Add More
              </button>
            </div>
          </div>
        </div>

        <h3>Sales Office (Domestic)</h3>
        <div className="input-outter">
          <div>
            {formData.salesOffice.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(index, "code", e.target.value, "salesOffice")
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value, "salesOffice")
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Sales Group (Domestic)</h3>
        <div className="input-outter">
          <div>
            {formData.salesGroup.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(index, "code", e.target.value, "salesGroup")
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value, "salesGroup")
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Plants (Domestic)</h3>
        <div className="input-outter">
          <div>
            {formData.plant.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(index, "code", e.target.value, "plant")
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value, "plant")
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <h3>Storage Location</h3>
        <div className="input-outter">
          <div>
            {formData.storageLocationP1.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "storageLocationP1",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "storageLocationP1",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("storageLocationP1")}
              >
                Add More
              </button>
            </div>
          </div>
          <div>
            {formData.storageLocationP2.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "storageLocationP2",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "storageLocationP2",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("storageLocationP2")}
              >
                Add More
              </button>
            </div>
          </div>
        </div>

        <h3>Shipping Point</h3>
        <div className="input-outter">
          <div>
            {formData.shippingPointP1.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "shippingPointP1",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "shippingPointP1",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("shippingPointP1")}
              >
                Add More
              </button>
            </div>
          </div>
          <div>
            {formData.shippingPointP2.map((item, index) => (
              <div className="combination">
                <Input
                  type="text"
                  label="Code"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "code",
                      e.target.value,
                      "shippingPointP2",
                    )
                  }
                  placeholder="Enter Code"
                  required
                />
                <Input
                  type="text"
                  label="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value,
                      "shippingPointP2",
                    )
                  }
                  placeholder="Enter Name"
                  required
                />
              </div>
            ))}
            <div className="btn-wrapper">
              <button
                className="btn btn-primary-hallow"
                onClick={() => addRow("shippingPointP2")}
              >
                Add More
              </button>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <button
            className="btn btn-primary-hallow"
            onClick={handleSubmit}
            // disabled={isInvalid}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLoan;

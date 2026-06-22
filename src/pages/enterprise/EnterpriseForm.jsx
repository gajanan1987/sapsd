import EnterpriseSection from "./component/EnterpriseSection";
import { useEnterpriseForm } from "../../hooks/useEnterpriseForm";
import { useDispatch, useSelector } from "react-redux";
import { createDefinations } from "../../redux/definationSlice";
import custMessage from "../../utils/toast";
const EnterpriseForm = () => {
  const dispatch = useDispatch();
  const {
    user: { id, email },
  } = useSelector((s) => s.auth);
  const { formData, setFormData } = useEnterpriseForm();

  // const handleSubmit = async () => {
  //   console.log(formData);
  // };

  const handleSubmit = async () => {
    try {
      await dispatch(
        createDefinations({
          definition: {
            user_id: id,

            company: formData.company,

            company_code: formData.companyCode,

            sales_organization: formData.salesOrganization,

            distribution_channel: formData.distributionChannel,

            division: formData.division,

            sales_office: formData.salesOffice,

            sales_group: formData.salesGroup,

            plant: formData.plant,
          },
        }),
      ).unwrap();

      custMessage.success("Loan added successfully");
      navigate("/");
    } catch (error) {
      custMessage.error(error.message || "Failed to add loan");
    }
  };

  return (
    <div>
      <h1>SAP Enterprise Structure</h1>

      <EnterpriseSection
        title="Sales Organization"
        fieldName="salesOrganization"
        data={formData.salesOrganization}
        setFormData={setFormData}
      />

      <EnterpriseSection
        title="Distribution Channel"
        fieldName="distributionChannel"
        data={formData.distributionChannel}
        setFormData={setFormData}
      />

      <EnterpriseSection
        title="Division"
        fieldName="division"
        data={formData.division}
        setFormData={setFormData}
      />

      <EnterpriseSection
        title="Sales Office"
        fieldName="salesOffice"
        data={formData.salesOffice}
        setFormData={setFormData}
      />

      <EnterpriseSection
        title="Sales Group"
        fieldName="salesGroup"
        data={formData.salesGroup}
        setFormData={setFormData}
      />

      <EnterpriseSection
        title="Plant"
        fieldName="plant"
        data={formData.plant}
        setFormData={setFormData}
      />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EnterpriseForm;

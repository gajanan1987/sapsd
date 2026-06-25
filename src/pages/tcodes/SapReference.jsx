import SapReferenceTable from "./components/SapReferenceTable";
import { sapSdReferenceData } from "../../data/sapSdReferenceData";

const SapReference = () => {
  const referenceData = Object.entries(sapSdReferenceData).map(
    ([key, value]) => ({
      title: key,
      classes: key,
      columns: value[0] ? Object.keys(value[0]) : [],
      rows: value.map((item) => Object.values(item)),
    }),
  );
  return (
    <div className="sap-reference-page">
      <h1>SAP SD Reference Guide</h1>

      {referenceData.map((section, index) => (
        <SapReferenceTable
          key={index}
          title={section.title}
          custclassName={section.classes}
          columns={section.columns}
          rows={section.rows}
        />
      ))}
    </div>
  );
};

export default SapReference;

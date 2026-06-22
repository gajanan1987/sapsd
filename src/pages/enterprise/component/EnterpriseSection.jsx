const EnterpriseSection = ({ title, data, setFormData, fieldName }) => {
  const updateRow = (index, key, value) => {
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

  const addRow = () => {
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
    <div>
      <h3>{title}</h3>

      {data.map((item, index) => (
        <div key={index}>
          <input
            value={item.name}
            placeholder="Name"
            onChange={(e) => updateRow(index, "name", e.target.value)}
          />

          <input
            value={item.code}
            placeholder="Code"
            onChange={(e) => updateRow(index, "code", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addRow}>Add {title}</button>
    </div>
  );
};

export default EnterpriseSection;

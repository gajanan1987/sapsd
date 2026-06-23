const DefinitionTable = ({ name, data = [], cname }) => {
  const filteredData = data.filter((item) => item?.name || item?.code);

  if (filteredData.length === 0) return null;
  return (
    <table className={`table-reponsive common-table definition-table ${cname}`}>
      <thead>
        <tr>
          <th>{name}</th>
          <th className="code">Code</th>
        </tr>
      </thead>

      <tbody>
        {filteredData.map((item, index) => (
          <tr className="tr-year" key={`${item.name}-${index}`}>
            <td>{item.code || "-"}</td>
            <td>{item.name || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DefinitionTable;

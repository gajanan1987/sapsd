const SapReferenceTable = ({ title, columns, rows, custclassName }) => {
  return (
    <div className={`sap-table-wrapper ${custclassName}`}>
      <h2>{title}</h2>

      <table className="table-reponsive common-table sap-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SapReferenceTable;

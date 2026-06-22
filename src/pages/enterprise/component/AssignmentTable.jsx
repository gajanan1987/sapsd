const AssignmentTable = ({ title, columns, data, cclass }) => {
  return (
    <div className="assignment-table-wrapper">
      <h2>{title}</h2>

      <table
        className={`table-reponsive common-table assignment-table ${cclass}`}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th className={col.thclass} key={col.key}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.length ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentTable;

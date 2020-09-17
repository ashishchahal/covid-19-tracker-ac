import React from "react";
import "../Styles/Table.css";

function Table({ tableData }) {
  console.log(tableData, "🔥");
  return (
    <div className="table">
      {tableData.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;

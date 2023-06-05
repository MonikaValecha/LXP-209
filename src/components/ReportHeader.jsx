import React from "react";

function ReportHeader({ StoreArray }) {
  return (
    <tbody>
      <tr>
        <th className="fixed-column">S.No</th>
        <th className="fixed-column">Issues</th>
        {StoreArray.map((data, index) => {
          return <th key={index}>{data}</th>;
        })}
      </tr>
    </tbody>
  );
}

export default ReportHeader;

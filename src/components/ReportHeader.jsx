import React from "react";

function ReportHeader({ StoreArray }) {
  return (
    <tbody>
      <tr>
        <th key= "serialNo">S.No</th>
        <th key = "mainIssue">Issues</th>
        {StoreArray.map((data, index) => {
          return <th key={`${data.id}-${index}`}>{data}</th>;
        })}
      </tr>
    </tbody>
  );
}

export default ReportHeader;

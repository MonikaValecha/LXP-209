import React from "react";

function ReportHeader({ StoreArray }) {
  return (
    <tbody>
      <tr>
        <th>S.No</th>
        <th>Issues</th>
        {StoreArray.map((data, index) => {
          return <th key={index}>{data}</th>;
        })}
      </tr>
    </tbody>
  );
}

export default ReportHeader;

import React from "react";
import ReportRow from "./ReportRow";

const ReportContent = ({ issues, issueslink, StoreArray }) => {
  return (
    <tbody>
      {issues.map((issueData, index) => {
        return <ReportRow key={issueData.id}
        issueData={issueData}
        index={index}
        StoreArray={StoreArray} />;
      })}
    </tbody>
  );
};

export default ReportContent;

import React from "react";

function ReportRow({ issueData, index, StoreArray }) {
  
  const cells = [];

  const serialNumberCell = <td>{index + 1}</td>
  cells.push(serialNumberCell);


  const mainissuecell = (
    <td><span>{issueData.key} : {issueData.fields.summary}</span></td>
  );
  cells.push(mainissuecell);

  StoreArray.map(data=>{
      const matchingIssues=(issueData.fields.issuelinks.filter(Element=>{
        let directionCheck;
        if(Element.outwardIssue){
           directionCheck=Element.type.outward;
           if(directionCheck==data){
            return true;
           }
        }
        else if(Element.inwardIssue){
          directionCheck=Element.type.inward;
          if(directionCheck==data){
            return true;
           }
        }
      }))
      console.log(issueData.key,data,matchingIssues);
      if(matchingIssues.length>0){
        const span=[];
        matchingIssues.forEach(matchingIssuesData=>{
          const matchingData=<span>{matchingIssuesData.outwardIssue?.key  || matchingIssuesData.inwardIssue?.key } : {matchingIssuesData.outwardIssue?.fields.summary  || matchingIssuesData.inwardIssue?.fields.summary}<br /></span> 
          span.push(matchingData);
        })
        cells.push(<td>{span}</td>);
      }
      else{
        const empty=<td> </td>
        cells.push(empty);
      }
      
    })

  return(
  <tr>
    {cells}
  </tr>
  );
}
export default ReportRow;

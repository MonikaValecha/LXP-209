// import React, { useState,useEffect} from "react";
// import './Cssfile.css';

// function Issues(){
//   const [issues,setIssues] = useState([]);

//   const getIssues=() => {
//     AP.request({
//       url: "/rest/api/3/search?jql=priority=medium",
//       type: "GET",
//       success: response => { 
//         console.log(response);
//         response = JSON.parse(response) 
//         setIssues(response.issues || []);
//       }, 
//       error: () => {  
//         console.log(arguments);
//       }
//     })
//   };
//   useEffect(() => {
//     getIssues();
//   },[]);

//   return (
//     <table>
//         <thead>
//           <tr>
//             <th>Issues</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(data => (
//             <tr key={data.id}>
//               <td>{data.key}:{data.fields.summary}</td>
//             </tr>
//           ))
//           }
//         </tbody>
//       </table>
//   );
// }
// export default Issues;
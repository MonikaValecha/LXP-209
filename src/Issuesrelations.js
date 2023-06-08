import React,{useState,useEffect} from 'react'
import './Cssfile.css';
import ReportHeader from './components/ReportHeader';
import ReportContent from './components/ReportContent';


function Issuesrelations() {
  const [issues, setIssues] = useState([]);
  // const [issueslink, setIssueslink] = useState([]);
  const [storeArray, setStoreArray] = useState([]);


  const getIssues=() => {
    AP.request({
      url: "/rest/api/3/search?jql=priority=high",
      type: "GET",
      success: response => { 
        console.log(response);
        response = JSON.parse(response) 
        setIssues(response.issues || []);
      }, 
      error: () => {  
        console.log(arguments);
      }
    })
  };
  const issueLinkType=() => {
    AP.request({
      url: "/rest/api/3/issueLinkType",
      type: "GET",
      success: response => { 
        console.log(response);
        response = JSON.parse(response) 
        // setIssueslink(response.issueLinkTypes || []);
        const issueslink=response.issueLinkTypes;
        const uniqueValues = new Set();
        const storeArray=[];
        // issueslink.forEach(data=>{
        //   storeArray.push(data.inward)
        //   storeArray.push(data.outward)
        // })
        issueslink.forEach(data=>{
          if(!uniqueValues.has(data.inward)){
            storeArray.push(data.inward);
            uniqueValues.add(data.inward);
          }
          if(!uniqueValues.has(data.outward)){
            storeArray.push(data.outward);
            uniqueValues.add(data.outward);
          }
        })
        setStoreArray(storeArray);
      }, 
      error: () => {  
        console.log(arguments);
      }
    })
  };
  useEffect(() => {
    getIssues();
    issueLinkType();
  },[]);
  // const StoreArray=[];
  // issueslink.forEach(data=>{
  //     StoreArray.push(data.inward)
  //     StoreArray.push(data.outward)
      
  //   })
  //   console.log(StoreArray);
  return (
    <div className="table-container">
      <h1>Issue Link Type View</h1>
      <table>
          <ReportHeader 
            StoreArray={storeArray}
          />
          <ReportContent
          issues={issues}
          // issueslink={issueslink}
          StoreArray={storeArray}
           />
      </table>
    </div>
  );
}

export default Issuesrelations;

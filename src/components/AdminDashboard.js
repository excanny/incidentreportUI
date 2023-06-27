import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserDashboard() {

  let [reports, setReports] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:7002/api/Report/GetReports")
      .then(response => setReports(response.data));
      //.then(response => console.log(response.data));
  }, []);


  return (
<>

<div className="container-fluid">

    <div className="p-3"><a href="/">Home</a></div>
    <div style={{color: "white", textAlign: "center", marginTop: "2rem"}}>
      
      <h1>Dashboard</h1>

      <div className="card">

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Description</th>
            <th>Address</th>
            <th>LGA</th>
            <th>LCDA</th>
            <th>Time of Incident</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
        {reports.map((report) => 
             <tr>
              <td>*</td>
              <td>{report.description}</td>
              <td>{report.address}</td>
              <td>{report.lga}</td>
              <td>{report.lcda}</td>
              <td>{report.timeofEvent}</td>
              <td>{report.ranking}</td>
           </tr>
        )}
         
        </tbody>
      </table>
      
      </div>
      </div>

      </div>

      </>
  )
}

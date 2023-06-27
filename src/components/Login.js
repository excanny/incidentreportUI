import React from 'react'
import { useState } from "react";
import '../Login.css';
 import axios from "axios";


export default function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
      
        const data = {  
          email: email,
          password : password,
        };  
    
        const myJSON = JSON.stringify(data);

        axios.post('https://localhost:7002/api/Login', data)
        .then((response) => {
          console.log();

        if(response.data.status == "Ok") window.location.href = "/admin-dashboard";

        }, (error) => {
          //console.log(error);
          alert(error);
        });
    }

  return (
    <>
     <div className="container-fluid">
      

      <div className="row mt-5">
        <div className="col pl-5">

        <div className="card">
               
               <div className="card-body">
               
               <h1 className="text-center mt-3">Welcome Back</h1>
             
               <form onSubmit={onSubmit}>
   
              
   
              
   
                 <div className="form-group">
                   <label htmlFor="email">Email address:</label>
                   <input type="text" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                 </div>
                
                 <div className="form-group">
                   <label htmlFor="pwd">Password:</label>
                   <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                 </div>
   
                 <button type="submit" className="btn btn-primary mx-auto">LOGIN</button>
               </form>
   
               </div>
           </div>
        
        </div>
        <div className="col">

        <div className="mt-5 text-center text-white">
            <h2>Don't have an account?</h2>
            <p><a href="/signup">Click here to signup</a></p>
            </div>
        
        </div>
      </div>
      </div>
    </>
  )
}

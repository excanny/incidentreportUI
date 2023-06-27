import React from 'react'
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";

export default function Signup() {

  const [cookies, setCookie] = useCookies(['_fhv']);
  let [name, setName] = useState('');
  let [gender, setGender] = useState('');
  let [phoneNumber, setphoneNumber] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      name: name, 
      gender: gender, 
      email: email,
      password : password,
      phoneNumber: phoneNumber,
      cookie: cookies._fhv
    };  

    const myJSON = JSON.stringify(data);

    //console.log(myJSON)

    axios.post('https://localhost:7002/api/User/AddUser', data)
    .then((response) => {
      //console.log(response);

      if(response.status == 200) window.location.href = "/register-sucessful";

    }, (error) => {
      //console.log(error);
      alert(error);
    });
}



  return (
    <>
      <div className="container-fluid">

        <div className="mt-3"><a href="/">Home</a></div>

        <div className="text-center">
          <h2 className="text-white">Create Account</h2>
        </div>

        <div className="row">

          <div className="col pl-5 mt-1">
           
              <h2 className="text-white">Already have an account?</h2>
              <p><a href="/login">Click here to login</a></p>
            
          </div>

            <div className="col mb-5 mt-2">
            
               <div className="card">
                    
                  <div className="card-body">
                  
                
                  <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col">
                          <div className="form-group">
                          <label htmlFor="email">Name:</label>
                          <input type="text" className="form-control" required placeholder="Enter name" onChange={(e) => setName(e.target.value)}  />
                        </div>
                        </div>
                       
                    </div>

                    <div className="row">
                        <div className="col">
                        <div className="form-group">
                    
                          <label htmlFor="email">Gender:</label>
                          <input type="text" className="form-control" placeholder="Enter gender" required onChange={(e) => setGender(e.target.value)}  />
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                          <label htmlFor="email">Phone number:</label>
                          <input type="text" className="form-control" placeholder="Enter phone"  required onChange={(e) => setphoneNumber(e.target.value)}  />
                        </div>
                        </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email address:</label>
                      <input type="text" className="form-control" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                  
                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}  />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pwd">Confirm Password:</label>
                      <input type="password" className="form-control" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}  />
                    </div>

                    <button type="submit" className="btn btn-primary mx-auto">REGISTER</button>
                  </form>

                  </div>
              </div>

            </div>

        </div>
        </div>
    </>
  )
}

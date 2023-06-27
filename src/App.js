import React, { Component } from 'react';
import logo from './logo.svg';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Report from './components/Report';
import AdminDashboard from './components/AdminDashboard';
import ReportSuccessful from './components/ReportSuccessful';
import RegisterSuccessful from './components/RegisterSuccessful';

function App() {

  const expiry = new Date();
  expiry.setTime(expiry.getTime() + (10*365*24*60*60*1000));

  function createGuid() {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
        return v.toString(16);  
    });  
  }  

  const [cookies, setCookie] = useCookies(['_fhv']);

  if(cookies._fhv == null) setCookie('_fhv', createGuid(), { path: '/', expires : expiry});

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/report" element={<Report />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/report-successful" element={<ReportSuccessful />} />
      <Route path="/register-successful" element={<RegisterSuccessful />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
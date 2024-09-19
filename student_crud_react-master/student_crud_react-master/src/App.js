// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import AddStudent from './components/AddStudent/index';
import StudentDetails from './components/StudentDetails/index'
import Navbar from './components/Navbar';

// const API_URL = "http://localhost:3001/students";

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/studentdetails" element={<StudentDetails/>}/>

    </Routes>
    </BrowserRouter>
   
  )
}





export default App;
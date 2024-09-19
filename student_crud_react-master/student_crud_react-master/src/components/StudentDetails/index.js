import React, { useState, useEffect } from "react";
import axios from "axios";
import './index.css'
 const API_URL = "http://localhost:3001/students";
function StudentDetails() {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await axios.get(API_URL);
          setStudents(response.data);
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };
  
      fetchStudents();
    }, []);
  
    return (
        <div className="d-container">
     
        <table className="border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">Roll No</th>
              <th className="border border-slate-300 p-2">Name</th>
              <th className="border border-slate-300 p-2">Email</th>
              <th className="border border-slate-300 p-2">Phone Number</th>
              <th className="border border-slate-300 p-2">Check In Time</th>
              <th className="border border-slate-300 p-2">Check Out Time</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="border border-slate-300 p-2">{student.rollNumber}</td>
                <td className="border border-slate-300 p-2">{student.name}</td>
                <td className="border border-slate-300 p-2">{student.email}</td>
                <td className="border border-slate-300 p-2">{student.phoneNumber}</td>
                <td className="border border-slate-300 p-2">{student.checkinTime}</td>
                <td className="border border-slate-300 p-2">{student.checkoutTime}</td>
  
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default StudentDetails;
  
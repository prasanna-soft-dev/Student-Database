import React, { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
const AddStudent = () => {
  const [student, setStudent] = useState({
    
    department: '',
    email: '',
    remarks: '',
    studentName: '',
    studentNumber: '',
  });

  

  const { department, email, remarks, studentName,  studentNumber } = student;


  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value,

     });
  };
  const saveStudent = async(e) =>{
     // Ensure studentNumber is a number (if necessary)
  const studentData = {
    ...student,
    studentNumber: Number(student.studentNumber), // Ensure this is a number
  };
  let navigate =useNavigate;
  try {
    // Send the POST request to your backend
    const response = await axios.post("http://localhost:8080/students", studentData);
    
    // Handle success
    if (response.status === 200 || response.status === 201) {
      alert("Student added successfully!");
      // Optionally, redirect to another page or clear the form
      setStudent({
        department: '',
        email: '',
        remarks: '',
        studentName: '',
        studentNumber: '',
      });
    }
    navigate("/view-allStudents");
  } catch (error) {
    console.error("There was an error adding the student:", error);
    alert("Error adding student. Please try again.");
  }
        
  };

  


  return (
    <div className="col-sm-8 py-2 px-2 offset-2 shadow">
      <h1>Add Student</h1>
      <form onSubmit={(e) => saveStudent(e)}>
        <div className="input-sm-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="input-sm-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="input-sm-5">
          <label className="input-group-text" htmlFor="remarks">
            Remark
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="remarks"
            id="remarks"
            required
            value={remarks}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="input-sm-5">
          <label className="input-group-text" htmlFor="studentName">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="studentName"
            id="studentName"
            required
            value={studentName}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="input-sm-5">
          <label className="input-group-text" htmlFor="studentNumber">
            Number
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="studentNumber"
            id="studentNumber"
            required
            value={studentNumber}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
                    <Link to = {"/view_allStudents"}
							type="submit"
							className="btn btn-outline-success btn-lg">
							Cancel
						</Link>
					</div>
				</div>
      </form>
    </div>
  );
};

export default AddStudent;

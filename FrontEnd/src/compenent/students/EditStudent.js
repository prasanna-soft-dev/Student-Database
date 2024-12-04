import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
	let navigate = useNavigate();
	const { id } = useParams();

	const [student, setStudent] = useState({
		
		department: "",
		email: "",
		remarks: "",
        studentName: "",
		studentNumber: "",
	});

	const { department, email, remarks,studentName,  studentNumber } = student;

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		try {
			const result = await axios.get(
				`http://localhost:8080/students/student/${id}`
			);
			setStudent(result.data);
		} catch (error) {
			console.error("Error loading student:", error);
			alert("Failed to load student details.");
		}
	};

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};

	const updateStudent = async (e) => {
		e.preventDefault();
		try {
			await axios.put(
				`http://localhost:8080/students/update/${id}`,
				student
			);
			alert("Student updated successfully!");
			navigate("/view-students");
		} catch (error) {
			console.error("Error updating student:", error);
			alert("Failed to update student details.");
		}
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5">Edit Student</h2>
			<form onSubmit={(e) => updateStudent(e)}>
				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="studentName">
						Student Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="studentName"
						id="studentName"
						required
						value={studentName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
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
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="remarks">
						Remarks
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="remarks"
						id="remarks"
						required
						value={remarks}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label className="input-group-text" htmlFor="studentNumber">
						Student Number
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="studentNumber"
						id="studentNumber"
						required
						value={studentNumber}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button type="submit" className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link to={"/view_allStudents"} className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditStudent;

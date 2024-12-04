import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
	const { id } = useParams();

	const [student, setStudent] = useState({
		studentName: "",
		department: "",
		email: "",
		remarks: "",
		studentNumber: "",
	});

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

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}
		>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">{student.studentName}</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary"
									>
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1"
									>
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Student Name</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.studentName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Department</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.department}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Email</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.email}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Remarks</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.remarks}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">Student Number</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.studentNumber}
										</p>
									</div>
								</div>

								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentProfile;

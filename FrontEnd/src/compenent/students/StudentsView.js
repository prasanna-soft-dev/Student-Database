import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentsView = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const result = await axios.get("http://localhost:8080/students");
                setStudents(result.data);  // Set students data if request was successful
            
        } catch (error) {
            console.error("Error during API request:", error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/students/delete/${id}`);
            if (response.status === 200) {
                // Remove student from the state after successful deletion
                setStudents(students.filter(student => student.id !== id));
                alert("Student deleted successfully");
            } else {
                alert("Failed to delete student");
            }
        } catch (error) {
            console.error("There was an error deleting the student:", error);
            alert("Error deleting student");
        }
    };
    

    return (
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>DEPARTMENT</th>
                        <th>EMAIL</th>
                        <th>REMARKS</th>
                        <th>NAME</th>
                        <th>NUMBER</th>
                        <th colSpan={"3"}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {students.map((student, index) =>
                        <tr key={student.id}>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{student.department}</td>
                            <td>{student.email}</td>
                            <td>{student.remarks}</td>
                            <td>{student.studentName}</td>
                            <td>{student.studentNumber}</td>
                            <td className="mx-2">
                                <Link to={`/view-student-profile/${student.id}`} className="btn btn-info">
                                    <FaEye />
                                </Link>
                            </td>
                            <td className="mx-2">
                                <Link to={`/edit-students/${student.id}`} className="btn btn-info">
                                    <FaEdit />
                                </Link>
                            </td>
                            <td className="mx-2">
                                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default StudentsView;

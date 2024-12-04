package com.student.demo.Service;

import com.student.demo.Model.Student;

import java.util.List;

public interface StudentService {
    Student addStudent(Student student);
    Student updateStudent(Student student, Long id);
    void deleteStudent(Long id);
    List<Student> viewAllStudents();
    Student getStudentById(Long id);


}

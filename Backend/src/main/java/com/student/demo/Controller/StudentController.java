package com.student.demo.Controller;


import com.student.demo.Model.Student;
import com.student.demo.Service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    @Autowired
    private final StudentService studentService;


    @PostMapping
    public Student addStudent(@RequestBody Student student){
       return studentService.addStudent(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id){
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable Long id){
        studentService
                .deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Student>> viewAllStudent(){
        return new ResponseEntity<>(studentService.viewAllStudents(), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable Long id){
        return studentService
                .getStudentById(id);
    }
}

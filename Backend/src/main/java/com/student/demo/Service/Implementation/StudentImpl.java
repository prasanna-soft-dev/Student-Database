package com.student.demo.Service.Implementation;

import com.student.demo.ExceptionHandler.StudentAlreadyExitsException;
import com.student.demo.ExceptionHandler.StudentNotFoundException;
import com.student.demo.Model.Student;
import com.student.demo.Repository.StudentRepository;
import com.student.demo.Service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class StudentImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;


    @Transactional
    @Override
    public Student addStudent(Student student){
        if(studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExitsException(student.getEmail() + "Already Exits");
        }
        return studentRepository.save(student);
    }


    @Override
    public Student updateStudent(Student student, Long id){
        return studentRepository.findById(id).map(st ->{
            st.setStudentName(student.getStudentName());
            st.setDepartment(student.getDepartment());
            st.setEmail(student.getEmail());
            st.setRemarks(student.getRemarks());
            st.setStudentNumber(student.getStudentNumber());

            return studentRepository
                    .save(st);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found"));
    }

    @Override
    public void deleteStudent(Long id){
        try{
            if(!studentRepository.existsById(id)){
                throw new StudentNotFoundException("Student not found");
            }

            studentRepository.deleteById(id);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Student> viewAllStudents(){
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id){
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException("Sorry, No Student with the id" + id));
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }


}

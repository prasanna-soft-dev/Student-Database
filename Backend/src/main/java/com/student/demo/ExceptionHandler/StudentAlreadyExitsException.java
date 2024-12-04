package com.student.demo.ExceptionHandler;

public class StudentAlreadyExitsException extends RuntimeException{

    public StudentAlreadyExitsException(String message){
        super(message);
    }
}

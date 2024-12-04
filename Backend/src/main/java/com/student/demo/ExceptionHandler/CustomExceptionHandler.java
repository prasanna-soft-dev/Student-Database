package com.student.demo.ExceptionHandler;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(StudentAlreadyExitsException.class)
    public Map<String,String> userNotFound(StudentAlreadyExitsException e){
        Map<String, String> error = new HashMap<>();

        error.put("error", e.getMessage());

        return error;
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(StudentNotFoundException.class)
    public  Map<String, String> userExits(StudentNotFoundException e){
        Map<String, String> error = new HashMap<>();

        error.put("error", e.getMessage());
        return  error;
    }
}

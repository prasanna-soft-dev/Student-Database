package com.student.demo.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String studentName;

    @Column(nullable = false)
    private String department;

    @NaturalId
    @Column(nullable = false, unique = true)
    private  String email;

    @Column
    private String remarks;

    @Column(nullable = false)
    private Long studentNumber;
}

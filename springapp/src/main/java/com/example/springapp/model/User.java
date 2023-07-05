package com.example.springapp.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.springapp.AccountRoles;
import com.example.springapp.request.SignUpRequest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendee_id")
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "role")
    private String role;
    @Column(name = "password")
    private String password;

    public void setRole(AccountRoles role) {
        this.role = String.valueOf(role);
    }

    public User(SignUpRequest sr) {
        this.name = sr.name;
        this.email = sr.email;
        this.role = sr.role;
        this.phone = sr.phone;
        this.password = sr.password;

        // this.gender = sr.gender;
        // this.dob = sr.dob;
    }
}

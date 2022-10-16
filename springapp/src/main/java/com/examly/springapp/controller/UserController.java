package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.exception.ResourceNotFoundException;
//import com.examly.springapp.service.UserService;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/signup")
    public UserModel addUser(@RequestBody UserModel newUser){
         return userRepository.save(newUser);
    }
    
    @GetMapping("/getUser")
    public List<UserModel> getUser(){
        return userRepository.findAll();
    }

    @PutMapping("/editUser/{id}")
    public ResponseEntity<UserModel> editUser(@PathVariable int id, @RequestBody UserModel data){
        UserModel user = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("User not exit with id:" + id));

        user.setEmail(data.getEmail());
        user.setUsername(data.getUsername());
        user.setMobileNumber(data.getMobileNumber());
        user.setUserRole(data.getUserRole());

        UserModel updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable int id){
        UserModel user = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("User not exit with id:" + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

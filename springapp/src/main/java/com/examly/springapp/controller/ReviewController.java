package com.examly.springapp.controller;

import java.util.List;

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
import org.springframework.security.access.prepost.PreAuthorize;

import com.examly.springapp.model.ReviewModel;
import com.examly.springapp.repository.ReviewRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @PostMapping("/user/addReview")
    @PreAuthorize("hasRole('USER')")
    public ReviewModel addReview(@RequestBody ReviewModel review){
         return reviewRepository.save(review);
    }

    @GetMapping("/user/getReview")
    @PreAuthorize("hasRole('USER')")
    public List<ReviewModel> viewReview(){
        return reviewRepository.findAll();
    }
    
}

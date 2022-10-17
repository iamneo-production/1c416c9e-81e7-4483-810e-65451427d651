package com.examly.springapp.repository;

import java.util.Optional;

import com.examly.springapp.model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{

    Optional<UserModel> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}

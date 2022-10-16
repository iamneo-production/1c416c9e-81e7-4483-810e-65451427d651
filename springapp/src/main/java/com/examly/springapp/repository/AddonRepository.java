package com.examly.springapp.repository;
import com.examly.springapp.model.AddonModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

@Repository
public interface AddonRepository extends JpaRepository<AddonModel, Integer>{


}

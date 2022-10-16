package com.examly.springapp.repository;
import com.examly.springapp.model.RechargeModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

@Repository
public interface RechargeRepository extends JpaRepository<RechargeModel, Integer>{
    

}

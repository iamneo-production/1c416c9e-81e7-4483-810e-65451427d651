package com.examly.springapp.repository;
import com.examly.springapp.model.PlanModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<PlanModel, Integer>{

    List<PlanModel> findByPlanType(String planType);

    List<PlanModel> findByOrderByPlanPriceAsc();

    List<PlanModel> findByPlanTypeOrderByPlanPriceAsc(String planType);

    List<PlanModel> findByOrderByPlanPriceDesc();

    List<PlanModel> findByPlanTypeOrderByPlanPriceDesc(String planType);
}

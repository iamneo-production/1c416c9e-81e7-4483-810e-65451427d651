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

import com.examly.springapp.model.PlanModel;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")

public class PlanController {
    
    @Autowired
    PlanRepository planRepository;

    @PostMapping("/addPlan")
    public PlanModel addPlan(@RequestBody PlanModel newPlan){
        return planRepository.save(newPlan);
    }

    @GetMapping("/getAllPlan")
    public List<PlanModel> getPlan(){
        return planRepository.findAll();
    }

    @GetMapping("/getPlan/{planId}")
    public ResponseEntity<PlanModel> getPlanById(@PathVariable int planId){
        PlanModel plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));
        return ResponseEntity.ok(plan);
    }

    @PutMapping("/editPlan/{planId}")
    public ResponseEntity<PlanModel> editPlan(@PathVariable int planId, @RequestBody PlanModel data){
        PlanModel plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));

        plan.setPlanType(plan.getPlanType());
        plan.setPlanName(plan.getPlanName());
        plan.setPlanValidity(plan.getPlanValidity());
        plan.setPlanDetails(plan.getPlanDetails());
        plan.setPlanPrice(plan.getPlanPrice());

        PlanModel updatedPlan = planRepository.save(plan);
        return ResponseEntity.ok(updatedPlan);
    }

    @DeleteMapping("deletePlan/{planId}")
    public ResponseEntity<Map<String, Boolean>> viewPlan(@PathVariable int planId){
        PlanModel plan = planRepository.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));

        planRepository.delete(plan);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}

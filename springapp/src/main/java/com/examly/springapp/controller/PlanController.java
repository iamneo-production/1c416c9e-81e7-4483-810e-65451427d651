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
import org.springframework.security.access.prepost.PreAuthorize;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
public class PlanController {
    
    @Autowired
    PlanRepository planRepository;

    @PostMapping("/admin/addPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public PlanModel addPlan(@RequestBody PlanModel newPlan){
        return planRepository.save(newPlan);
    }

    @GetMapping("/admin/getAllPlan")
    @PreAuthorize("hasRole('ADMIN')")
    public List<PlanModel> getPlan(){
        return planRepository.findAll();
    }

    @GetMapping("/admin/getPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PlanModel> getPlanById(@PathVariable int planId){
        PlanModel plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));
        return ResponseEntity.ok(plan);
    }

    @PutMapping("/admin/editPlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PlanModel> editPlan(@PathVariable int planId, @RequestBody PlanModel data){
        PlanModel plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));

        plan.setPlanType(data.getPlanType());
        plan.setPlanName(data.getPlanName());
        plan.setPlanValidity(data.getPlanValidity());
        plan.setPlanDetails(data.getPlanDetails());
        plan.setPlanPrice(data.getPlanPrice());

        PlanModel updatedPlan = planRepository.save(plan);
        return ResponseEntity.ok(updatedPlan);
    }

    @DeleteMapping("/admin/deletePlan/{planId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> viewPlan(@PathVariable int planId){
        PlanModel plan = planRepository.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));

        planRepository.delete(plan);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getAllPlan")
    @PreAuthorize("hasRole('USER')")
    public List<PlanModel> getRechargePlan(){
        return planRepository.findAll();
    }

    @GetMapping("/user/getPlan/{planId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<PlanModel> getRechargePlanById(@PathVariable int planId){
        PlanModel plan = planRepository.findById(planId)
                    .orElseThrow(() -> new ResourceNotFoundException("Plan not exit with id:" + planId));
        return ResponseEntity.ok(plan);
    }

}

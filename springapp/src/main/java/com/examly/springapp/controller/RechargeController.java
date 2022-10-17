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

import com.examly.springapp.model.RechargeModel;
import com.examly.springapp.repository.RechargeRepository;
import com.examly.springapp.exception.ResourceNotFoundException;
import org.springframework.security.access.prepost.PreAuthorize;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
public class RechargeController {
    
    @Autowired
    RechargeRepository rechargeRepository;

    @PostMapping("/user/addRecharge")
    @PreAuthorize("hasRole('USER')")
    public RechargeModel addRecharge(@RequestBody RechargeModel plan){
         return rechargeRepository.save(plan);
    }

    @GetMapping("/user/getRecharge")
    @PreAuthorize("hasRole('USER')")
    public List<RechargeModel> viewRecharge(){
        return rechargeRepository.findAll();
    }

    @PutMapping("/user/editRecharge/{rechargeId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<RechargeModel> editRecharge(@PathVariable int rechargeId, @RequestBody RechargeModel data){
        RechargeModel rech = rechargeRepository.findById(rechargeId)
                    .orElseThrow(() -> new ResourceNotFoundException("Recharge not exit with id:" + rechargeId));

        rech.setRechargetype(data.getRechargetype());
        rech.setName(data.getName());
        rech.setMobile(data.getMobile());
        rech.setEmail(data.getEmail());
        rech.setRechargePlan(data.getRechargePlan());
        rech.setRechargePrice(data.getRechargePrice());

        RechargeModel updatedRecharge = rechargeRepository.save(rech);
        return ResponseEntity.ok(updatedRecharge);
    }

    @DeleteMapping("/user/deleteRecharge/{rechargeId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<String, Boolean>> deleteRecharge(@PathVariable int rechargeId){
        RechargeModel rech = rechargeRepository.findById(rechargeId)
                    .orElseThrow(() -> new ResourceNotFoundException("Recharge not exit with id:" + rechargeId));

        rechargeRepository.delete(rech);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

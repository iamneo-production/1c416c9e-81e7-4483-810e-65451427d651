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
import org.springframework.security.access.prepost.PreAuthorize;

import com.examly.springapp.model.AddonModel;
import com.examly.springapp.repository.AddonRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

@CrossOrigin(origins = "https://8081-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io")
@RestController
public class AddOnController {
    
    @Autowired
    AddonRepository addonRepository;

    @PostMapping("/admin/addAddon")
    @PreAuthorize("hasRole('ADMIN')")
    public AddonModel addAddon(@RequestBody AddonModel data){
        return addonRepository.save(data);
    }

    @GetMapping("/admin/getAddon")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AddonModel> getAddon(){
        return addonRepository.findAll();
    }

    @GetMapping("/admin/getAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AddonModel> getAddonById(@PathVariable int addonId){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException("Addon not exit with id:" + addonId));
        return ResponseEntity.ok(addon);
    }

    @PutMapping("/admin/editAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AddonModel> editAddon(@PathVariable int addonId, @RequestBody AddonModel data){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException("Addon not exit with id:" + addonId));

        addon.setAddonName(data.getAddonName());
        addon.setAddonPrice(data.getAddonPrice());
        addon.setAddonDetails(data.getAddonDetails());

        AddonModel updatedAddon = addonRepository.save(addon);
        return ResponseEntity.ok(updatedAddon);
    }

    @DeleteMapping("/admin/deleteAddon/{addonId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int addonId){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException("Addon not exit with id:" + addonId));

        addonRepository.delete(addon);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/getAddon")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddon(){
        return addonRepository.findAll();
    }

    @GetMapping("/user/getAddon/{addonId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<AddonModel> getRechargeAddonById(@PathVariable int addonId){
        AddonModel addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException("Addon not exit with id:" + addonId));
        return ResponseEntity.ok(addon);
    }
    
    @GetMapping("/user/getAddonAsc")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddonAsc(){
        return addonRepository.findByOrderByAddonPriceAsc();
    }

    @GetMapping("/user/getAddonDesc")
    @PreAuthorize("hasRole('USER')")
    public List<AddonModel> getRechargeAddonDesc(){
        return addonRepository.findByOrderByAddonPriceDesc();
    }

}

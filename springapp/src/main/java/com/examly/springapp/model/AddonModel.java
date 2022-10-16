package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AddonModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;
    private String addonName;
    private int addonPrice;
    private String AddonDetails;
    
    public AddonModel(){

    }

    public AddonModel(String addonName, int addonPrice, String AddonDetails){
        super();
        this.addonName=addonName;
        this.addonPrice=addonPrice;
        this.AddonDetails=AddonDetails;
    }

    public int getAddonId() {
        return addonId;
    }
    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }
    public String getAddonName() {
        return addonName;
    }
    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }
    public int getAddonPrice() {
        return addonPrice;
    }
    public void setAddonPrice(int addonPrice) {
        this.addonPrice = addonPrice;
    }
    public String getAddonDetails() {
        return AddonDetails;
    }
    public void setAddonDetails(String addonDetails) {
        AddonDetails = addonDetails;
    }
    
}
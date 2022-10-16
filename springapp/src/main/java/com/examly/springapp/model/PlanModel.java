package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PlanModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int planId;
    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private String planPrice;

    public PlanModel(){

    }

    public PlanModel(String planType, String planName, String planValidity, String planDetails, String planPrice){
        super();
        this.planType=planType;
        this.planName=planName;
        this.planValidity=planValidity;
        this.planDetails=planDetails;
        this.planPrice=planPrice;
    }
    
    public int getPlanId() {
        return planId;
    }
    public void setPlanId(int planId) {
        this.planId = planId;
    }
    public String getPlanType() {
        return planType;
    }
    public void setPlanType(String planType) {
        this.planType = planType;
    }
    public String getPlanName() {
        return planName;
    }
    public void setPlanName(String planName) {
        this.planName = planName;
    }
    public String getPlanValidity() {
        return planValidity;
    }
    public void setPlanValidity(String planValidity) {
        this.planValidity = planValidity;
    }
    public String getPlanDetails() {
        return planDetails;
    }
    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }
    public String getPlanPrice() {
        return planPrice;
    }
    public void setPlanPrice(String planPrice) {
        this.planPrice = planPrice;
    }
    
}

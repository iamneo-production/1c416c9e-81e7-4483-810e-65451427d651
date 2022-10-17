package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;
import javax.persistence.Id;

@Entity
public class RechargeModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rechargeId;

    @NotBlank
    private String rechargetype;

    @NotBlank
    private String name;

    @NotBlank
    private String mobile;

    @NotBlank
    private String email;

    @NotBlank
    private String rechargePlan;

    @NotBlank
    private String rechargePrice;

    public RechargeModel(){

    }

    public RechargeModel(String rechargetype, String name, String mobile, String email, String rechargePlan, String rechargePrice){
        super();
        this.rechargetype=rechargetype;
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.rechargePlan=rechargePlan;
        this.rechargePrice=rechargePrice;
    }
    
    public int getRechargeId() {
        return rechargeId;
    }
    public void setRechargeId(int rechargeId) {
        this.rechargeId = rechargeId;
    }
    public String getRechargetype() {
        return rechargetype;
    }
    public void setRechargetype(String rechargetype) {
        this.rechargetype = rechargetype;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getRechargePlan() {
        return rechargePlan;
    }

    public void setRechargePlan(String rechargePlan) {
        this.rechargePlan = rechargePlan;
    }

    public String getRechargePrice() {
        return rechargePrice;
    }

    public void setRechargePrice(String rechargePrice) {
        this.rechargePrice = rechargePrice;
    }
    
    
}
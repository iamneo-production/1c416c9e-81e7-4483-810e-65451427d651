package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RechargeModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rechargeId;
    private String rechargetype;
    private String name;
    private String mobile;
    private String email;
    private int rechargePlan;
    private int rechargePrice;

    public RechargeModel(){

    }

    public RechargeModel(String rechargetype, String name, String mobile, String email, int rechargePlan, int rechargePrice){
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
    public int getRechargePlan() {
        return rechargePlan;
    }
    public void setRechargePlan(int rechargePlan) {
        this.rechargePlan = rechargePlan;
    }
    public int getRechargePrice() {
        return rechargePrice;
    }
    public void setRechargePrice(int rechargePrice) {
        this.rechargePrice = rechargePrice;
    }
    
}
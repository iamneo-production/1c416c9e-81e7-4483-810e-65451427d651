import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io";

//AddonService --> admin (Addon)

const getAllAddons = () => {
    return axios.get(API_URL + "/admin/getAddon", { headers: authHeader() });
};

const createAddon = (addon) => {
    return axios.post(API_URL + "/admin/addAddon", addon, { headers: authHeader() });
};

const getAddonById = (addonId) => {
    return axios.get(API_URL + "/admin/getAddon/" + addonId, { headers: authHeader() });
};

const updateAddon = (addonId, addon) => {
    return axios.put(API_URL + "/admin/editAddon/" + addonId, addon, { headers: authHeader() });
};

const deleteAddon = (addonId) => {
    return axios.delete(API_URL + "/admin/deleteAddon/" + addonId, { headers: authHeader() });
};

//AddService --> user (Addon Plans)

const getAllRechargeAddons = () => {
    return axios.get(API_URL + "/user/getAddon", { headers: authHeader() });
};

const getRechargeAddonById = (addonId) => {
    return axios.get(API_URL + "/user/getAddon/" + addonId, { headers: authHeader() });
};

const createAddonRecharge = (plan) => {
    return axios.post(API_URL + "/user/addRecharge", plan, { headers: authHeader() });
};

const getAllAddonRecharge = () => {
    return axios.get(API_URL + "/user/getRecharge", { headers: authHeader() });
};

//MonthlyService --> admin (Monthly plans)

const getAllMonthlyPlans = () => {
    return axios.get(API_URL + "/admin/getAllPlan", { headers: authHeader() });
};

const createMonthlyPlan = (plan) => {
    return axios.post(API_URL + "/admin/addPlan", plan, { headers: authHeader() });
};

const getMonthlyPlanById = (planId) => {
    return axios.get(API_URL + "/admin/getPlan/" + planId, { headers: authHeader() });
};

const updateMonthlyPlan = (planId, plan) => {
    return axios.put(API_URL + "/admin/editPlan/" + planId, plan, { headers: authHeader() });
};

const deleteMonthlyPlan = (planId) => {
    return axios.delete(API_URL + "/admin/deletePlan/" + planId, { headers: authHeader() });
};

//PopularplansService --> user (Popular plans)

const getAllPopularPlans = () => {
    return axios.get(API_URL + "/user/getAllPlan", { headers: authHeader() }); 
};

const getPopularPlanById = (planId) => {
    return axios.get(API_URL + "/user/getPlan/" + planId, { headers: authHeader() });
};

const createRecharge = (plan) => {
    return axios.post(API_URL + "/user/addRecharge", plan, { headers: authHeader() });
};

const getAllRecharge = () => {
    return axios.get(API_URL + "/user/getRecharge", { headers: authHeader() });
};

//PremiumplanService --> admin (Premium plan)

const getAllPlans = () => {
    return axios.get(API_URL + "/admin/getAllPlan", { headers: authHeader() });
};

const createPlan = (plan) => {
    return axios.post(API_URL + "/admin/addPlan", plan, { headers: authHeader() });
};

const getPlanById = (planId) => {
    return axios.get(API_URL + "/admin/getPlan/" + planId, { headers: authHeader() });
};

const updatePlan = (planId, plan) => {
    return axios.put(API_URL + "/admin/editPlan/" + planId, plan, { headers: authHeader() });
};

const deletePlan = (planId) => {
    return axios.delete(API_URL + "/admin/deletePlan/" + planId, { headers: authHeader() });
};

const UserService = {
    getAllAddons,
    createAddon,
    getAddonById,
    updateAddon,
    deleteAddon,
    getAllRechargeAddons,
    getRechargeAddonById,
    createAddonRecharge,
    getAllAddonRecharge,
    getAllMonthlyPlans,
    createMonthlyPlan,
    getMonthlyPlanById,
    updateMonthlyPlan,
    deleteMonthlyPlan,
    getAllPopularPlans,
    getPopularPlanById,
    createRecharge,
    getAllRecharge,
    getAllPlans,
    createPlan,
    getPlanById,
    updatePlan,
    deletePlan,
};

export default UserService;
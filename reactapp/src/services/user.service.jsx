import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080";

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
    return axios.get(API_URL + "/user/getAddonAsc", { headers: authHeader() });
};

const getAllRechargeAddonsDesc = () => {
    return axios.get(API_URL + "/user/getAddonDesc", { headers: authHeader() });
};

const getRechargeAddonById = (addonId) => {
    return axios.get(API_URL + "/user/getAddon/" + addonId, { headers: authHeader() });
};

const createAddonRecharge = (plan) => {
    return axios.post(API_URL + "/user/addRecharge", plan, { headers: authHeader() });
};

//MonthlyService --> admin (Monthly plans)

const getAllMonthlyPlans = () => {
    return axios.get(API_URL + "/admin/getAllMonthlyPlan", { headers: authHeader() });
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
    return axios.get(API_URL + "/user/getAllPopularPlanAsc", { headers: authHeader() }); 
};

const getAllPopularPlansDesc = () => {
    return axios.get(API_URL + "/user/getAllPopularPlanDesc", { headers: authHeader() }); 
};

const getAllPopularMonthlyPlans = () => {
    return axios.get(API_URL + "/user/getAllMonthlyPlanAsc", { headers: authHeader() });
};

const getAllPopularMonthlyPlansDesc = () => {
    return axios.get(API_URL + "/user/getAllMonthlyPlanDesc", { headers: authHeader() });
};

const getAllPopularPremiumPlans = () => {
    return axios.get(API_URL + "/user/getAllPremiumPlanAsc", { headers: authHeader() });
};

const getAllPopularPremiumPlansDesc = () => {
    return axios.get(API_URL + "/user/getAllPremiumPlanDesc", { headers: authHeader() });
};

const getPopularPlanById = (planId) => {
    return axios.get(API_URL + "/user/getPlan/" + planId, { headers: authHeader() });
};

const createRecharge = (plan) => {
    return axios.post(API_URL + "/user/addRecharge", plan, { headers: authHeader() });
};

//PremiumplanService --> admin (Premium plan)

const getAllPlans = () => {
    return axios.get(API_URL + "/admin/getAllPremiumPlan", { headers: authHeader() });
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

//RechargeService --> user(recharge history)

const getRechargeById = (email) => {
    return axios.get(API_URL + "/user/getRechargeByDesc/" + email, { headers: authHeader() });
};

const getRechargeByIdAsc = (email) => {
    return axios.get(API_URL + "/user/getRechargeByAsc/" + email, { headers: authHeader() });
};

//review --> user(review)

const createReview = (review) => {
    return axios.post(API_URL + "/user/addReview", review, { headers: authHeader() });
};

const getAllReview = () => {
    return axios.get(API_URL + "/user/getReview", { headers: authHeader() });
};


const UserService = {
    getAllAddons,
    createAddon,
    getAddonById,
    updateAddon,
    deleteAddon,
    getAllRechargeAddons,
    getAllRechargeAddonsDesc,
    getRechargeAddonById,
    createAddonRecharge,
    getAllMonthlyPlans,
    createMonthlyPlan,
    getMonthlyPlanById,
    updateMonthlyPlan,
    deleteMonthlyPlan,
    getAllPopularPlans,
    getAllPopularPlansDesc,
    getAllPopularMonthlyPlans,
    getAllPopularMonthlyPlansDesc,
    getAllPopularPremiumPlans,
    getAllPopularPremiumPlansDesc,
    getPopularPlanById,
    createRecharge,
    getAllPlans,
    createPlan,
    getPlanById,
    updatePlan,
    deletePlan,
    getRechargeById,
    getRechargeByIdAsc,
    createReview,
    getAllReview,
};

export default UserService;
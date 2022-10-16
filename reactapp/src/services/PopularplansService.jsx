import axios from 'axios'

const PLAN_BASE_REST_API_URL = 'https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io/';

class PopularplansService{

    getAllPlans(){
        return axios.get(PLAN_BASE_REST_API_URL+'/admin/getAllPlan')
    }
    
    getPlanById(planId){
        return axios.get(PLAN_BASE_REST_API_URL + '/admin/getPlan/' + planId);
    }

    createRecharge(plan){
        return axios.post(PLAN_BASE_REST_API_URL +'/user/addRecharge', plan)
    }

    getAllRecharge(){
        return axios.get(PLAN_BASE_REST_API_URL+'/user/getRecharge')
    }
}

export default new PopularplansService();
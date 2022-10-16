import axios from 'axios'

const PLAN_BASE_REST_API_URL = 'https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io/admin';

class MonthlyService{

    getAllPlans(){
        return axios.get(PLAN_BASE_REST_API_URL+'/getAllPlan')
    }

    createPlan(plan){
        return axios.post(PLAN_BASE_REST_API_URL +'/addPlan', plan)
    }
    
    getPlanById(planId){
        return axios.get(PLAN_BASE_REST_API_URL + '/getPlan/' + planId);
    }

    updatePlan(planId, plan){
        return axios.put(PLAN_BASE_REST_API_URL + '/editPlan/' + planId, plan);
    }

    deletePlan(planId){
        return axios.delete(PLAN_BASE_REST_API_URL + '/deletePlan/' + planId);
    }
}

export default new MonthlyService();
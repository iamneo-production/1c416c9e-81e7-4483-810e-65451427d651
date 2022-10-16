import axios from 'axios'

const ADDON_BASE_REST_API_URL = 'https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io';

class AddService{

    getAllAddons(){
        return axios.get(ADDON_BASE_REST_API_URL+'/admin/getAddon')
    }

    getAddonById(addonId){
        return axios.get(ADDON_BASE_REST_API_URL + '/admin/getAddon/' + addonId);
    }

    createRecharge(plan){
        return axios.post(ADDON_BASE_REST_API_URL +'/user/addRecharge', plan)
    }

    getAllRecharge(){
        return axios.get(ADDON_BASE_REST_API_URL+'/user/getRecharge')
    }
}

export default new AddService();
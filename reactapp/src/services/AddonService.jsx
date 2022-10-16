import axios from 'axios'

const ADDON_BASE_REST_API_URL = 'https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io/admin';

class AddonService{

    getAllAddons(){
        return axios.get(ADDON_BASE_REST_API_URL+'/getAddon')
    }

    createAddon(addon){
        return axios.post(ADDON_BASE_REST_API_URL +'/addAddon', addon)
    }

    getAddonById(addonId){
        return axios.get(ADDON_BASE_REST_API_URL + '/getAddon/' + addonId);
    }

    updateAddon(addonId, addon){
        return axios.put(ADDON_BASE_REST_API_URL + '/editAddon/' + addonId, addon);
    }

    deleteAddon(addonId){
        return axios.delete(ADDON_BASE_REST_API_URL + '/deleteAddon/' + addonId);
    }
}

export default new AddonService();
import axios from 'axios'

const SIGNUP_BASE_REST_API_URL = 'https://8080-ddbdacaccaaebbfaaecebafeebbfdeebfce.examlyiopb.examly.io/user';

class SignupService{

    createAccount(data){
        return axios.post(SIGNUP_BASE_REST_API_URL +'/signup', data)
    }

}

export default new SignupService();
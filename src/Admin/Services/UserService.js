import axios from 'axios';
import qs from 'querystring';


const USER_URL = "http://localhost:5000/user/";

class UserService {

    getUser(){
        return axios.get(USER_URL);
    }

    createUser(User){
        return fetch(USER_URL, {
            method: 'POST',
            body: qs.stringify(User),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    getUserById(id){
        return axios.get(USER_URL + id);     
    }

    updateUser(id, User){
        return fetch(USER_URL + id, {
            method: 'PUT',
            body: qs.stringify(User),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    deleteUser(id){
        return axios.delete(USER_URL + id);
    }
}

export default new UserService();
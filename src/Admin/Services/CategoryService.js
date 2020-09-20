import axios from 'axios';
import qs from 'querystring';


const CATEGORY_URL = "http://localhost:5000/category/";

class CategoryService {

    getCategory(){
        return axios.get(CATEGORY_URL);
    }

    createCategory(Category){
        return fetch(CATEGORY_URL, {
            method: 'POST',
            body: qs.stringify(Category),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    getCategoryById(id){
        return axios.get(CATEGORY_URL + id);     
    }

    updateCategory(id, Category){
        return fetch(CATEGORY_URL + id, {
            method: 'PUT',
            body: qs.stringify(Category),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    deleteCategory(id){
        return axios.delete(CATEGORY_URL + id);
    }
}

export default new CategoryService();
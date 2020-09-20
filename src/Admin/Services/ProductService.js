import axios from 'axios';
import qs from 'querystring';


const PRODUCT_URL = "http://localhost:5000/product/";

class ProductService {

    getProduct(){
        return axios.get(PRODUCT_URL);
    }

    createProduct(product){
        return fetch(PRODUCT_URL, {
            method: 'POST',
            body: qs.stringify(product),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    getProductById(id){
        return axios.get(PRODUCT_URL + id);     
    }

    updateProduct(id, product){
        return fetch(PRODUCT_URL + id, {
            method: 'PUT',
            body: qs.stringify(product),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_URL + id);
    }
}

export default new ProductService();
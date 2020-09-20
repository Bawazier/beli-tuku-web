import axios from 'axios';
import qs from 'querystring';


const CART_URL = "http://localhost:5000/cart/";

class CartService {

    getCart(){
        return axios.get(CART_URL);
    }

    createCart(Cart){
        return fetch(CART_URL, {
            method: 'POST',
            body: qs.stringify(Cart),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    getCartById(id){
        return axios.get(CART_URL + id);     
    }

    updateCart(id, Cart){
        return fetch(CART_URL + id, {
            method: 'PUT',
            body: qs.stringify(Cart),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }

    deleteCart(id){
        return axios.delete(CART_URL + id);
    }
}

export default new CartService();
import { default as axios } from "axios";

export default {
  // categories: () => ({
  //   type: "GET_CATEGORIES",
  //   payload: axios.get("http://localhost:5000/home/categories"),
  // }),
  new: () => ({
    type: "GET_PRODUCTS_NEW",
    payload: axios.get("http://localhost:5000/home/products/new"),
  }),
  populer: () => ({
    type: "GET_PRODUCTS_POPULER",
    payload: axios.get("http://localhost:5000/home/products/populer"),
  }),
};
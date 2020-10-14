import http from "../../Helper/http";

export default {
  findCategories: () => ({
    type: "GET_CATEGORIES",
    payload: http().get("home/categories"),
  }),
  new: () => ({
    type: "GET_PRODUCTS_NEW",
    payload: http().get("home/products/new"),
  }),
  populer: () => ({
    type: "GET_PRODUCTS_POPULER",
    payload: http().get("home/products/populer"),
  }),
  search: (search) => ({
    type: "SEARCH_PRODUCTS",
    payload: http().get("home/products/search?search=" + search),
  }),
  byCategory: (id) => ({
    type: "GET_PRODUCTS_CATEGORY",
    payload: http().get("home/products/category/" + id),
  }),
};
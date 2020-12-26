import http from '../../Helper/http';

export default {
  newProducts: (page = 1, limit = 10) => ({
    type: "LIST_NEW_PRODUCTS",
    payload: http().get(`/public/products/?page=${page}&limit=${limit}`),
  }),
  popularProducts: (
    page = 1,
    limit = 10,
    sortBy = "stock",
    sortType = "ASC"
  ) => ({
    type: "LIST_POPULAR_PRODUCTS",
    payload: http().get(
      `/public/products/?page=${page}&limit=${limit}&sortBy=${sortBy}&sortType=${sortType}`
    ),
  }),
  listCategories: (search = "", page = 1, limit = 30) => ({
    type: "LIST_CATEGORIES",
    payload: http().get(
      `/public/categories/?search=${search}&page=${page}&limit=${limit}`
    ),
  }),
  catalogSearch: (
    searchName = "",
    searchCategory = "",
    searchColor = "",
    searchSize = "",
    searchStore = "",
    searchStatus = ""
  ) => ({
    type: "CATALOG_RESULTS",
    payload: http().get(
      "/public/products/" +
        `?search=${searchName}&searchColor=${searchColor}&searchSize=${searchSize}&searchStore=${searchStore}&searchCategory=${searchCategory}&searchStatus=${searchStatus}`
    ),
  }),
  catalogSort: (
    sortBy = "createdAt",
    sortType = "DESC",
    page = 1,
    limit = 12
  ) => ({
    type: "CATALOG_RESULTS",
    payload: http().get(
      "/public/products/" +
        `?sortBy=${sortBy}&sortType=${sortType}&page=${page}&limit=${limit}`
    ),
  }),
  catalogSortScroll: (sortBy = "createdAt", sortType = "DESC", page = 1) => ({
    type: "SCROLL_CATALOG_RESULTS",
    payload: http().get(
      "/public/products/" +
        `?sortBy=${sortBy}&sortType=${sortType}&page=${page}`
    ),
  }),
  // catalogFilter: () => ({
  //   type: 'CATALOG_RESULTS',
  //   payload: http().get('/public/products/' + `?/color[${index}]=${values}`),
  // }),
  detailProduct: (id_product) => ({
    type: "GET_DETAIL_PRODUCT",
    payload: http().get(`/public/products/${id_product}`),
  }),

  detailProductReviews: (id_product) => ({
    type: "GET_DETAIL_PRODUCT_REVIEWS",
    payload: http().get(`/public/product/reviews/${id_product}`),
  }),
};

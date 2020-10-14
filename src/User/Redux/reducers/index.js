import { combineReducers } from "redux";

import productsNew from "./Home/productsNew";
import productsPopuler from "./Home/productsPopuler";
import categories from "./Home/categories";
import searchProducts from "./Home/searchProducts";
import customer from "./Signup/customer";
import authUser from "./Auth/authUser";
import account from "./Profile/account";

export default combineReducers({
  productsNew,
  productsPopuler,
  categories,
  searchProducts,
  customer,
  authUser,
  account,
});

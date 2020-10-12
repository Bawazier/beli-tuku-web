import { combineReducers } from "redux";

import productsNew from "./Home/productsNew";
import productsPopuler from "./Home/productsPopuler";
import customer from "./Signup/customer";

export default combineReducers({
  productsNew,
  productsPopuler,
  customer
});

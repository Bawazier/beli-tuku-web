import {combineReducers} from 'redux';

import auth from './Auth/auth';

import catalogResults from './Home/catalogResults';
import detailProduct from './Home/detailProduct';
import listCategories from './Home/listCategories';
import listNewProducts from './Home/listNewProducts';
import listPopularProducts from './Home/listPopularProducts';

import account from './Profile/account';
import address from './Profile/address';

import postProductRating from './Rating/postProductRating';

import cart from './Transaction/cart';
import order from './Transaction/order';
import topup from './Transaction/topup';
import quantityCounter from './Transaction/quantityCounter';

export default combineReducers({
  auth,

  catalogResults,
  detailProduct,
  listCategories,
  listNewProducts,
  listPopularProducts,

  account,
  address,

  postProductRating,

  cart,
  order,
  topup,
  quantityCounter,
});

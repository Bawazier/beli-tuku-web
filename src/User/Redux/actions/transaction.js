import http from '../../Helper/http';
import qs from 'qs';

export default {
  listTopup: (token) => ({
    type: 'LIST_TOPUP',
    payload: http(token).get('/customer/topup'),
  }),

  topupCredit: (token, id_topup) => ({
    type: 'TOPUP_CREDIT',
    payload: http(token).post(`/customer/topup/${id_topup}`),
  }),

  addToCart: (
    token,
    id_product,
    quantity = 1,
    productColorId,
    productSizeId,
  ) => ({
    type: 'ADD_SHOPPING_CART',
    payload: http(token).post(
      `/customer/cart/${id_product}` +
        `?/productColorId=${productColorId}` +
        `&productSizeId=${productSizeId}`,
      qs.stringify({quantity: quantity}),
    ),
  }),

  deleteCart: (token, id_cart) => ({
    type: 'DELETE_SHOPPING_CART',
    payload: http(token).delete(`/customer/cart/${id_cart}`),
  }),

  checkoutCart: (token, id_cart, quantity = 1) => ({
    type: 'CHECKOUT_SHOPPING_CART',
    payload: http(token).put(
      `/customer/cart/out/${id_cart}`,
      qs.stringify({quantity: quantity}),
    ),
  }),

  discardCheckoutCart: (token) => ({
    type: 'DISCARD_CHECKOUT_SHOPPING_CART',
    payload: http(token).put('/customer/cart/in'),
  }),

  listCart: (token, status = 'IN') => ({
    type: 'LIST_CART',
    payload: http(token).get(`/customer/cart/?status=${status}`),
  }),

  listCheckoutCart: (token, status = 'OUT') => ({
    type: 'LIST_CART_OUT',
    payload: http(token).get(`/customer/cart/?status=${status}`),
  }),

  listOrderCart: (token, noOrder = '', status = 'ORDER') => ({
    type: 'LIST_CART_ORDER',
    payload: http(token).get(
      `/customer/cart/?status=${status}&noOrder=${noOrder}`,
    ),
  }),

  orderByCredit: (token) => ({
    type: 'POST_ORDER',
    payload: http(token).post('/customer/order'),
  }),

  getOrder: (token, id_order) => ({
    type: 'GET_ORDER',
    payload: http(token).get(`/customer/order/${id_order}`),
  }),

  listOrder: (token) => ({
    type: 'LIST_ORDER',
    payload: http(token).get('/customer/order'),
  }),

  dataCart: (id_cart, payload) => ({
    type: 'PUSH_DATA',
    id: id_cart,
    payload,
  }),

  increment: (id_cart, payload) => ({
    type: 'INCREMENT',
    id: id_cart,
    payload,
  }),

  decrement: (id_cart, payload) => ({
    type: 'DECREMENT',
    id: id_cart,
    payload,
  }),

  deleteDataCart: (id_cart) => ({
    type: 'REMOVE_DATA',
    id: id_cart,
  }),
};

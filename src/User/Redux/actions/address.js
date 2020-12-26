import http from '../../helper/http';
import qs from 'qs';

export default {
  postAddress: (token, data) => ({
    type: 'POST_ADDRESS',
    payload: http(token).post('/customer/address', qs.stringify(data)),
  }),

  updateAddress: (token, id_address, data) => ({
    type: 'UPDATE_ADDRESS',
    payload: http(token).patch(
      `/customer/address/${id_address}`,
      qs.stringify(data),
    ),
  }),

  getAddress: (token, id_address) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get(`/customer/address/${id_address}`),
  }),

  listAddress: (token, search = '') => ({
    type: 'LIST_ADDRESS',
    payload: http(token).get('/customer/address/' + `?/search=${search}`),
  }),

  deleteAddress: (token, id_address) => ({
    type: 'DELETE_ADDRESS',
    payload: http(token).delete(`/customer/address/${id_address}`),
  }),
};

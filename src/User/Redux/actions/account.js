import http from '../../helper/http';
import qs from 'qs';

export default {
  changePass: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).post('/customer/change/pass', qs.stringify(data)),
  }),

  tryAgain: () => ({
    type: 'CHANGE_PASSWORD_TRY',
  }),

  getAccount: (token) => ({
    type: 'GET_ACCOUNT',
    payload: http(token).get('/customer/account'),
  }),

  updateAccount: (token, data) => ({
    type: 'UPDATE_ACCOUNT',
    payload: http(token).patch('/customer/account', qs.stringify(data)),
  }),

  updateAccountImage: (token, data) => ({
    type: 'UPDATE_ACCOUNT',
    payload: http(token).patch('/customer/account', data),
  }),
};

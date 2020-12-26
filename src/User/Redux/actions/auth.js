import http from '../../Helper/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('/auth/signin', qs.stringify(data)),
  }),

  signup: (data, id_roles = 3) => ({
    type: 'SIGNUP',
    payload: http().post(`/auth/signup/${id_roles}`, qs.stringify(data)),
  }),

  validateForgotPass: (data) => ({
    type: 'VALIDATE_FORGOT_PASS',
    payload: http().post('/auth/forgot/password', qs.stringify(data)),
  }),

  forgotPass: (id_user, data) => ({
    type: 'FORGOT_PASS',
    payload: http().put(`/auth/forgot/password/${id_user}`, qs.stringify(data)),
  }),

  logout: () => ({
    type: 'LOGOUT',
  }),
};

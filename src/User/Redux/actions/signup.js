import { default as axios } from "axios"

export default {
  signup: (roles, name, email, password) => ({
    type: "SIGNUP_CUSTOMER",
    payload: axios.post({
      method: "post",
      url: "http://localhost:5000/auth/register/customer",
      data: {
        name: name,
        email: email,
        password: password,
      },
    }),
  }),
};
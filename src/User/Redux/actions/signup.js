import http from "../../Helper/http";
import qs from "querystring";

export default {
  signup: (data) => ({
    type: "SIGNUP_CUSTOMER",
    payload: http().post("auth/register/customer", qs.stringify(data)),
  }),
};

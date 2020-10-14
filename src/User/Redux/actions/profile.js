import http from "../../Helper/http";

export default {
  findAccount: (token) => ({
    type: "FIND_ACCOUNT",
    payload: http(token).patch("customer/profile/account"),
  }),
  updateAccount: (token, data) => ({
    type: "UPDATE_ACCOUNT",
    payload: http(token).patch("customer/profile/account", data),
  }),
};

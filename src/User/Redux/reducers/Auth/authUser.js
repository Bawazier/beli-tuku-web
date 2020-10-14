const initialState = {
  isLogin: false,
  isError: false,
  isLoading: false,
  token: "",
  auth: [],
  alertMsg: "",
};

export default (state=initialState, action) => {
    switch(action.type){
    case 'AUTH_USER_PENDING':{
      return {
        ...state,
        isLoading: true
      }
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "Login Rejected"
      };
    }
    case 'AUTH_USER_FULFILLED':{
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("auth", action.payload.data.auth);
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        alertMsg: "Successfully login",
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        isLogin: true,
        token: action.payload
      };
    }
    case 'LOGOUT_USER': {
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        token: "",
        auth: [],
        isError: false,
        alertMsg: "Logout Successfully",
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        alertMsg: ''
      }
    }
    default : {
      return state
    }
  }
}

const initialState = {
  token: "",
  isLoading: false,
  isError: false,
  alertMsg: "",

  isLogin: false,

  isSignupError: false,
  isSignupLoading: false,

  isForgotPassError: false,
  isForgotPassLoading: false,

  emailValidData: [],
  isEmailError: false,
  isEmailLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LOGIN_FULFILLED': {
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        isError: false,
        token: action.payload.data.token,
      };
    }
    case 'SIGNUP_PENDING': {
      return {
        ...state,
        isSignupLoading: true,
      };
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isSignupLoading: false,
        isSignupError: true,
        alertMsg: action.payload,
      };
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isSignupLoading: false,
        isSignupError: false,
      };
    }
    case 'FORGOT_PASS_PENDING': {
      return {
        ...state,
        isForgotPassLoading: true,
      };
    }
    case 'FORGOT_PASS_REJECTED': {
      return {
        ...state,
        isForgotPassLoading: false,
        isForgotPassError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'FORGOT_PASS_FULFILLED': {
      return {
        ...state,
        isForgotPassLoading: false,
        isForgotPassError: false,
      };
    }
    case 'VALIDATE_FORGOT_PASS_PENDING': {
      return {
        ...state,
        isEmailLoading: true,
      };
    }
    case 'VALIDATE_FORGOT_PASS_REJECTED': {
      return {
        ...state,
        isEmailLoading: false,
        isEmailError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'VALIDATE_FORGOT_PASS_FULFILLED': {
      return {
        ...state,
        isEmailError: false,
        isEmailLoading: false,
        emailValidData: action.payload.data.validate,
      };
    }
    case 'LOGOUT': {
      localStorage.removeItem("token");
      return initialState;
    }
    default: {
      return state;
    }
  }
};

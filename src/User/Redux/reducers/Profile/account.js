const initialState = {
  data: [],
  isLoading: false,
  alertMsg: '',

  isGetError: false,
  isUpdateError: false,
  isChangePassError: false,
  isChangePassLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_PENDING': {
      return {
        ...state,
        isChangePassLoading: true,
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isChangePassLoading: false,
        isChangePassError: true,
        alertMsg: action.payload,
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isChangePassLoading: false,
        isChangePassError: false,
      };
    }
    case 'CHANGE_PASSWORD_TRY': {
      return {
        ...state,
        isChangePassLoading: false,
        isChangePassError: false,
      };
    }
    case 'GET_ACCOUNT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ACCOUNT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isGetError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_ACCOUNT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isGetError: false,
        data: action.payload.data.results,
      };
    }
    case 'UPDATE_ACCOUNT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_ACCOUNT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isUpdateError: true,
        alertMsg: action.payload,
      };
    }
    case 'UPDATE_ACCOUNT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isUpdateError: false,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

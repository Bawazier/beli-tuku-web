const initialState = {
  dataList: [],
  isLoading: false,
  alertMsg: '',

  isListTopupError: false,
  isTopupCreditError: false,
  isTopupCreditLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_TOPUP_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_TOPUP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_TOPUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataList: action.payload.data.results,
      };
    }
    case 'TOPUP_CREDIT_PENDING': {
      return {
        ...state,
        isTopupCreditLoading: true,
      };
    }
    case 'TOPUP_CREDIT_REJECTED': {
      return {
        ...state,
        isTopupCreditLoading: false,
        isTopupCreditError: true,
        alertMsg: action.payload,
      };
    }
    case 'TOPUP_CREDIT_FULFILLED': {
      return {
        ...state,
        isTopupCreditLoading: false,
        isTopupCreditError: false,
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

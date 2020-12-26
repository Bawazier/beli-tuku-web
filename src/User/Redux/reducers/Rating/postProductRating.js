const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_PRODUCT_RATING_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_PRODUCT_RATING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'POST_PRODUCT_RATING_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
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

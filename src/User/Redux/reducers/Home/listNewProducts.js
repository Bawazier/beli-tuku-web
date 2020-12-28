const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_NEW_PRODUCTS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_NEW_PRODUCTS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_NEW_PRODUCTS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

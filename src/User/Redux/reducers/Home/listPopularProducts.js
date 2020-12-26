const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_POPULAR_PRODUCTS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_POPULAR_PRODUCTS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_POPULAR_PRODUCTS_FULFILLED': {
      const popular = action.payload.data.results.sort(function (a, b) {
        return a.ratings < b.ratings;
      });
      console.log(popular);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: popular,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

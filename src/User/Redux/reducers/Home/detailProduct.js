const initialState = {
  dataProduct: {},
  dataReviews: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  isReviewsError: false,
  isReviewsLoading: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_PRODUCT_REJECTED': {
      localStorage.removeItem("detailProduct");
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataProduct: action.payload.data.results,
      };
    }
    case 'SET_DETAIL_PRODUCT': {
      localStorage.removeItem("detailProduct");
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_PENDING': {
      return {
        ...state,
        isReviewsLoading: true,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_REJECTED': {
      return {
        ...state,
        isReviewsLoading: false,
        isReviewsError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_FULFILLED': {
      return {
        ...state,
        isReviewsLoading: false,
        isReviewsError: false,
        dataReviews: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'LOGOUT': {
      localStorage.removeItem("detailProduct");
      return initialState;
    }
    default: {
      return state;
    }
  }
};

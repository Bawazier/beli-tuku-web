const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',

  isScrollLoading: false,
  isScrollError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CATALOG_RESULTS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CATALOG_RESULTS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'CATALOG_RESULTS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'SCROLL_CATALOG_RESULTS_PENDING': {
      return {
        ...state,
        isScrollLoading: true,
      };
    }
    case 'SCROLL_CATALOG_RESULTS_REJECTED': {
      return {
        ...state,
        isScrollLoading: false,
        isScrollError: true,
        alertMsg: action.payload,
      };
    }
    case 'SCROLL_CATALOG_RESULTS_FULFILLED': {
      return {
        ...state,
        isScrollLoading: false,
        isScrollError: false,
        data: [...state.data, ...action.payload.data.results],
        pageInfo: {
          ...state.pageInfo,
          ...action.payload.data.pageInfo,
        },
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

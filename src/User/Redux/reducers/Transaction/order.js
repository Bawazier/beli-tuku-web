const initialState = {
  dataList: [],
  dataGet: {},
  pageInfo: {},
  isLoading: false,
  alertMsg: '',

  isPostError: false,
  isGetError: false,
  isListtError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isPostError: true,
        alertMsg: action.payload,
      };
    }
    case 'POST_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isPostError: false,
      };
    }
    case 'GET_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isGetError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isGetError: false,
        dataGet: action.payload.data.results,
      };
    }
    case 'LIST_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isListtError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isListtError: false,
        dataList: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
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

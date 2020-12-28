const initialState = {
  dataList: [],
  dataGet: {},
  pageInfo: {},
  isLoading: false,
  alertMsg: '',

  isPostError: false,
  isUpdateError: false,
  isGetError: false,
  isListError: false,
  isDeleteError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isPostError: true,
        alertMsg: action.payload,
      };
    }
    case 'POST_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isPostError: false,
      };
    }
    case 'UPDATE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isUpdateError: true,
        alertMsg: action.payload,
      };
    }
    case 'UPDATE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isUpdateError: false,
      };
    }
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isGetError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isGetError: false,
        dataGet: action.payload.data.results,
      };
    }
    case 'LIST_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isListError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isListError: false,
        dataList: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'DELETE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DELETE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isDeleteError: true,
        alertMsg: action.payload,
      };
    }
    case 'DELETE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isDeleteError: false,
      };
    }
    case 'RESET_FORM': {
      return {
        ...state,
        isLoading: false,
        isGetError: false,
        dataGet: {},
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

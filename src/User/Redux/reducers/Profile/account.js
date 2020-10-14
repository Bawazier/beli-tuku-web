const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FIND_ACCOUNT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FIND_ACCOUNT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "Load profile account Fail",
      };
    }
    case "FIND_ACCOUNT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    case "UPDATE_ACCOUNT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "UPDATE_ACCOUNT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "",
      };
    }
    case "UPDATED_ACCOUNT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

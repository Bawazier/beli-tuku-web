const initialState = {
  data: [],
  imagesPrimary: [],
  isLoading: false,
  isError: false,
  alertMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTS_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SEARCH_PRODUCTS_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "Load Search Products Fail",
      };
    }
    case "SEARCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.respone,
        imagesPrimary: action.payload.data.imagesPrimary,
      };
    }
    default: {
      return state;
    }
  }
};
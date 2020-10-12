const initialState = {
  data: [],
  imagesPrimary: [],
  isLoading: false,
  isError: false,
  alertMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_NEW_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_PRODUCTS_NEW_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "Load News Products Fail",
      };
    }
    case "GET_PRODUCTS_NEW_FULFILLED": {
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
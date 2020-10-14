const initialState = {
  data: [],
  imagesPrimary: [],
  isLoading: false,
  isError: false,
  alertMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_CATEGORY_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_PRODUCTS_CATEGORY_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "Load Search Products Fail",
      };
    }
    case "GET_PRODUCTS_CATEGORY_FULFILLED": {
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

const initialState = {
  data: [],
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
          alertMsg: "Signup Fail",
        };
      }
      case "GET_PRODUCTS_NEW_FULFILLED": {
        const customer = state.data.concat(action.payload);
        return {
          ...state,
          isLoading: false,
          data: customer,
        };
      }
      default: {
        return state;
      }
    }
}
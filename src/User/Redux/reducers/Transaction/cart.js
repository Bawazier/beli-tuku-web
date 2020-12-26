const initialState = {
  dataListCart: [],
  dataListCartOut: [],
  dataListCartOrder: [],
  pageInfo: {},
  dataCart: {},
  isLoading: false,
  alertMsg: '',
  totalAmount: 0,

  isAddCartError: false,
  isDeleteCartLoading: false,
  isDeleteCartError: false,
  isCheckoutError: false,
  isDiscardCheckoutError: false,
  isListCartError: false,
  isListCartLoading: false,
  isListCheckoutCartError: false,
  isListOrderCartError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SHOPPING_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_SHOPPING_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isAddCartError: true,
        alertMsg: action.payload,
      };
    }
    case 'ADD_SHOPPING_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isAddCartError: false,
        dataCart: {
          id: action.payload.data.results.id,
          quantity: 1,
          price: action.payload.data.results.price,
        },
      };
    }
    case 'DELETE_SHOPPING_CART_PENDING': {
      return {
        ...state,
        isDeleteCartLoading: true,
      };
    }
    case 'DELETE_SHOPPING_CART_REJECTED': {
      return {
        ...state,
        isDeleteCartLoading: false,
        isDeleteCartError: true,
        alertMsg: action.payload,
      };
    }
    case 'DELETE_SHOPPING_CART_FULFILLED': {
      return {
        ...state,
        isDeleteCartLoading: false,
        isAddCartError: false,
      };
    }
    case 'CHECKOUT_SHOPPING_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHECKOUT_SHOPPING_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isCheckoutError: true,
        alertMsg: action.payload,
      };
    }
    case 'CHECKOUT_SHOPPING_CART_FULFILLED': {
      console.log(state.totalAmount);
      return {
        ...state,
        isLoading: false,
        isCheckoutError: false,
        totalAmount: state.totalAmount + action.payload.data.results.totalPrice,
      };
    }
    case 'DISCARD_CHECKOUT_SHOPPING_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DISCARD_CHECKOUT_SHOPPING_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isDiscardCheckoutError: true,
        alertMsg: action.payload,
      };
    }
    case 'DISCARD_CHECKOUT_SHOPPING_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isDiscardCheckoutError: false,
        totalAmount: 0,
      };
    }
    case 'LIST_CART_PENDING': {
      return {
        ...state,
        isListCartLoading: true,
      };
    }
    case 'LIST_CART_REJECTED': {
      return {
        ...state,
        isListCartLoading: false,
        isListCartError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_CART_FULFILLED': {
      return {
        ...state,
        isListCartLoading: false,
        isListCartError: false,
        dataListCart: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'LIST_CART_OUT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_CART_OUT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isListCheckoutCartError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_CART_OUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isListCheckoutCartError: false,
        dataListCartOut: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'LIST_CART_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LIST_CART_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isListOrderCartError: true,
        alertMsg: action.payload,
      };
    }
    case 'LIST_CART_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isListOrderCartError: false,
        dataListCartOrder: action.payload.data.results,
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

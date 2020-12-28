const initialState = {
  id: [],
  data: {},
  totalAmount: 0,

  exId: [],
  exData: {},
  exTotalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_DATA': {
      return {
        ...state,
        id: [...new Set(state.id), action.id],
        data: {...state.data, [action.id]: action.payload},
        totalAmount: state.totalAmount + action.payload.content.price,
      };
    }
    case 'INCREMENT': {
      const price = state.totalAmount - state.data[action.id].content.price;
      state.data[action.id] = {
        ...state.data[action.id],
        ...action.payload,
      };
      console.log(price);
      return {
        ...state,
        totalAmount: price + action.payload.content.price,
      };
    }
    case 'DECREMENT': {
      const price = state.totalAmount - state.data[action.id].content.price;
      state.data[action.id] = {
        ...state.data[action.id],
        ...action.payload,
      };
      return {
        ...state,
        totalAmount: price + action.payload.content.price,
      };
    }
    case 'REMOVE_DATA': {
      const filterId = state.id.filter((item) => {
        return item !== action.id;
      });
      const price = state.data[action.id].content.price;
      delete state.data[action.id];
      return {
        ...state,
        id: filterId,
        data: state.data,
        totalAmount: state.totalAmount - price,
      };
    }
    case 'PARSING_DATA': {
      return {
        ...state,
        exId: [...state.exId, ...state.id],
        exData: { ...state.exData, ...state.data },
        exTotalAmount: state.exTotalAmount + state.totalAmount,
        id: [],
        data: {},
        totalAmount: 0,
      };
    }
    case 'RETURN_DATA': {
      return {
        ...state,
        id: [...state.exId, ...state.id],
        data: { ...state.exData, ...state.data },
        totalAmount: state.exTotalAmount + state.totalAmount,
        exId: [],
        exData: {},
        exTotalAmount: 0,
      };
    }
    case 'CLEAR_DATA': {
      return {
        ...state,
        exId: [],
        exData: {},
        exTotalAmount: 0,
      };
    }
    default: {
      return state;
    }
  }
};

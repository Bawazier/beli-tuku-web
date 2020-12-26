const initialState = {
  id: [],
  data: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_DATA': {
      return {
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
        id: filterId,
        data: state.data,
        totalAmount: state.totalAmount - price,
      };
    }
    default: {
      return state;
    }
  }
};

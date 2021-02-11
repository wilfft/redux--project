import * as actionTypes from "../actions/actionTypes";
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      console.log(newState);
      return { ...state, counter: state.counter + 1 };

    case actionTypes.DECREMENT:
      if (state.counter <= 0) return state;
      return { ...state, counter: state.counter - 1 };

    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.value };

    case actionTypes.SUB:
      if (state.counter >= 5)
        return { ...state, counter: state.counter - action.value };
      break;
    default:
      break;
  }
  return state;
};
export default reducer;

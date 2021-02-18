import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updatedObject(state, { counter: state.counter + 1 });
    /*   const newState = Object.assign({}, state);
      console.log(newState);
      return { ...state, counter: state.counter + 1 };*/

    case actionTypes.DECREMENT:
      if (state.counter <= 0) {
        break;
      } else {
        return updatedObject(state, { counter: state.counter - 1 });
      }

    case actionTypes.ADD:
      console.log(action);
      return updatedObject(state, { counter: state.counter + action.value });

    case actionTypes.SUB:
      if (state.counter >= 5)
        return updatedObject(state, { counter: state.counter - action.value });
  }
  return state;
};
export default reducer;

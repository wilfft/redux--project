import * as actionTypes from "../actions";

const initialState = {
  results: [],
};
const reducer = (state = initialState, action) => {
  console.log(initialState, action);
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.results,
        }),
      };
    case actionTypes.REMOVE_RESULTS:
      return {
        ...state,
        results: state.results.filter(
          (item) => item !== state.results[action.index]
        ),
      };
    default:
      break;
  }
  return state;
};
export default reducer;

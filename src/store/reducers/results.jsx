import * as actionTypes from "../actions/actions";

const initialState = {
  results: [],
};

//criaremos actions creators para agir como codigo sincrono
//e passaremos pra assincrono com o redux thunk
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      setTimeout(() => {
        return {}, 2000;
      });
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

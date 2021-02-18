import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updateArray = state.results.filter(
    (item) => item !== state.results[action.index]
  );
  return updatedObject(state, { results: updateArray });
};

//criaremos actions creators para agir como codigo sincrono
//e passaremos pra assincrono com o redux thunk
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      //posso alterar aqui o resultado antes de efetivar ele
      /*setTimeout(() => {
        return {}, 2000;
      });*/

      return updatedObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.results,
        }),
      });

    /*{
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.results,
        }),
      };*/
    case actionTypes.REMOVE_RESULTS:
      return deleteResult(state, action);
  }
  return state;
};
export default reducer;

import * as actionTypes from "./actionTypes";

export const saveResults = (results) => {
  //posso alterar aqui o resultado
  //const updatedResults = results * 2;
  return {
    type: actionTypes.STORE_RESULTS,
    results: results,
    // results: updatedResults,
  };
};

//pegar o valor antes de ser salvo com o get state
export const storeResults = (results) => {
  return (dispatch, getStage) => {
    setTimeout(() => {
      const oldResult = getStage().ctr.counter;
      console.log("OLDRESULTS" + oldResult);
      dispatch(saveResults(results));
      console.log("NEW RESULT" + results);
    }, 2000);
  };
};

export const removeResults = (index) => {
  return {
    type: actionTypes.REMOVE_RESULTS,
    index: index,
  };
};

import * as actionTypes from "./actionTypes";

export const saveResults = (results) => {
  return {
    type: actionTypes.STORE_RESULTS,
    results: results,
  };
};
export const storeResults = (results) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResults(results));
    }, 2000);
  };
};

export const removeResults = (index) => {
  return {
    type: actionTypes.REMOVE_RESULTS,
    index: index,
  };
};

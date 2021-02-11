export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const STORE_RESULTS = "STORE_RESULTS";
export const REMOVE_RESULTS = "REMOVE_RESULTS";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const add = (value) => {
  return {
    type: ADD,
    value: value,
  };
};
export const sub = (value) => {
  return {
    type: SUB,
    value: value,
  };
};
export const saveResults = (results) => {
  return {
    type: STORE_RESULTS,
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
    type: REMOVE_RESULTS,
    index: index,
  };
};

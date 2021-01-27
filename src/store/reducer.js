const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      console.log(newState);
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      if (state.counter <= 0) return state;
      return { ...state, counter: state.counter - 1 };

    case "ADD":
      return { ...state, counter: state.counter + action.value };

    case "SUB":
      if (state.counter >= 5)
        return { ...state, counter: state.counter - action.value };
      break;

    case "STORE_RESULTS":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "REMOVE_RESULTS":
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

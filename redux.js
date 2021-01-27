const redux = require("redux");

const createStore = redux.createStore;
const initialState = {
  counter: 0,
};

//REDUCER

const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_COUNTER") {
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === "DEC_COUNTER") {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
};

//STORE
const store = createStore(rootReducer);
console.log("start:  ", store.getState());

//subscribe
store.subscribe(() => {
  console.log("Subscription", store.getState());
});

//DISPATCH ACTION

store.dispatch({ type: "ADD_COUNTER", value: 20 });

store.dispatch({ type: "ADD_COUNTER", value: 20 });
store.dispatch({ type: "DEC_COUNTER" });

store.dispatch({ type: "DEC_COUNTER" });

store.dispatch({ type: "ADD_COUNTER", value: 20 });

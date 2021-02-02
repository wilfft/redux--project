import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionsTypes from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResults(this.props.ctr)}>
          {" "}
          Store Result
        </button>
        <ul>
          {this.props.results.map((item, id) => {
            return (
              <div className="item">
                <li key={id}>{item.value}</li>
                <p onClick={() => this.props.onRemoveResults(id)}> X </p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionsTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionsTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionsTypes.ADD, value: 5 }),
    onSubCounter: () => dispatch({ type: actionsTypes.SUB, value: 5 }),

    onStoreResults: (res) =>
      dispatch({ type: actionsTypes.STORE_RESULTS, results: res }),

    onRemoveResults: (id) =>
      dispatch({ type: actionsTypes.REMOVE_RESULTS, index: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

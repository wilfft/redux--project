import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

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
        <button onClick={this.props.onStoreResults}> Store Result</button>
        <ul>
          {this.props.results.map((item, id) => {
            return (
              <li onClick={() => this.props.onRemoveResults(id)} key={id}>
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubCounter: () => dispatch({ type: "SUB", value: 5 }),
    onStoreResults: () => dispatch({ type: "STORE_RESULTS" }),
    onRemoveResults: (id) => dispatch({ type: "REMOVE_RESULTS", index: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

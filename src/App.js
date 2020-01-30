import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleIncrement, handleDcrement, handleReset } from './Store/Actions/Count'
import Sample from './Sample';
import User from './User';

class App extends React.Component {
  handleIncrement = () => {
    this.props.dispatchIncrement();
  }
  handleDecrement = () => {
    this.props.dispatchDecrement();
  }
  handleReset = () => {
    this.props.dispatchReset();
  }
  render() {
    return (
      <div>
        <h1>Hello World {this.props.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleReset}>Reset</button><br></br>
        <Sample />
        <User />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchProps = (dispatch) => ({
  dispatchIncrement: () => dispatch(handleIncrement()),
  dispatchDecrement: () => dispatch(handleDcrement()),
  dispatchReset: () => dispatch(handleReset()),
})
export default connect(mapStateToProps, mapDispatchProps)(App);

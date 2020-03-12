import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleIncrement, handleDecrement, handleReset } from '../Store/Actions/CounterActions';

class Count extends Component {

    handleIncrement = () => {
        this.props.dispatchHandleIncrement();
    }

    handleDecrement = () => {
        this.props.dispatchHandleDecrement();
    }

    handleReset = () => {
        this.props.dispatchHandleReset();
    }

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
})

const mapDispatchToProps = (dispatch) => ({
    dispatchHandleIncrement: () => dispatch(handleIncrement()),
    dispatchHandleDecrement: () => dispatch(handleDecrement()),
    dispatchHandleReset: () => dispatch(handleReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Count);
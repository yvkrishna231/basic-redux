import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleOnClick, handleOnChange } from '../Store/Actions/InputActions';

class Input extends Component {

    handleOnClick = () => {
        this.props.dispatchHandleOnClick();
    }

    handleOnChange = (e) => {
        this.props.dispatchHandleOnChange(e.target.value)
    }

    render() {

        return (
            <div>
                <h1>my name is  {this.props.name}</h1>
                <input type='text' placeholder='enter your name' onChange={this.handleOnChange} />
                <button onClick={this.handleOnClick}>click</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.inputReducer.name
})

const mapDispatchToProps = (dispatch) => ({
    dispatchHandleOnClick: () => dispatch(handleOnClick()),
    dispatchHandleOnChange: (target) => dispatch(handleOnChange(target))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNameChange, handleInputChange } from './Store/Actions/Count';

class Sample extends Component {
    handleNameChange = () => {
        this.props.dispatchNameChange();

    }
    handleInputChange = (e) => {
        this.props.dispatchInputChange(e.target.value);
    }
    render() {
        return (
            <div>
                <h1>sample name <q style={{ color: 'lightslategrey' }}>{this.props.name}</q></h1>
                <input onChange={this.handleInputChange} type='text' value={this.props.value} placeholder='enter name' />
                <button onClick={this.handleNameChange}>Change</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.name.name,
    value: state.name.input
});

const mapDispatchToProps = (dispatch) => ({
    dispatchNameChange: () => dispatch(handleNameChange()),
    dispatchInputChange: (input) => dispatch(handleInputChange(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleTodoSubmit, handleTodoInputOnChange, handleTodoRemove, handleTodoEdit } from '../Store/Actions/TodoActions';

class TodoInput extends Component {

    handleOnChange = (e) => {
        this.props.dispatchHandleTodoOnChange(e.target.value)
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchHandleTodoSubmit()
    }
    handleTodoRemove = (ind) => {
        this.props.dispatchHandleTodoRemove(ind)
    }

    handleTodoEdit = (val, ind) => {
        this.props.dispatchHandleTodoEdit(val, ind)
    }

    render() {
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-6 m-auto shadow p-4'>
                        <h3 className='text-center text-info mb-3'>Todo Input</h3>
                        <form>
                            <input
                                onChange={this.handleOnChange}
                                value={this.props.input}
                                type='text'
                                className='form-control mb-2'
                                placeholder='enter your todo text' />
                            <button
                                onClick={this.handleOnSubmit}
                                className='btn btn-sm btn-success float-right'>
                                submit
                                </button>
                            <button
                                className='btn btn-sm btn-danger float-left'>
                                RemoveAll
                                </button>
                        </form>
                        {this.props.error && <p className='text-center text-danger'>todo input is empty</p>}
                        {this.props.visible && <p className='text-center text-danger'>todo input already exists</p>}
                    </div>
                </div>
                <React.Fragment>
                    {/* {this.props.todoData && ( */}
                    <div className='row mt-5'>
                        <div className='col-lg-6 m-auto'>
                            <ul className='list-group'>
                                {this.props.todoData && this.props.todoData.map((val, ind) => {
                                    return <li
                                        className='list-group-item'
                                        key={ind}>
                                        {ind + ' :'}
                                        {val}
                                        <button
                                            onClick={() => this.handleTodoRemove(ind)}
                                            className='btn btn-sm btn-success float-right'>
                                            remove
                                            </button>
                                        <button
                                            onClick={() => this.handleTodoEdit(val, ind)}
                                            className='btn btn-sm btn-danger mr-1 float-right'>
                                            edit
                                            </button>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* )} */}
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    input: state.todoReducer.input,
    todoData: state.todoReducer.todoData,
    error: state.todoReducer.error,
    visible: state.todoReducer.visible
});

const mapDispatchToProps = (dispatch) => ({
    dispatchHandleTodoSubmit: () => dispatch(handleTodoSubmit()),
    dispatchHandleTodoOnChange: (target) => dispatch(handleTodoInputOnChange(target)),
    dispatchHandleTodoRemove: (ind) => dispatch(handleTodoRemove(ind)),
    dispatchHandleTodoEdit: (val, ind) => dispatch(handleTodoEdit(val, ind))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
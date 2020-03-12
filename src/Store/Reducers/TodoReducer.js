import * as ActionTypes from '../Actions/ActionType'

const initialState = {
    input: '',
    todoData: [],
    error: false,
    visible: false,
    editable: false,
    todoEdit: []
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.HANDLE_TODO_ONSUBMIT: {

            if (state.editable) {
                state.todoData[state.todoEdit] = state.input
                return {
                    ...state,
                    editable: false,
                    error: false,
                    visible: false,
                    input: '',
                }
            } else if (state.input === '') {
                return {
                    ...state,
                    error: true,
                    visible: false
                }
            } else if (state.todoData.indexOf(state.input) > -1) {
                return {
                    ...state,
                    visible: true,
                    error: false,
                }
            } else {
                return {
                    ...state,
                    todoData: state.todoData.concat(state.input),
                    input: '',
                    visible: false
                }
            }
        }
        case ActionTypes.HANDLE_TODO_ONCHANGE: {
            return {
                ...state,
                input: action.payload
            }
        }
        case ActionTypes.HANDLE_TODO_REMOVE: {
            return {
                ...state,
                todoData: state.todoData.filter((_, ind) => ind !== action.payloadRemove)
            }
        }
        case ActionTypes.HANDLE_TODO_EDIT: {
            return {
                ...state,
                todoEdit: action.payloadEditInd,
                input: action.payloadEditValue,
                editable: true
            }
        }
        default: return state
    }
}

export default TodoReducer
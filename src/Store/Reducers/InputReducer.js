import * as ActionTypes from '../Actions/ActionType';

const initialState = {
    name: 'venkata krishna',
    input: ''
}

const InputReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.HANDLE_INPUT_ONCLICK: {
            return {
                ...state,
                name: state.input
            }
        }
        case ActionTypes.HANDLE_INPUT_ONCHANGE: {
            return {
                ...state,
                input: action.payload
            }
        }
        default: return state
    }
}

export default InputReducer;


import * as ActionTypes from '../Actions/ActionType'

const initialStateName = {

    name: 'krishna yendluri',
    input: ''

}

const handleName = (state = initialStateName, action) => {
    switch (action.type) {
        case ActionTypes.HANDLE_NAME_CHANGE: {

            if (state.input !== '') {
                return {
                    ...state,
                    name: state.input,
                    input: ''
                }
            } else {
                window.alert('enter something')
            }

        }
        case ActionTypes.HANDLE_INPUT_CHANGE: {
            return {
                ...state,
                input: action.payload,
            }
        }
        default: return state
    }
}

export default handleName;
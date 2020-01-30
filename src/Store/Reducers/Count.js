
import * as ActionTypes from '../Actions/ActionType'

const initialState = {
    count: 0
}

const handleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.HANDLE_INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case ActionTypes.HANDLE_DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case ActionTypes.HANDLE_RESET: {
            return {
                ...state,
                count: 0
            }
        }
        default: return state;
    }
}
export default handleReducer;
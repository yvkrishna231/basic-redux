
import * as ActionTypes from '../Actions/ActionType'

const initialState = {
    data: null,
    error: null,
    loading: null
}

const handleUserReducer = (state = initialState, action) => {


    switch (action.type) {

        case ActionTypes.HANDLE_DATA_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case ActionTypes.HANDLE_DATA_FAIL: {
            return {
                ...state,
                error: action.err,
                loading: false
            }
        }
        case ActionTypes.HANDLE_DATA_START: {
            return {
                ...state,
                loading: true
            }
        }
        default: return state
    }

}

export default handleUserReducer;
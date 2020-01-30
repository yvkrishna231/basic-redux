
import * as ActionTypes from './ActionType'

export const handleIncrement = () => ({
    type: ActionTypes.HANDLE_INCREMENT
});

export const handleDcrement = () => ({
    type: ActionTypes.HANDLE_DECREMENT
});

export const handleReset = () => ({
    type: ActionTypes.HANDLE_RESET
});

export const handleNameChange = () => ({
    type: ActionTypes.HANDLE_NAME_CHANGE,
})

export const handleInputChange = (input) => ({
    type: ActionTypes.HANDLE_INPUT_CHANGE,
    payload: input
})
import * as ActionTypes from './ActionType';


export const handleIncrement = () => ({
    type: ActionTypes.HANDLE_INCREMENT
})

export const handleDecrement = () => ({
    type: ActionTypes.HANDLE_DECREMENT
})

export const handleReset = () => ({
    type: ActionTypes.HANDLE_RESET
})
import * as ActionTypes from './ActionType';

export const handleOnClick = () => ({
    type: ActionTypes.HANDLE_INPUT_ONCLICK
})

export const handleOnChange = (target) => ({
    type: ActionTypes.HANDLE_INPUT_ONCHANGE,
    payload: target
})
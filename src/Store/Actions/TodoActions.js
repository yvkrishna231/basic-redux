
import * as ActionTypes from './ActionType';

export const handleTodoSubmit = () => ({
    type: ActionTypes.HANDLE_TODO_ONSUBMIT
})

export const handleTodoInputOnChange = (target) => ({
    type: ActionTypes.HANDLE_TODO_ONCHANGE,
    payload: target
})

export const handleTodoRemove = (ind) => ({
    type: ActionTypes.HANDLE_TODO_REMOVE,
    payloadRemove: ind
})

export const handleTodoEdit = (val, ind) => ({
    type: ActionTypes.HANDLE_TODO_EDIT,
    payloadEditValue: val,
    payloadEditInd: ind

})
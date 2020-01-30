
import * as ActionTypes from './ActionType';
import Axios from 'axios';


export const handleDataSuccess = (data) => ({
    type: ActionTypes.HANDLE_DATA_SUCCESS,
    data
});

export const handleDataFail = (err) => ({
    type: ActionTypes.HANDLE_DATA_FAIL,
    err
});

export const handleDataStart = () => ({
    type: ActionTypes.HANDLE_DATA_START
})

export const handleGetData = () => {

    return (dispatch) => {
        dispatch(handleDataStart());
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);

                dispatch(handleDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(handleDataFail(err))
            })
    }
}
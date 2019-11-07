import CONSTANTS from '../constants'

export const addUser = userData => dispatch => {
    return dispatch({
        type: CONSTANTS.ADD_USER,
        payload: userData
    })
}
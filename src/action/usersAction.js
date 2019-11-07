import CONSTANTS from '../constants'

export const addUser = userData => dispatch => {
    return dispatch({
        type: CONSTANTS.ADD_USER,
        payload: userData
    })
}

export const deleteUser = index => dispatch => {
    return dispatch({
        type: CONSTANTS.DELETE_USER,
        payload: index
    })
}


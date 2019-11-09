import CONSTANTS from '../constants';

const initialState = [] 

export default (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_USER:
            return [...state, action.payload]
        case CONSTANTS.DELETE_USER:
            return state.filter((user, index) => index !== action.payload)
        case CONSTANTS.EDIT_USER:
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
                
            })
        default:
        return state
    }
}





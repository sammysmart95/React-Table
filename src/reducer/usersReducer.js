import CONSTANTS from '../constants';

const initialState = [] 

export default (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_USER:
            return [...state, action.payload]
        case CONSTANTS.DELETE_USER:
            return state.filter((user, index) => index !== action.payload)
        default:
        return state
    }
}







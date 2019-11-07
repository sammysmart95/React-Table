import CONSTANTS from '../constants';

const initialState = [] 

export default (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_USER:
            return [...state, action.payload]
        default:
        return state
    }
}
import { LOAD_MESSAGES } from '../actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case LOAD_MESSAGES:
            return [...action.payload.messages];
        default:
            return state;
    }
}
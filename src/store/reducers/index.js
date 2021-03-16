import { combineReducers } from 'redux';
import currentUser from './currentUser';
import notify from './notify';

const rootReducer = combineReducers({
    currentUser,
    notify
});

export default rootReducer;
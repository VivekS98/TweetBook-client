import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import errors from './reducers/errors';

const rootReducer = combineReducers({
    currentUser,
    errors
});

export default rootReducer;
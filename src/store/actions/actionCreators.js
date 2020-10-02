import { SET_CURRENT_USER } from '../actionTypes';
import { apiCall } from '../../services/api';

export const setCurrentUser = (type, userData) => dispatch => {
    return new Promise((resolve, reject) => {
        apiCall('post', `/api/auth/${type}`, userData)
        .then(({token, ...user}) => {
            localStorage.setItem('jwtToken', token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: user
            });
            resolve();
        })
        .catch(err => reject(err))
    })
}
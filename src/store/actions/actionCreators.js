import {SET_NOTIFICATIONS, SET_CURRENT_USER } from '../actionTypes';
import { apiCall } from '../../services/api';
import { setTokenHeader } from '../../services/api';

export const setAuthorizationToken = (token) => {
    setTokenHeader(token);
}

export const markNotifications = id => {
    return new Promise((resolve, reject) => {
        apiCall('get', `/api/users/${id}/notify`)
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

export const fetchNotifications = id => dispatch => {
    return new Promise((resolve, reject) => {
        apiCall('get', `/api/users/${id}/notify`)
            .then(data => {
                dispatch({
                    type: SET_NOTIFICATIONS,
                    data
                });
                resolve(data);
            })
            .catch(err => reject(err));
    });
}

export const logout = () => dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
}

export const postNewTweet = (id, data) => {
    return new Promise((resolve, reject) => {
        apiCall('post', `/api/users/${id}/messages`, data)
            .then(data => resolve(data))
            .catch(err => reject(err.message))
    });
}

export const setCurrentUser = (type, userData) => dispatch => {
    return new Promise((resolve, reject) => {
        apiCall('post', `/api/auth/${type}`, userData)
        .then(({token, ...user}) => {
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(localStorage.jwtToken);
            dispatch({
                type: SET_CURRENT_USER,
                payload: {
                    user
                }
            });
            resolve(user);
        })
        .catch(err => reject(err))
    });
}

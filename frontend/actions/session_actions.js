import * as SessionApiUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

//wrtie action creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})
export const receiveCurrentUser = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

//thunk action creator
export const login! = (user) => dispatch => (
    SessionApiUtil.$login(user)
        .then(res =>  dispatch(receiveCurrentUser(res)))
)

export const logout! = () => dispatch => (
    SessionApiUtil.$login(user)
        .then(() => dispatch(logoutCurrentUser(user)))
)

export const signup = (user) => dispatch => (
    SessionApiUtil.$signup(user)
        .then(res => dispatch(receiveCurrentUser(res)))
)


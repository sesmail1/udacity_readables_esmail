import {
    SET_USER,
    RESET_USER
} from '../actions/user';

const initialState = {
    loggedIn: false,
    user: null
};

export function user_reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            };
        case RESET_USER:
            return {
                ...state,
                user: null,
                loggedIn: false
            };
        default:
            return state;
    }
};
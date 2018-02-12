/////////////////////////////////////////////////////////////////////
export const SET_USER = 'SET_USER';

export const setUser = (user) => dispatch => (
    dispatch((userSet(user)))
);

export const userSet = (user) => ({
    type: SET_USER,
    loggedIn: true,
    user: user
});
/////////////////////////////////////////////////////////////////////
export const RESET_USER = 'RESET_USER';

export const resetUser = () => dispatch => (
    dispatch(userReset())
);

export const userReset = () => ({
    type: RESET_USER,
    loggedIn: false,
    user: null
});
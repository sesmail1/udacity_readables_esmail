import * as api from '../../utils/api';
/////////////////////////////////////////////////////////////////////
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const fetchAllCategories = () => dispatch => (
    api.getCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
);

export const receiveAllCategories = (categories) => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
});

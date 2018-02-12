import {
    RECEIVE_ALL_CATEGORIES,
} from '../actions/category';



export function category_reducer(state = {}, action ) {
    switch(action.type) {
        case RECEIVE_ALL_CATEGORIES:
            let categories = action.categories;
            return {
                ...state,
                categories
            };
        default:
            return state;
    }
};
import { combineReducers } from 'redux';
import { category_reducer } from './category';
import { posts_reducer } from './posts';
import { comments_reducer } from './comments';
import { user_reducer } from './user';

export default combineReducers({
    category_reducer,
    posts_reducer,
    comments_reducer,
    user_reducer
});
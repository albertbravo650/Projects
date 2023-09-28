// reducers/postReducer.js
import { FETCH_POSTS_SUCCESS } from '../actions/types';

const initialState = {
    posts: [],
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
}

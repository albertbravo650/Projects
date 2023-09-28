// actions/postActions.js
import axios from 'axios';
import { FETCH_POSTS_SUCCESS } from './types';

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: response.data,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

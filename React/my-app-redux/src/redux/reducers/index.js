// reducers/index.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer, // Add more reducers here if needed
});

export default rootReducer;
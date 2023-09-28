// store.js
import { applyMiddleware } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: [applyMiddleware(thunk)]
// });

// const middlewareEnhancer = applyMiddleware(thunk);
// const store = configureStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// export default configureStore({
//     reducer: {rootReducer},
//     middleware: [applyMiddleware(thunk)]
// });

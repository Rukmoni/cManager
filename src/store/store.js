import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postReducers from './postSlice';

const reducer = combineReducers({
	posts: postReducers,
});
const store = configureStore({ reducer, middleware: [thunk, logger] });

export default store;
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
	courses//it's the same as courses: courses
});

export default rootReducer;
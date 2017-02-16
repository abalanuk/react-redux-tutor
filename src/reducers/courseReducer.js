import * as types from '../actions/actionTypes'

export default function(state = [], action) {
	switch(action.type){
		case types.CREATE_COURSE:
			debugger;
		 	//return Object.assign({}, state, action.course);
		 	return [...state, Object.assign({}, action.course)]
		default:
			return state;
	}
}
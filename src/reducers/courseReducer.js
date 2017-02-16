export default function(state = [], action) {
	switch(action.type){
		case 'CREATE_COURSE':
			debugger;
		 	//return Object.assign({}, state, action.course);
		 	return [...state, Object.assign({}, action.course)]
		default:
			return state;
	}
}
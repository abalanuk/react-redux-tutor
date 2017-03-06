import * as types from '../actions/actionTypes'
import initialState from './initialState'

//helper func to determine if action.type ends with '_SUCCESS' string
const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === '_SUCCESS'
}

export default function(state = initialState.ajaxCallsInProgress, action){
  if (action.type === types.BEGIN_AJAX_CALL) {
    return ++state
  } else if(types.AJAX_CALL_ERROR === action.type || actionTypeEndsInSuccess(action.type)) {
    return --state
  }
  return state
}
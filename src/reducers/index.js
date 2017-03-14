import { combineReducers } from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import { ajaxInProgress, ajaxErrored } from './ajaxStatusReducer'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxInProgress,
  ajaxErrored
});

export default rootReducer
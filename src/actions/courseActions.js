import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course}
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course}
}
export function deleteCourseSucess(courseId) {
  return {type: types.DELETE_COURSE_COMPLETE, courseId}
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      //emitting this action for reducing by 1 ajaxCallsInProgress slice of state via ajaxStatusReducer
      dispatch(ajaxCallError());
      throw(error)
    })
  }
}

export function deleteCourse(course_id){
  return function(dispatch) {
    //dispatch(beginAjaxCall())
    return courseApi.deleteCourse(course_id).then(courseId => dispatch(deleteCourseSucess(courseId)))
    .catch(error => {
      throw error
    })
  }
}

//load section
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error)
    })
  }
}

export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS'
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS'
export const DELETE_COURSE_COMPLETE = 'DELETE_COURSE_COMPLETE'

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS'
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS'

export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL'
//consider to have specific ajax call error for different data to avoid intersections between various slices of data inside state
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR'
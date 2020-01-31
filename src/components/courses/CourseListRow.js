import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({course, onRemove}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><a href={'/courses/' + course.id}>{course.title}</a></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><a href={course.id} onClick={onRemove}>Delete</a></td>
    </tr>
  )
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow

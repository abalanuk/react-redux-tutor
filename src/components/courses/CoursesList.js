import React, { PropTypes } from 'react'
import CourseListRow from './CourseListRow'
import TableHeader from '../common/TableHeader'
import LoadingTableBody from '../common/LoadingTableBody'

const LOADING_ROWS_COUNT = 10
const TABLE_COLUMNS = [{
    title: 'Watch',
    field: 'watch-link',
    sortable: false,
    width: 54
  },
  {
    title: 'Title',
    field: 'title',
    sortable: false,
    width: 390
  },
  {
    title: 'Author',
    field: 'author',
    sortable: false,
    width: 90
  },
  {
    title: 'Category',
    field: 'category',
    sortable: false,
    width: 155
  },
  {
    title: 'Length',
    field: 'length',
    sortable: false,
    width: 70
  },
  {
    title: 'Drop',
    field: 'del',
    width: 30
  }
]

class CoursesList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLoadingTableBody() {
    let rowArray = []
    for (let i = 0; i < LOADING_ROWS_COUNT; i++) {
      rowArray.push(<LoadingTableBody key={'loading' + i}/>)
    }
    return rowArray
  }

  renderTableBody(courses) {
    return courses.map(course => {
      return <CourseListRow key={course.id} course={course} onRemove={this.props.onRemove}/>
    })
  }

  render() {
    const {courses, isLoading} = this.props
    debugger
    return (
      <table className="table">
        <thead>
          <TableHeader columns={TABLE_COLUMNS}/>
        </thead>
        <tbody>
          {isLoading ? this.renderLoadingTableBody() : this.renderTableBody(courses) }
        </tbody>
      </table>
    )
  }
}

CoursesList.defaultProps = {
  courses: [],
  isLoading: true
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
}

export default CoursesList



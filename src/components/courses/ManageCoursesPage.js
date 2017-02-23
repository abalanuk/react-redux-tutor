import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import { browserHistory } from 'react-router'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      errors: {},
      course: Object.assign({}, this.props.course) //this is a bug while we are refreshing page, because props not yet received and empty in fact
    }

    //bind section
    this.handleCourseChange = this.handleCourseChange.bind(this)
    this.handleCourseSave = this.handleCourseSave.bind(this)
  }

  handleCourseSave(event) {
    event.preventDefault()
    this.props.actions.saveCourse(this.state.course)
    this.context.router.push('/courses')
    //browserHistory.push('/courses')
  }

  handleCourseChange(event) {
    const name = event.target.name
    let course = this.state.course
    course[name] = event.target.value
    this.setState({course})
  }

  render() {
    let {authors} = this.props
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={authors}
        onSave={this.handleCourseSave}
        onChange={this.handleCourseChange}
        loading={false}
        errors={this.state.errors}
      />
    )
  }
}

ManageCoursesPage.PropTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

//ManageCoursesPage.contextTypes = {
//  router: PropTypes.object
//}

const getCourseById = (courses, courseId) => {
  return courses.find((course) => { return course.id === courseId })
}

function mapStateToProps(state, ownProps) {

  console.log('ownProps: ', ownProps)

  let course = {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""}

  const courseId = ownProps.params.id //from the path `/course/:id`

  if (courseId) {
    course = getCourseById(state.courses, courseId)
    course = course ? course : {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""}
  }

  //have to get authors from state
  const formattedAuthorsForDropDown = state.authors.map((author) => {
    let label = `${author.firstName} ${author.lastName}`
    return {
      value: author.id,
      label
    }
  })

  return {
    authors: formattedAuthorsForDropDown,
    course: course
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)
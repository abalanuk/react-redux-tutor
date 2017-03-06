import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import toastr from 'toastr'
//import { browserHistory } from 'react-router'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      errors: {},
      saving: false,
      course: Object.assign({}, this.props.course)
    }

    //bind section
    this.handleCourseChange = this.handleCourseChange.bind(this)
    this.handleCourseSave = this.handleCourseSave.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.course.id !== this.props.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  redirectToList() {
    this.setState({saving: false})
    toastr.success('Course was saved')
    this.context.router.push('/courses')
    //browserHistory.push('/courses')
  }

  handleCourseSave(event) {
    event.preventDefault()
    this.setState({saving: true})
    //this call returns promise in fact, see mockCourseApi so we can use .then for resolved promise and call redirect...
    this.props.actions.saveCourse(this.state.course)
      //if success the we should redirect to list for showing the result
      .then(() => {this.redirectToList()})
      .catch(error => {
        //if some error then we will notify user with appropriate error via "toastr" notifications utility
        toastr.error(error)
        //saving --> false for changing value of Save button
        this.setState({saving: false})
      })
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
        saving={this.state.saving}
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

ManageCoursesPage.contextTypes = {
  router: PropTypes.object
}

const getCourseById = (courses, courseId) => {
  return courses.find((course) => { return course.id === courseId })
}

function mapStateToProps(state, ownProps) {
  let defaultCourse = {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""}
  //from the path `/course/:id`
  const courseId = ownProps.params.id

  let course = courseId ? getCourseById(state.courses, courseId) : defaultCourse

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
    course: course,
    isLoading: !!state.ajaxStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)
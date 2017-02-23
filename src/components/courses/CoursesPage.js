import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import * as courseActions from '../../actions/courseActions'
import CoursesList from './CoursesList'


class CoursesPage extends React.Component {
  constructor(props) {
    super(props)

    this.redirectToCreateForm = this.redirectToCreateForm.bind(this)
  }

  //using browserHistory component of router we can initiate changing of route
  redirectToCreateForm() {
    browserHistory.push('/create-course')
  }
  render() {
    const {courses} = this.props
    return (
      <div className="coursesList">
        <h2>Courses</h2>

        {/*button for transition to ManageCoursesPage*/}
        <input
          className="btn btn-primary"
          type="submit"
          value='Add Course'
          onClick={this.redirectToCreateForm}
        />
        <CoursesList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.defaultProps = {
  courses: []
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
}


//state -> represents state inside our store
function mapStateToProps(state, ownProps){
  return {
    //key courses -> will be call inside our component: this.props.courses
    courses: state.courses //state.courses it's what we define as key inside rootReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)










import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as courseActions from '../../actions/courseActions'
import CoursesList from './CoursesList'

const errorMessage = 'Oops...Something went wrong with data loading'

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    //part of state perhaps should be removed
    this.state = {
      hasDataLoadingError: false,
      loadError: ''
    };

    this.redirectToCreateForm = this.redirectToCreateForm.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  componentDidMount() {
    this.props.courseActions.loadCourses()
      .catch(error => {
        this.setState({hasDataLoadingError: true});
        throw(error)
      })
  }

  redirectToCreateForm() {
    this.props.history.push('/create-course');
  }

  handleRemoveItem(event) {
    event.preventDefault();

    const course_id = event.target.pathname.slice(1);
    //console.log(course_id)
    this.props.courseActions.deleteCourse(course_id)
  }

  render() {
    const {courses, isLoading} = this.props;

    return (
      <div className="coursesList">
        <h2>Courses</h2>

        {/*button for transition to ManageCoursesPage*/}
        <input
          className="btn btn-primary add-course"
          type="submit"
          value='Add Course'
          onClick={this.redirectToCreateForm}
        />
        <CoursesList courses={courses} isLoading={isLoading} onRemove={this.handleRemoveItem}/>
        {this.state.hasDataLoadingError && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
    );
  }
}

CoursesPage.defaultProps = {
  courses: []
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
};


//state -> represents state inside our store
function mapStateToProps(state){
  return {
    //key courses -> will be call inside our component: this.props.courses
    courses: state.courses, //state.courses it's what we define as key inside rootReducer
    isLoading: !!state.ajaxInProgress,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    courseActions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)

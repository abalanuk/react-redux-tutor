import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import toastr from 'toastr'

import * as courseActions from '../../actions/courseActions'
import * as authorActions from '../../actions/authorActions'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'
import CourseForm from './CourseForm'


const errorMessage = 'Oops...Something went wrong with loading authors data, please reload page'

class ManageCoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      saving: false,
      course: Object.assign({}, this.props.course)
    };

    //bind section
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleCourseSave = this.handleCourseSave.bind(this)
  }

  componentDidMount() {
    this.props.authorActions.loadAuthors()
    .catch(error => {
      this.props.ajaxStatusActions.ajaxCallError();
      throw(error)
    })
  }

  redirectToList() {
    this.setState({saving: false});
    toastr.success('Course was saved');
    this.props.history.push('/courses')
  }

  //here we can put multiple validation conditions for each form field and set state according to result of validation
  isFormValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.course.title.length < 5) {
      errors.title = 'Title should be at least 5 characters';
      this.setState({errors: errors});
      formIsValid = false
    }

    return formIsValid
  }

  handleCourseSave(event) {
    event.preventDefault();

    if (!this.isFormValid()) return;

    this.setState({saving: true});
    //this call returns promise in fact, see mockCourseApi so we can use .then for resolved promise and call redirect...
    this.props.courseActions.saveCourse(this.state.course)
    //if success the we should redirect to list for showing the result
    .then(() => {
      this.redirectToList()
    })
    .catch(error => {
      //if some error then we will notify user with appropriate error via "toastr" notifications utility
      toastr.error(error);
      //saving --> false for changing value of Save button
      this.setState({saving: false})
    })
  }

  handleCourseChange(event) {
    const name = event.target.name;
    let course = this.state.course;
    course[name] = event.target.value;
    this.setState({course})
  }

  render() {
    let {authors, hasDataLoadingError} = this.props;
    const errorAlert = <div className="error-message">{errorMessage}</div>;
    const courseForm = (
      <CourseForm
        course={this.props.course}
        allAuthors={authors}
        onSave={this.handleCourseSave}
        onChange={this.handleCourseChange}
        saving={this.state.saving}
        errors={this.state.errors}
      />);
    return hasDataLoadingError ? errorAlert : courseForm
  }
}

ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courseActions: PropTypes.object.isRequired,
  authorActions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  hasDataLoadingError: PropTypes.bool
};

const getCourseById = (courses, courseId) => {
  return courses.find(course => course.id === courseId)
};

function mapStateToProps(state, ownProps) {
  let defaultCourse = {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};
  //from the path `/course/:id`
  const {id: courseId} = ownProps.match.params;

  const course = courseId ? getCourseById(state.courses, courseId) : defaultCourse;

  //have to get authors from state
  const formattedAuthorsForDropDown = state.authors.map((author) => {
    let label = `${author.firstName} ${author.lastName}`;
    return {
      value: author.id,
      label
    }
  });

  return {
    authors: formattedAuthorsForDropDown,
    course: course,
    isLoading: !!state.ajaxInProgress,
    hasDataLoadingError: state.ajaxErrored
  }
}

function mapDispatchToProps(dispatch) {
  return {
    courseActions: bindActionCreators(courseActions, dispatch),
    authorActions: bindActionCreators(authorActions, dispatch),
    ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage)

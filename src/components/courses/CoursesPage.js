import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			course: {title: ""}
		};
		this.onClickSave = this.onClickSave.bind(this)
		this.onTitleChange = this.onTitleChange.bind(this)
	}
	onTitleChange(event) {
		const course = this.state.course
		course.title = event.target.value
		this.setState({course: course})
	}
	onClickSave() {
		// alert(`Saving ${this.state.course.title}`)
		this.props.createCourse(this.state.course)
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>
	}

	render() {
		debugger
		return (
	      <div className="coursesList">
	        <h2>Courses</h2>
	        {this.props.courses.map(this.courseRow)}
	        <h3>Add Course</h3>
	        <div className="form-group">
		        <input
					type='text'
					value={this.state.course.title}
					onChange={this.onTitleChange}
					className="form-control" />

		        <input
					type='submit'
					value="Save"
					onClick={this.onClickSave}
					className="btn btn-danger" />
			</div>
	      </div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	createCourse: PropTypes.func.isRequired
}

//state -> represents state inside our store
function mapStateToProps(state, ownProps){
	debugger
	return {
		//key courses -> will be call inside our component: this.props.courses
		courses: state.courses //state.courses it's what we define as key inside rootReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createCourse: course => dispatch(courseActions.createCourse(course))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)










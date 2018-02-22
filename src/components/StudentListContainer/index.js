import React, { Component } from "react";
import propTypes from "prop-types";
import StudentList from "../StudentList";
import StudentPage from "../StudentPage";
import "./StudentList.css";
import { studentSelector } from "../../redux/selector";
import { connect } from "react-redux";
import { showStudents } from "../../redux/actions";
import { fetchStudents } from "../../API";
class StudentListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: []
		};
	}
	componentDidMount() {
		this.showAllStudents();
	}
	showAllStudents = () => {
		fetchStudents()
			.then(res => {
				this.props.showStudents(res.data);
				this.setState({ students: this.props.students });
			})
			.catch(err => console.log(err));
	};
	render() {
		return (
			<div className="student-container">
				<StudentList students={this.state.students} />
				<StudentPage students={this.state.students} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		students: studentSelector(state)
	};
};
const mapDispatchToProps = dispatch => {
	return {
		showStudents: students => dispatch(showStudents(students))
	};
};
StudentListContainer.propTypes={
	showStudents:propTypes.func,
	students:propTypes.array,
};
export default connect(mapStateToProps, mapDispatchToProps)(
	StudentListContainer
);

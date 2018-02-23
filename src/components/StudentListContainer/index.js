import React, { Component } from "react";
import StudentList from "../StudentList";
import studentSelector from "../../redux/selector";
import {fetchStudents} from "../../API";
import { connect } from "react-redux";
import { showStudents } from "../../redux/actions";
class StudentListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: []
		};
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
		return <StudentList />;
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

export default connect(mapStateToProps, mapDispatchToProps)(
	StudentListContainer
);

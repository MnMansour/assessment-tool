import React, { Component } from "react";
import propTypes from "prop-types";
import StudentList from "../StudentList";
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
			<StudentList students={this.state.students} />
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

import React, { Component } from "react";
import propTypes from "prop-types";

class StudentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDisplayed:true,
		};
	}
	render() {
		return (
			<div className="student-container">
				{this.state.isDisplayed === true? (
					<div className="container-red ">
						<div className="student-list">
							<div className="student-row">
								{this.props.students.map((student, i) => {
									return (
										<div key={i} className="student-name">
											{student.firstName} {student.lastName}
										</div>
									);
								})}
							</div>
							<div className="collapse-container">
								<div className="collapse-btn">
									<div
										className="arrow-left"
										onClick={() => {
											this.setState({ isDisplayed:false });
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="container-red-collapse">
						<div className="collapse-container">
							<div className="collapse-btn">
								<div
									className="arrow-right"
									onClick={() => {
										this.setState({ isDisplayed:true });
									}}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

StudentList.propTypes = {
	students: propTypes.array
};
export default StudentList;

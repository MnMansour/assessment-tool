import React, { Component } from "react";

class StudentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "showing"
		};
	}
	render() {
		return (
			<div>
				{this.state.display === "showing" ? (
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
											this.setState({ display: "hidden" });
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
										this.setState({ display: "showing" });
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

export default StudentList;

import React from "react";
import propTypes from "prop-types";

function StudentPage(props) {
	return (
		<div className="student-page">
			<p className="gradu">Graduation Date:</p>
			<div className="student-profile">
				<img
					src="http://lorempixel.com/200/200/cats"
					alt=""
					className="student-img"
				/>
				<div className="student-details">
					<h2 className="student-name-details">
						{props.students[0] && props.students[0].firstName}{" "}
						{props.students[0] && props.students[0].lastName}
					</h2>
					<p>Email:</p>
					<p>Phone: {props.students[0] && props.students[0].phoneNumber}</p>
					<p>Birth date:</p>
				</div>
			</div>
			<div className="courses">
				<h3>Completed 3rd party courses</h3>
			</div>
			<div className="education">
				<h3>Previous Education</h3>
			</div>
			<div className="assesment">
				<h3>Teacher Assesment</h3>
			</div>
			<div className="review">
				<h3>Peer Review</h3>
			</div>
		</div>
	);
}
StudentPage.propTypes = {
	student: propTypes.array
};
export default StudentPage;

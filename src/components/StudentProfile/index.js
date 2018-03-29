import React from "react";
import StudentProfileContainer from "./StudentProfileContainer";

const StudentProfile = ({ match }) => {
	return (
		<div className="container">
			<StudentProfileContainer match={match} />
		</div>
	);
};

export default StudentProfile;

import React from 'react';
import PropTypes from 'prop-types';

const StudentName = props => {
	return (
		<li key={props.id}>
			<i
				className={`${
					props.id % 2 === 0 ? 'fas' : 'far'
				} fa-user-circle`}
			/>{' '}
			{props.fullName}
		</li>
	);
};

StudentName.propTypes = {
	id: PropTypes.number,
	fullName: PropTypes.string
};

export default StudentName;

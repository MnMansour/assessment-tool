import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

function Icon(props) {
	const sizeMap = { x1: 20, x2: 40, x3: 60 };
	const iconSize = sizeMap[props.size];
	// console.log(props);
	return (
		<span className={`icon ${props.iconColor}`} style={{width: iconSize}}
			dangerouslySetInnerHTML={{ __html: props.src }}
		/>
	);
}

export default Icon;

Icon.propTypes = {
	size: PropTypes.string,
	iconColor: PropTypes.string,
	src: PropTypes.string.isRequired

};

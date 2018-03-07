import React from 'react';
import propTypes from 'prop-types';
function SortableTableHead({handleSortData,sortBy,handleDataKind,title}) {
	return (
		<div className="title">
			<span className="head__span">{title}</span>
			<span className="head__span">
				<div
					onClick={() => handleSortData(sortBy, true,handleDataKind)}
					className="arrow-up"
				/>
				<div
					onClick={() =>handleSortData(sortBy, false, handleDataKind)}
					className="arrow-down"
				/>
			</span>
		</div>
	);
}

SortableTableHead.propTypes={
	handleSortData:propTypes.func,
	sortBy:propTypes.string,
	handleDataKind:propTypes.func,
	title:propTypes.string,
};

export default SortableTableHead;

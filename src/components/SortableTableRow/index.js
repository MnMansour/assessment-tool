import React from "react";
import propTypes from "prop-types";

function SortableTableRow({classes}) {
	return (
		<div className="row-wrapper">
			{classes.map((item,i)=>{
				return <div key={i} className="body">
					<div className="info">{item.id}</div>
					<div className="info">{item.graduationDate}</div>
					<div className="info">{item.name}</div>
					<div className="info">{item.location}</div>
					<div className="info">{item.participantCount}</div>
					<div className="info">{item.currentSprint}</div>
					<div className="info">{item.headTeacher}</div>
					<div className="info">{item.plannedSprints}</div>
					<div className="info" />
				</div>;
			})}
		</div>
		
	);
}

SortableTableRow.propTypes={
	classes:propTypes.array,
};

export default SortableTableRow;

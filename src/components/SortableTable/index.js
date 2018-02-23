import React from "react";
import propTypes from "prop-types";
import { handleDate, handleNumber, handleAlpha } from "../../utilities/sort";
import SortableTableHead from "../SortableTableHead";
import SortableTableRow from "../SortableTableRow";
function SortableTable({ handleSortData, classes }) {
	return (
		<section className="classes">
			<div className="head">
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"id"}
					handleDataKind={handleNumber}
					title={"Id"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"graduationDate"}
					handleDataKind={handleDate}
					title={"Graduation Date"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"name"}
					handleDataKind={handleAlpha}
					title={"Name"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"location"}
					handleDataKind={handleAlpha}
					title={"Location"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"participantCount"}
					handleDataKind={handleNumber}
					title={"Participants"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"currentSprint"}
					handleDataKind={handleNumber}
					title={"Current Sprint"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"headTeacher"}
					handleDataKind={handleAlpha}
					title={"Head Teacher"}
				/>
				<SortableTableHead
					handleSortData={handleSortData}
					sortBy={"plannedSprints"}
					handleDataKind={handleNumber}
					title={"Planned Sprints"}
				/>
				<SortableTableHead title={"Manage"} />
			</div>
			<SortableTableRow classes={classes} />
		</section>
	);
}
SortableTable.propTypes = {
	classes: propTypes.array,
	handleSortData: propTypes.func
};
export default SortableTable;

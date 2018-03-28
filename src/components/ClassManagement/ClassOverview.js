import React from "react";
import EditableField from "./EditableField";
import { percentage } from "../../util/util.js";
import "./ClassOverview.css";
import { translate } from "react-i18next";


const ClassOverview = ({element, t}) => {       
	const NameOfClass = EditableField("classEdit");        
	const currentSprint = element.currentSprint;
	const plannedSprints = element.plannedSprints; 
	
	
	return (
		<div className="class-dashboard container">
			<h1>{t("Teacher-Dashboard.title")}</h1>
          
			<div  className="class-detail">
				<div className="row">
					<div className="col-4">
						<h3 className="title">{t("Teacher-Dashboard.location")}</h3>
						<p>{element.location}</p>
					</div>
					<div className="col-4">
						<h3 className="title">{t("Teacher-Dashboard.class-name")}</h3>
						<NameOfClass
							isEdit={element.isEdit}
							name={element.name}
							i={(element.id)}
						/>
						<h3 className="title">
							{t("Teacher-Dashboard.Total-number-of-participants")}
						</h3>
						<p>{element.participantCount}</p>
					</div>
					<div className="col-4">
						<h3 className="title">{t("Teacher-Dashboard.Overall-progress")}</h3>
						<p>
							{`${percentage(
								currentSprint,
								plannedSprints
							)}%`}
						</p>
						<div className="meter animate">
							<span
								style={{
									width: `${percentage(
										currentSprint,
										plannedSprints
									)}%`
								}}
							>
								<span />
							</span>
						</div>
						<p>
							{t("Teacher-Dashboard.completed-1")} {currentSprint}/{
								plannedSprints
							}{" "}
							{t("Teacher-Dashboard.completed-2")}
						</p>
					</div>
				</div>
			</div>
              
		</div>
	);
};


export default translate() (ClassOverview);
import React from "react";
import EditableField from "./EditableField";
import { percentage } from "../../util/util.js";
import "./ClassOverview.css";


const ClassOverview = ({element}) => {       
    const NameOfClass = EditableField("classEdit");        
    const currentSprint = element.currentSprint;
    const plannedSprints = element.plannedSprints; 
    
    return (
        <div className="class-dashboard container">
            <h1>Teacher Dashboard</h1>
          
            <div  className="class-detail">
                <div className="row">
                    <div className="col-4">
                        <h3 className="title">Location</h3>
                        <p>{element.location}</p>
                    </div>
                    <div className="col-4">
                        <h3 className="title">Class Name</h3>
                        <NameOfClass
                            isEdit={element.isEdit}
                            name={element.name}
                            i={(element.id)}
                        />
                        <h3 className="title">
                                Total number of participants
                        </h3>
                        <p>{element.participantCount}</p>
                    </div>
                    <div className="col-4">
                        <h3 className="title">Overall progress</h3>
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
                                Every student completed {currentSprint}/{
                                plannedSprints
                            }{" "}
                                sprints successfully.
                        </p>
                    </div>
                </div>
            </div>
              
        </div>
    );
};


export default ClassOverview;
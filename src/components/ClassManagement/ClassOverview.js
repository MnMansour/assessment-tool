import React from 'react';
import { connect } from 'react-redux';
import "../ClassManagement/ClassOverview.css";
import { percentage } from "../../util/util.js";
import ClassName from './ClassName'

const ClassOverview =(props)=>{
    return (
      <div className="class-dashboard">
        <h1>Teacher Dasboard</h1>
        {props.classes.map((element, i) =>
        {
          const currentSprint = element.currentSprint;
          const plannedSprints = element.plannedSprints;
          if (props.match.params.id===("000" + (i+1)).slice(-3)) {
            return(
              <div key={i} className="class-detail">
                <div className="row">
                  <div className="col-4">
                    <h3 className='title'>Location</h3>
                    <p>{element.location}</p>
                  </div>
                  <div className="col-4">
                    <h3 className='title'>Location</h3>
                    <ClassName isEdit={element.isEdit} name={element.name} i={i} />
                    <h3 className='title'>Total number of participants</h3>
                    <p>{element.participantCount}</p>
                  </div>
                  <div className="col-4">
                    <h3 className='title'>Overall progress</h3>
                      <div>
                        {`${percentage(currentSprint, plannedSprints)}%`}
                      </div>
                    <div className="meter animate">
                      <span style={{width: `${percentage(currentSprint, plannedSprints)}%`}}>
                        <span>
                        </span>
                      </span>
                    </div>
                    <p>Every student completed {currentSprint}/{plannedSprints} sprints successfully.</p>
                  </div>
                </div>
              </div>
            )
          }

        })}
      </div>
    )
  }


const mapStateToProps = (state) => {
  return {
    user: state.user,
    classes: state.classes
  }
}

export default connect(mapStateToProps)(ClassOverview);

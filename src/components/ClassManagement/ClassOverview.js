import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import "../ClassManagement/ClassOverview.css";
import { percentage } from "../../util/util.js";    
  
const ClassOverview = (props) => {  
  const arrClasses = Object.values(props.user.classes);   
    return (
      <div className="class-dashboard">      
        <h1>Teacher Dasboard</h1>
        {arrClasses.map((element, i) =>
        {
          const currentSprint = element.currentSprint;          
          const plannedSprints = element.plannedSprints;     
          return(
            <div key={i} className="class-detail">
              <div className="row">
                <div className="col-4">
                  <h3 className='title'>Location</h3>
                  <p>{element.location}</p>
                </div>
                <div className="col-4">
                  <h3 className='title'>Location</h3>
                  <p>{element.name}
                <i className="fas fa-pencil-alt"></i>
                  </p>
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
        })}        
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ClassOverview);
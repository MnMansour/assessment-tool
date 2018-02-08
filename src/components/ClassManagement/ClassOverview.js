import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import "../ClassManagement/ClassOverview.css";

class ClassOverview extends Component {
  render(){
    return (
      <div className="class-das container">
        <h1>Teacher Dasboard</h1>
        <div className="class-detail">
          <div className="row">
            <div className="col-4">
              <h3 className='title'>Location</h3>
              <p>Main Campus</p>
              <p>Helsinki, Finland</p>
            </div>
            <div className="col-4">
              <h3 className='title'>Location</h3>
              <p>Summer 2018               
                <i className="fa fa-pencil"></i>  
              </p>
              <h3 className='title'>Total number of participants</h3>
              <p>15</p>
            </div>
            <div className="col-4">
              <h3 className='title'>Overall progress</h3>
              <div className="meter animate">
                <span style={{width: '50%'}}>
                  <span>
                  </span>
                </span>
              </div>
              <p>Every student completed 6/12 sprints successfully.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassOverview
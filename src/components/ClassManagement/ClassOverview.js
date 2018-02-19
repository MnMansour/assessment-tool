import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../ClassManagement/ClassOverview.css";
import { percentage } from "../../util/util.js";
import ClassName from './ClassName'
import axios from 'axios';
import * as actionsType from '../../redux/actions'

class ClassOverview extends Component{

  componentWillMount(){
      axios.get('http://localhost:8888/classes')
          .then(res=>this.props.getClasses(res.data))
          .catch(err=>console.log("err: ", err))
  }

  render(){
    return (
      <div className="class-dashboard">
        <h1>Teacher Dashboard</h1>
        {Object.values(this.props.classes).map((element, i) =>
        {
          const currentSprint = element.currentSprint;
          const plannedSprints = element.plannedSprints;
          if (this.props.match.params.id===("000" + (i+1)).slice(-3)) {
            return(
              <div key={i} className="class-detail">
                <div className="row">
                  <div className="col-4">
                    <h3 className='title'>Location</h3>
                    <p>{element.location}</p>
                  </div>
                  <div className="col-4">
                    <h3 className='title'>Class Name</h3>
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
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    classes: state.classes
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getClasses: (classes)=>dispatch(actionsType.classStore(classes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassOverview);
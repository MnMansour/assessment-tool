import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import Section from './section';
import ProfileHeader from './ProfileHeader'


import * as constants from '../../util/constants'
import './style.scss';


class Profile extends Component {

  getData = () => {
    const {user, usersData, match:{params}} =this.props;
    if(params.id){
       const key = _.findKey(usersData, {displayName: params.id})
       if(key) return usersData[key];
       else return false
    }
    else{
      if (user) return usersData[user.uid]
      else return false
    }
  }


  render(){
    const {user, dbEducation, dbExperience, dbSkills, dbProjects, dbAssignments, match} = this.props
    const Data = this.getData();
    const enableEdit = Data ? user ? Data.uid === user.uid : false : false;
    const userDbEduction = dbEducation ? Data ? dbEducation[Data.uid] : false : false;
    const userDbExperience = dbExperience ? Data ? dbExperience[Data.uid] : false : false;
    const userDbProjects = dbProjects ? Data ? dbProjects[Data.uid] : false : false;
    const userDbAssignments = dbAssignments ? Data ? dbAssignments[Data.uid] : false : false;
    const userDbSkills = dbSkills ? Data ? dbSkills[Data.uid] : false : false;
    if (!Data) {
      return <div className="profile-notfound">Person With Name {match.params.id} Not Found! </div>
    }
    return(
      <div className="profile">
        <ProfileHeader Data={Data} />
        <div className="profile__body">
          {(enableEdit || userDbEduction) && <Section enableEdit={enableEdit} title={constants.EDUCATION} Data={userDbEduction}/>}
          {(enableEdit || userDbExperience) && <Section enableEdit={enableEdit} title={constants.EXPERIENCE} Data={userDbExperience} />}
          {(enableEdit || userDbSkills) && <Section enableEdit={enableEdit} title={constants.SKILLS} Data={userDbSkills}/>}
          {(enableEdit || userDbAssignments) && <Section enableEdit={enableEdit} title={constants.ASSIGNMENTS} Data={userDbAssignments}/>}
          {(enableEdit || userDbProjects) && <Section enableEdit={enableEdit} title={constants.PROJECTS} Data={userDbProjects}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    usersData: state.dbUsers,
    dbEducation: state.dbEducation,
    dbExperience: state.dbExperience,
    dbAssignments: state.dbAssignments,
    dbProjects: state.dbProjects,
    dbSkills: state.dbSkills
  };
}

export default connect(mapStateToProps,null)(Profile);

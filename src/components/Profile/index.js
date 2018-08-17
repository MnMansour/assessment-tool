import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import Section from './section';
import ProfileHeader from './ProfileHeader'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import * as constants from '../../util/constants'
import './style.scss';


class Profile extends Component {

  getData = () => {
    const {userUid, usersData, match:{params}} =this.props;
    if(params.id){
       const key = _.findKey(usersData, {displayName: params.id})
       if(key) return usersData[key];
       else return false
    }
    else{

      return usersData[userUid]
    }
  }


  render(){
    const {userUid, dbEducation, match} = this.props
    const Data = this.getData();
    const enableEdit = Data ? Data.uid === userUid : false;
    if (!Data) {
      return <div className="profile-notfound">Person With Name {match.params.id} Not Found! </div>
    }
    return(
      <div className="profile">
        <div className="profile__header">
          <div className="profile__header__image" style={Data.image?{backgroundImage:`url(${Data.image})`}:{}}></div>
          <ProfileHeader Data={Data} />
          <div className="progressbar">
             <CircularProgressbar
              percentage={Data.percentage ? Data.percentage : 0}
              text={`${Data.percentage ? Data.percentage : 0}%`}
            />
          </div>
        </div>
        <div className="profile__body">
          <Section enableEdit={enableEdit} title={constants.EDUCATION} Data={dbEducation[Data.uid]}/>
          <Section enableEdit={enableEdit} title={constants.EXPERIENCE} />
          <Section enableEdit={enableEdit} title={constants.SKILLS} />
          <Section enableEdit={enableEdit} title={constants.ASSIGNMENTS} />
          <Section enableEdit={enableEdit} title={constants.PROJECTS} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userUid: state.user.uid,
    usersData: state.dbUsers,
    dbEducation: state.dbEducation
  };
}

export default connect(mapStateToProps,null)(Profile);

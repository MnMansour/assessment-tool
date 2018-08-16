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
    const {user, usersData, match:{params}} =this.props;
    if(params.id){
       const key = _.findKey(usersData, {displayName: params.id})
       if(key) return usersData[key];
       else return false
    }
    else{

      return usersData[user.uid]
    }
  }


  render(){
    const {user, match} = this.props
    const Data = this.getData();
    const myPage = Data ? Data.uid === user.uid : false;
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
          <Section myPage={myPage} title={constants.EDUCATION} />
          <Section myPage={myPage} title={constants.EXPERIENCE} />
          <Section myPage={myPage} title={constants.SKILLS} />
          <Section myPage={myPage} title={constants.ASSIGNMENTS} />
          <Section myPage={myPage} title={constants.PROJECTS} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    usersData: state.dbUsers,
    userLoading: state.loading.user,
  };
}

export default connect(mapStateToProps,null)(Profile);

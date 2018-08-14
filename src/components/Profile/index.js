import React, {Component} from 'react';
import {connect} from 'react-redux';
import Section from './section';

import userIcon from '../../assets/user.png';
import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.png';
import phoneIcon from '../../assets/phone.png';
import linkedinIcon from '../../assets/linkedin.png';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import * as constants from '../../util/constants'
import './style.scss';

const Data = {
  id: 1,
  role: 'student',
  name : 'Mohammed Mansoor',
  image: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
  phone: '0466568898',
  percentage: 66,
  email: 'mohamednmansour.90@gmail.com',
  github: 'https://github.com/MnMansour',
  linkedin: 'https://www.linkedin.com/in/mnmansoor/',
  education: [],
  experience: [],
  skills: [],
  assignments: [],
  projects: [],
}

class Profile extends Component {

  componentDidUpdate(){
    console.log(this.props);
  }

  render(){
    return(
      <div className="profile">
        <div className="profile__header">
          <img src={Data.image} alt="profile"/>
          <div className="details">
            <div className="detail"><img src={userIcon} alt="userIcon"/><span>{Data.name}</span></div>
            <div className="detail"><img src={phoneIcon} alt="phoneIcon"/><a href={`tel:${Data.phone}`}>{Data.phone}</a></div>
            <div className="detail"><img src={emailIcon} alt="emailIcon"/><a href={`mailto:${Data.email}`}>Email</a></div>
            <div className="detail"><img src={githubIcon} alt="githubIcon"/><a href={Data.github}>GitHub</a></div>
            <div className="detail"><img src={linkedinIcon} alt="linkedinIcon"/><a href={Data.linkedin}>Linkdin</a></div>
          </div>
          <div className="progressbar">
             <CircularProgressbar
              percentage={Data.percentage}
              text={`${Data.percentage}%`}
            />
          </div>
        </div>
        <div className="profile__body">
          <Section title={constants.EDUCATION} />
          <Section title={constants.EXPERIENCE} />
          <Section title={constants.SKILLS} />
          <Section title={constants.ASSIGNMENTS} />
          <Section title={constants.PROJECTS} />
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

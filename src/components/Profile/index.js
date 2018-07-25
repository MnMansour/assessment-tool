import React, {Component} from 'react';

import userIcon from '../../assets/user.png';
import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.png';
import phoneIcon from '../../assets/phone.png';
import linkedinIcon from '../../assets/linkedin.png';
import addButton from '../../assets/add-button.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';

import './style.scss';

class Profile extends Component {
  render(){
    return(
      <div className="profile">
        <div className="profile__header">
          <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile"/>
          <div className="details">
            <div className="detail"><img src={userIcon} alt="userIcon"/><span>Integrify Student</span></div>
            <div className="detail"><img src={phoneIcon} alt="phoneIcon"/><a href="tel:3177594940">317.759.4940</a></div>
            <div className="detail"><img src={emailIcon} alt="emailIcon"/><a href="mailto:webmaster@example.com">Email</a></div>
            <div className="detail"><img src={githubIcon} alt="githubIcon"/><a href="https://github.com/MnMansour">GitHub</a></div>
            <div className="detail"><img src={linkedinIcon} alt="linkedinIcon"/><a href="https://www.linkedin.com/in/mnmansoor/">Linkdin</a></div>
          </div>
        </div>
        <div className="profile__body">
          <div className="section">
            <div className="section__header">
              <div className="sectionTitle">Education</div>
              <div className="sectionButtons">
                <img src={addButton} alt="addButton"/>
                <img src={arrowUp} alt="arrow"/>
              </div>
            </div>
            <div className="section__body">XXXXXXXXXX</div>
          </div>

          <div className="section">
            <div className="section__header">
              <div className="sectionTitle">Experience</div>
              <div className="sectionButtons">
                <img src={addButton} alt="addButton"/>
                <img src={arrowUp} alt="arrow"/>
              </div>
            </div>
            <div className="section__body">XXXXXXXXXX</div>
          </div>

          <div className="section">
            <div className="section__header">
              <div className="sectionTitle">Skills</div>
              <div className="sectionButtons">
                <img src={addButton} alt="addButton"/>
                <img src={arrowUp} alt="arrow"/>
              </div>
            </div>
            <div className="section__body">XXXXXXXXXX</div>
          </div>

          <div className="section">
            <div className="section__header">
              <div className="sectionTitle">Assignments</div>
              <div className="sectionButtons">
                <img src={addButton} alt="addButton"/>
                <img src={arrowUp} alt="arrow"/>
              </div>
            </div>
            <div className="section__body">XXXXXXXXXX</div>
          </div>

        </div>
      </div>
    )
  }
}

export default Profile;

import React, {Component} from 'react';
import Modal from 'react-modal';
import EducationAndExperience from '../Forms/EducationAndExperience';
import ProjectsAndAssignments from '../Forms/ProjectsAndAssignments';
import ResetPassword from '../Forms/ResetPassword';
import SignUp from '../Forms/SignUp';
import Skills from '../Forms/Skills';
import * as constants from '../../util/constants'

import closeIcon from '../../assets/close-icon.png';
import './style.scss';


class FormModal extends Component {

  componentWillMount(){
    Modal.setAppElement(document.body);
  }

  // getForm = (title, Data) => {
  //   switch (title) {
  //     case constants.EDUCATION:
  //     case constants.EXPERIENCE:
  //       return <EducationAndExperience title={this.props.title} Data={Data}/>;
  //     case constants.ASSIGNMENTS:
  //     case constants.PROJECTS:
  //       return <ProjectsAndAssignments title={this.props.title} />;
  //     case constants.SKILLS:
  //       return <Skills title={this.props.title}/>;
  //     case constants.RESET_PASSWORD:
  //       return <ResetPassword title={this.props.title}/>;
  //     default:
  //       return null
  //   }
  // }
  render() {
    console.log(this.props.children);
    const {title, Data, children} = this.props;
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        className="Modal"
        contentLabel="Modal"
        overlayClassName="Modal-overlay"
      >
        <h2>{this.props.title}</h2>
        <a className="close" onClick={this.props.closeModal}><img src={closeIcon} alt="close" /></a>
        {children}
      </Modal>
    );
  }
}

export default FormModal;

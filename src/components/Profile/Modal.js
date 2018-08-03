import React, {Component} from 'react';
import Modal from 'react-modal';
import EducationAndExperience from '../Forms/EducationAndExperience';
import ProjectsAndAssignments from '../Forms/ProjectsAndAssignments';
import Skills from '../Forms/Skills';
import * as constant from '../../util/constant'

import closeIcon from '../../assets/close-icon.png';


const body = {
  school: 'xxx',
  field: 'xxx'
}
class FormModal extends Component {

  componentWillMount(){
    Modal.setAppElement(document.body);
  }

  getForm = (title) => {
    switch (title) {
      case constant.EDUCATION:
      case constant.EXPERIENCE:
        return <EducationAndExperience title={this.props.title} body={body}/>;
      case constant.ASSIGNMENTS:
      case constant.PROJECTS:
        return <ProjectsAndAssignments title={this.props.title} body={body}/>;
      case constant.SKILLS:
        return <Skills title={this.props.title}/>;
      default:
        return null
    }
  }
  render() {
    const {title} = this.props;
    const child = this.getForm(title);
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        className="Modal"
        contentLabel="Modal"
      >
        <h2>{this.props.title}</h2>
        <a className="close" onClick={this.props.closeModal}><img src={closeIcon} alt="close" /></a>
        {child}
      </Modal>
    );
  }
}

export default FormModal;

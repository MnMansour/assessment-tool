import React, {Component} from 'react';
import _ from 'lodash';
import * as constants from '../../util/constants'
import FormModal from '../Modal';
import SectionHeader from './SectionHeader'

import EducationAndExperience from '../Forms/EducationAndExperience';
import ProjectsAndAssignments from '../Forms/ProjectsAndAssignments';
import Skills from '../Forms/Skills';

import EducationAndExperienceBody from './EducationAndExperience';
import ProjectsAndAssignmentsBody from './ProjectsAndAssignments';
import SkillsBody from './Skills';

import './style.scss';

class Section extends Component {

  state = {
    toggle: true,
    modalIsOpen: false,
  }

  getSectionBody = () => {
    const {Data, title, enableEdit} = this.props;
    if (Data) {
      switch (title) {
        case constants.EDUCATION:
        case constants.EXPERIENCE:
          return _.map(Data, ((index) => <EducationAndExperienceBody sectionTitle={title} enableEdit={enableEdit} Data={index} key={index.id}/>));
        case constants.ASSIGNMENTS:
        case constants.PROJECTS:
          return _.map(Data, ((index) => <ProjectsAndAssignmentsBody sectionTitle={title} enableEdit={enableEdit} Data={index} key={index.id}/>));
        case constants.SKILLS:
          return _.map(Data, ((index) => <SkillsBody Data={index} key={index.id} enableEdit={enableEdit}/>));
        default:
          return null
      }
    }
  }



  toggleSection = () => {
    this.setState({toggle: !this.state.toggle})
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  modal = (title) => {
    const {modalIsOpen} = this.state;

    switch (title) {
        case constants.EDUCATION:
        case constants.EXPERIENCE:
          return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}>
                    <EducationAndExperience title={title} closeModal={this.closeModal}/>
                 </FormModal>;
        case constants.ASSIGNMENTS:
        case constants.PROJECTS:
          return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}>
                     <ProjectsAndAssignments title={title} closeModal={this.closeModal}/>
                  </FormModal>;
        case constants.SKILLS:
          return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}>
                     <Skills title={title} closeModal={this.closeModal}/>
                  </FormModal>;
        default:
          return null
     }
  }

  render() {
    const {toggle} = this.state,
          {title, enableEdit} = this.props;
    const sectionBody = this.getSectionBody();
    return(
      <div className="section">
        <SectionHeader title={title} enableEdit={enableEdit} toggle={toggle} toggleSection={this.toggleSection} openModal={this.openModal}/>

        <div className={toggle? "section__body" : "section__hide"}>{sectionBody ? sectionBody : <div className="no-data">No data to show</div>}</div>
        {this.modal(title)}
      </div>
    );
  }
};

export default Section;

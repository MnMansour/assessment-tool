import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteFromDatabase} from '../../redux/actions/actions';
import FormModal from '../Modal';
import EducationAndExperienceForm from '../Forms/EducationAndExperience';
import removeIcon from '../../assets/delete-icon.png';
import editButton from '../../assets/edit-button.png';

class EducationAndExperience extends Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  modal = (title) => {
    const {modalIsOpen} = this.state,
          {Data} = this.props;
    return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}>
              <EducationAndExperienceForm title={title} Data={Data} closeModal={this.closeModal}/>
           </FormModal>
  }

  removeBlock=()=>{
    const {Data:{id}, user, deleteFromDatabase, sectionTitle} = this.props;
    console.log(user);
    if(user) {
      const path = `${sectionTitle}/${user.uid}`;
      console.log(path);
      deleteFromDatabase(path, id)
    }
  }

  render() {
    const {Data: {place, title, dgree , location, toDate, fromDate, description}, enableEdit, sectionTitle} = this.props;
    const options = { year: 'numeric', month: 'long' };
    const startDate = new Date(fromDate).toLocaleDateString("en-US", options)
    const endDate = toDate? new Date(toDate).toLocaleDateString("en-US", options) : 'Present';
    return(
      <div className="section__body__education-work">
        {enableEdit && <div className="buttons">
          <img src={editButton} alt="edit" onClick={this.openModal}/>
          <img src={removeIcon} alt="edit" onClick={this.removeBlock}/>
        </div>}
        <div className="place">{place}</div>
        <div className="title">{dgree ? dgree + ', ': ''}{title}</div>
        <div className="date">{startDate} - {endDate}</div>
        <div className="location">{location}</div>
        <div className="description" dangerouslySetInnerHTML={{__html: description}} />
        {this.modal(sectionTitle)}
      </div>
    )
  }

};

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {deleteFromDatabase})(EducationAndExperience);

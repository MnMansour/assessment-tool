import React, { Component } from 'react';
import FormModal from '../Modal';
import editButton from '../../assets/edit-button.png';
import EducationAndExperienceForm from '../Forms/EducationAndExperience';

class EducationAndExperience extends Component {

  componentWillMount(){
    const {Data, initialize} = this.props
    if (Data) {
      console.log(Data);
    }
  }

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
              <EducationAndExperienceForm title={title} Data={Data}/>
           </FormModal>
  }

  render() {
    const {Data: {place, title, dgree, id, location, toDate, fromDate, description}, enableEdit} = this.props;
    const options = { year: 'numeric', month: 'long' };
    const startDate = new Date(fromDate).toLocaleDateString("en-US", options)
    const endDate = toDate? new Date(toDate).toLocaleDateString("en-US", options) : 'Present';
    return(
      <div className="section__body__education-work">
        <img className="edit" src={editButton} alt="edit" onClick={this.openModal}/>
        <div className="place">{place}</div>
        <div className="title">{dgree ? dgree + ', ': ''}{title}</div>
        <div className="date">{startDate} - {endDate}</div>
        <div className="location">{location}</div>
        <div className="description" dangerouslySetInnerHTML={{__html: description}} />
        {this.modal('education')}
      </div>
    )
  }

}

export default EducationAndExperience;

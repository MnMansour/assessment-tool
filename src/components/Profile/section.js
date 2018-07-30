import React, {Component} from 'react';

import addButton from '../../assets/add-button.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';
import FormModal from './Modal'

import './style.scss';

class Section extends Component {

  state = {
    toggle: true,
    modalIsOpen: false,
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


  render() {
    const {toggle, modalIsOpen} = this.state;
    const {title} = this.props
    return(
      <div className="section">
        <div className="section__header">
          <div className="sectionTitle">{title}</div>
          <div className="sectionButtons" >
            <img src={addButton} alt="addButton" onClick={this.openModal} />
            <img onClick={this.toggleSection} src={toggle? arrowUp : arrowDown} alt="arrow"/>
          </div>
        </div>
        <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
        <div className={toggle? "section__body" : "section__hide"}>XXXXXXXXXX</div>
      </div>
    );
  }
};

export default Section;

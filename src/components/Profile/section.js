import React, {Component} from 'react';

import addButton from '../../assets/add-button.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';
import FormModal from '../Modal'

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

  modal = (title) => {
    const {modalIsOpen} = this.state;
    return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
  }
  render() {
    const {toggle} = this.state,
          {title, myPage} = this.props;
    return(
      <div className="section">
        <div className="section__header">
          <div className="sectionTitle">{title}</div>
          <div className="sectionButtons" >
            { myPage && <img src={addButton} alt="addButton" onClick={this.openModal} />}
            <img onClick={this.toggleSection} src={toggle? arrowUp : arrowDown} alt="arrow"/>
          </div>
        </div>
        {this.modal(title)}
        <div className={toggle? "section__body" : "section__hide"}>XXXXXXXXXX</div>
      </div>
    );
  }
};

export default Section;

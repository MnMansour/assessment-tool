import React, {Component} from 'react';
import Modal from 'react-modal';

import closeIcon from '../../assets/close-icon.png';
import './style.scss';


class FormModal extends Component {

  componentWillMount(){
    Modal.setAppElement(document.body);
  }


  render() {
    const {title, children, closeModal, modalIsOpen} = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        contentLabel="Modal"
        overlayClassName="Modal-overlay"
      >
        <h2>{title}</h2>
        <a className="close" onClick={closeModal}><img src={closeIcon} alt="close" /></a>
        {children}
      </Modal>
    );
  }
}

export default FormModal;

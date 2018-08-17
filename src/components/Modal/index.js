import React, {Component} from 'react';
import Modal from 'react-modal';

import closeIcon from '../../assets/close-icon.png';
import './style.scss';


class FormModal extends Component {

  componentWillMount(){
    Modal.setAppElement(document.body);
  }


  render() {
    const {title, children} = this.props;
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        className="Modal"
        contentLabel="Modal"
        overlayClassName="Modal-overlay"
      >
        <h2>{title}</h2>
        <a className="close" onClick={this.props.closeModal}><img src={closeIcon} alt="close" /></a>
        {children}
      </Modal>
    );
  }
}

export default FormModal;

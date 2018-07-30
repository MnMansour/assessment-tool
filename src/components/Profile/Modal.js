import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class FormModal extends Component {

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>hi</h1>
      </Modal>
    );
  }
}

export default FormModal;

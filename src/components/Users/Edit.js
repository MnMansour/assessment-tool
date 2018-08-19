import React, { Component } from 'react';
import FormModal from '../Modal';
import ClassAndProgress from '../Forms/ClassAndProgress';

class Edit extends Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log('edit', this.props);
    const {modalIsOpen} = this.state;
    const {Data:{fullname, uid}} = this.props
    return (
      <div className="edit">
        <div onClick={this.openModal}>Edit</div>
        <FormModal title={fullname} modalIsOpen={modalIsOpen} closeModal={this.closeModal}>
          <ClassAndProgress id={uid} closeModal={this.closeModal}/>
        </FormModal>
      </div>

    );
  }

}

export default Edit;

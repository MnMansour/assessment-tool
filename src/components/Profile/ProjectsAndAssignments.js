import React, { Component } from 'react';
import {connect} from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import {deleteFromDatabase} from '../../redux/actions/actions';
import FormModal from '../Modal';
import ProjectsAndAssignmentsForm from '../Forms/ProjectsAndAssignments';
import removeIcon from '../../assets/delete-icon.png';
import editButton from '../../assets/edit-button.png';

import 'react-confirm-alert/src/react-confirm-alert.css';


class ProjectsAndAssignments extends Component {

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
              <ProjectsAndAssignmentsForm title={title} Data={Data} closeModal={this.closeModal}/>
           </FormModal>
  }

  removeBlock=()=>{
    confirmAlert({
        title: 'Confirm to remove',
        message: 'Are you sure to do this.',
        buttons: [{
            label: 'Yes',
            onClick: () => {
              const {Data:{id}, user, deleteFromDatabase, sectionTitle} = this.props;
              if(user) {
                const path = `${sectionTitle}/${user.uid}`;
                deleteFromDatabase(path, id)
              }
            }
          },
          { label: 'No'}
        ]})
  }



  render() {
    const {Data: {name, live, repo, description}, enableEdit, sectionTitle} = this.props;
    return(
      <div className="section__body__projects-assignments">
        {enableEdit && <div className="buttons">
          <img src={editButton} alt="edit" onClick={this.openModal}/>
          <img src={removeIcon} alt="edit" onClick={this.removeBlock}/>
        </div>}
        <div className="place">{name}</div>
        <div className="title">Repo: <a href={repo} target="_blank">{repo}</a></div>
        {live && <div className="title">Live At: <a href={live} target="_blank">{live}</a></div>}
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

export default connect(mapStateToProps, {deleteFromDatabase})(ProjectsAndAssignments);

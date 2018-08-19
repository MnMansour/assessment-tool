import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { confirmAlert } from 'react-confirm-alert';
import Table from './Table';
import {writeToDatabase, deleteFromDatabase} from '../../redux/actions/actions';

import 'react-confirm-alert/src/react-confirm-alert.css';
import './style.scss'

class Admin extends Component {

  state = {
    emailsData: [],
    classesData: [],
  }

  componentWillMount() {
    const {allowedEmails, classes, dbUsers, user:{uid}, history} = this.props;
    const role = dbUsers[uid].role;
    if (role === "student") {
      history.push('/')
    } else {
      const emailsData = _.filter(allowedEmails, (user)=> user);
      const classesData = _.filter(classes, (user)=> user);

      this.setState({emailsData, classesData});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {allowedEmails, classes} = nextProps;
    const emailsData = _.filter(allowedEmails, (user)=> user);
    const classesData = _.filter(classes, (user)=> user);
    this.setState({emailsData, classesData});
  }

  emailSearch = (e) => {
    const {allowedEmails} = this.props;
    const emailsData = _.filter(allowedEmails, (user)=> user);
    const filterEmails = _.filter(emailsData, (index) => _.includes(index.email, e.target.value));
    this.setState({emailsData: filterEmails});
  }

  classSearch = (e) => {
    const {classes} = this.props;
    const classesData = _.filter(classes, (user)=> user);
    const filterEmails = _.filter(classesData, (index) => _.includes(index.email, e.target.value));
    this.setState({classesData: filterEmails});
  }

  deleteEmail=(id)=>{
    confirmAlert({
        title: 'Confirm to remove',
        message: 'Are you sure to do this.',
        buttons: [{
            label: 'Yes',
            onClick: () =>  this.props.deleteFromDatabase('allowedEmails', id)
          },
          { label: 'No'}
        ]})
  }

  deleteClass=(id)=>{
    confirmAlert({
        title: 'Confirm to remove',
        message: 'Are you sure to do this.',
        buttons: [{
            label: 'Yes',
            onClick: () =>  this.props.deleteFromDatabase('classes', id)
          },
          { label: 'No'}
        ]})
  }

  addEmail = (email) => {
    const id = new Date().getTime(),
    path = `allowedEmails/${id}`
    this.props.writeToDatabase(path, {...email, id})
  }

  addClass = (Class) => {
    const id = new Date().getTime(),
    path = `classes/${id}`
    this.props.writeToDatabase(path, {...Class, id})
  }

  render() {
    const {emailsData, classesData} = this.state;
    return (
      <div className="admin-page">
        <Table Data={emailsData} title="Allowed Emails" onSearch={this.emailSearch}
          onDelete={this.deleteEmail} onSubmit={this.addEmail} classes={false}/>
        <Table Data={classesData} title="Classes" onSearch={this.classSearch}
          onDelete={this.deleteClass} onSubmit={this.addClass} classes/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    allowedEmails: state.dbAllowedUsers,
    user: state.user,
    dbUsers: state.dbUsers,
    classes: state.dbClasses
  }
}

export default connect(mapStateToProps, {writeToDatabase, deleteFromDatabase})(Admin);

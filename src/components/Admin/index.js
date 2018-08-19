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
    Data: [],
  }

  componentWillMount() {
    const {allowedEmails, dbUsers, user:{uid}, history} = this.props;
    const role = dbUsers[uid].role;
    if (role === "student") {
      history.push('/')
    } else {
      console.log('allowedEmails', allowedEmails);
      const Data = _.filter(allowedEmails, (user)=> user);
      console.log('Data', Data);
      this.setState({Data});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {allowedEmails} = nextProps;
    const Data = _.filter(allowedEmails, (user)=> user);
    this.setState({Data});
  }

  emailSearch = (e) => {
    const {allowedEmails} = this.props;
    const Data = _.filter(allowedEmails, (user)=> user);
    const filterEmails = _.filter(Data, (index) => _.includes(index.email, e.target.value));
    this.setState({Data: filterEmails});
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

  addEmail = (email) => {
    const {Data} = this.state
    const id = new Date().getTime(),
    path = `allowedEmails/${id}`
    this.props.writeToDatabase(path, {...email, id})
    this.setState({Data});
  }

  render() {
    const {Data} = this.state;
    return (
      <div className="admin-page">
        <Table Data={Data} title="Allowed Emails" onSearch={this.emailSearch}
          onDelete={this.deleteEmail} onSubmit={this.addEmail} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    allowedEmails: state.dbAllowedUsers,
    user: state.user,
    dbUsers: state.dbUsers
  }
}

export default connect(mapStateToProps, {writeToDatabase, deleteFromDatabase})(Admin);

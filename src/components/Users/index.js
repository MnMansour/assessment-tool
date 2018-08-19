import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import UsersTable from "./UsersTable"

import "./style.scss";

class Users extends Component {

  state = {
    users: {}
  }

  componentWillMount() {
    const {usersData} = this.props;
    const users = _.filter(usersData, ((user) => user.role === "student"));
    this.setState({users});
  }

  componentWillReceiveProps(nextProps) {
    const {usersData} = nextProps;
    const users = _.filter(usersData, ((user) => user.role === "student"));
    this.setState({users});
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth});
  }

  userSearch = (e) => {
    const {usersData} = this.props;
    const users = _.filter(usersData, ((user) => user.role === "student"));
    const filterUsers = _.filter(users, (user) => _.includes(user.displayName, e.target.value))
    this.setState({users:filterUsers});
  }

  render() {
    const {users, width} = this.state;
    const {usersData, user} = this.props;
    const role = usersData ? usersData[user.uid] ? usersData[user.uid].role : '' : '';
    return (
      <div className="users-page">
        <div className="searh-bar">
          <input placeholder="Searh here!" onChange={this.userSearch}/>
        </div>
        <UsersTable users={users} showProgress={width > 500} showEdit={role !== 'student'}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    usersData: state.dbUsers,
  };
}

export default connect(mapStateToProps, null)(Users);

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
    const users = _.map(usersData, ((user) => {if(user.role === "student") return user}));
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
    const users = _.map(usersData, ((user) => {if(user.role === "student") return user}));
    const filterUsers = _.filter(users, (user) => _.includes(user.displayName, e.target.value))
    this.setState({users:filterUsers});
  }

  render() {
    const {users, width} = this.state;
    const {usersData, user} = this.props;
    const role = usersData ? usersData[user.uid].role : '';
    return (
      <div className="users-page">
        <div className="searh-bar">
          <input placeholder="Searh here!" onChange={this.userSearch}/>
        </div>
        <UsersTable users={users} showPrograss={width > 500} showEdit={true}/>
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

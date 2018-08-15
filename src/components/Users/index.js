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
    const users = _.map(usersData, ((user) => user));
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

  render() {
    const {users, width} = this.state;
    const {usersData, user} = this.props;
    const role = usersData[user.uid].role;
    console.log(role);
    return (
      <div className="users-page">
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

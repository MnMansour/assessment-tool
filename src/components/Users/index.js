import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class Users extends Component {


  render() {
    console.log(this.props);
    return (
      <div>users</div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    usersData: state.dbUsers,
    userLoading: state.loading.user,
    dbUserLoading: state.loading.dbUser,
    allowedUsers: state.dbAllowedUsers,
    dbAllowedUsersLoading: state.loading.dbAllowedUsers
  };
}

export default connect(mapStateToProps, null)(Users);

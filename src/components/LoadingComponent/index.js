import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getUser, getDbUsers, getDbAllowedUsers} from '../../redux/actions/actions';

class LoadingComponent extends Component {

  componentWillMount() {
    const { userLoading, dbUserLoading, dbAllowedUsersLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }

    if (dbUserLoading === undefined) {
      this.props.getDbUsers();
    }

    if (dbAllowedUsersLoading === undefined) {
      this.props.getDbAllowedUsers();
    }
  }


  render() {
    const { userLoading, children } = this.props;
    if (userLoading === false ) {
      return (
        <div className="Root">
          {children}
        </div>
      );
    }

    else {
      return (
        <div>loading...</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    dbUserLoading: state.loading.dbUsers,
    dbAllowedUsersLoading: state.loading.dbAllowedUsers ,
    usersData: state.dbUsers,
    allowedUsers: state.dbAllowedUsers,
  };
}

export default withRouter(connect(mapStateToProps, {getUser, getDbUsers,getDbAllowedUsers})(LoadingComponent));

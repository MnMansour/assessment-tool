import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from "react-loading";
import {getUser, getDbUsers, getDbAllowedUsers, getLocation} from '../../redux/actions/actions';

class LoadingComponent extends Component {

  componentWillMount() {
    const { userLoading, dbUserLoading, dbAllowedUsersLoading, location } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
      console.log('mount');
    }

    if (dbUserLoading === undefined) {
      this.props.getDbUsers();
    }

    if (dbAllowedUsersLoading === undefined) {
      this.props.getDbAllowedUsers();
    }

    this.props.getLocation(location)
  }

  componentDidUpdate(prevProps, prevState) {
    const {location:{pathname}} = prevProps;
    const {location} = this.props
    const nextPathname = location.pathname
    if (pathname !== nextPathname) {
      this.props.getLocation(location)
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
        <ReactLoading className="loading" type="spinningBubbles" />
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

export default withRouter(connect(mapStateToProps, {getUser, getDbUsers,getDbAllowedUsers, getLocation})(LoadingComponent));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from "react-loading";
import {getUser, getDbUsers, getDbAllowedUsers,
        getLocation, getDbEducation, getDbExperience,
        getDbSkills} from '../../redux/actions/actions';

class LoadingComponent extends Component {

  componentWillMount() {
    const { userLoading, dbUserLoading, dbAllowedUsersLoading, dbEducationLoading, dbExperienceLoading, dbSkillsLoading, location } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }

    if (dbUserLoading === undefined) {
      this.props.getDbUsers();
    }

    if (dbAllowedUsersLoading === undefined) {
      this.props.getDbAllowedUsers();
    }

    if (dbEducationLoading === undefined) {
      this.props.getDbEducation();
    }

    if (dbExperienceLoading === undefined) {
      this.props.getDbExperience();
    }

    if (dbSkillsLoading === undefined) {
      this.props.getDbSkills();
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
    dbEducationLoading: state.loading.dbEducation,
    dbExperienceLoading: state.loading.dbExperience,
    dbSkillsLoading: state.loading.dbSkills
  };
}

export default withRouter(connect(mapStateToProps, {getUser, getDbUsers,getDbAllowedUsers,
  getLocation, getDbEducation, getDbExperience, getDbSkills})(LoadingComponent));

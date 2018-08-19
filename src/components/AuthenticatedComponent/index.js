import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from "react-loading";

import _ from 'lodash';


class AuthenticatedComponent extends Component {

  state = {stop: false}


  componentWillMount(){
    const { user , allowedUsers, userLoading} = this.props;

    if (userLoading === false && _.isEmpty(user)) {
      this.props.history.push('/login');
    }

    if (!_.isEmpty(allowedUsers) && !_.isEmpty(user)) {
      const allowedEmails = _.map(allowedUsers, user=>user.email)
      const isUserAllowed = _.includes(allowedEmails, user.email);
      if (!isUserAllowed){
        this.props.history.push('/notallowed');
      } else {
        const providerData = user.providerData;
        if (providerData.length > 1) {
          this.stop()
        } else {
          this.props.history.push('/settings');
          this.stop()
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user , allowedUsers} = nextProps;
    const {stop} = this.state;

    if (!_.isEmpty(allowedUsers) && !_.isEmpty(user) && !stop ) {
      const allowedEmails = _.map(allowedUsers, user=>user.email)
      const isUserAllowed = _.includes(allowedEmails, user.email);

      if (!isUserAllowed){
        this.props.history.push(`/notallowed/${user.email}`);
        this.stop()
      } else {
        const providerData = user.providerData;
        if (providerData.length > 1) {
          this.stop()
        } else {
          this.props.history.push('/settings');
          this.stop()
        }
      }
    }
  }

  stop = () => {
    this.setState({
      stop: true
    });
  }


  componentDidUpdate() {
    const { userLoading, user } = this.props;
    if (userLoading === false && _.isEmpty(user)) {
      this.props.history.push('/login');
    }
  }




  render() {
    const { user, children, allowedUsers } = this.props;
    const {stop} = this.state
    const isReady = stop && !_.isEmpty(user) && !_.isEmpty(allowedUsers) ;
    return (isReady) ? <div className="children">{children}</div> : <ReactLoading className="loading" type="spinningBubbles" />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    allowedUsers: state.dbAllowedUsers,
  };
}

export default withRouter(connect((mapStateToProps), null)(AuthenticatedComponent));

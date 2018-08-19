import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/actions'
import _ from 'lodash';

class NotAllowedUsers extends Component {
  componentWillMount(){
    const {user, logout, history} = this.props;
    if (_.isEmpty(user)) {
      history.push('/login')
    }
    if(!_.isEmpty(user)){
      logout();
    }
  }

  render() {
    const { match } = this.props;
    return (
        <div>hi {match.params.id}</div>
        )
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {logout})(NotAllowedUsers);

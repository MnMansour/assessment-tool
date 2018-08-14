import React from 'react'
import { connect } from 'react-redux';
import SignIn from '../Forms/SignIn';
import {loginWithGithub} from '../../redux/actions/actions';
import _ from 'lodash';

import smallGithubIcon from '../../assets/github-small.png';
import largeGithubIcon from '../../assets/github-large.png';
import './style.scss';


class Login extends React.Component{

  componentWillMount() {
    const {user} = this.props;
    if (!_.isEmpty(user)) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    const {user} = nextProps;

    if (!_.isEmpty(user)) {
      nextProps.history.push('/');
    }
  }


  handleLoginWithGit = () => {
     this.props.loginWithGithub();
  }

  render(){
    return(
    <div className="login-Page">
      <div className="login-Page__email">
        <div className="title">Login to your account</div>
        <div className="login-body">
          <SignIn />
        </div>
      </div>
      <div className="login-Page__github">
        <div className="title">Sign up/login with Github</div>
        <div className="login-body">
          <img className="login-logo" src={largeGithubIcon} alt="github" />
          <div className="github-button" onClick={this.handleLoginWithGit}><img src={smallGithubIcon} alt="github" /><span>Github</span></div>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {loginWithGithub})(Login);

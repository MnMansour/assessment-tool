import React from 'react'
import {loginWithGithub, signOut} from '../../util/firebase';
import SignIn from '../Forms/SignIn';
import {auth} from 'firebase';
import FormModal from '../Modal';

import {SIGN_UP} from '../../util/constant'
import smallGithubIcon from '../../assets/github-small.png';
import largeGithubIcon from '../../assets/github-large.png';
import './style.scss';


class Login extends React.Component{

  state = {
    modalIsOpen: false,
  }

  componentWillMount(){
    console.log('hi');
  }

  componentDidMount(){
    auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        const providerData = firebaseUser.providerData;
        if (providerData.length > 1) {
          const name = firebaseUser.displayName;
          console.log(name);
          //this.props.history.push(`profile/${name}`)
        }else {
          console.log('still need linking');
        }
      }else {
        console.log('logout');
      }
    })
  }

  handleLoginWithGit = async() => {
    let userdetails = await loginWithGithub();
    if (!userdetails) {
      console.log("not allowed user");
      signOut();
    }
    else {
      const providerData = userdetails.user.providerData;
      if (providerData.length > 1) {
        console.log('logged in');
        console.log('You are logging in with Github', userdetails);
      } else {
        console.log('still need linking');
        this.openModal();
      }
    }
  }

  modal = (title) => {
    const {modalIsOpen} = this.state;
    return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
    signOut()
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
      {this.modal(SIGN_UP)}
    </div>
    );
  }
}

export default Login;

import React from 'react'
import {loginWithGithub, sendPasswordResetEmail, linkloginAccounts} from '../../util/firebase';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
    }
  };

  handleLoginWithGit = async() => {
    let userdetails = await loginWithGithub();
    console.log('You are logging in with Github', userdetails);
  }
  
  handleSendemail = async(email) => {
    let sendEmail = await sendPasswordResetEmail(email);
    console.log('You are logging in with Github', sendEmail);
  }

  handleAccountLinking = async(email, password)=>{
    let linkAccounts = await linkloginAccounts(email, password);
    return linkAccounts;
  }

  render(){
    return(
    <div>
      <button onClick={()=>this.handleLoginWithGit()}>login with Github</button>
      <button onClick={()=>this.handleSendemail('ayoalabi0@gmail.com')}>Reset Password</button>
      <input
        type='text'
        placeholder='Enter email'
        onChange={event=>this.setState({email: event.target.value})}
      /> 
      <input
        type='text'
        placeholder='Enter Password'
        onChange={event=>this.setState({password: event.target.value})}
      /> 
      <button 
      onClick={()=>this.handleAccountLinking(this.state.email, this.state.password)}>
      Link Accounts
      </button>
    </div>
    );
  }
}



export default Login;

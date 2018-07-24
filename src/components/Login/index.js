import React from 'react'
import {loginWithGithub, sendPasswordResetEmail} from '../../util/firebase';

const handleLogin = async() => {
  let userdetails = await loginWithGithub();
  console.log('You are logging in with Github', userdetails);
}

const handleSendemail = async(email) => {
  let sendEmail = await sendPasswordResetEmail(email);
  console.log('You are logging in with Github', sendEmail);
}


const Login = () => {
  return (
    <div>
    <button onClick={()=>handleLogin()}>login with Github</button>
    <button onClick={()=>handleSendemail('ayoalabi0@gmail.com')}>Reset Password</button>
    </div>
  );
}

export default Login;

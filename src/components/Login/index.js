import React from 'react'
import {loginWithGithub} from '../../util/firebase';

const handleLogin = async() => {
  let userdetails = await loginWithGithub();
  console.log('You are logging in with Github', userdetails);
}


const Login = () => {
  return <button onClick={()=>handleLogin()}>login with Github</button>
}

export default Login;

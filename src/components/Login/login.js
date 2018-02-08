import React, { Component } from 'react';
import './login.css';
import tick from './tick.png';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';


const validate = (obj)=>{
  return {
    email: isEmail(obj.email),
    password:isAlphanumeric(obj.password)
  }
}

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {
    const errors = validate(this.state)
    return (
      <div className="login">
        <p className='title'>Sign-In</p>
        <input type="text" 
        placeholder="Username / Email" 
        className="form"
        onChange={e=>this.setState({email:e.target.value})}
        value={this.state.email}/>
        <span className="username">
          <img src={tick} alt="tick" className={errors.email ? 'valid' : 'tick'}/>
        </span>
        <input type="password" 
        placeholder="Password" 
        className="form"
        onChange={e=>this.setState({password:e.target.value})}
        value={this.state.password}/>
        <span className="password">
        <img src={tick} alt="tick" className={errors.password ? 'valid' : 'tick'}/>
        </span>
        <input type="button" value="Login"/>
      </div>
    );
  }
}

export default Login;
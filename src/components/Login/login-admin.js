import React, { Component } from 'react';
import './login.css';
import tick from './tick.png';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';
import {connect} from 'react-redux';
import {logIn} from '../../redux/actions';


const validate = (obj)=>{
  return {
    username: isEmail(obj.username),
    password:isAlphanumeric(obj.password)
  }
}

class LoginAdmin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  
  handleLogin = (e)=>{
        e.preventDefault();
        let user = [{username:this.state.username, password:this.state.password}]
        console.log(user);
        this.props.login(user)
  }
  render() {
    const errors = validate(this.state)
    return (
      <div className="login">
        <p className='title'>Admin Sign-In</p>
        <form onSubmit={(e)=>{this.handleLogin(e)}}>
                <input type="text" 
                placeholder="Username" 
                className="form"
                onChange={e=>this.setState({username:e.target.value})}
                value={this.state.username}/>
                <span className="username">
                <img src={tick} alt="tick" className={errors.username ? 'valid' : 'tick'}/>
                </span>
                <input type="password" 
                placeholder="Password" 
                className="form"
                onChange={e=>this.setState({password:e.target.value})}
                value={this.state.password}/>
                <span className="password">
                <img src={tick} alt="tick" className={errors.password ? 'valid' : 'tick'}/>
                </span>
                <input type="submit" value="Login"/>
        </form>
        
      </div>
    );
  }
}

  const mapDispatchToProps = (dispatch)=>{
    return { 
      login: (user)=>dispatch(logIn(user)),
    }
  }

export default connect(mapDispatchToProps)(LoginAdmin);
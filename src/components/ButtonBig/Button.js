import React, { Component } from 'react';
import './button.css';
import github from '../../assets/github.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {UserSelector} from '../../redux/selectors';
import PropTypes from 'prop-types';

class ButtonBig extends Component {
constructor(props){
  super(props)
  this.state = {
    span: "Username or password Incorrect",
  }
}

loginNoMessage = ()=>{
  return (
    <div className="login-container">
      {console.log(this.props.user)}
          <button type="button" className="button-integrify" onClick={()=>window.location.href = "/app/login"}>
            <img src={github} alt="github" className='github'></img> Sign up / Login With Github</button>
          <div className="adminlinks">
              <Link to="/app/login-admin"><p className="admin">Admin</p></Link>
              <Link to="/app/login"><p className="signin">Already registered? Login</p></Link>
          </div>
    </div>
  )
}

loginMessage = ()=>{
  return (
    <div className="login-container">
        <span>{this.state.span}</span>
        <button type="button" className="button-integrify" onClick={()=>window.location.href = "/app/login"}>
          <img src={github} alt="github" className='github'></img> Sign up / Login With Github</button>
        <div className="adminlinks">
            <Link to="/app/login-admin"><p className="admin">Admin</p></Link>
            <Link to="/app/login"><p className="signin">Already registered? Login</p></Link>
        </div>
    </div>
  )
}

render() {
  return this.props.user && this.props.user.flag !=="error" ? this.loginNoMessage() : this.loginMessage()
}
}

const  mapStateToProps= (state)=>{
  return { 
    user: UserSelector(state)
  }
}


ButtonBig.propTypes = {
  user: PropTypes.object
}


export default connect(mapStateToProps, null)(ButtonBig);

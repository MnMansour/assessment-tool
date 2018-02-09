import React, { Component } from 'react';
import './login.css';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions';

class LoginProcess extends Component {

    success = ()=>{
        console.log('Sucess!!!')
        window.location.href = `/app/user/${this.props.hello.username }`
    }
    
    fail = ()=>{
        let displayText= "Username or password incorrect!"
        this.props.logout()
        window.location.href="/app/home"
        console.log('Failure!!!')
        return displayText
    }

    render() {
      return (
        <div>
            {this.props.hello.username ? this.success() : this.fail()}
        </div>
      )
  }
}
const mapStateToProps = (state)=>{
  return {
    hello: state.data
  }
}
const mapDispatchToProps = (dispatch)=>{
    return { 
      logout: ()=>dispatch(logOut()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginProcess);
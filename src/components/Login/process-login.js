import React, { Component } from 'react';
import './login.css';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions';
import {UserSelector} from '../../redux/selectors';

class LoginProcess extends Component {

    success = ()=>{
        console.log('Sucess!!!')
        window.location.href = `/app/user/${this.props.user[0].id }`
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
            {this.props.user[0].id ? this.success() : this.fail()}
        </div>
      )
  }
}
const mapStateToProps = (state)=>{
  return {
    user: UserSelector(state)
  }
}
const mapDispatchToProps = (dispatch)=>{
    return { 
      logout: ()=>dispatch(logOut()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginProcess);
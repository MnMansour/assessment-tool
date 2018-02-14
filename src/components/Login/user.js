import React, { Component } from 'react';
import './login.css';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions';

class LogOut extends Component {

    handleLogout=(e)=>{
        e.preventDefault();
        this.props.logout()
        window.location.href="/app/home"
    }

    render() {
      return (
        <div>
            {`You are welcome ${this.props.hello.username}...`}
            <form onSubmit={(e)=>{this.handleLogout(e)}}>
                <input type="submit" value="Logout"/>
        </form>

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

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
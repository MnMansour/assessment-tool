import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import {logout} from '../../redux/actions/actions';

import './style.scss'
import 'react-confirm-alert/src/react-confirm-alert.css';
import logo from "../../assets/integrify-logo.svg"
import Menu from "../../assets/menu.svg"


class Header extends Component {

  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  closeMenu = () => {
    this.setState({showMenu: false});
  }

  checkPath = (e) => {
    const {location:{pathname}} = this.props;
    return pathname === e.url
  }

  logOut = () => {
    const {logout} = this.props;
    confirmAlert({
        title: 'Logout',
        message: 'Are you sure you want logout?',
        buttons: [{
            label: 'logout',
            onClick: () => logout()
          },
          { label: 'cancel'}
        ]})
  }

  render() {
    const{showMenu} = this.state;
    const {user, dbUsers} = this.props;
    const USER = dbUsers ? user ? dbUsers[user.uid] : '' : '';
    const role = USER ? USER.role : '';

    return (
      <header>
        <NavLink onClick={this.closeMenu} to="/"><img className="logo" src={logo} alt="integrify"/></NavLink>
        {!user&&<div onClick={this.closeMenu} className={showMenu ? 'nav' : 'nav hide' }>
          <NavLink className="nav-item" to="/students" >Our Students</NavLink>
          <NavLink className="nav-item" to="/aboutus" >About us</NavLink>
          <NavLink className="nav-item" to="/login" >login</NavLink>
        </div>}
        {user&&<div onClick={this.closeMenu} className={showMenu ? 'nav' : 'nav hide' }>
          <NavLink isActive={this.checkPath} className="nav-item" to="/" >Students</NavLink>
          {role !== 'student' &&<NavLink className="nav-item" to="/admin" >Admin</NavLink>}
          {role === 'student' &&<NavLink className="nav-item" to="/profile" >Profile</NavLink>}
          <a className="nav-item" onClick={this.logOut}>logout</a>
        </div>}
        <img onClick={this.toggleMenu} className="menu" src={Menu} alt="menu" />
      </header>
    )
  }
}


function mapStateToProps(state){
  return {
    dbUsers: state.dbUsers,
    user: state.user,
    location: state.location
  }
}

export default connect(mapStateToProps,{logout})(Header);

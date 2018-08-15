import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../redux/actions/actions';

import './style.scss'
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

  render() {
    const{showMenu} = this.state;
    const {user, logout} = this.props;
    return (
      <header>
        <NavLink onClick={this.closeMenu} to="/"><img className="logo" src={logo} alt="integrify"/></NavLink>
        {!user&&<div onClick={this.closeMenu} className={showMenu ? 'nav' : 'nav hide' }>
          <NavLink className="nav-item" activeClassName="active" to="/students" >Our Students</NavLink>
          <NavLink className="nav-item" activeClassName="active" to="/aboutus" >About us</NavLink>
          <NavLink className="nav-item" activeClassName="active" to="/login" >login</NavLink>
        </div>}
        {user&&<div onClick={this.closeMenu} className={showMenu ? 'nav' : 'nav hide' }>
          <NavLink className="nav-item" activeClassName="active" to="/" >Students</NavLink>
          <NavLink className="nav-item" activeClassName="active" to="/profile" >Profile</NavLink>
          <a className="nav-item" onClick={()=>logout()}>logout</a>
        </div>}
        <img onClick={this.toggleMenu} className="menu" src={Menu} alt="menu" />
      </header>
    )
  }
}


function mapStateToProps(state){
  return {
    dbUsers: state.dbUsers,
    user: state.user
  }
}

export default connect(mapStateToProps,{logout})(Header);

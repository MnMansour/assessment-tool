import React, { Component } from 'react';

import ham from './hamburger.png';


import './Header.css';

class Header extends Component {
  state = {
    show : false,
  };
  render() {

  return (
    <div className='header'>
      <img src='http://www.integrify.fi/sites/all/themes/integrify/logo.svg' alt='integrify-logo'/>
      <div className="log"> Logout </div>
      <div className="hamburger" onClick={ () => this.setState({ show : !this.state.show}) }><img src={ham} alt='' />
        <ul className={this.state.show ? 'show': 'hide' }>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )}
}
export default Header;

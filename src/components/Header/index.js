import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/actions';


const Header = ({dbUsers, user, logout}) => {
  if (user && user.providerData.length > 1) {
    console.log('hi');
  }
  return <header><button onClick={()=>logout()}>logout</button></header>
}
function mapStateToProps(state){
  return {
    dbUsers: state.dbUsers,
    user: state.user
  }
}

export default connect(mapStateToProps,{logout})(Header);

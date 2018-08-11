import React from 'react';
import {signOut} from '../../util/firebase';


const Header = () => {
  return <header><button onClick={()=>signOut()}>logout</button></header>
}

export default Header;

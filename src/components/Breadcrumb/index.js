import React from 'react';
import './breadcrumb.css';

class Breadcrumb extends React.Component{
  render(){
    return(
      <section>
        <span>Dashboard </span><i className="fa fa-angle-right fa-1x"></i>
      </section>

    )
  }
}

export default Breadcrumb;

import React from 'react';
import './breadcrumb.css';

class Breadcrumb extends React.Component{
  render(){
    return(
      <section>
        <span className = "section__span">Dashboard </span><i className="fa fa-angle-right fa-1x"></i>
      </section>

    )
  }
}

export default Breadcrumb;

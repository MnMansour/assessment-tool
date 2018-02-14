import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Search from '../Search';

class TeacherDashboard extends React.Component{
  render(){
    return(
      <section>
        <Breadcrumb />
        <Search />
      </section>
    )
  }
}

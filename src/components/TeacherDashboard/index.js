import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Search from '../Search';
import SortableTableContainer from '../SortableTableContainer'

class TeacherDashboard extends React.Component{
  render(){
    return(
      <section>
        <Breadcrumb />
        <Search />
        <SortableTableContainer/>
      </section>
    )
  }
}

export default TeacherDashboard;

import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Search from '../Search';
import SortableTable from '../SortableTable'

class TeacherDashboard extends React.Component{
  render(){
    return(
      <section>
        <Breadcrumb />
        <Search />
        <SortableTable/>
      </section>
    )
  }
}

export default TeacherDashboard;

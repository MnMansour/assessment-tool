import React from 'react';
import Breadcrumb from '../Breadcrumb';
import SortableTableContainer from '../SortableTableContainer'

class TeacherDashboard extends React.Component{
  render(){
    return(
      <section>
        <Breadcrumb />    
        <SortableTableContainer/>
      </section>
    )
  }
}

export default TeacherDashboard;

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

<<<<<<< HEAD
export default TeacherDashboard;
=======
export default TeacherDashboard
>>>>>>> feature/sortable-table

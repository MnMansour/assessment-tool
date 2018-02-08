import React from 'react'
import StudentTable from './StudentTable'
import ClassOverview from './ClassOverview'

const ClassManagement = () => {
  return (
    <div className="container">
      <ClassOverview />
      <StudentTable />

    </div>

    
  )
}

export default ClassManagement;

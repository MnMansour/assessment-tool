import React from 'react'
import StudentTable from './StudentTable'
import ClassOverview from './ClassOverview'

const ClassManagement = ({match}) => {
  return (
    <div className="container">
      <ClassOverview match={match} />
      <StudentTable match={match} />
    </div>
  )
}

export default ClassManagement;

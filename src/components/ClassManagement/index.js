import React from 'react'
import StudentTableContainer from './StudentTableContainer'
import ClassOverview from './ClassOverview'

const ClassManagement = ({match}) => {
  return (
    <div className="container">
      <ClassOverview match={match} />
      <StudentTableContainer match={match} />
    </div>
  )
}

export default ClassManagement;

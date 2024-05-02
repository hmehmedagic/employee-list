import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList({staff}) {
  return (
    <div className='emp_Master'>
    {staff.map(worker => {
      return <EmployeeListItem  info={worker}/>     
    })}
    </div>

  )
}

export default EmployeeList
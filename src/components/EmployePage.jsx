import React from 'react'
import Header from './Header'
const EmployePage = ({title}) => {
  return (
    <div className='emp_page'>
      EmployePage
      <Header topic={title}/>

      <div className='top_container'>
        <img src="" alt="" className="emp_pic" />
        <div className="profile_info">
          <h1 className='emp_name'>Employee Name</h1>
          <h2 className='emp_position'>Employee Title</h2>
        </div>
      </div>
      <div className='bot_container'>
        <div className='left_bot'>
          <h1>Call Office</h1>
          <h2 className="info">xxx-xxx-xxxx</h2>
        </div>
        <button className="gt">&gt;</button>
      </div>
      <div className='bot_container'>
        <div>
          <h1>Call Mobile</h1>
          <h2 className="info">xxx-xxx-xxxx</h2>
        </div>
        <button className="gt">&gt;</button>
      </div>
      <div className='bot_container'>
        <div>
          <h1>SMS</h1>
          <h2 className="info">xxx-xxx-xxxx</h2>
        </div>
        <button className="gt">&gt;</button>
      </div>
      <div className='bot_container'>
        <div>
          <h1>Email</h1>
          <h2 className="info">fake_email@fake_email.com</h2>
        </div>
        <button className="gt">&gt;</button>
      </div>

    </div>
  )
}

export default EmployePage
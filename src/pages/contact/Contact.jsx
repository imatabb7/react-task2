import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contactpage '>
        <div className='sidebar'>
            <ul className='contact-list'>
              <NavLink to={""} className='contact-list-item'>Contact Us Form</NavLink>
              <NavLink to={"/ContactUs/emails"} className='contact-list-item '> Emails</NavLink>
              <NavLink to={"/ContactUs/locations"} className='contact-list-item'> Locations</NavLink>
              <NavLink to={"/ContactUs/phone"} className='contact-list-item'>Phone Number</NavLink>
            </ul>
        </div>
      <Outlet/>
    </div>
  )
}

export default Contact



 
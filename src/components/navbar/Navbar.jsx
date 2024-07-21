import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <> 
        <div className=''>
            <div className='navbar'>
                <div className='logo'>
                    <h2>Logo</h2>
                </div>
                <div className='nav'>
                    <ul className='navList'>
                        <NavLink to="">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Service">Service</NavLink>
                        <NavLink to="/ContactUs">Contact us</NavLink>
                    </ul>
                </div>
                <div className='loginBtn'>
                    <button className='btn1'>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar




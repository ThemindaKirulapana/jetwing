import React from 'react'
import logo from '../assests/logoj.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div  className='navbar'>
        <div className='leftside'>
            <img src={logo}  className='logo' style={{marginLeft:'20px', borderRadius:'5px'}}/>

        </div>
        <div className='rightside'>

          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Service">Services</Link>
          <Link to="/ContactUs">Contact</Link>
           
        </div>
       
    </div>
  )
}

export default Navbar
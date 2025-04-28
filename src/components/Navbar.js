import React from 'react'
import logo from '../assests/logoj.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div  className='navbar'>
        <div className='leftside'>
            <img src={logo}  className='logo'/>

        </div>
        <div className='rightside'>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
           
        </div>
       
    </div>
  )
}

export default Navbar
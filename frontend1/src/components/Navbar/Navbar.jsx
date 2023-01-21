import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='left-nav'>
          <div className='logo'>HEXA</div>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className='btn-nav'><button>COLORLIB</button></div>
      </div>

    </>
  )
}

export default Navbar
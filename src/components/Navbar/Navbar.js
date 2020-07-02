import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/'>
        <img src={logo} alt='City Tours' />
      </a>
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li>
          <a href='/about' className='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='/tours' className='nav-link'>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  )
}

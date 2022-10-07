import React, { useEffect, useState } from 'react'
import { CloseIcon, LinkedInIcon, MenuIcon, TwitterIcon } from '../icons'
import { Typography, Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(true)
  const pathname = window.location.pathname

  const handleShow = () => {
    setShow((prev) => !prev)
  }
  return (
    <main className="sticky top-0 left-0 z-50 bg-primary h-[100px]">
      <header className="hidden lg:flex items-center justify-between mx-auto max-w-7xl p-5">
        <Link to="/home">
          <img
            src={require('../images/logo.png')}
            className="w-40 h-25 cursor-pointer"
            alt="logo"
          />
        </Link>

        <nav className="flex items-center space-x-3 sm:space-x-10">
          <Link to="/home" activeClassName='text-black' className="nav text-white">
          <h3 className={`nav text-white  ${pathname === '/home' ? 'border-b-2 border-white' : ''}`}>Home</h3>
          </Link>
          <Link to="/about" activeClassName='text-black'>
            <h3 className={`nav text-white  ${pathname === '/about' ? 'border-b-2 border-white' : ''}`}>About</h3>
          </Link>
          <Link to="/service" activeClassName='text-black'>
          <h3 className={`nav text-white  ${pathname === '/service' ? 'border-b-2 border-white' : ''}`}>Service</h3>
          </Link>
          <Link to="/contact" activeClassName='text-black'>
          <h3 className={`nav text-white  ${pathname === '/contact' ? 'border-b-2 border-white' : ''}`}>Contact</h3>
          </Link>
        </nav>
        <div className="flex space-x-2 items-center cursor-pointer group">
          <TwitterIcon className="text-gray-500 group-hover:text-blue-300" />
          <LinkedInIcon className="text-gray-500 group-hover:text-blue-500" />
        </div>
      </header>
      <header className="flex items-center justify-between mx-auto max-w-7xl p-5 lg:hidden">
        <img
          src={require('../images/logo.png')}
          className="w-40 h-15 cursor-pointer"
          alt="logo"
        />
        {show ? (
          <MenuIcon
            onClick={handleShow}
            className="text-gray-500 cursor-pointer"
          />
        ) : (
          <CloseIcon
            onClick={handleShow}
            className="text-red-500 cursor-pointer"
          />
        )}
        {!show ? (
          <nav className="flex items-center flex-col bg-white w-max p-5 rounded absolute top-10 right-10">
            <h3 className="nav text-white">Home</h3>
            <Link to="/about">
              <h3 className="nav text-white">About</h3>
            </Link>
            <h3 className="nav text-white">Contact</h3>
            <h3 className="nav text-white">Social</h3>
          </nav>
        ) : null}
      </header>
    </main>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon, LinkedInIcon, MenuIcon, TwitterIcon } from '../icons'

const Footer = () => {
    const pathname = window.location.pathname
  return (
    <main className="sticky top-0 left-0 z-50 bg-[#0a0657] h-[100px]">
      <header className="hidden sm:flex items-center justify-between mx-auto max-w-7xl p-5">
        <div className="sm:flex space-x-2 items-center cursor-pointer group">
          <a href="https://twitter.com">
            <TwitterIcon className="text-gray-500 group-hover:text-blue-300" />
          </a>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon className="text-gray-500 group-hover:text-blue-500" />
          </a>
        </div>

        <nav className="flex items-center space-x-4 sm:space-x-10">
          <Link
            to="/home"
            activeClassName="text-black"
            className="nav text-white"
          >
            <h3
              className={`nav text-white  ${
                pathname === '/home' ? 'border-b-2 border-white' : ''
              }`}
            >
              Home
            </h3>
          </Link>
          <Link to="/about" activeClassName="text-black">
            <h3
              className={`nav text-white  ${
                pathname === '/about' ? 'border-b-2 border-white' : ''
              }`}
            >
              About
            </h3>
          </Link>
          <Link to="/service" activeClassName="text-black">
            <h3
              className={`nav text-white  ${
                pathname === '/service' ? 'border-b-2 border-white' : ''
              }`}
            >
              Service
            </h3>
          </Link>
          <Link to="/contact" activeClassName="text-black">
            <h3
              className={`nav text-white  ${
                pathname === '/contact' ? 'border-b-2 border-white' : ''
              }`}
            >
              Contact
            </h3>
          </Link>
        </nav>

        <div>
          <p className="text-white">+1 XXXXXX XXX XXX</p>
          <p className="text-white">customer@custxmer.co.uk</p>
        </div>
      </header>
      <header className="flex items-center justify-between mx-auto max-w-7xl p-5 lg:hidden">
        {/* <img src={require('../images/logo.png')} className='w-40 h-15 cursor-pointer' alt="logo" />
        
            {
                <nav className='flex items-center flex-col bg-white w-max p-5 rounded absolute top-10 right-10'>
                    <h3 className='nav text-white'>Home</h3>
                    <Link to='/about'>
                        <h3 className='nav text-white'>About</h3>
                    </Link>
                    <h3 className='nav text-white'>Contact</h3>
                    <h3 className='nav text-white'>Social</h3>
                </nav>} */}
      </header>
    </main>
  )
}

export default Footer

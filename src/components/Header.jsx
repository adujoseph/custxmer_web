import React, { useState } from 'react'
import { CloseIcon,  MenuIcon} from '../icons'
import SocialNav from './SocialNav';
import { Link } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(true)
  const pathname = window.location.pathname

  const handleShow = () => {
    setShow((prev) => !prev)
  }

  const NavLinks = [
    {
      id: 1,
      link: '/home',
      name: 'Home',
    },
    {
      id: 2,
      link: '/about',
      name: 'About',
    },
    {
      id: 3,
      link: '/contact',
      name: 'Contact',
    },
    {
      id: 4,
      link: '/service',
      name: 'Service',
    },
  ]
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
          {NavLinks.map((link, i) => (
            <Link to={link.link} key={i}>
              <h3
                className={`nav text-white  ${
                  pathname === link.link ? 'border-b-2 border-white' : ''
                }`}
              >
                {link.name}
              </h3>
            </Link>
          ))}
        </nav>
        <SocialNav />
      </header>
      <header className="flex items-center justify-between mx-auto max-w-7xl p-5 lg:hidden">
        <img
          src={require('../images/logo.png')}
          className="w-40 h-15 cursor-pointer"
          alt="logo"
        />
       <SocialNav />
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
          <nav className="flex items-center flex-col bg-white w-full p-2 rounded absolute top-10 right-10 w-full">
            {NavLinks.map((link, i) => (
              <Link to={link.link} onClick={handleShow} key={i}>
                <h3
                  className={`nav text-primary  ${
                    pathname === link.link ? 'border-b-2 border-primary' : ''
                  }`}
                >
                  {link.name}
                </h3>
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
    </main>
  )
}

export default Header

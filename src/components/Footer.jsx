import React from 'react'
import { Link } from 'react-router-dom'
import SocialNav from './SocialNav';

const Footer = () => {
    const pathname = window.location.pathname

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
    <main className="sticky top-0 left-0 z-50 bg-[#0a0657] h-[100px]">
      <header className="hidden sm:flex items-center justify-between mx-auto max-w-7xl p-5">
      <SocialNav />

        <nav className="flex items-center space-x-4 sm:space-x-10">
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

        <div>
          <p className="text-white">+1 XXXXXX XXX XXX</p>
          <p className="text-white">customer@custxmer.co.uk</p>
        </div>
      </header>
    </main>
  )
}

export default Footer

import React from 'react';
import { LinkedInIcon, TwitterIcon } from '../icons'

function SocialNav() {
  return (
    <div>
      <div className="sm:flex space-x-2 items-center cursor-pointer group">
        <a href="https://twitter.com">
          <TwitterIcon className="text-white group-hover:text-blue-300" />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedInIcon className="text-white group-hover:text-blue-500" />
        </a>
      </div>
    </div>
  )
}

export default SocialNav

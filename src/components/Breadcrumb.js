import React from 'react'

function Breadcrumb() {
    const pathname = window.location.pathname
  return (
    <div className={`w-full bg-light-gray mx-auto`}> 
      <p className='pl-10'>{pathname}</p>
    </div>
  )
}

export default Breadcrumb
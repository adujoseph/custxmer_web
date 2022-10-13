// import React from 'react'
// import { hero } from '../images'

// const Hero = () => {
//     return (
//         <div className='w-full sm:h-[400px] mt-4 lg:px-40'>
//             <img src={hero} className='w-full h-full object-cover' alt="" />
//         </div>
//     )
// }

// export default Hero

import React from 'react'
import { image1 } from '../images'

const Hero = () => {
  return (
    <div className=" items-center pt-10">
      <h2 className="text-center">
        Manage and contact your sevice provider by simply tapping your phone!
      </h2>
      <div className="w-full sm:h-[700px] flex items-center justify-center pt-10">
        <img src={image1} class="object-contain h-full w-full" alt="hero"/>
      </div>
    </div>
  )
}

export default Hero

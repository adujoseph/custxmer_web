// import React from 'react'
// import Card from './Card'

// const InfoCard = () => {
//     return (
//             <div className='flex items-center flex-wrap justify-around my-10'>
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>

//     )
// }

// export default InfoCard

import React from 'react'
import Card from './Card'
import { Cloud, Collections, PersonPinCircleIcon } from '../icons'

const InfoCard = () => {
  const cardSection = [
    {
      id: 1,
      icon: (
        <PersonPinCircleIcon className="text-gray-900 mb-5 group-hover:text-blue-300" />
      ),
      title: 'Title 1',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam',
    },
    {
      id: 2,
      icon: (
        <Collections className="text-gray-900 mb-5 group-hover:text-blue-300" />
      ),
      title: 'Title 2',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam',
    },
    {
      id: 3,
      icon: <Cloud className="text-gray-900 mb-5 group-hover:text-blue-300" />,
      title: 'Title 3',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis, at temporibus enim accusantium amet consectetur architecto illum in similique quo inventore iste, vitae deserunt nesciunt suscipit distinctio quasi magnam',
    },
  ]
  return (
    <div className="bg-[#ececec] p-10">
      <div className="flex items-center flex-wrap justify-around my-10">
        {cardSection.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default InfoCard

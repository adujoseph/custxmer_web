import React from 'react'

const Card = ({item}) => {
  const {icon, title, message } = item
  console.log(item, "how", icon)
  return (
    <div className="m-3 relative bg-white/40 w-[300px] h-450px] p-4 rounded shadow-md flex items-center justify-center flex-col">
      {icon}
        <p className="text-gray-500 font-medium text-center mb-3  text-[#27bec5]">
       {title}
      </p>
      <p className="text-gray-500 font-regular text-center p-5">
       {message}
      </p>
      <button className="-bottom-8 text-xl bg-[#27bec5] absolute my-3 py-1 px-6 text-white  capitalize">
Read More
      </button>
    </div>
  )
}

export default Card

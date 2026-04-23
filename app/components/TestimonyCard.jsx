import React from 'react'
import Image from 'next/image'

const TestimonyCard = ({ image, name, position, testimony }) => {
  return (
    <div className="bg-white flex-shrink-0 w-[422px] p-6 rounded-xl shadow-md flex flex-col gap-6 border-l-2 border-[#EF4353]">
      
      <div className="flex items-center gap-3">
        <Image 
          src={image}
          width={44}
          height={44}
          alt={name}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[#151515]">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>


      <p className="text-sm text-gray-700 leading-relaxed">
        {testimony}
      </p>

    </div>
  )
}

export default TestimonyCard
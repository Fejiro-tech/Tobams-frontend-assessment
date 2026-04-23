
import Image from 'next/image'

const TestimonyCard = ({ image, name, position, testimony }) => {
  return (
    <div className="bg-white flex-shrink-0 w-[380px] md:w-[400px] lg:w-[422px] p-6 rounded-xl shadow-md flex flex-col gap-6 border-l-2 border-[#EF4353] snap-start h-full">

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 relative rounded-full overflow-hidden shrink-0">
          <Image 
            src={image}
            fill
            alt={name}
            sizes="(max-width: 768px) 100vw, 550px"
            className="object-cover"
          />
        </div>

        <div className="leading-tight">
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
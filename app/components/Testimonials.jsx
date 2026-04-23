'use client'
import { useRef } from 'react'
import TestimonyCard from '../components/TestimonyCard'

const testimonies = [
  {
    image: "/image9.png",
    name: "Aisha Yusuf",
    position: "Founder, CraftHub NG",
    testimony: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!"
  },
  {
    image: "/image8.png",
    name: "John Davies",
    position: "Marketing Manager, E-Commerce Emporium",
    testimony: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!"
  },
  {
    image: "/image7.png",
    name: "Chinonso Nwankwo",
    position: "HR Director, FutureTech Solutions",
    testimony: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward."
  },
  {
    image: "/image2.jpg",
    name: "Lorem Ipsum",
    position: "CEO, Lorem Corp",
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tobams Group exceeded our expectations and delivered outstanding results across every milestone of our project journey."
  },
]

const Testimonials = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -420 : 420,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full py-16 px-4 md:px-16">

      <h2 className="text-[#151515] text-[20px] md:text-[32px] lg:text-[40px] font-bold text-center mb-10">
        Testimonials
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-4 md:px-16 pr-6 md:pr-16 pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        {testimonies.map((item, idx) => (
          <div key={idx} className="snap-start shrink-0">
            <TestimonyCard
              image={item.image}
              name={item.name}
              position={item.position}
              testimony={item.testimony}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => scroll('left')}
          className="bg-[#F043541A] rounded p-2"
        >
          <img src="/arrow-left.svg" alt="arrow-left" className='w-3 h-3'/>
        </button>

        <button
          onClick={() => scroll('right')}
          className="bg-[#F043541A] rounded p-2"
        >
          <img src="/arrow-right.svg" alt="arrow-right" className='w-3 h-3' />
        </button>
      </div>

    </section>
  )
}

export default Testimonials
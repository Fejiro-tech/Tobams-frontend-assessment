'use client'
import { useRef } from 'react'
import TestimonyCard from '../components/TestimonyCard'
import Image from 'next/image'

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
    image: "/image6.png",
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
        left: direction === 'left' ? -442 : 442,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="md:py-16 w-full p-6">
      <h2 className="text-[#151515] text-[40px] font-bold text-center mb-8">Testimonials</h2>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-16 pb-4 hide-scrollbar"
      >
        {testimonies.map((item, idx) => (
          <TestimonyCard
            key={idx}
            image={item.image}
            name={item.name}
            position={item.position}
            testimony={item.testimony}
          />
        ))}
      </div>

      <div className="flex justify-end gap-3 px-16 mt-6">
        <button
          onClick={() => scroll('left')}
          className=""
        >
          <Image
            src="/arrow-left.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </button>
        <button
          onClick={() => scroll('right')}
          className=""
        >
          <Image
            src="/arrow-right.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
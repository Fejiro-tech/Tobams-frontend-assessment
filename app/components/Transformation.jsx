import Image from 'next/image'
import Link from 'next/link'

const skills = [
  { icon: "/vector.svg", skill: "Learning Development" },
  { icon: "/vector.svg", skill: "Learning Development" },
  { icon: "/vector.svg", skill: "Learning Development" },
  { icon: "/vector.svg", skill: "Learning Development" },
  { icon: "/vector.svg", skill: "Learning Development" },
  { icon: "/vector.svg", skill: "Learning Development" },
]

const Transformation = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">

      <div className="bg-[#EF435333] max-w-[1312px] mx-auto rounded-[16px] p-6 md:p-10">

        <div className="max-w-[1232px] mx-auto flex flex-col">

          <header className="flex flex-col gap-2 italic">
            <p className="text-[#1671D9] text-base md:text-[20px] font-semibold">
              Learning With Our CEO:
            </p>

            <h2 className="text-[#571244] text-2xl md:text-[32px] font-semibold">
              Transformation Hub With Jite Newton
            </h2>
          </header>

          <p className="text-[#571244] text-sm md:text-[18px] leading-[150%] font-normal mt-3">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>

          <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 mt-6">
            <figure className="relative w-full max-w-[500px] lg:max-w-none lg:w-[45%] h-[240px] md:h-[340px] rounded-[8px] overflow-hidden">
              <Image
                src="/image4.jpg"
                fill
                alt="Transformation hub"
                className="object-cover"
              />
            </figure>

            <article className="w-full max-w-[500px] lg:max-w-none lg:w-[55%] bg-[#FFFFFF4D] rounded-[8px] p-5 md:p-8 flex flex-col gap-6">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {skills.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-[10px]"
                  >
                    <Image
                      src={item.icon}
                      width={14}
                      height={14}
                      alt=""
                      aria-hidden="true"
                    />
                    <span className="text-sm md:text-base wrap-break-word">
                      {item.skill}
                    </span>
                  </li>
                ))}
              </ul>

              <footer>
                <Link
                  href="#"
                  className="bg-[#571244] text-white w-fit py-2.5 px-6 rounded-lg flex gap-2 items-center"
                >
                  <span>Learn More</span>
                  <Image
                    src="/arrow-up-right.svg"
                    width={10}
                    height={10}
                    alt=""
                    aria-hidden="true"
                  />
                </Link>
              </footer>

            </article>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Transformation
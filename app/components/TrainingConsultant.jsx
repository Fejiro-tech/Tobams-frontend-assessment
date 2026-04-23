import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: "Expert-Led Learning",
    description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
  },
  {
    title: "Interactive Workshops",
    description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
  },
  {
    title: "Comprehensive Curriculum",
    description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
  },
  {
    title: "Global Recognition",
    description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
  }
]

const TrainingConsultant = () => {
  return (
    <section className="w-full bg-[#5712441A] py-10 px-4 md:px-16 flex flex-col gap-8">

      <header className="max-w-[1312px] mx-auto flex flex-col gap-3">
        <h2 className="text-[#571244] text-2xl md:text-[40px] font-semibold">
          Training the Consultant
        </h2>
        <p className="text-[#571244] text-sm md:text-base font-semibold">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-[#571244] text-sm md:text-base leading-[150%]">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
        </p>
      </header>

      <ul className="bg-[#571244] text-white rounded-[16px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
        {features.map((item, idx) => (
          <li key={idx} className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-sm md:text-base leading-[150%] text-white">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="bg-[#571244] text-white w-fit py-2.5 px-6 rounded-[8px] flex gap-2 items-center"
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

    </section>
  )
}

export default TrainingConsultant
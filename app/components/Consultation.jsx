import Link from 'next/link'

const Consultation = ({ mobileText, desktopText }) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 py-6 w-full">
      <div className="max-w-[1134px] mx-auto bg-[#571244] rounded-2xl py-8 px-6 md:px-10 lg:px-16 flex flex-col items-center text-center gap-6">
        
        <p className="text-white text-base md:hidden font-medium leading-relaxed">
          {mobileText}
        </p>

        <p className="hidden md:block text-white text-xl font-medium max-w-[740px] leading-relaxed">
          {desktopText}
        </p>

        <Link
          href="#"
          className="bg-white px-8 py-2.5 rounded hover:bg-white/90 hover:text-[#3D0A4F] transition-colors text-sm font-medium"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}

export default Consultation
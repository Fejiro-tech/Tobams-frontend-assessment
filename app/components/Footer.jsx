import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const whatWeDo = [
    'Sustainability Services',
    'Strategy Planning and Implementation',
    'Tech Talent Solutions',
    'Training and Development',
    'IT Consulting Services',
    'Social Impact',
    'Talent Recruitment',
  ]

  const company = [
    'About',
    'Jobs',
    'Projects',
    'Our Founder',
    'Business Model',
    'The Team',
    'Contact Us',
    'Blog',
    'FAQs',
    'Testimonials',
  ]

  const solution = [
    'Tobams Group Academy',
    'Help a Tech Talent',
    'Campus Ambassadors Program',
    'Join Our Platform',
    'Pricing',
    'Book a Consultation',
    'Join Our Slack Community',
  ]

  const icons = [
    { src: "/linkedin.svg", alt: "LinkedIn" },
    { src: "/instagram.svg", alt: "Instagram" },
    { src: "/twitter.svg", alt: "X (Twitter)" },

  ]

  return (
    <footer className="bg-[#1D0617] w-full">
      
      <section className="flex flex-col md:flex-row items-start md:items-center md:justify-between border-b border-[#C4C4C4]/30 p-6 gap-6 md:py-10 md:px-16">
        <div className="text-white max-w-[327px]">
          <p className="text-sm md:text-base text-gray-300 mb-1">Ready to be a part of something extraordinary?</p>
          <p className="text-[20px] md:text-[32px] font-semibold leading-tight">
            Let's work together to create a difference
          </p>
        </div>
        <Link
          href="#"
          className="bg-[#571244] hover:bg-[#6e1757] transition-colors rounded py-2 px-6 text-white whitespace-nowrap text-sm font-medium"
        >
          Get In Touch
        </Link>
      </section>

      
      <section className="max-w-[1312px] mx-auto grid lg:grid-cols-4 gap-8 p-6 md:py-16 md:px-8 border-b-1 border-[#2A0B1F]">
        
        <div className="flex flex-col">

            <Image
                src="/tobamslogo.png"
                width={150}
                height={100}
                alt="logo"
                className='w-47'
            />
    

          <p className="text-gray-400 text-sm leading-relaxed">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent
            development in Africa, specializing in talent acquisition, internships, and skill
            development with a global perspective.
          </p>

          
          <div className="flex items-center gap-3 mt-2 ">
            {icons.map((item, idx) => (
                <Link href="#" key={idx} className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-black bg-[#FFFFFF] hover:bg-white/10 transition-colors">
                    <Image src={item.src} alt={item.alt} width={16} height={16} />
                </Link>
            ))}
           
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-base mb-5">What We Do</h3>
          <ul className="flex flex-col gap-3">
            {whatWeDo.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold text-base mb-5">Company</h3>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold text-base mb-5">Solution</h3>
          <ul className="flex flex-col gap-3">
            {solution.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

     <section className="max-w-[1312px] mx-auto px-4 md:px-8 pb-10 mt-5">
  <div className="bg-[#2A0B1F] rounded-xl p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">

    <address className="flex-1 not-italic">
      <h4 className="text-white font-semibold text-[18px] mb-4">Registered Offices</h4>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
        <div>
          <p className="text-[#B91C6B] text-sm font-medium mb-1">United Kingdom</p>
          <p className="text-gray-400 text-sm">07451196 (Registered by Company House)</p>
          <p className="text-gray-400 text-sm">
            Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
          </p>
        </div>
        <div className="hidden lg:block border-l border-[#C4C4C4]/20 " />
        <div >
          <p className="text-[#B91C6B] text-sm font-medium mb-1">Nigeria</p>
          <p className="text-gray-400 text-sm">
            RC 1048722 (Registered by the Corporate Affairs Commission)
          </p>
          <p className="text-gray-400 text-sm">4, Muaz Close, Angwar-Rimi</p>
        </div>
        <div className="hidden lg:block border-r border-[#C4C4C4]/20 " />
      </div>
    </address>

    <address className="min-w-[220px] not-italic">
      <h4 className="text-white font-semibold text-[18px] mb-4">Contact Information</h4>
      <div className="flex flex-col gap-3">
        <Link
          href="mailto:theteam@tobamsgroup.com"
          className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
        >
          <span className="w-7 h-7 rounded-full bg-[#B91C6B]/20 flex items-center justify-center shrink-0">
            <Image src="/mail.svg" width={14} height={14} alt="" aria-hidden="true" />
          </span>
          theteam@tobamsgroup.com
        </Link>
        <Link
          href="tel:+447886600748"
          className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
        >
          <span className="w-7 h-7 rounded-full bg-[#B91C6B]/20 flex items-center justify-center shrink-0">
            <Image src="/phone.svg" width={14} height={14} alt="" aria-hidden="true" />
          </span>
          +447886600748
        </Link>
      </div>
    </address>

  </div>
</section>

      <section className="border-t border-[#C4C4C4]/20 py-5 px-6 md:px-16 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        Copyright © Tobams Group, 2024. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Link href="#" className="text-gray-500 text-sm hover:text-white underline">
          Terms and Conditions
        </Link>
        <Link href="#" className="text-gray-500 text-sm hover:text-white underline">
          Privacy Policy
        </Link>
        <Link href="#" className="text-gray-500 text-sm hover:text-white underline">
          Cookies Policy
        </Link>
      </div>
    </section>
    </footer>
  )
}

export default Footer
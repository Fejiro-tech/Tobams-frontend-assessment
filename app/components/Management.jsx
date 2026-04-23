import Image from "next/image";
import React from "react";

const Management = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-10 md:py-14 lg:py-16 px-4 md:px-10 lg:px-16">

      <div className="bg-[#2C0922] max-w-[1312px] mx-auto rounded-[20px] py-4 px-5 md:p-8 lg:p-10">

        <div className="max-w-[1232px] mx-auto flex flex-col md:flex-row items-stretch gap-10 lg:gap-16">
          
          <figure className="w-full md:w-1/2">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-full md:min-h-[420px] lg:min-h-[592px]  overflow-hidden">
              <Image
                src="/image5.jpg"
                fill
                alt="Management Development Program training session"
                className="object-cover rounded-tl rounded-tr-lg rounded-bl-lg"
              />
            </div>
          </figure>

          <article className="w-full md:w-1/2 flex flex-col text-white gap-5 md:gap-6 lg:gap-[30px]">

            <header>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight">
                Management Development Program
              </h2>
            </header>

            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Tobams Group offers a comprehensive Management Development Program designed
              to equip corporate organisations with high-performing leaders they need to thrive.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Our program includes workshops, seminars, coaching sessions, online courses,
              and experiential learning opportunities designed to improve leadership,
              strategic thinking, communication, and other essential managerial competencies.
            </p>

            <ul className="flex flex-col gap-3 px-2 md:px-4 py-2">
              {[
                "Enhanced Leadership Skills",
                "Improved Employee Engagement",
                "Stronger Organisational Culture",
                "Sustainable Growth",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-[#8F6182] rounded-lg px-2 py-1  text-sm md:text-base text-white w-full"
                >
                  <Image
                    src="/whiteVector.svg"
                    width={14}
                    height={14}
                    alt=""
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </article>

        </div>
      </div>

    </section>
  );
};

export default Management;
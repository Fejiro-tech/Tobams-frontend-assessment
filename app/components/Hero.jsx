import Image from "next/image";

const Hero = ({ mobileText, desktopText, desktopHeading, mobileHeading }) => {
  return (
    <section className="w-full min-h-[400px] md:h-[511px] relative flex items-center justify-center bg-">

      <Image
        src="/background.jpg"
        alt="background-image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#000000B2]" />

  
      <div className="relative z-10 w-full max-w-6xl  py-10 md:py-16 px-6 md:px-28 text-center text-white">

        <button className="bg-white/10 px-6 md:px-12 py-2 md:py-3 text-xs md:text-sm rounded-full">
          WHAT WE DO
        </button>

        <h1 className="text-[24px] md:text-[40px] lg:text-[56px] font-bold mt-6 leading-tight md:hidden">
          {mobileHeading}
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold mt-6 leading-tight hidden md:block">
          {desktopHeading}
        </h1>

        <p className="mt-4 text-sm md:text-base opacity-90 max-w-2xl mx-auto md:hidden font-semibold">
         {mobileText}
        </p>
        <p className="mt-4 text-sm md:text-base opacity-90 max-w-2xl mx-auto hidden md:block font-semibold">
         {desktopText}
        </p>

        <button className="mt-6 bg-[#571244] px-6 py-3 rounded-md">
          Book a Consultation
        </button>

      </div>

    </section>
  );
};

export default Hero;
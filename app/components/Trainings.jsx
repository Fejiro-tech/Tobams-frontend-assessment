import Image from "next/image";

const TrainingSections = ({
  title,
  text,
  image,
  items = [],
  reverse = false,
  imageClass = ""
}) => {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#FFFFFF]">
      
      <div
        className={`max-w-[1312px] mx-auto flex flex-col md:flex-row items-center md:items-start 
        gap-10 md:gap-12 lg:gap-16
        ${reverse ? "md:flex-row-reverse" : ""}`}
      >

        <figure className="w-full md:basis-[48%]">
          <div className="relative w-full aspect-[16/10] sm:aspect-[602/346]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className={`object-cover ${imageClass}`}
            />
          </div>
        </figure>

        <article className="w-full md:basis-[52%] flex flex-col gap-4 sm:gap-5 md:gap-6">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#151515] leading-snug">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-prose">
            {text}
          </p>

          {items.length > 0 && (
            <ul className="space-y-2 sm:space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <img
                    src="/vector.svg"
                    alt="vector"
    
                    className="mt-1 shrink-0 w-4 h-4"
                  />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

        </article>

      </div>

    </section>
  );
};

export default TrainingSections;
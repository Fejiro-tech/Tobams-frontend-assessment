import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

const LearningManagement = () => {
  return (
    <section className="w-full bg-[#5712441A] py-10 px-4 md:py-12 md:px-16">
  <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row gap-10 ">

    <h2 className="lg:hidden text-[#571244] text-2xl text-center md:text-[40px] font-semibold w-full">
      Learning Management System
    </h2>

    <figure className="w-[380px] h-[380px] md:w-[500px] md:h-[500px] mx-auto lg:mx-0 relative shrink-0">
      <Image
        src="/image1.jpg"
        fill
        alt="Learning Management System visual"
        className="object-cover rounded-full"
      />
    </figure>

    <article className="w-full  flex flex-col gap-6 ">
      <h2 className="hidden md:block text-[#571244] text-[40px] font-semibold">
        Learning Management System
      </h2>

      <div className="bg-[#5712441A] rounded p-[24px] md:p-6 space-y-5 max-w-4xl ">
        <p className="text-sm md:text-[18px] leading-relaxed">
          TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
        </p>

        <div>
          <p className="font-bold mt-4">Some of our courses include:</p>
          <ul className="mt-3 list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

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
      </div>
    </article>

  </div>
</section>
  );
};

export default LearningManagement;
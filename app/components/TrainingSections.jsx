
import React from 'react'
import Trainings from "./Trainings";

const TrainingSections = () => {
  return (
    <section>
        
        <Trainings
          title="Corporate Training"
          text="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          image="/coporate.jpg"
          reverse={true}
          items={[
            "Leadership Training",
            "Strategic Plannning and implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training"
          ]}
          imageClass="rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl"
        />

        <Trainings
          title="Personalised Individual Training"
          text="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          image="/personalised.jpg"
          reverse={false}
          items={[
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development"
          ]}
          imageClass="rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
        />

        <Trainings
          title="Capacity Development"
          text="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
          image="/capacity.jpg"
          reverse={true}
          items={[
            "Tailored Training Programs",
            "Expert-Led Workshops",
            "Personalized Mentorship",
            "Technical Skills Enhancement",
            "Collaborative Learning Environment",
            "Ongoing Support and Resources"
          ]}
          imageClass="rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
        />
    </section>
  )
}

export default TrainingSections
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import LearningManagement from "./components/LearningManagement";
import TrainingSections from "./components/TrainingSections";
import Management from "./components/Management";
import Transformation from "./components/Transformation";
import TrainingConsultant from "./components/TrainingConsultant";
import Consultation from "./components/Consultation";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9]">
      <TopBar />

      <div className="flex flex-col gap-8">
        <Hero 
          mobileHeading="Learning and Development"
          desktopHeading="Training and Development"
          mobileText="Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape."
          desktopText="Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge and propel careers forward in today's ever-evolving landscape."
        />
        <LearningManagement />
        <TrainingSections/>
        <Management />
        <Transformation />
        <TrainingConsultant />
        <Consultation 
          mobileText="Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here."
          desktopText="Want to accelerate professional growth and development at your organisation? See how we can help."
        />
        
        <Testimonials/>
      </div>
      <Footer />
    </div>
  );
}
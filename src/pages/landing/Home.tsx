import Hero from "../../components/hero/Hero";
import About from "./about/About";
import Community from "./community/Community";
import Process from "./process/Process";
import Contact from "../../components/contact/Contact";
import Blogs from "./blogs/Blogs";
import Review from "./reviews/Review";

const Home = () => {
  return (
    <div className="bg-[#F7F3EE] min-h-screen">
      <Hero />
      <About />
      <Community />
      <Review />
      <Process />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;

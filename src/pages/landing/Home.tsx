import Hero from "../../components/hero/Hero";
import About from "./about/About";
import Community from "./community/Community";
// import Process from "./process/Process";
import Contact from "../../components/contact/Contact";
import Blogs from "./blogs/Blogs";
// import Review from "./reviews/Review";
import ImageAnimation from "./imageanimation/ImageAnimation";
import BuilderList from "../home/builderlist/BuilderList";
import TrendingProperty from "../home/trendingproperty/TrendingProperty";
import ServiceList from "../home/servicelist/ServiceList";
import AppPreview from "../../components/appreview/AppPreview";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <ImageAnimation />

      <Community />
      <About />
      <BuilderList />
      <TrendingProperty />
      <ServiceList />
     
      <Blogs />
      <Contact />
                  <AppPreview />

    </div>
  );
};

export default Home;

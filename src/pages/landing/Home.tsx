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
import Heroone from "../../components/newhero/Heroone";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import { useState } from "react";
import AboutPage from "./PageBackground";
import ColorTransitionPage from "./PageBackground";

const Home = () => {
  const [mode, setMode] = useState<"collapsed" | "search" | "ai">("collapsed");

  const location = useLocation();
  const hasHero = location.pathname === "/" || location.pathname === "/home";
  return (
    <div className=" min-h-screen">
      <Navbar mode={mode} setMode={setMode} hasHero={hasHero} />

      <Heroone />
      <ImageAnimation />

      <Community />
      {/* <ColorTransitionPage /> */}
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

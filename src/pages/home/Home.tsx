import OverLook from "./overlook/OverLook";
import ServiceList from "./servicelist/ServiceList";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import TrendingProperty from "./trendingproperty/TrendingProperty";
import Process from "./Process/Process";

const HomeA = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <OverLook />
      <Process />
      <TrendingProperty />
      <ServiceList />
      <Contact />
    </div>
  );
};

export default HomeA;
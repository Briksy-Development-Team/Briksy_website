// import OverLook from "./overlook/OverLook";
// import ServiceList from "./servicelist/ServiceList";
// import Contact from "../../components/contact/Contact";
// import TrendingProperty from "./trendingproperty/TrendingProperty";
import Process from "./Process/Process";
// import BuilderList from "./builderlist/BuilderList";
import DynamicCollageGSAP from "../../components/ai/Ai";
import Community from "./communityv2/Community";

const HomeA = () => {
  return (
    <div className=" min-h-screen">
      <DynamicCollageGSAP />
      <Community />
      <Process />
      {/* <OverLook />
      <BuilderList />
      <TrendingProperty />
      <ServiceList />

      <Contact /> */}

    </div>
  );
};

export default HomeA;
// import OverLook from "./overlook/OverLook";
// import ServiceList from "./servicelist/ServiceList";
// import Contact from "../../components/contact/Contact";
// import TrendingProperty from "./trendingproperty/TrendingProperty";
import Process from "./Process/Process";
// import BuilderList from "./builderlist/BuilderList";
import DynamicCollageGSAP from "../../components/ai/Ai";
import Community from "./communityv2/Community";
import BuilderList from "./builderlist/BuilderList";
import TrendingProperty from "./trendingproperty/TrendingProperty";
import ServiceList from "./servicelist/ServiceList";
import Blogs from "../landing/blogs/Blogs";
import AppPreview from "../../components/appreview/AppPreview";
import { Contact } from "lucide-react";

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
      <BuilderList />
      <TrendingProperty />
      <ServiceList />

      <Blogs />
      <Contact />

      <AppPreview />

    </div>
  );
};

export default HomeA;
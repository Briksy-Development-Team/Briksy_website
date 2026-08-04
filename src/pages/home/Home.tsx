import Process from "./Process/Process";
// import DynamicCollageGSAP from "../../components/ai/Ai";
import Community from "./communityv2/Community";
import BuilderList from "./builderlist/BuilderList";
import TrendingProperty from "./trendingproperty/TrendingProperty";
import ServiceList from "./servicelist/ServiceList";
import Blogs from "../landing/blogs/Blogs";
import AppPreview from "../../components/appreview/AppPreview";
import { Contact } from "lucide-react";
import NewNav from "../../components/newhero/newnav/NewNav";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Herotwo from "../../components/newhero/Herotwo";

const HomeA = () => {
  const [mode, setMode] = useState<"collapsed" | "search" | "ai">("collapsed");

  const location = useLocation();
  const hasHero = location.pathname === '/' || location.pathname === '/home';
  return (
    <div className=" min-h-screen">
      <NewNav mode={mode} setMode={setMode} hasHero={hasHero} />

      <Herotwo />
      <Community />
      <Process />

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
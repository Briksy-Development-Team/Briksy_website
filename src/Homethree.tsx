import Process from "./pages/landing/process/Process";
import DynamicCollageGSAP from "./components/ai/Ai";
import Community from "./pages/home/communityv2/Community";

import Blogs from "./pages/landing/blogs/Blogs";
import AppPreview from "./components/appreview/AppPreview";
import { Contact } from "lucide-react";
import Review from "./pages/landing/reviews/Review";
import About from "./pages/landing/about/About";

const HomeA = () => {
  return (
    <div className=" min-h-screen">
      <DynamicCollageGSAP />
      <Community />
      <About />
      <Process />
      <Review />
      <Blogs />
      <Contact />

      <AppPreview />
    </div>
  );
};

export default HomeA;

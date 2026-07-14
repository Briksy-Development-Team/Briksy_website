import Hero from "./hero/Hero";
import Footer from "../landing/footer/Footer";
import OverLook from "./overlook/OverLook";

const HomeA = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <OverLook />
      <Footer />
    </div>
  );
};

export default HomeA;
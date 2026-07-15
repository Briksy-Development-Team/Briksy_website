import Hero from "./hero/Hero";
import Footer from "../landing/footer/Footer";
import OverLook from "./overlook/OverLook";
import PropertyList from "./propertytlist/PropertyList";
import ServiceList from "./servicelist/ServiceList";
import Contact from "../../components/contact/Contact";

const HomeA = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <OverLook />
      <PropertyList />
      <ServiceList />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeA;
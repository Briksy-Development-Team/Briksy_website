import { useRef } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Nothing from "./Nothing";

const HomeA = () => {
  const heroRef = useRef(null);
  const heroSearchRef = useRef(null);

  const navSearchRef = useRef(null);
  const navTabsRef = useRef(null);

  return (
    <div className="bg-[#EEEADE] min-h-screen">
      <Navbar
        navSearchRef={navSearchRef}
        navTabsRef={navTabsRef}
      />

      <Hero
        heroRef={heroRef}
        heroSearchRef={heroSearchRef}
        navSearchRef={navSearchRef}
        navTabsRef={navTabsRef}
      />

      <Nothing />
    </div>
  );
};

export default HomeA;
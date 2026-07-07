import { useRef, useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import FloatingSearch from "./FloatingSearch";
import Nothing from "./TrendingProperties";
import Footer from "../landing/footer/Footer";

const HomeA = () => {
  const heroAnchorRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const navAnchorRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const expandedAnchorRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const tabsRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

  const [mode, setMode] = useState<"collapsed" | "search" | "ai">("collapsed");

  return (
    <div className=" min-h-screen">
      <Navbar
        navAnchorRef={navAnchorRef}
        expandedAnchorRef={expandedAnchorRef}
        tabsRef={tabsRef}
        mode={mode}
        setMode={setMode}
      />

      <Hero heroAnchorRef={heroAnchorRef} />

      <FloatingSearch
        heroAnchorRef={heroAnchorRef}
        navAnchorRef={navAnchorRef}
        expandedAnchorRef={expandedAnchorRef}
        tabsRef={tabsRef}
        mode={mode}
        setMode={setMode}
      />

      <Nothing />
      <Footer />
    </div>
  );
};

export default HomeA;
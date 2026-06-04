import { useRef, useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import FloatingSearch from "./FloatingSearch";
import Nothing from "./Nothing";




const HomeA = () => {
  const heroAnchorRef = useRef<HTMLDivElement>(null);
  const navAnchorRef = useRef<HTMLDivElement>(null);
  const expandedAnchorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<"collapsed" | "search" | "ai">("collapsed");

  return (
    <div className="bg-[#EEEADE] min-h-screen">
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
    </div>
  );
};

export default HomeA;

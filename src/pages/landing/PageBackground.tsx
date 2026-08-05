import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ImageAnimation from "./imageanimation/ImageAnimation";
import Community from "./community/Community";

gsap.registerPlugin(ScrollTrigger);

const OverlappingTransitionLayout = () => {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const communityRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: communityRef.current,
        start: "top bottom", // Starts when Community enters the bottom of the screen
        end: "bottom top",   // Ends when Community completely scrolls past
        scrub: true,         // Tied precisely to your scrollbar
      },
    });

    // Step 1: Fade first gradient layer to 50% opacity early in the scroll
    tl.to(layer1Ref.current, { opacity: 0.5, ease: "none" }, 0)

      // Step 2: Bring in the final layer to 100% as you scroll further into Community
      .to(layer2Ref.current, { opacity: 1, ease: "none" }, 0.4);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", overflowX: "hidden" }}>

      {/* --- FIXED BACKGROUND LAYERS --- */}

      {/* Base Start Color (#C2B4AA) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#C2B4AA",
          zIndex: -3,
        }}
      />

      {/* Mid Opacity Gradient Layer */}
      <div
        ref={layer1Ref}
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(244, 248, 238, 0.5))",
          zIndex: -2,
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* Final Opacity Gradient Layer (#f4f8ee look) */}
      <div
        ref={layer2Ref}
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(244, 248, 238, 0.6), #f4f8ee)",
          zIndex: -1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* --- CONTENT STRUCTURE --- */}

      {/* Section 1: Image Animation (Sticks or sits naturally in the background) */}
      <section style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <ImageAnimation />
      </section>

      {/* Section 2: Community (Set to 150vh, slides smoothly *over* Section 1) */}
      <section
        ref={communityRef}
        style={{
          position: "relative",
          zIndex: 2,             // Higher z-index makes it physically slide over ImageAnimation
          minHeight: "150vh",    // Set precisely to your desired height
          marginTop: "-100vh",   // Pulls it up so it overlaps smoothly as it comes into view
        }}
      >
        <Community />
      </section>

    </div>
  );
};

export default OverlappingTransitionLayout;
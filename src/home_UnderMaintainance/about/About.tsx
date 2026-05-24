import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FRAME_COUNT = 323;
const getFrameSrc = (i: number) => `/frames-webp/frame_${String(i).padStart(4, "0")}.webp`;

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = getFrameSrc(i + 1);
      return img;
    });

    const playhead = { frame: 0 };

    const setSize = () => {
      const w = window.innerWidth * 0.6;
      const h = w * (1036 / 1280);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const render = () => {
      const img = images[Math.floor(playhead.frame)];
      if (!img) return;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
    };

    images[0].onload = () => { setSize(); render(); };

    gsap.to(playhead, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      onUpdate: () => requestAnimationFrame(render),
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 3,
        pin: true,
        anticipatePin: 1,
      },
    });

    const handleResize = () => { setSize(); render(); ScrollTrigger.refresh(); };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F3EE]">
      <div className="flex w-full border-b border-[#E5E3D8] pt-28 pb-16">
        <div className="w-1/2 px-14">
          <p className="text-sm tracking-widest uppercase mb-4 text-[#88867A]">Platform Overview</p>
          <h2 className="text-[3rem] leading-tight text-[#1A1A1A]">
            Reshaping the way <br />you find and build <br />property in Australia.
          </h2>
        </div>
        <div className="w-1/2 px-24 flex flex-col gap-4 justify-center">
          <p className="text-[1.5rem] text-[#6B6B6B] leading-relaxed">
            Brisky brings together the best of property search, professional services,
            and verified trust into a single editorial digital experience.
          </p>
          <p className="text-[1.5rem] text-[#6B6B6B] leading-relaxed">
            Every listing goes through verification before going live.
          </p>
          <div className="mt-2 w-fit cursor-pointer">
            <p className="text-lg border-b border-black pb-1">Explore the platform →</p>
          </div>
        </div>
      </div>

      <div ref={pinSectionRef} className="w-full flex justify-center items-center py-10">
        <canvas ref={canvasRef} className="rounded-[24px] w-[50%] block" />
      </div>

      <div className="w-full min-h-screen bg-white">
        <div className="px-14 py-24">
          <h2 className="text-[3rem] mb-8">Verified infrastructure for modern property experiences.</h2>
          <p className="text-xl text-[#6B6B6B] max-w-[800px] leading-relaxed">
            Brisky combines AI-driven discovery, transparent verification systems,
            and premium digital experiences into a unified property platform designed for the Australian market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
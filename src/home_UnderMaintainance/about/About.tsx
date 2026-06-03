import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Magnifine from "../../assest/about/magnifine.svg";
import Bag from "../../assest/about/bag.svg";
import Dollar from "../../assest/about/dollar.svg";
import HouseV from "../../assest/videos/homeVideo.mp4"

gsap.registerPlugin(ScrollTrigger, useGSAP);
// animation in about us on sroll video play frame by frame
const FRAME_COUNT = 210;
const getFrameSrc = (i: number) =>
  `/frames-webp/frame_${String(i).padStart(4, "0")}.webp`;

const features = [
  {
    image: Magnifine,
    alt: "verified",
    title: "Verified to your needs",
    description:
      "Our ABN-anchored verification system lets you connect with only legitimate agents, agencies, and builders no guesswork, no fake listings.",
  },
  {
    image: Bag,
    alt: "connected",
    title: "Efficiently connected",
    description:
      "Our AI-guided interface cuts through the noise. Describe what you need a landscaper in Sydney, a 3-bed in Richmond and we do the rest.",
  },
  {
    image: Dollar,
    alt: "pricing",
    title: "Transparently priced",
    description:
      "Subscription plans from Bronze to Gold with guaranteed seat limits, billing managed through Stripe, and no hidden upgrade surprises.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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

        images[0].onload = () => {
          setSize();
          render();
        };

        gsap.to(playhead, {
          frame: FRAME_COUNT - 1,
          ease: "none",
          onUpdate: () => requestAnimationFrame(render),
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 3,
            pin: true,
            anticipatePin: 1,
          },
        });

        const handleResize = () => {
          setSize();
          render();
          ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full bg-[#fcfafa] space-y-24 py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row px-10 text-center space-y-8 lg:space-y-0 lg:text-start lg:px-0 w-full border-none lg:border-b  border-[#E5E3D8] ">
        <div className="lg:w-1/2 font-inter lg:px-10 xl:px-14">
          <p className="  text-[0.875rem]   lg:text-[0.6875rem]  tracking-widest uppercase mb-10 lg:mb-4 text-yellowgray-50">
            Platform Overview
          </p>
          <h2 className=" text-[2.25rem]  lg:text-[2.25rem] font-medium lg:font-normal leading-tight text-[#1A1A1A]">
            Reshaping the way <br className="hidden lg:block" />
            you find and build <br className="hidden lg:block" />
            property in Australia.
          </h2>
        </div>
        <div className="lg:w-2/3 xl:w-1/2 lg:px-10 xl:px-24 font-helvetica flex flex-col gap-4 justify-center">
          <p className="text-[1.125rem]  text-gray-100 leading-relaxed">
            Brisky brings together the best of property search, professional
            services, and verified trust into a single, editorial digital
            experience. Think Domain meets Airbnb — clean, structured, and built
            for the Australian market.
          </p>
          <p className="text-[1.125rem]  text-gray-100 leading-relaxed">
            Every agent, agency, and builder on Brisky is ABN-verified. Every
            listing goes through our multi-stage verification process before
            going live.{" "}
          </p>
          <div className="lg:mt-2 xl:w-[25%] lg:w-[35%]  cursor-pointer">
            <p className="text-[0.875rem] font-medium  lg:border-b lg:border-black pb-1">
              Explore the platform →
            </p>
          </div>
        </div>
      </div>
      <div
        ref={pinSectionRef}
        className=" relative w-full lg:min-h-screen space-y-7  flex flex-col  justify-center items-center "
      >
        <div className=" lg:absolute lg:left-[5%] px-10 lg:px-0 lg:top-[15%] z-10 lg:max-w-[28rem] ">
          <h2 className="text-[2.25rem] text-center lg:text-start font-medium lg:font-normal leading-12 ">
            How much could you grow if nothing was wasted?
          </h2>
        </div>

        <div className="  flex justify-center">
          <canvas ref={canvasRef} className=" w-full rounded-[1.5rem] hidden lg:block" />
          <video src={HouseV} loop autoPlay muted className="lg:hidden" ></video>
        </div>

        <div className=" lg:absolute lg:right-[5%] px-10 lg:px-0 lg:bottom-[5%] z-10 lg:max-w-[22rem] ">
          <h3 className="text-[2.25rem] hidden lg:block  leading-8 ">
            We found a better way
          </h3>
          <h3 className="text-[2.25rem] lg:hidden text-center lg;text-start font-medium lg:font-normal leading-10 ">
            We found a better way Meet CropTab™
          </h3>

          <p className="mt-6 text-[1.125rem] text-center lg:text-start lg:text-[1rem] leading-[1.8rem] text-gray-100 ">
            Meet CropTab™, Powered by precision-engineered carbon capsules, it
            marks the first major innovation in fertilizers in over 35 years.
          </p>
        </div>
      </div>

      <div className="w-full  text-2xl px-10  xl:px-20 font-helvetica lg:py-16 flex flex-col lg:flex-row md:items-center  space-y-8 lg:space-y-0  justify-between  ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex xl:w-1/4 md:w-[70%] p-3 lg:w-[90%] bg-white-50 border border-white-100 rounded-xl flex-col gap-5 lg:bg-transparent lg:border-none"
          >
            <div className="flex justify-center lg:justify-start">
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-1/3 object-contain"
              />
            </div>

            <div className="space-y-3 text-center lg:text-start w-[95%]">
              <h3 className="text-[1.125rem] font-medium text-[#1e1e1e]">
                {feature.title}
              </h3>

              <p className="text-[1.125rem]  lg:text-[1rem] text-gray-100">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

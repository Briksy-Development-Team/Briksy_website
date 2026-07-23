import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSearchBar from "../search/HeroSearchBar";

import Imageone from "../../assets/hero/imageone.svg";
import Imagetwo from "../../assets/hero/imagetwo.svg";
import Imagethree from "../../assets/hero/imagethree.svg";
import Imagefour from "../../assets/hero/imagefour.svg";
import imagefive from "../../assets/hero/imagefive.svg";

const IMAGES: string[] = [Imageone, Imagetwo, Imagethree, Imagefour, imagefive];

interface MediaAsset {
  id: number;
  src: string;
  className: string;
}

const assets: MediaAsset[] = [
  {
    id: 1,
    src: IMAGES[0],
    className:
      "top-[5%] left-[5%] w-[110px] h-[150px] lg:w-[12rem] lg:h-[16rem]",
  },
  {
    id: 2,
    src: IMAGES[1],
    className:
      "top-[15%] right-[8%] w-[130px] h-[100px] lg:w-[16rem] lg:h-[10rem]",
  },
  {
    id: 3,
    src: IMAGES[2],
    className:
      "bottom-[10%] left-[12%] w-[100px] h-[100px] lg:w-[14rem] lg:h-[14rem] ",
  },
  {
    id: 4,
    src: IMAGES[3],
    className:
      "bottom-[8%] right-[5%] w-[130px] h-[100px] lg:w-[18rem] lg:h-[12rem]",
  },
  {
    id: 5,
    src: IMAGES[4],
    className:
      "top-[42%] left-[2%] w-[90px] h-[90px] lg:w-[10rem] lg:h-[10rem]",
  },
  {
    id: 6,
    src: IMAGES[0],
    className:
      "top-[38%] right-[2%] w-[100px] h-[120px] lg:w-[12rem] lg:h-[16rem]",
  },
  {
    id: 7,
    src: IMAGES[1],
    className:
      "top-[2%] left-[38%] w-[110px] h-[85px] lg:w-[14rem] lg:h-[8rem]",
  },
  {
    id: 8,
    src: IMAGES[2],
    className:
      "bottom-[2%] right-[38%] w-[90px] h-[90px] lg:w-[10rem] lg:h-[10rem] ",
  },
  {
    id: 9,
    src: IMAGES[3],
    className:
      "bottom-[15%] left-[35%] w-[130px] h-[100px] lg:w-[16rem] lg:h-[10rem]",
  },
];

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      const items = gsap.utils.toArray<HTMLElement>(".collage-item");

      if (items.length === 0) return;

      gsap.set(items, {
        z: -3000,
        opacity: 0,
        rotationX: () => gsap.utils.random(-15, 15),
        rotationY: () => gsap.utils.random(-15, 15),
      });

      items.forEach((item, index) => {
        const itemTl = gsap.timeline();

        itemTl
          .to(item, {
            z: -400,
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
          })
          .to(item, {
            z: 0,
            duration: 1.2,
            ease: "none",
          })
          .to(item, {
            z: 1500,
            opacity: 0,
            filter: "blur(30px)",
            duration: 0.6,
            ease: "power2.in",
          });

        tl.add(itemTl, index * 0.35);
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen w-full mx-auto mt-0 lg:mt-10 overflow-hidden font-helvetica"
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {assets.map((asset) => (
          <div
            key={asset.id}
            className={`collage-item hidden md:block absolute ${asset.className} overflow-hidden bg-neutral-900 `}
            style={{ willChange: "transform, opacity, filter" }}
          >
            <img
              src={asset.src}
              alt="Showreel"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        ))}
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center lg:px-6 pt-28 pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-white/60 px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-5 lg:px-6">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black"
            />
            <img
              src="https://i.pravatar.cc/40?img=4"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black"
            />
          </div>

          <p className="leading-tight">
            <span className="font-semibold text-[0.8rem] lg:text-[1.2rem] text-[#342511]">
              340+
            </span>{" "}
            <span className="italic font-medium lg:text-[1rem] text-[0.685rem] text-black">
              verified builders and professionals
            </span>
          </p>
        </div>

        <h1 className="max-w-4xl text-center text-[3rem] sm:text-[3.75rem] lg:text-[3.625rem] font-normal leading-tight text-black">
          Find your place for
          <br />
          you and yours
        </h1>

        <p className="mt-5 max-w-xl text-center text-[1rem] leading-7 text-black">
          Search properties, connect with verified professionals, and manage
          your entire property journey all in one place.
        </p>

        <div className="mt-8 px-2 w-full max-w-4xl">
          <HeroSearchBar mode={mode} setMode={setMode} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

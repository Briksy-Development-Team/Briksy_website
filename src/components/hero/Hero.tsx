import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSearchBar from "../search/HeroSearchBar";
import Imageone from "../../assets/hero/imageone.svg"
import Imagetwo from "../../assets/hero/imagetwo.svg"
import Imagethree from "../../assets/hero/imagethree.svg"
import Imagefour from "../../assets/hero/imagefour.svg"


interface CollageImage {
  src: string;
  className: string;
}

const COLLAGE_IMAGES: CollageImage[] = [
  {
    src: Imageone,
    className: "left-[15%] top-[10%] w-[110px] h-[85px] lg:w-[7.125rem] lg:h-[5.4375rem]",
  },
  {
    src: Imagetwo,
    className: "-left-[3%] top-[52%] w-[130px] h-[100px] lg:w-[10.2689rem] lg:h-[7.8438rem]",
  },
  {
    src: Imagethree,
    className: "right-[10%] top-[28%] w-[130px] h-[100px] lg:w-[10.2689rem] lg:h-[7.8438rem]",
  },
  {
    src: Imagefour,
    className: "-right-[2%] top-[58%] w-[100px] h-[80px] lg:w-[7.125rem] lg:h-[5.4375rem]",
  },
];

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      const els = imageRefs.current.filter(Boolean);

      gsap.fromTo(
        els,
        {
          y: 40,
          opacity: 0,
          scale: 0.94,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "expo.out",
          stagger: {
            each: 0.15,
            from: "start",
          },
          delay: 0.5,
        }
      );
    },
    { scope: sectionRef } // auto cleanup + scoped selectors within this ref
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full mx-auto mt-0 lg:mt-10 overflow-hidden font-helvetica"
    >
      {COLLAGE_IMAGES.map((img, i) => (
        <img
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          src={img.src}
          alt=""
          className={`hidden md:block absolute rounded-sm object-cover shadow-lg will-change-transform ${img.className}`}
        />
      ))}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center lg:px-6 pt-28 pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-[#F1F1EF] px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-5 lg:px-6">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt=""
              className="lg:h-6 lg:w-6  w-4 h-4 rounded-full border-2 border-black "
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4  rounded-full border-2 border-black "
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black "
            />
            <img
              src="https://i.pravatar.cc/40?img=4"
              alt=""
              className="lg:h-6 lg:w-6 w-4 h-4 rounded-full border-2 border-black "
            />
          </div>

          <p className="leading-tight  ">
            <span className="font-semibold text-[0.8rem]  lg:text-[1.2rem] text-[#342511]">
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
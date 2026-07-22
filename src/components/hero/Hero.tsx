import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroSearchBar from "../search/HeroSearchBar";
import Imageone from "../../assets/hero/imageone.svg"
import Imagetwo from "../../assets/hero/imagetwo.svg"
import Imagethree from "../../assets/hero/imagethree.svg"
import Imagefour from "../../assets/hero/imagefour.svg"

gsap.registerPlugin(ScrollTrigger);

interface CollageImage {
  src: string;
  className: string;
  scrollDepth: number;
  mouseDepth: number;
}

const COLLAGE_IMAGES: CollageImage[] = [
  {
    src: Imageone,
    className: "left-[15%] top-[10%] w-[110px] h-[85px] lg:w-[9.9375rem] lg:h-[7.5839rem]",
    scrollDepth: -0.4,
    mouseDepth: 0.6,
  },
  {
    src: Imagetwo,
    className: "-left-[3%] top-[52%] w-[130px] h-[100px] lg:w-[12.2735rem] lg:h-[9.375rem]",
    scrollDepth: 0.6,
    mouseDepth: 1,
  },
  {
    src: Imagethree,
    className: "right-[10%] top-[28%] w-[130px] h-[100px] lg:w-[11.2064rem] lg:h-[8.5599rem]",
    scrollDepth: -0.6,
    mouseDepth: 0.8,
  },
  {
    src: Imagefour,
    className: "-right-[2%] top-[58%] w-[100px] h-[80px] lg:w-[9.0905rem] lg:h-[6.9375rem]",
    scrollDepth: 0.4,
    mouseDepth: 1.2,
  },
];

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const quickToRefs = useRef
  { x: gsap.QuickToFunc; y: gsap.QuickToFunc } []
    > ([]);

  useGSAP(
    () => {
      const wrapperEls = wrapperRefs.current.filter(Boolean) as HTMLDivElement[];
      const imageEls = imageRefs.current.filter(Boolean) as HTMLImageElement[];

      gsap.fromTo(
        wrapperEls,
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
          stagger: { each: 0.15, from: "start" },
          delay: 0.5,
        }
      );

      wrapperEls.forEach((wrapperEl, i) => {
        gsap.to(wrapperEl, {
          y: () => COLLAGE_IMAGES[i].scrollDepth * 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      quickToRefs.current = imageEls.map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
      }));

      const handleMouseMove = (e: MouseEvent) => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        COLLAGE_IMAGES.forEach((img, i) => {
          const tween = quickToRefs.current[i];
          if (!tween) return;
          tween.x(relX * 20 * img.mouseDepth);
          tween.y(relY * 20 * img.mouseDepth);
        });
      };

      const section = sectionRef.current;
      section?.addEventListener("mousemove", handleMouseMove);

      return () => {
        section?.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full mx-auto mt-0 lg:mt-10 overflow-hidden font-helvetica"
    >
      {COLLAGE_IMAGES.map((img, i) => (
        <div
          key={i}
          ref={(el) => {
            wrapperRefs.current[i] = el;
          }}
          className={`hidden md:block absolute will-change-transform ${img.className}`}
        >
          <img
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            src={img.src}
            alt=""
            className="w-full h-full rounded-sm object-cover shadow-lg will-change-transform"
          />
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center lg:px-6 pt-28 pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-white/60 px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-5 lg:px-6">
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
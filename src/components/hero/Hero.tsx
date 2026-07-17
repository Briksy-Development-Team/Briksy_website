import { useOutletContext } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroSearchBar from "../search/HeroSearchBar";

type CollageImage = {
  src: string;
  width: number;
  height: number;
  left: number;
  top: number;
};

const LEFT_IMAGES: CollageImage[] = [
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
    width: 180,
    height: 140,
    left: -20,
    top: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400",
    width: 140,
    height: 110,
    left: 170,
    top: 30,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
    width: 110,
    height: 90,
    left: 320,
    top: 50,
  },
  {
    src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400",
    width: 180,
    height: 120,
    left: -70,
    top: 155,
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
    width: 140,
    height: 100,
    left: 120,
    top: 155,
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
    width: 110,
    height: 85,
    left: 270,
    top: 155,
  },
];
const COLLAGE_WIDTH = 450;

const RIGHT_IMAGES: CollageImage[] = LEFT_IMAGES.map((img) => ({
  ...img,
  left: COLLAGE_WIDTH - img.left - img.width,
}));

let hasPlayedHeroIntro = false;

const SideCollage = ({
  images,
  innerRef,
}: {
  images: CollageImage[];
  innerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div ref={innerRef} className="relative w-[430px] h-[280px]">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className="side-collage-img absolute rounded-sm object-cover shadow-lg"
          style={{
            width: img.width,
            height: img.height,
            left: img.left,
            top: img.top,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  const leftCollageRef = useRef<HTMLDivElement>(null);
  const rightCollageRef = useRef<HTMLDivElement>(null);
  const hasRunLocally = useRef(false);

  useEffect(() => {
    if (hasRunLocally.current) return;
    hasRunLocally.current = true;

    const leftImgs =
      leftCollageRef.current?.querySelectorAll(".side-collage-img");
    const rightImgs =
      rightCollageRef.current?.querySelectorAll(".side-collage-img");

    if (hasPlayedHeroIntro) {
      gsap.set([...(leftImgs ?? []), ...(rightImgs ?? [])], {
        x: 0,
        opacity: 1,
      });
      return;
    }

    hasPlayedHeroIntro = true;

    const offScreenX = window.innerWidth;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(
      leftImgs ?? [],
      { x: -offScreenX, opacity: 0, duration: 2, stagger: 0.08 },
      0,
    ).from(
      rightImgs ?? [],
      { x: offScreenX, opacity: 0, duration: 2, stagger: 0.08 },
      0,
    );
  }, []);

  return (
    <section className="relative min-h-screen w-full mx-auto mt-0 lg:mt-10 overflow-hidden font-helvetica">
      <div className="absolute left-0 top-[35%] -translate-y-1/2 hidden lg:block">
        <SideCollage innerRef={leftCollageRef} images={LEFT_IMAGES} />
      </div>

      <div className="absolute right-0 top-[35%] -translate-y-1/2 hidden lg:block">
        <SideCollage innerRef={rightCollageRef} images={RIGHT_IMAGES} />
      </div>

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
import { useOutletContext } from "react-router-dom";
import HeroSearchBar from "../search/HeroSearchBar";

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  return (
    <section className="relative min-h-screen w-[95%]  mx-auto overflow-hidden font-helvetica">


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
            <span className="font-semibold text-[0.8rem]  lg:text-[1.2rem] text-orange-300">340+</span>{" "}
            <span className="italic font-medium lg:text-[1rem] text-[0.685rem] text-black">verified builders and professionals</span>
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

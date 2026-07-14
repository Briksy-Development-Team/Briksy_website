import HeroB from "../../../assets/hero/herobg.svg";
import { useOutletContext } from "react-router-dom";
import HeroSearchBar from "../../../components/search-nav/HeroSearchBar";

const Hero = () => {
  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-helvetica">
      <img
        src={HeroB}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center lg:px-6 pt-28 pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-black/60 px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-5 lg:px-6">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt=""
              className="h-6 w-6 rounded-full border-2 border-white sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt=""
              className="h-6 w-6 rounded-full border-2 border-white sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt=""
              className="h-6 w-6 rounded-full border-2 border-white sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
            <img
              src="https://i.pravatar.cc/40?img=4"
              alt=""
              className="h-6 w-6 rounded-full border-2 border-white sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
          </div>

          <p className="text-[11px] leading-tight text-white sm:text-sm md:text-base">
            <span className="font-semibold">340+</span>{" "}
            <span className="italic">verified builders and professionals</span>
          </p>
        </div>

        <h1 className="max-w-4xl text-center text-[3rem] sm:text-[3.75rem] lg:text-[3.625rem] font-normal leading-tight text-white">
          Find your place for
          <br />
          you and yours
        </h1>

        <p className="mt-5 max-w-xl text-center text-[1rem] leading-7 text-white/90">
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

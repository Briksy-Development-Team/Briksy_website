import Searchnew from "./newnav/Searchnew";
import heroImage from "../../assets/hero/herobg.png"
import { useOutletContext } from "react-router-dom";
import { useRef } from "react";





const Herotwo = () => {

  const { mode, setMode } = useOutletContext<{
    mode: "collapsed" | "search" | "ai";
    setMode: (m: "collapsed" | "search" | "ai") => void;
  }>();

  const sectionRef = useRef<HTMLElement | null>(null);
  return (
    <section ref={sectionRef}
      className="w-full h-screen  ">
      <div className=" flex w-full justify-between  items-center h-full ">

        {/* Left */}
        <div className="w-full flex flex-col  justify-center items-center  lg:w-[60%]">
          <div className="">
            <h1 className="text-[3.625rem] leading-[1.02] font-medium tracking-[-1.8px] text-[#222]">
              Find your place for
              <br />
              you and yours
            </h1>

            <p className="mt-6  text-[1rem]  text-[#666]">
              Search properties, connect with verified professionals, <br />
              and manage your entire property journey all in one place.
            </p>

            <div className="mt-8  w-3xl ">
              <Searchnew mode={mode} setMode={setMode} />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative   w-[40%]">
          <img
            src={heroImage}
            alt=""
            className="w-full  object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Herotwo;
import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroSearchBar from "../search/HeroSearchBar";
import House from "../../assets/hero/house.svg";

gsap.registerPlugin(ScrollTrigger);

const Heroone = () => {
    const { mode, setMode } = useOutletContext<{
        mode: "collapsed" | "search" | "ai";
        setMode: (m: "collapsed" | "search" | "ai") => void;
    }>();

    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(() => { }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative h-screen font-helvetica overflow-hidden bg-[#e2cbb3]"
        >
            <div className="relative z-20 flex flex-col items-center pt-20">
                <h1 className="max-w-4xl text-center text-[3rem] sm:text-[4rem] lg:text-[3.625rem] font-medium leading-[1.05] text-primary-brown">
                    Find your place for
                    <br />
                    you and yours
                </h1>

                <p className="mt-6 max-w-2xl text-center font-medium  text-[1rem]  text-primary-brown">
                    Search properties, connect with verified professionals, and manage
                    your entire property journey all in one place.
                </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-center z-10">
                <img
                    src={House}
                    alt="House"
                    className="w-[50%] max-w-none pointer-events-none select-none"
                />
            </div>

            <div className="absolute left-1/2 bottom-8 z-30 w-full max-w-6xl -translate-x-1/2 px-6">
                <HeroSearchBar mode={mode} setMode={setMode} />
            </div>
        </section>
    );
};

export default Heroone;
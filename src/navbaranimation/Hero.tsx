import SearchBar from "./SearchBar";
import heroBg from "../assest/hero/herobg.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({
    heroRef,
    heroSearchRef,
    navSearchRef,
    navTabsRef,
}) => {
    useGSAP(() => {
        gsap.set(navSearchRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 15,
            transformOrigin: "center center",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=300",
                scrub: 1,
            },
        });

        tl.to(
            heroSearchRef.current,
            {
                x: -80,
                y: -100,
                scale: 0.85,
                opacity: 0,
                ease: "none",
            },
            0
        );

        tl.to(
            navSearchRef.current,
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "none",
            },
            0
        );

        tl.to(
            navTabsRef.current,
            {
                x: 50,
                ease: "none",
            },
            0
        );
    });

    return (
        <section
            ref={heroRef}
            className="pt-20 p-8"
        >
            <div className="relative h-[90vh] rounded-[30px] overflow-hidden">
                <img
                    src={heroBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <p className="text-white mb-6">
                        BUILD SMARTER. INVEST BETTER.
                    </p>

                    <h1 className="text-white text-6xl max-w-4xl text-center leading-tight">
                        From trusted builders to premium living spaces,
                        discover properties designed for your future
                        with BRIKSY.
                    </h1>

                    <p className="text-white mt-8">
                        4,200+ property seekers trust BRIKSY
                    </p>

                    <div className="mt-12 w-full  ">
                        <div ref={heroSearchRef} className="w-full flex justify-center " >
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
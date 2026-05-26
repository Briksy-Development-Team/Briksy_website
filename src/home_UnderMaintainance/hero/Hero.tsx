import React from 'react'
import HeroBG from "../../assest/hero/herobg.svg"
import Human from "../../assest/hero/human.svg"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen h-[120vh] overflow-hidden">

            {/* Background */}
            <img src={HeroBG} alt="hero" className="absolute inset-0 w-full h-full object-cover" />


            <div className="relative z-10 min-h-screen flex items-center justify-between px-14 pt-20">

                {/* Left Content */}
                <div className=" mx-8">

                    <div className="flex flex-col">
                        <h1 className="text-white font-inter font-medium text-9xl leading-[0.9] tracking-[-3px]">
                            A home for
                        </h1>
                        <h2 className="text-white font-instrument italic text-9xl font-medium  mt-4 leading-[0.9] tracking-[-3px] ">
                            you and yours.
                        </h2>
                    </div>

                    <p className="mt-6 max-w-[690px] text-2xl  text-white/90 font-helvetica font-normal">
                        Connect with verified agents, agencies, and builders to find
                        property, hire trades, and invest with confidence across Australia.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-5 mt-10">
                        <button className="h-[64px] px-8 rounded-xl bg-[#2C3F24] text-white text-[17px] font-medium cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                            Start Searching
                        </button>
                        <button className="h-[64px] px-8 rounded-xl bg-[#E7E3D8] text-black text-[17px] font-medium cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                            See How it works →
                        </button>
                    </div>

                </div>

                {/* Right Illustration */}


            </div>
            {/* Right Illustration */}
            <div className="absolute bottom-0 right-[5%] z-20">
                <img
                    src={Human}
                    alt="human"
                    className=" w-[40rem] object-contain drop-shadow-2xl
        "
                />
            </div>
        </section>
    )
}

export default Hero
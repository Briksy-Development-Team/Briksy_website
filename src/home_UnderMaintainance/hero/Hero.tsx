// import React from 'react'
import HeroBG from "../../assest/hero/herobg.svg"
import Human from "../../assest/hero/human.svg"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen h-[120vh] lg:h-screen  overflow-hidden">

            <img src={HeroBG} alt="hero" className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute top-0 right-0 h-screen w-screen bg-black/40" />

            <div className="relative z-10 lg:min-h-screen  flex items-center lg:pt-0 pt-48 justify-between lg:px-14 ">

                <div className=" mx-4 lg:mx-8">

                    <div className="flex flex-col">
                        <h1 className="text-white font-inter font-medium lg:text-[6rem] text-[4.15rem]  leading-[0.7] lg:tracking-[-3px]">
                            A home for
                        </h1>
                        <h2 className="text-white font-instrument italic lg:text-[6rem] text-[4.15rem] font-medium  mt-4 leading-[0.9] lg:tracking-[-3px] ">
                            you and yours.
                        </h2>
                    </div>

                    <p className="mt-6  md:w-[50%] w-[90%] text-[1rem] lg:text-[1.125rem]  text-white/90 font-helvetica font-normal">
                        Connect with verified agents, agencies, and builders to find
                        property, hire trades, and invest with confidence across Australia.
                    </p>

                    <div className="flex items-center gap-5 mt-5 lg:mt-10">
                        <button className="lg:py-4 lg:px-8 py-3 px-4 rounded-xl bg-primary text-white text-[0.875rem] font-medium cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                            Start Searching
                        </button>
                        <button className="lg:py-4 lg:px-8 py-3 px-4 rounded-xl bg-gray-50 text-black text-[0.875rem] font-medium cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                            See How it works →
                        </button>
                    </div>

                </div>



            </div>
            <div className="absolute bottom-0 right-[5%] z-20">
                <img
                    src={Human}
                    alt="human"
                    className="  w-[24rem] lg:w-[33rem] object-contain drop-shadow-2xl
        "
                />
            </div>
        </section>
    )
}

export default Hero
import React from 'react'
import HomeVideo from "../../assest/videos/homeVideo.mp4"

const About = () => {
  return (
    <div className='min-h-screen w-full'>

      <div className='flex w-full bg-white border-b-[1px] border-[#E5E3D8] pt-28 pb-16 '>

        <div className='w-1/2  px-14'>
          <p className='text-sm font-medium tracking-widest text-[#88867A] uppercase mb-4'>
            Platform Overview
          </p>
          <h2 className='text-[3rem] font-helvetica font-normal tracking-tight text-gray-900 leading-tight'>
            Reshaping the way <br />
            you find and build <br />
            property in Australia.
          </h2>
        </div>

        <div className='w-1/2 px-24 font-helvetica font-normal  flex flex-col justify-center gap-4'>
          <p className='text-[1.5rem] text-[#6B6B6B]  leading-relaxed'>
            Brisky brings together the best of property search, professional services,
            and verified trust into a single, editorial digital experience. Think Domain
            meets Airbnb — clean, structured, and built for the Australian market.
          </p>
          <p className='text-[1.5rem] text-[#6B6B6B] leading-relaxed'>
            Every agent, agency, and builder on Brisky is ABN-verified. Every listing goes
            through our multi-stage verification process before going live.
          </p>
          <div className="mt-2 w-fit">
            <p className="text-lg font-medium pb-0 border-b border-gray-800 pr-16">
              Explore the platform →
            </p>
          </div>
        </div>

      </div>

      <div className='w-full  bg-white flex items-center justify-center'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-[70%] h-full object-cover'
        >
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </div>
      <div className='w-full min-h-[400px] bg-gray-400 flex items-center justify-center'>
      </div>

    </div>
  )
}

export default About
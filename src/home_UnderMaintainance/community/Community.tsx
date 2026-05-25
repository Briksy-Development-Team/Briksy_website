import React from 'react'
import CommunityBg from "../../assest/community/bg.svg"

const Community = () => {
    return (
        <div className='h-screen w-screen relative flex items-center justify-between pl-32 pr-10'>
            <img src={CommunityBg} alt="" className='absolute h-full w-full -z-10  inset-0' />
            <div className='h-[60%] w-[45%] font-helvetica  text-[#EEECE0] backdrop-blur-xl   px-8 flex flex-col  py-8'>
                <p className='text-base pb-8'>OUR COMMITMENT</p>
                <span className='flex flex-col justify-between h-full'>
                    <p className='text-4xl w-[60%] tracking-wider leading-snug '>Quality craft combined
                        with a modern process
                        delivers listings without
                        compromise.</p>
                    <p className='text-xl'>Every property on Brisky has passed automated
                        validation, manual document review, and geo-location
                        verification before it ever appears in search results.</p>
                    <div className=" w-[35%] cursor-pointer">
                        <p className="text-lg border-b border-white ">Explore the platform →</p>
                    </div>
                </span>

            </div>
            <div className='h-[70%] w-[45%] text-white tracking-widest font-helvetica flex flex-col justify-end gap-y-6 items-end text-end'>
               <div className='space-y-2'>
                <p className='text-8xl '>340+</p>
                <p className='text-xl'>Verified builders on platform</p>
               </div>
               <div className='space-y-2'>
                <p className='text-8xl'>98%</p>
                <p className='text-xl'>Verification approval rate for compliant agencies</p>
               </div>
            </div>
        </div>
    )
}

export default Community

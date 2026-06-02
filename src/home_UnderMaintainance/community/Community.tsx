// import React from 'react'
import CommunityBg from "../../assest/community/bg.svg"

const Community = () => {
    return (
        <div className='lg:h-screen w-screen relative space-y-36 flex flex-col lg:flex-row lg:items-center 
        justify-between py-8 lg:pl-32 px-8 lg:pr-10'>
            <img src={CommunityBg} alt="" className='absolute h-full w-full -z-10 object-cover  inset-0' />
            <div className='h-[60%]  lg:w-[45%] font-helvetica  text-[#EEECE0] backdrop-blur-none
             lg:backdrop-blur-2xl   lg:px-8 flex flex-col  py-8'>
                <p className='text-[0.6875rem]  lg:block hidden pb-8'>OUR COMMITMENT</p>
                <span className='flex flex-col justify-between h-full'>
                    <p className='text-[2.25rem] lg:w-[60%] hidden lg:block tracking-wider leading-snug '>Quality craft combined
                        with a modern process
                        delivers listings without
                        compromise.</p>
                    <p className='text-[2.25rem] lg:hidden font-medium tracking-tight leading-9 '>
                        Quality and customer care is a serious game changer.</p>
                    <p className='text-[1.125rem]'>Every property on Brisky has passed automated
                        validation, manual document review, and geo-location
                        verification before it ever appears in search results.</p>
                    <div className=" w-[35%] cursor-pointer">
                        <p className="text-[0.875rem] border-b hidden lg:block border-white ">Explore the platform →</p>
                    </div>
                </span>
            </div>
            <div className='h-[70%] lg:w-[45%] text-white tracking-widest font-helvetica flex flex-col justify-end gap-y-6 items-end text-end'>
                <div className='space-y-0'>
                    <p className=' text-[4.0576rem] lg:text-[5.125rem] leading-16 '>340+</p>
                    <p className=' text-[0.8907rem] tracking-tight lg:text-[1.125rem]'>Verified builders on platform</p>
                </div>
                <div className='space-y-2'>
                    <p className=' text-[4.0576rem] lg:text-[5.125rem] leading-16'>98%</p>
                    <p className='text-[0.8907rem] tracking-tight lg:text-[1.125rem]'>Verification approval rate for compliant agencies</p>
                </div>
            </div>
        </div>
    )
}

export default Community

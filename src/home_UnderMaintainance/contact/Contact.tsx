import React from 'react'

const Contact = () => {
    return (
        <div className="w-full bg-[#24391F]  px-[5%] py-[8rem]">

            <div className="flex flex-col lg:flex-row justify-between items-center ">

                <div className="lg:w-[40%]">
                    <h2 className="text-white text-[3rem] leading-tight font-normal">
                        Schedule a free
                        <br />
                        consultation to
                        <br />
                        discuss your project.
                    </h2>
                </div>

                <div className="lg:w-[42%] flex flex-col justify-center">
                    <p className="text-white/75 text-[1.5rem] ">
                        Whether you're a property seeker, agency owner, or verified
                        builder Brisky has a plan built for your workflow. Start with a
                        free walkthrough of the platform.
                    </p>

                    <div className="flex items-center gap-[1.25rem] mt-[2.5rem]">

                        <button className="px-5 py-3 bg-white text-[#2C3F24] rounded-lg text-[1.25rem] font-medium">
                            List your business
                        </button>

                        <button className="px-5 py-3 border border-white text-white rounded-lg text-[1.25rem] font-medium">
                            Book a Call
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact

// import React from 'react'

const Contact = () => {
    return (
        <div className="w-full bg-primary  px-[5%] font-inter py-10 lg:py-32">

            <div className="flex flex-col lg:flex-row  justify-between lg:items-center space-y-6 ">

                <div className="lg:w-[40%]">
                    <h2 className="text-white  text-[2.25rem] leading-tight font-normal">
                        Schedule a free
                        <br />
                        consultation to
                        <br />
                        discuss your project.
                    </h2>
                </div>

                <div className="lg:w-[42%] flex flex-col justify-center">
                    <p className="text-white/75 text-[1.125rem] ">
                        Whether you're a property seeker, agency owner, or verified
                        builder Brisky has a plan built for your workflow. Start with a
                        free walkthrough of the platform.
                    </p>

                    <div className="flex items-center gap-5 mt-10">

                        <button className="px-5  gap-x-3 py-3 flex bg-white text-primary rounded-3xl lg:rounded-lg text-[0.875rem] lg:text-[1.25rem] font-semibold lg:font-medium">
                            List your business  <p className="lg:hidden">→</p>
                        </button>

                        <button className="lg:px-5 py-3 lg:border flex gap-x-3 border-white text-white rounded-lg text-[0.875rem] lg:text-[1.25rem] font-semibold lg:font-medium">
                            Book a call <p className="lg:hidden">→</p>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact

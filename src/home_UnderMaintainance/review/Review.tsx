import React from "react";
import Imgone from "../../assest/reviews/img1.svg";
import Imgtwo from "../../assest/reviews/img2.svg";
import Imgthree from "../../assest/reviews/img3.svg";

const Review = () => {
    return (
        <section className="w-full font-helvetica min-h-screen ">
            <div className="flex flex-col xl:flex-row gap-8 py-20 px-[5%]">


                <div className="xl:w-[24%] pt-8">
                    <p className="uppercase tracking-[1px] text-md font-medium text-[#8b8577] mb-6">
                        Reviews
                    </p>

                    <h2 className="text-5xl leading-[68px]  text-[#222] mb-8">
                        Success Stories
                    </h2>

                    <p className="text-2xl  text-[#666] ">
                        Our team of verification specialists and AI systems work together
                        to ensure every listing, agent, and builder you see on Brisky is
                        legitimate from search to settlement.
                    </p>

                    <button className="mt-10 px-8 py-4 rounded-2xl bg-[#243d1f] text-white text-[18px]">
                        Next
                    </button>
                </div>

                <div className="xl:w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

                    <div className="rounded-3xl overflow-hidden border border-[#ddd8cf] bg-white flex flex-col">
                        <img
                            src={Imgone}
                            alt=""
                            className="w-full h-[50%] object-cover"
                        />

                        <div className="p-6 flex flex-col justify-between flex-1">
                            <p className="text-[22px]  font-medium text-[#222]">
                                “ Exceptional service and deep local knowledge: [Link].
                                Seamless process, highly recommend: [Link].”
                            </p>

                            <div className="mt-16">
                                <h4 className="text-[20px] text-[#666]">
                                    Pankit Patel
                                </h4>

                                <p className="text-[18px] text-[#777] mt-1">
                                    from ELsolveIT
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-[#ddd8cf] bg-white flex flex-col">

                        <div className="p-6 min-h-[290px] flex flex-col justify-between">
                            <p className="text-[22px]  font-medium text-[#222]">
                                “ Outstanding support and personalized attention: [Link].
                                Truly a game-changer for my project: [Link].”
                            </p>

                            <div className="mt-12">
                                <h4 className="text-[20px] text-[#666]">
                                    Sarah Johnson
                                </h4>

                                <p className="text-[18px] text-[#777] mt-1">
                                    from TechSphere
                                </p>
                            </div>
                        </div>

                        <img
                            src={Imgtwo}
                            alt=""
                            className="w-full h-[50%] object-cover"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-[#ddd8cf] bg-white flex flex-col">
                        <img
                            src={Imgthree}
                            alt=""
                            className="w-full h-[50%] object-cover"
                        />

                        <div className="p-6 flex flex-col justify-between flex-1">
                            <p className="text-[22px]  font-medium text-[#222]">
                                “ Remarkable expertise and quick turnaround: [Link]. Their
                                insights were invaluable: [Link].”
                            </p>

                            <div className="mt-16">
                                <h4 className="text-[20px] text-[#666]">
                                    Michael Chen
                                </h4>

                                <p className="text-[18px] text-[#777] mt-1">
                                    from InnovateNow
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
       
        </section>
    );
};

export default Review;
import { useRef } from "react";
import Stepone from "../../assest/process/stepone.svg";
import Steptwo from "../../assest/process/steptwo.svg";
import Stepthree from "../../assest/process/stepthree.svg";
import Stepfour from "../../assest/process/stepfour.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "01",
        img: Stepone,
        title: "Create an account",
        desc: "Seekers sign up free with valid OTP. Agencies and agents subscribe to a plan and complete ABN verification via our Australian Business Register integration.",
    },
    {
        id: "02",
        img: Steptwo,
        title: "Search or list",
        desc: "Users can search listings or list properties, builders, or agencies using our easy-to-use platform.",
    },
    {
        id: "03",
        img: Stepthree,
        title: "We verify",
        desc: "Automated checks run instantly while our backend team manually approves before anything goes live.",
    },
    {
        id: "04",
        img: Stepfour,
        title: "Connect & transact",
        desc: "Verified users, builders, and service agencies book inspections, submit enquiries, and securely connect.",
    },
];

const Process = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray(".process-card");

            cards.forEach((card: any, index) => {
                if (index === cards.length - 1) return;

                gsap.to(card, {
                    scale: 0.92,
                    opacity: 0.7,
                    scrollTrigger: {
                        trigger: cards[index + 1] as Element,
                        start: "top 75%",
                        end: "top 30%",
                        scrub: true,
                    },
                });
            });

            ScrollTrigger.refresh();
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="w-full bg-[#F7F7F4] px-[5%] py-32"
        >
            <div className="flex flex-col xl:flex-row justify-between gap-24">

                <div className="xl:w-[35%] xl:sticky text-center xl:top-[15%] h-fit">
                    <h2 className="text-[2.25rem] font-medium lg:font-normal text-primary leading-10  ">
                        You search it,
                        <br />
                        we verify it.
                    </h2>

                    <p className="mt-7 text-[1.125rem] tracking-tight leading-8 text-[#6B6B6B] ">
                        Our team of verification specialists and AI systems work together
                        to ensure every listing, agent, and builder you see on Brisky is
                        legitimate from search to settlement.
                    </p>

                    <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg text-[0.875rem]">
                        Explore More
                    </button>
                </div>

                <div className="xl:w-[30%] flex flex-col gap-8 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className=" process-card sticky top-40 bg-[#F4EFE9] overflow-hidden border border-[#e7e1d9] will-change-transform"
                        >
                            <img
                                src={step.img}
                                alt={step.title}
                                className="w-full h-80 object-cover"
                            />

                            <div className="flex gap-[1.2rem] p-4 lg:p-6">

                                <span className="text-[2.3972rem] lg:text-[3rem] text-[#E5E3D8] font-medium leading-none">
                                    {step.id}
                                </span>

                                <div>
                                    <h3 className=" text-[1.375rem] lg:text-[1.125rem] text-[#222] font-medium">
                                        {step.title}
                                    </h3>

                                    <p className="lg:mt-[0.8rem] text-[0.7991rem] lg:text-[1rem] font-medium lg:leading-[1.7rem] text-[#6B6B6B]">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;
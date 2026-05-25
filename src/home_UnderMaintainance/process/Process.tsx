import React, { useRef } from "react";
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
            className="w-full bg-[#F7F7F4] px-[5%] py-[8rem]"
        >
            <div className="flex flex-col xl:flex-row justify-between gap-[6rem]">

                <div className="xl:w-[35%] xl:sticky xl:top-[15%] h-fit">
                    <h2 className="text-[3rem] leading-tight text-[#222] ">
                        You search it,
                        <br />
                        we verify it.
                    </h2>

                    <p className="mt-[2rem] text-xl leading-[2rem] text-[#6B6B6B] ">
                        Our team of verification specialists and AI systems work together
                        to ensure every listing, agent, and builder you see on Brisky is
                        legitimate from search to settlement.
                    </p>

                    <button className="mt-[2.5rem] bg-[#2C3F24] text-white px-[2rem] py-[1rem] rounded-lg text-[1rem]">
                        Explore More
                    </button>
                </div>

                <div className="xl:w-[38%] flex flex-col gap-[2rem] relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="
                process-card
                sticky
                top-[10rem]
                bg-[#F4EFE9]
                overflow-hidden
                border border-[#e7e1d9]
                will-change-transform
              "
                        >
                            <img
                                src={step.img}
                                alt={step.title}
                                className="w-full h-[20rem] object-cover"
                            />

                            <div className="flex gap-[1.2rem] p-[1.5rem]">

                                <span className="text-[4rem] text-[#d9d1c7] font-medium leading-none">
                                    {step.id}
                                </span>

                                <div>
                                    <h3 className="text-[1.2rem] text-[#222] font-medium">
                                        {step.title}
                                    </h3>

                                    <p className="mt-[0.8rem] text-[1rem] font-medium leading-[1.7rem] text-[#6B6B6B]">
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
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, ThumbsUp } from "lucide-react";

import People from "../../../assets/home/process/perople.png";

import Hand from "../../../assets/utils/Hand.svg";
import Tick from "../../../assets/utils/Tick.svg";
import Search from "../../../assets/utils/Search.svg";

const features = [
    {
        icon: Tick,
        title: "Verified Professionals",
        description:
            "Every builder, broker, and agent is ABN-verified before they can list on BRISKY.",
    },
    {
        icon: Search,
        title: "Smart Discovery",
        description:
            "Search properties and professionals using powerful filters and location-based results.",
    },
    {
        icon: Hand,
        title: "Trusted Connections",
        description:
            "Connect directly with builders, agents, and organizations without unnecessary intermediaries.",
    },
];

const Process = () => {
    const leftBubble = useRef<HTMLDivElement>(null);
    const rightBubble = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(leftBubble.current, {
            y: -10,
            rotation: -1,
            duration: 2.5,
            ease: "sine.inOut",
        }).to(
            rightBubble.current,
            {
                y: -8,
                rotation: 1,
                duration: 3,
                ease: "sine.inOut",
            },
            0.6,
        );
    });

    return (
        <section className="w-[95%] mx-auto py-24 font-helvetica">
            <h2 className="text-center text-[3.625rem] leading-tight font-medium text-[#342511]">
                Trust and safety features
                <br />
                for your protection
            </h2>

            <p className="mt-3 text-[1rem] text-center text-[#342511]">
                Every interaction on BRISKY is designed to keep you safe and informed
            </p>

            <div className="mt-24 flex items-center justify-center gap-32">
                <div className="relative">
                    <img
                        src={People}
                        alt="Professionals"
                        className="h-[520px] w-[420px] rounded-2xl object-cover"
                    />

                    <div
                        ref={leftBubble}
                        className="absolute -left-24 bottom-24 flex items-center gap-3 rounded-full bg-white px-6 py-2 shadow-xl"
                    >
                        <CheckCircle2
                            size={22}
                            className="text-[#F97316]"
                            strokeWidth={2}
                        />

                        <span className="font-medium text-[#342511]">
                            Job Assigned Successfully
                        </span>
                    </div>

                    <div
                        ref={rightBubble}
                        className="absolute -right-16 bottom-8 flex items-center gap-3 rounded-full bg-white px-6 py-2 shadow-xl"
                    >
                        <ThumbsUp size={20} className="text-[#F97316]" strokeWidth={2} />

                        <span className="font-medium text-[#342511]">Job Completed</span>
                    </div>
                </div>

                <div className="grid max-w-[560px] grid-cols-2 gap-x-16 gap-y-10">
                    {features.map(({ icon, title, description }) => (
                        <div key={title}>
                            <img src={icon} alt={title} className="mb-2 h-20 w-20" />

                            <h3 className="text-[1.5rem] font-medium text-[#342511]">
                                {title}
                            </h3>

                            <p className="mt-2 text-[0.875rem]  leading-snug text-[#342511]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

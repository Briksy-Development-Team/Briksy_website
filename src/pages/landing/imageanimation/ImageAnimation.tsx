import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WholeBg from "../../../assets/about/wholeBg.svg";

gsap.registerPlugin(ScrollTrigger);

const badges = [
    {
        id: "trusted",
        title: "Trusted Connections",
        text: "Connect directly with builders, agents, and trades — no unnecessary intermediaries.",
        className: "left-[19%] top-[45%]",
        dotClassName: "-top-4 -right-4", // relative to this badge's own corner now
    },
    {
        id: "verified",
        title: "Verified Professionals",
        text: "Every service provider is verified before joining Briksy.",
        className: "left-[14%] top-[73%]",
        dotClassName: "-top-4 -right-4",
    },
    {
        id: "smart",
        title: "Smart Discovery",
        text: "Search properties and professionals using powerful filters and location-based results.",
        className: "right-[10%] top-[76%]",
        dotClassName: "-top-10 left-20 -translate-x-1/2", // top-center, matches screenshot 3
    },
];

const GlowDot = ({ className = "" }: { className?: string }) => {
    return (
        <span className={`absolute z-20 h-10 w-10 ${className}`}>
            <span className="absolute inset-0 rounded-full bg-white/20 animate-[aura-pulse_1.8s_ease-out_infinite]" />
            <span className="absolute inset-[8px] rounded-full bg-white/40 animate-[aura-pulse_1.8s_ease-out_infinite] [animation-delay:300ms]" />
            <span className="absolute inset-[14px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
        </span>
    );
};

const ImageAnimation = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imgWrapRef = useRef<HTMLDivElement>(null);
    const badgeRefs = useRef<Array<HTMLDivElement | null>>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                },
            });

            tl.fromTo(
                imgWrapRef.current,
                { scale: 0.4, borderRadius: "24px" },
                { scale: 1, borderRadius: "0px", ease: "power2.out", duration: 1 },
            );

            tl.fromTo(
                badgeRefs.current,
                { autoAlpha: 0, y: 16 },
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power2.out",
                },
                ">-0.1",
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative h-screen font-helvetica w-screen overflow-hidden"
        >
            <div
                ref={imgWrapRef}
                className="absolute inset-0 h-full w-full origin-center will-change-transform"
            >
                <img
                    src={WholeBg}
                    alt=""
                    className="h-full w-full"
                    draggable={false}
                />

                {badges.map((b, i) => (
                    <div
                        key={b.id}
                        ref={(el) => {
                            badgeRefs.current[i] = el;
                        }}
                        className={`absolute ${b.className} text-center max-w-[22rem] opacity-0`}
                    >
                        <div className="relative rounded-xl bg-black/32 backdrop-blur-[15px] px-5 py-4 text-white">
                            <h3 className="mb-1 text-[1.25rem] font-medium">{b.title}</h3>
                            <p className="text-[1rem] leading-relaxed text-white/85">
                                {b.text}
                            </p>
                            <GlowDot className={b.dotClassName} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageAnimation;
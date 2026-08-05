import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 170;
const TRANSITION_FRAMES = 14;

const getFrame = (i: number) =>
    `/frames-webp/frame_${String(i).padStart(5, "0")}.webp`;

const sections = [
    {
        title: "For Builders",
        description:
            "List your projects, get discovered by serious buyers, and build trust through verified credentials and real reviews.",
        frameStart: 0,
        frameEnd: 37,
    },
    {
        title: "For Traders Professionals",
        description:
            "Grow your client base, manage enquiries, and stand out in a verified marketplace built for Australian professionals.",
        frameStart: 38,
        frameEnd: 60,
    },
    {
        title: "For Buyers/Sellers",
        description:
            "Manage your business, showcase your expertise, and connect with qualified property buyers through a verified business profile.",
        frameStart: 61,
        frameEnd: 169,
    },
];

const Community = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const currentFrameRef = useRef(0);

    useGSAP(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const images: HTMLImageElement[] = new Array(FRAME_COUNT);
        let loadedCount = 0;

        const draw = (frame: number) => {
            const img = images[frame];
            if (img?.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            draw(currentFrameRef.current);
        };

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                if (i === 0) resize();
                if (loadedCount === FRAME_COUNT) ScrollTrigger.refresh();
            };
            img.src = getFrame(i + 1);
            images[i] = img;
        }

        window.addEventListener("resize", resize);

        gsap.set(titleRefs.current, { opacity: 0, y: "-100" });
        gsap.set(descRefs.current, { opacity: 0, y: "100" });
        gsap.set(titleRefs.current[0], { opacity: 1, y: 0 });
        gsap.set(descRefs.current[0], { opacity: 1, y: 0 });

        const tl = gsap.timeline({ paused: true });

        for (let i = 1; i < sections.length; i++) {
            const prevTitle = titleRefs.current[i - 1];
            const prevDesc = descRefs.current[i - 1];
            const nextTitle = titleRefs.current[i];
            const nextDesc = descRefs.current[i];
            if (!prevTitle || !prevDesc || !nextTitle || !nextDesc) continue;

            const boundary = sections[i].frameStart;
            const start =
                Math.max(0, boundary - TRANSITION_FRAMES / 2) / (FRAME_COUNT - 1);
            const end =
                Math.min(FRAME_COUNT - 1, boundary + TRANSITION_FRAMES / 2) /
                (FRAME_COUNT - 1);
            const dur = end - start;

            tl.to(
                prevTitle,
                { opacity: 0, y: "-100", duration: dur, ease: "none" },
                start,
            )
                .to(
                    prevDesc,
                    { opacity: 0, y: "100", duration: dur, ease: "none" },
                    start,
                )
                .fromTo(
                    nextTitle,
                    { opacity: 0, y: "100" },
                    { opacity: 1, y: 0, duration: dur, ease: "none" },
                    start,
                )
                .fromTo(
                    nextDesc,
                    { opacity: 0, y: "-100" },
                    { opacity: 1, y: 0, duration: dur, ease: "none" },
                    start,
                );
        }

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: 5,
            onUpdate: (self) => {
                tl.time(self.progress); // was: tl.progress(self.progress)

                const frame = Math.round(self.progress * (FRAME_COUNT - 1));
                if (frame !== currentFrameRef.current) {
                    currentFrameRef.current = frame;
                    draw(frame);
                }
            },
        });

        return () => {
            window.removeEventListener("resize", resize);
            trigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}
                className="w-full h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 gap-8"
            >
                <div className="relative w-full lg:w-1/4 h-[50%] my-auto  flex items-center justify-center overflow-hidden shrink-0">
                    {sections.map((item, i) => (
                        <h2
                            key={item.title}
                            ref={(el) => {
                                titleRefs.current[i] = el;
                            }}
                            className="absolute w-full text-center text-[1.875rem] font-medium lg:text-[2.25rem] text-[#342511]"
                        >
                            {item.title}
                        </h2>
                    ))}
                </div>

                <div className="w-full lg:w-[40rem] h-[25rem] aspect-73/41 flex items-center justify-center shrink-0">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                <div className="relative w-full lg:w-1/4 h-[50%] my-auto  flex items-center overflow-hidden shrink-0">
                    {sections.map((item, i) => (
                        <p
                            key={item.title}
                            ref={(el) => {
                                descRefs.current[i] = el;
                            }}
                            className="absolute w-full text-primary lg:text-[1rem] leading-relaxed"
                        >
                            {item.description}
                        </p>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Community;
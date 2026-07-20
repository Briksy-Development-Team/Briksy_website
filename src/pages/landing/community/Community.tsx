import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 180;

const getFrame = (i: number) =>
    `/frames-webp/frame_${String(i).padStart(5, "0")}.webp`;

const sections = [
    {
        title: "For Builders",
        description:
            "List your projects, get discovered by serious buyers, and build trust through verified credentials and real reviews.",
        frameStart: 0,
        frameEnd: 41,
    },
    {
        title: "For Property Professionals",
        description:
            "Grow your client base, manage enquiries, and stand out in a verified marketplace built for Australian professionals.",
        frameStart: 42,
        frameEnd: 61,
    },
    {
        title: "For Buyers/Sellers",
        description:
            "Manage your business, showcase your expertise, and connect with qualified property buyers through a verified business profile.",
        frameStart: 62,
        frameEnd: 179,
    },
];

const Community = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const activeRef = useRef(0);

    useGSAP(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
            const img = new Image();
            img.src = getFrame(i + 1);
            return img;
        });

        const draw = (frame: number) => {
            const img = images[frame];
            if (img?.complete) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            draw(0);
        };
        images[0].onload = resize;
        window.addEventListener("resize", resize);

        titleRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : "-50vh" });
        });
        descRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : "50vh" });
        });

        const swapText = (fromIndex: number, toIndex: number) => {
            const outTitle = titleRefs.current[fromIndex];
            const inTitle = titleRefs.current[toIndex];
            const outDesc = descRefs.current[fromIndex];
            const inDesc = descRefs.current[toIndex];
            if (!outTitle || !inTitle || !outDesc || !inDesc) return;

            const isForward = toIndex > fromIndex;

            const titleOutY = isForward ? "50vh" : "-50vh";
            const titleInY = isForward ? "-50vh" : "50vh";
            
            const descOutY = isForward ? "-50vh" : "50vh";
            const descInY = isForward ? "50vh" : "-50vh";

            gsap.to(outTitle, {
                opacity: 0,
                y: titleOutY,
                duration: 0.6,
                ease: "power2.inOut",
                overwrite: true,
            });
            gsap.fromTo(
                inTitle,
                { opacity: 0, y: titleInY },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: true }
            );

            gsap.to(outDesc, {
                opacity: 0,
                y: descOutY,
                duration: 0.6,
                ease: "power2.inOut",
                overwrite: true,
            });
            gsap.fromTo(
                inDesc,
                { opacity: 0, y: descInY },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: true }
            );
        };

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                const frame = Math.round(self.progress * (FRAME_COUNT - 1));
                draw(frame);

                const newActive = sections.findIndex(
                    (s) => frame >= s.frameStart && frame <= s.frameEnd
                );

                if (newActive !== -1 && newActive !== activeRef.current) {
                    swapText(activeRef.current, newActive);
                    activeRef.current = newActive;
                }
            },
        });

        return () => {
            window.removeEventListener("resize", resize);
            trigger.kill();
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}
                className="w-full h-screen flex flex-col  lg:flex-row items-center justify-center px-8 lg:px-16 gap-8"
            >
                <div className="relative w-full lg:w-1/4 h-full  flex items-center  justify-center overflow-hidden shrink-0">
                    {sections.map((item, i) => (
                        <h2
                            key={item.title}
                            ref={(el) => {
                                titleRefs.current[i] = el;
                            }}
                            className="absolute w-full text-center text-[1.875rem] font-medium  lg:text-[2.25rem] text-[#342511]"
                        >
                            {item.title}
                        </h2>
                    ))}
                </div>

                <div className="w-full lg:w-1/2 h-[70vh] flex items-center justify-center shrink-0">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                <div className="relative w-full lg:w-1/4 h-full  flex items-center overflow-hidden shrink-0">
                    {sections.map((item, i) => (
                        <p
                            key={item.title}
                            ref={(el) => {
                                descRefs.current[i] = el;
                            }}
                            className="absolute w-full text-[#8B6F54] lg:text-[1rem] leading-relaxed"
                        >
                            {item.description}
                        </p>
                    ))}
                </div>
            </div>

            <div className="h-[1.5px] bg-[#E5E3D8] w-[90%] mx-auto" />
        </>
    );
};

export default Community;
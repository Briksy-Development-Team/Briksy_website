import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 132;
const getFrame = (i: number) =>
    `/frames-webp/frame_${String(i).padStart(5, "0")}.webp`;

const sections = [
    {
        title: "For Organisations",
        description:
            "Manage your business, showcase your expertise, and connect with qualified property buyers through a verified business profile.",
    },
    {
        title: "For Builders",
        description:
            "List your projects, get discovered by serious buyers, and build trust through verified credentials and real reviews.",
    },
    {
        title: "For Property Professionals",
        description:
            "Grow your client base, manage enquiries, and stand out in a verified marketplace built for Australian professionals.",
    },
];

const Community = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [active, setActive] = useState(0);

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

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 20%",
            end: "+=2200",
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
                draw(Math.round(self.progress * (FRAME_COUNT - 1)));
                setActive(Math.min(2, Math.floor(self.progress * 3)));
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
                className=" w-full  lg:h-[80vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24"
            >
                <div className="w-full lg:w-1/2   h-auto flex flex-col gap-8">
                    {sections.map((item, i) => (
                        <div key={item.title}>
                            <h2
                                className={`transition-all text-[1.875rem]  font-medium lg:text-[2.25rem] duration-500  ${active === i ? " text-[#342511]" : " text-gray-400"
                                    }`}
                            >
                                {item.title}
                            </h2>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${active === i ? " opacity-100 mt-3" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-[#8B6F54]  lg:text-[1rem] leading-relaxed  w-[80%]">
                                    {item.description}
                                </p>
                                <button className="mt-5 px-5 py-2 rounded-lg bg-[#342511] text-white">
                                    Start Searching
                                </button>
                            </div>

                            <div className="border-b border-gray-200 mt-6" />
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-1/2  h-full hidden lg:flex items-center justify-center">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>
            </div>

            <div className="h-[1.5px] bg-[#E5E3D8] w-[90%] mx-auto" />
        </>
    );
};

export default Community;

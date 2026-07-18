import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Props = {
    onComplete: () => void;
};

const Loader = ({ onComplete }: Props) => {
    const loaderRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const state = { count: 0, reveal: 0 };

        const setMask = (percent: number) => {
            const el = loaderRef.current;
            if (!el) return;
            const { width, height } = el.getBoundingClientRect();
            const diagonal = Math.hypot(width, height);
            const radiusPx = (percent / 100) * diagonal;
            const mask = `radial-gradient(circle ${radiusPx}px at 100% 0%, transparent 0%, transparent ${radiusPx}px, black ${radiusPx}px)`;
            el.style.webkitMaskImage = mask;
            el.style.maskImage = mask;
        };

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "";
                onComplete();
            },
        });

        tl.to(state, {
            count: 100,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => setProgress(Math.round(state.count)),
        });

        tl.to({}, { duration: 0.15 });

        tl.to(state, {
            reveal: 150,
            duration: 1.8,
            ease: "power2.in",
            onUpdate: () => setMask(state.reveal),
        });

        setMask(0);

        return () => {
            tl.kill();
            document.body.style.overflow = "";
        };
    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F3EE] text-black"
        >
            <h1 className="text-9xl font-bold tracking-tight">
                {progress}
                <span className="text-3xl">%</span>
            </h1>
        </div>
    );
};

export default Loader;
import { useState, useRef, useEffect } from "react";
import { Search, SlidersHorizontal, Sparkles, AudioLines } from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";
import { useScrollFade } from "./FloatingSearch";

const BTN = "flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition";

type Mode = "collapsed" | "search" | "ai";
type Props = { mode: Mode; setMode: (m: Mode) => void; hasHero?: boolean };


export const NavSearchButton = ({  setMode, hasHero = true }: Props) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useScrollFade(btnRef, "in", hasHero);

    return (
        <button
            ref={btnRef}
            onClick={() => setMode("search")}
            className={`${BTN} w-11 h-11 rounded-full shadow-md`}
            aria-label="Open search"
        >
            <Search size={18} />
        </button>
    );
};


export const NavSearchPanel = ({ mode, setMode }: Props) => {
    const [query, setQuery] = useState("");
    const [voiceOpen, setVoiceOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) =>
            !wrapRef.current?.contains(e.target as Node) && setMode("collapsed");
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, [setMode]);

    return (
        <div ref={wrapRef} className="flex items-center gap-3 w-full max-w-[900px] mx-auto">
            {mode === "ai" ? (
                <>
                    <button onClick={() => setMode("search")} className={`${BTN} w-11 h-11 shrink-0`}>
                        <Search size={18} />
                    </button>
                    <div className="flex items-center flex-1 h-16 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
                        <input
                            type="text"
                            placeholder="Ask what you are looking for..."
                            className="flex-1 h-full pl-7 pr-4 text-base outline-none text-gray-700 placeholder:text-gray-400"
                        />
                        <button onClick={() => setVoiceOpen(true)} className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3">
                            <AudioLines size={20} />
                        </button>
                        <button className={`${BTN} w-11 h-11`}>
                            <Sparkles size={18} />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center flex-1 h-14 bg-white rounded-xl overflow-hidden shadow-md pr-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Your Desired Location..."
                            autoFocus
                            className="flex-1 h-full pl-5 pr-4 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                        />
                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition px-3">
                            <SlidersHorizontal size={18} />
                        </button>
                        <button className={`${BTN} w-10 h-10`}>
                            <Search size={16} />
                        </button>
                    </div>
                    <button onClick={() => setMode("ai")} className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition shrink-0">
                        <Sparkles size={18} />
                    </button>
                </>
            )}
            <AiVoiceModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
        </div>
    );
};
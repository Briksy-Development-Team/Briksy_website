import { useState, useRef, useEffect } from "react";
import { Search, SlidersHorizontal, Sparkles, AudioLines } from "lucide-react";
import AiVoiceModal from "../search/AiVoiceModal";
import { useScrollFade } from "../search/FloatingSearch";
import Filter from "../filter/Filter"
import { useNavigate } from "react-router-dom";


const BTN = "flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition";

type Mode = "collapsed" | "search" | "ai";
type Props = { mode: Mode; setMode: (m: Mode) => void; hasHero?: boolean };


export const NavSearchButton = ({ setMode, hasHero = true }: Props) => {
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
    const [filterOpen, setFilterOpen] = useState(false);
    const navigate = useNavigate();

    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) =>
            !wrapRef.current?.contains(e.target as Node) && setMode("collapsed");
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, [setMode]);

    return (
        <div ref={wrapRef} className="flex items-center gap-3 justify-center w-full max-w-[900px] mx-auto">
            {mode === "ai" ? (
                <>
                    <div className="flex items-center gap-3 w-[90%] sm:w-[80%] lg:w-full">
                        <button
                            onClick={() => setMode("search")}
                            className={`${BTN} w-11 h-11 sm:w-12 sm:h-12 lg:w-14  lg:h-14 shrink-0`}
                        >
                            <Search size={18} />
                        </button>
                        <div className="flex items-center flex-1 h-11 sm:h-12 lg:h-14 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
                            <input
                                type="text"
                                placeholder="Ask what you are looking for..."
                                className="flex-1 h-full pl-3 lg:pl-7 pr-4 text-base w-[50%]  outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button
                                onClick={() => setVoiceOpen(true)}
                                className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3"
                            >
                                <AudioLines size={20} />
                            </button>
                            <button className={`${BTN} w-8 h-8 sm:w-10 sm:h-10`}>
                                <Sparkles size={18} />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center gap-3  w-[90%] sm:w-[80%] lg:w-full ">
                        <div className="flex items-center flex-1 h-11 sm:h-12 lg:h-14 bg-white rounded-xl   overflow-hidden shadow-xl pr-2">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search Your Desired Location..."
                                className="flex-1 h-full pl-3 lg:pl-7 pr-4  text-base w-[50%] outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button
                                onClick={() => setFilterOpen(true)}
                                className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3"
                            >
                                <SlidersHorizontal size={20} />
                            </button>
                            <button onClick={() => (navigate("/result"))} className={`${BTN} w-8 h-8 sm:w-10 sm:h-10`}>
                                <Search size={18} />
                            </button>
                        </div>
                        <button
                            onClick={() => setMode("ai")}
                            className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14  lg:h-14 rounded-xl bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                        >
                            <Sparkles size={20} />
                        </button>
                    </div>
                </>
            )}
            <Filter isOpen={filterOpen} onClose={() => setFilterOpen(false)} />

            <AiVoiceModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
        </div>
    );
};
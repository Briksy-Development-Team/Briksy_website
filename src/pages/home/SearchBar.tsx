import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, Sparkles, RefreshCw, AudioLines } from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";

const tabs = ["Buy", "Rent", "Sold", "Address", "Agents"];

const prompts = [
    "3-bedroom house in Richmond under $800k",
    "Mortgage broker for first home buyer in Melbourne",
    "Landscaper for backyard renovation in Brisbane",
];

type SearchBarProps = {
    mode: "collapsed" | "search" | "ai";
    setMode: (mode: "collapsed" | "search" | "ai") => void;
};

const SearchBar = ({ mode, setMode }: SearchBarProps) => {
    const [activeTab, setActiveTab] = useState("Buy");
    const [query, setQuery] = useState("");
    const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

    // True when the user is at the top of the page (search is in hero position)
    const [atTop, setAtTop] = useState(window.scrollY < 80);

    useEffect(() => {
        const onScroll = () => setAtTop(window.scrollY < 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isAi = mode === "ai";

    // --- AI MODE ---
    if (isAi) {
        return (
            <>
                <div className="flex items-center gap-3 w-full">
                    <button
                        onClick={() => setMode("collapsed")}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition shrink-0"
                    >
                        <Search size={18} />
                    </button>

                    <div className="flex items-center flex-1 h-16 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
                        <input
                            type="text"
                            placeholder="Ask what you are looking for..."
                            className="flex-1 h-full pl-7 pr-4 text-base outline-none text-gray-700 placeholder:text-gray-400"
                        />
                        <button
                            onClick={() => setIsVoiceModalOpen(true)}
                            className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3"
                        >
                            <AudioLines size={20} />
                        </button>
                        <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition">
                            <Sparkles size={18} />
                        </button>
                    </div>
                </div>
                <AiVoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
            </>
        );
    }

    // --- COLLAPSED (in navbar after scroll) ---
    if (!atTop) {
        return (
            <>
                <div className="flex items-center gap-3 w-full">
                    <div
                        className="flex items-center flex-1 h-14 bg-white rounded-xl overflow-hidden shadow-md pr-2 cursor-pointer"
                        onClick={() => mode === "collapsed" && window.scrollY > 80 && setMode("search")}
                    >
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Your Desired Location..."
                            className="flex-1 h-full pl-5 pr-4 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                        />
                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition px-3">
                            <SlidersHorizontal size={18} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition">
                            <Search size={16} />
                        </button>
                    </div>
                    <button
                        onClick={() => setMode("ai")}
                        className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                    >
                        <Sparkles size={18} />
                    </button>
                </div>
                <AiVoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
            </>
        );
    }

    // --- EXPANDED (in hero at top of page) — full HeroSearch design ---
    return (
        <>
            <div className="w-full flex flex-col items-center">
                {/* Tabs */}
                <div className="flex gap-3 w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-14 h-12 rounded-2xl text-base font-medium transition-all duration-300 ${
                                activeTab === tab
                                    ? "bg-[#2B241F] text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search input row */}
                <div className="flex items-center gap-3 mt-4 w-full">
                    <div className="flex items-center flex-1 h-16 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Your Desired Location..."
                            className="flex-1 h-full pl-7 pr-4 text-base outline-none text-gray-700 placeholder:text-gray-400"
                        />
                        <button className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3">
                            <SlidersHorizontal size={20} />
                        </button>
                        <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition">
                            <Search size={18} />
                        </button>
                    </div>
                    <button
                        onClick={() => setMode("ai")}
                        className="w-16 h-16 rounded-xl bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                    >
                        <Sparkles size={20} />
                    </button>
                </div>

                {/* Prompt chips */}
                <div className="flex items-center gap-2 mt-12 text-white">
                    <span className="text-base">Try an example prompt</span>
                    <RefreshCw size={16} />
                </div>
                <div className="flex justify-center gap-4 mt-5 w-full">
                    {prompts.map((prompt) => (
                        <button
                            key={prompt}
                            onClick={() => setQuery(prompt)}
                            className="flex-1 px-3 py-2 rounded-xl bg-white/90 text-sm text-[#4A3A2B] shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
            </div>
            <AiVoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
        </>
    );
};

export default SearchBar;
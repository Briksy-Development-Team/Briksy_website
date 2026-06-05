import { useState, useEffect } from "react";
import { Search, Sparkles, AudioLines } from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";

type SearchBarProps = {
    mode: "collapsed" | "search" | "ai";
    setMode: (mode: "collapsed" | "search" | "ai") => void;
};

const SearchBar = ({ mode, setMode }: SearchBarProps) => {
    // 1. Add Local State: This handles the AI morph safely while inside the Hero section
    const [localAi, setLocalAi] = useState(false);
    const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

    // Reset local AI automatically if the user scrolls down and the Navbar takes over
    useEffect(() => {
        if (mode !== "collapsed") {
            setLocalAi(false);
        }
    }, [mode]);

    const isCollapsed = mode === "collapsed";

    // 2. Update logic: It's in AI mode if the global state says so, OR if our local Hero state says so
    const isAi = mode === "ai" || localAi;

    return (
        <>
            <div className="flex flex-col items-start w-full">
                <div
                    className="flex items-center mb-2 w-full"
                    onClick={() => {
                        // Only expand the Navbar if the user has scrolled down
                        if (isCollapsed && window.scrollY > 100) {
                            setMode(localAi ? "ai" : "search");
                        }
                    }}
                >
                    {/* --- LEFT OUTSIDE BUTTON (Search) --- */}
                    <div className={`transition-all duration-500 ease-out flex items-center justify-center overflow-hidden
                    ${isAi ? "w-[52px] opacity-100 scale-100 mr-3" : "w-0 opacity-0 scale-0 mr-0"}
                `}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (window.scrollY > 100) {
                                    // Scrolled down: Tell Navbar to expand in Normal mode
                                    setMode("search");
                                } else {
                                    // Top of page: Stay in Hero, just morph locally
                                    setLocalAi(false);
                                }
                            }}
                            className="w-[52px] h-[52px] rounded-full bg-[#30452A] flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                        >
                            <Search size={18} className="text-white" />
                        </button>
                    </div>

                    {/* --- MAIN WHITE PILL --- */}
                    <div
                        className={`relative flex-1 bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300
                        ${isCollapsed && !isAi ? "h-14" : "h-16"}
                    `}
                    >
                        {/* Normal Search Content */}
                        <div className={`absolute inset-0 flex items-center transition-all duration-500 ease-out
                        ${isCollapsed && !isAi ? "pl-4 pr-1" : "pl-7 pr-1.5"}
                        ${isAi ? "opacity-0 scale-0 pointer-events-none translate-y-8" : "opacity-100 scale-100 translate-y-0"}
                    `}>
                            <div className="flex-1 flex flex-col justify-center ">
                                <p className="search-label text-xs font-semibold text-[#D97706] mb-0.5">Where</p>
                                <input
                                    type="text"
                                    placeholder="Search Your Desired Location..."
                                    className={`w-full outline-none text-gray-600 placeholder:text-gray-400 bg-transparent transition-all duration-300
                                    ${isCollapsed && !isAi ? "text-xs" : "text-sm"} 
                                `}
                                />
                            </div>

                            <div className={`w-px bg-gray-200 shrink-0 transition-all duration-300
                            ${isCollapsed && !isAi ? "h-6 mx-3" : "h-9 mx-5"}
                        `} />

                            <div className="search-type w-1/3 flex flex-col justify-center">
                                <p className="search-label text-xs font-semibold text-[#D97706] mb-0.5">Type</p>
                                <select
                                    className={`w-full outline-none bg-transparent text-gray-600 cursor-pointer appearance-none transition-all duration-300
                                    ${isCollapsed && !isAi ? "text-xs" : "text-sm"}
                                `}
                                >
                                    <option>All</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Commercial</option>
                                    <option>Office</option>
                                </select>
                            </div>

                            <button
                                className={`rounded-full bg-[#30452A] flex items-center justify-center shrink-0 hover:scale-105 transition-all duration-300
                                ${isCollapsed && !isAi ? "w-[40px] h-[40px] ml-2" : "w-[50px] h-[50px] ml-3"}
                            `}
                            >
                                <Search size={isCollapsed && !isAi ? 16 : 18} className="text-white transition-all" />
                            </button>
                        </div>

                        {/* AI Search Content */}
                        <div className={`absolute inset-0 flex items-center transition-all duration-500 ease-out pl-7 pr-1.5
                        ${isAi ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 pointer-events-none -translate-y-8"}
                    `}>
                            <div className="flex-1 flex flex-col justify-center">
                                <p className="text-sm font-bold text-black mb-0.5">Search</p>
                                <input
                                    type="text"
                                    placeholder="Ask what you are looking for ?"
                                    className="w-full outline-none text-gray-600 placeholder:text-gray-400 bg-transparent text-sm"
                                />
                            </div>

                            <div className="w-px h-9 bg-gray-200 mx-4 shrink-0" />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsVoiceModalOpen(true);
                                }}
                                className="mr-4 text-gray-800 hover:text-black transition-colors hover:scale-110"
                            >
                                <AudioLines size={20} />
                            </button>

                            <button className="w-[50px] h-[50px] rounded-full bg-[#30452A] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                                <Sparkles size={18} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT OUTSIDE BUTTON (Sparkles) --- */}
                    <div className={`transition-all duration-500 ease-out flex items-center justify-center overflow-hidden
                    ${!isAi ? "opacity-100 scale-100 ml-3" : "w-0 opacity-0 scale-50 ml-0"}
                    ${!isAi && isCollapsed ? "w-[42px]" : !isAi ? "w-[52px]" : ""}
                `}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (window.scrollY > 100) {
                                    // Scrolled down: Tell Navbar to expand in AI mode
                                    setMode("ai");
                                } else {
                                    // Top of page: Stay in Hero, just morph locally
                                    setLocalAi(true);
                                }
                            }}
                            className={`rounded-full bg-[#30452A] flex items-center justify-center shrink-0 hover:scale-105 transition-transform
                            ${isCollapsed && !isAi ? "w-[42px] h-[42px]" : "w-[52px] h-[52px]"}
                        `}
                        >
                            <Sparkles size={isCollapsed && !isAi ? 16 : 18} className="text-white transition-all" />
                        </button>
                    </div>
                </div>

                {/* --- Filters --- */}
                <div className={`search-filters flex items-start gap-2.5 transition-all duration-300
                ${isAi ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100 translate-y-0"}
            `}>
                    {["All", "Agents", "Agencies", "Organisations"].map((label) => (
                        <button
                            key={label}
                            className={`px-3 py-1.5 rounded-2xl text-sm transition ${label === "All"
                                ? "bg-white text-[#D97706] border border-white"
                                : "bg-transparent text-white border border-gray-300"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <AiVoiceModal
                isOpen={isVoiceModalOpen}
                onClose={() => setIsVoiceModalOpen(false)}
            />
        </>
    );
};
export default SearchBar;
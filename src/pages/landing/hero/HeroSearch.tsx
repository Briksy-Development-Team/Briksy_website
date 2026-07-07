import { useState } from "react";
import { Search, SlidersHorizontal, Sparkles, RefreshCw, AudioLines } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AiVoiceModal from "../../home/AiVoiceModal";

const tabs = ["Buy", "Rent", "Sold", "Address", "Agents"];

const prompts = [
    "3-bedroom house in Richmond under $800k",
    "Mortgage broker for first home buyer in Melbourne",
    "Landscaper for backyard renovation in Brisbane",
];

const HeroSearch = () => {
    const [activeTab, setActiveTab] = useState("Buy");
    const [query, setQuery] = useState("");
    const [isAi, setIsAi] = useState(false);
    const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) navigate(`/nav?q=${encodeURIComponent(query)}&type=${activeTab}`);
    };

    return (
        <>
            <div className="w-full flex flex-col items-center">

                <div className={`flex gap-3 w-full transition-all duration-300 ${isAi ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "opacity-100 h-auto"}`}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-14 h-12 rounded-2xl text-base font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-[#2B241F] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-4 w-full">

                    <div className={`transition-all duration-500 overflow-hidden flex items-center ${isAi ? "w-14 opacity-100" : "w-0 opacity-0"}`}>
                        <button
                            onClick={() => setIsAi(false)}
                            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition shrink-0"
                        >
                            <Search size={18} />
                        </button>
                    </div>

                    <div className="flex items-center flex-1 h-16 bg-white rounded-xl overflow-hidden shadow-xl pr-2 relative">

                        <div className={`absolute inset-0 flex items-center pr-2 transition-all duration-500 ${isAi ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                placeholder="Search Your Desired Location..."
                                className="flex-1 h-full pl-7 pr-4 text-base outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3">
                                <SlidersHorizontal size={20} />
                            </button>
                            <button
                                onClick={handleSearch}
                                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition"
                            >
                                <Search size={18} />
                            </button>
                        </div>

                        <div className={`absolute inset-0 flex items-center pr-2 transition-all duration-500 ${isAi ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
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

                    <div className={`transition-all duration-500 overflow-hidden flex items-center ${isAi ? "w-0 opacity-0" : "w-16 opacity-100"}`}>
                        <button
                            onClick={() => setIsAi(true)}
                            className="w-16 h-16 rounded-xl bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition shrink-0"
                        >
                            <Sparkles size={20} />
                        </button>
                    </div>
                </div>

                <div className={`w-full transition-all duration-300 `}>
                    <div className="flex items-center gap-2  justify-center text-white my-5">
                        <span className="text-base">Try an example prompt</span>
                        <RefreshCw size={16} />
                    </div>
                    <div className="flex justify-center gap-8 w-full">
                        {prompts.map((prompt) => (
                            <button
                                key={prompt}
                                onClick={() => { setQuery(prompt); handleSearch(); }}
                                className="flex-1 px-3 py-2 rounded-xl whitespace-nowrap bg-white text-sm text-[#4A3A2B] shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <AiVoiceModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
        </>
    );
};

export default HeroSearch;

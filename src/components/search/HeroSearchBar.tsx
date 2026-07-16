import { useRef, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  RefreshCw,
  AudioLines,
} from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";
import Filter from "../filter/Filter";
import { useScrollFade } from "./FloatingSearch";
import { useNavigate } from "react-router-dom";

const TABS = ["Buy", "Rent", "Sold", "Address", "Agents"];
const PROMPTS = [
  "3-bedroom house in Richmond under $800k",
  "Mortgage broker for first home buyer in Melbourne",
  "Landscaper for backyard renovation in Brisbane",
];
const BTN =
  "flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition";

type Mode = "collapsed" | "search" | "ai";
type Props = { mode: Mode; setMode: (m: Mode) => void };

const HeroSearchBar = ({ mode, setMode }: Props) => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollFade(rootRef, "out");
  const navigate = useNavigate();

  return (
    <div ref={rootRef} className="w-full flex flex-col items-center">
      {mode === "ai" ? (
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
      ) : (
        <>
          <div className="flex flex-wrap justify-center  sm:justify-start gap-3 w-[90%] sm:w-[80%] lg:w-full">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`lg:px-14 h-11 px-6 sm:px-8 rounded-xl text-[0.875rem] lg:text-[1rem] font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2B241F] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4 w-[90%] sm:w-[80%] lg:w-full py-2">
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
              <button
                onClick={() => navigate("/result")}
                className={`${BTN} w-8 h-8 sm:w-10 sm:h-10`}
              >
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

      <div className="flex items-center gap-2 mt-8 text-black">
        <span className="text-[0.875rem]">Try an example prompt</span>
        <RefreshCw size={16} />
      </div>
      <div className="mt-3 flex w-full flex-wrap justify-center gap-4 px-10">
        {PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setQuery(prompt)}
            className="
                w-full
                max-w-[320px]
                flex-none
                rounded-xl
                bg-white/90
                px-4
                py-2
                text-center
                text-[0.7rem]
                text-[#4A3A2B]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
            "
          >
            {prompt}
          </button>
        ))}
      </div>
      <Filter isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
      <AiVoiceModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </div>
  );
};

export default HeroSearchBar;

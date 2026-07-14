import { useRef, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  RefreshCw,
  AudioLines,
} from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";
import { useScrollFade } from "./FloatingSearch";

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
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollFade(rootRef, "out");

  return (
    <div ref={rootRef} className="w-full flex flex-col items-center">
      {mode === "ai" ? (
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => setMode("search")}
            className={`${BTN} w-11 h-11 shrink-0`}
          >
            <Search size={18} />
          </button>
          <div className="flex items-center flex-1 h-14 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
            <input
              type="text"
              placeholder="Ask what you are looking for..."
              className="flex-1 h-full pl-7 pr-4 text-base outline-none text-gray-700 placeholder:text-gray-400"
            />
            <button
              onClick={() => setVoiceOpen(true)}
              className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition px-3"
            >
              <AudioLines size={20} />
            </button>
            <button className={`${BTN} w-11 h-11`}>
              <Sparkles size={18} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-3 w-full">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`lg:px-14 h-11 px-8 rounded-xl text-[0.875rem] lg:text-[1rem] font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2B241F] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4 w-full">
            <div className="flex items-center flex-1 h-14 bg-white rounded-xl overflow-hidden shadow-xl pr-2">
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
              <button className={`${BTN} w-11 h-11`}>
                <Search size={18} />
              </button>
            </div>
            <button
              onClick={() => setMode("ai")}
              className="w-11 h-11 rounded-xl bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition shrink-0"
            >
              <Sparkles size={20} />
            </button>
          </div>
        </>
      )}

      <div className="flex items-center gap-2 mt-8 text-white">
        <span className="text-base">Try an example prompt</span>
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
      <AiVoiceModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </div>
  );
};

export default HeroSearchBar;

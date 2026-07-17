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
import type { ResultType } from "../../types/search";

const TABS: { label: string; resultType: ResultType }[] = [
  { label: "Buy",      resultType: "property" },
  { label: "Sold",     resultType: "property" },
  { label: "Builders", resultType: "builder"  },
  { label: "Agents",   resultType: "trader"   },
];

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
  const [activeIdx, setActiveIdx] = useState(0);
  const [query, setQuery] = useState("");
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollFade(rootRef, "out");
  const navigate = useNavigate();

  const isAi = mode === "ai";

  return (
    <div ref={rootRef} className="flex w-full flex-col items-center">
      <div
        className={`flex w-[90%] flex-wrap justify-center gap-3 sm:w-[80%] sm:justify-start lg:w-full transition-opacity duration-300 ${
          isAi ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveIdx(i)}
            className={`h-11 rounded-xl px-4 ml-3 text-[0.875rem] font-medium transition-all duration-300 sm:px-8 lg:px-14 lg:text-[1rem] ${
              activeIdx === i
                ? "bg-[#2B241F] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-2 flex w-[90%] items-center gap-3 py-2 sm:w-[80%] lg:w-full">
        <div
          className={`overflow-hidden transition-[width,opacity] duration-300 ${
            isAi ? "w-11 opacity-100 sm:w-12 lg:w-14" : "w-0 opacity-0"
          }`}
        >
          <button
            onClick={() => setMode("search")}
            className={`${BTN} h-11 w-11 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14`}
          >
            <Search size={18} />
          </button>
        </div>

        <div className="flex h-11 flex-1 items-center overflow-hidden rounded-xl bg-white pr-2 shadow-md sm:h-12 lg:h-14">
          <input
            type="text"
            value={isAi ? undefined : query}
            onChange={isAi ? undefined : (e) => setQuery(e.target.value)}
            placeholder={
              isAi
                ? "Ask what you are looking for..."
                : "Search Your Desired Location..."
            }
            className="h-full w-[50%] flex-1 pl-3 pr-4 text-base outline-none placeholder:text-gray-400 lg:pl-7"
          />

          {isAi ? (
            <>
              <button
                onClick={() => setVoiceOpen(true)}
                className="flex items-center justify-center px-3 text-gray-500 transition hover:text-gray-700"
              >
                <AudioLines size={20} />
              </button>
              <button className={`${BTN} h-8 w-8 sm:h-10 sm:w-10`}>
                <Sparkles size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center justify-center px-3 text-gray-500 transition hover:text-gray-700"
              >
                <SlidersHorizontal size={20} />
              </button>
              <button
                onClick={() =>
                  navigate(`/result?type=${TABS[activeIdx].resultType}`)
                }
                className={`${BTN} h-8 w-8 sm:h-10 sm:w-10`}
              >
                <Search size={18} />
              </button>
            </>
          )}
        </div>

        <div
          className={`overflow-hidden transition-[width,opacity] duration-300 ${
            isAi ? "w-0 opacity-0" : "w-11 opacity-100 sm:w-12 lg:w-14"
          }`}
        >
          <button
            onClick={() => setMode("ai")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md 
            transition hover:bg-gray-100 sm:h-12 sm:w-12 lg:h-14 mb-1 lg:w-14"
          >
            <Sparkles size={20} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-black">
        <span className="text-[0.875rem]">Try an example prompt</span>
        <RefreshCw size={16} />
      </div>
      <div className="mt-3 flex w-full flex-wrap lg:flex-nowrap justify-center gap-4 px-10">
        {PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setQuery(prompt)}
            className="flex-none whitespace-nowrap rounded-md border border-[#98928E] px-2 py-2 text-center text-[0.7rem] text-[#4A3A2B] transition-all duration-300 hover:-translate-y-1 lg:text-[0.875rem]"
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

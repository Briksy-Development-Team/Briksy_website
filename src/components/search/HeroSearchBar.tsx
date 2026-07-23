import { useRef, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, AudioLines } from "lucide-react";
import AiVoiceModal from "./AiVoiceModal";
import Filter from "../filter/Filter";
import { useScrollFade } from "./FloatingSearch";
import { useNavigate } from "react-router-dom";
import type { ResultType } from "../../types/search";

const TABS: { label: string; resultType: ResultType }[] = [
  { label: "Buy", resultType: "property" },
  { label: "Sold", resultType: "property" },
  { label: "Builders", resultType: "builder" },
  { label: "Agents", resultType: "trader" },
  { label: "Trades", resultType: "trader" },
];

const AGENT_OPTIONS = [
  { label: "Real Estate Agents", short: "Real Estate" },
  { label: "Buyers Agents", short: "Buyers Agent" },
];

const TRADE_OPTIONS = [
  { label: "Electrical", short: "Electrical" },
  { label: "Plumbing", short: "Plumbing" },
  { label: "Fencing", short: "Fencing" },
  { label: "Landscapers", short: "Landscapers" },
  { label: "Conveyancers", short: "Conveyancers" },
];

const PLACEHOLDERS: Record<string, string> = {
  Buy: "Search Your Desired Location...",
  Sold: "Search suburb or address for sold prices...",
  Builders: "Search builder name or suburb...",
  Agents: "Search agent name or suburb...",
  Trades: "Search a service, e.g. 'electrician'...",
};

const BTN =
  "flex items-center justify-center rounded-xl bg-[#3D2A0B] text-white hover:bg-[#2f2008] transition";

const tabClass = (active: boolean) =>
  `h-11 w-full rounded-xl px-2 text-[0.875rem] font-normal transition-all duration-300 sm:px-6 lg:px-10 lg:text-[1rem] truncate ${active
    ? "bg-[#2B241F] text-white"
    : "bg-white text-gray-700 hover:border hover:border-primary"
  }`;

type Mode = "collapsed" | "search" | "ai";
type Props = { mode: Mode; setMode: (m: Mode) => void };

const HeroSearchBar = ({ mode, setMode }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [query, setQuery] = useState("");
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [agentMenuOpen, setAgentMenuOpen] = useState(false);
  const [agentCategory, setAgentCategory] = useState(AGENT_OPTIONS[0].label);
  const agentCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [tradeMenuOpen, setTradeMenuOpen] = useState(false);
  const [tradeCategory, setTradeCategory] = useState(TRADE_OPTIONS[0].label);
  const tradeCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  useScrollFade(rootRef, "out");
  const navigate = useNavigate();

  const isAi = mode === "ai";
  const activeTab = TABS[activeIdx];
  const agentShort =
    AGENT_OPTIONS.find((o) => o.label === agentCategory)?.short ?? "Agents";
  const tradeShort =
    TRADE_OPTIONS.find((o) => o.label === tradeCategory)?.short ?? "Trades";

  const placeholder = isAi
    ? "Ask what you are looking for..."
    : activeTab.label === "Agents"
      ? `Search ${agentCategory.toLowerCase()} by name or suburb...`
      : activeTab.label === "Trades"
        ? `Search ${tradeCategory.toLowerCase()} by name or suburb...`
        : PLACEHOLDERS[activeTab.label];

  const goToResults = () => {
    const params = new URLSearchParams({ type: activeTab.resultType });
    if (activeTab.label === "Agents") params.set("category", agentCategory);
    if (activeTab.label === "Trades") params.set("category", tradeCategory);
    navigate(`/result?${params.toString()}`);
  };

  const openAgentMenu = () => {
    if (agentCloseTimer.current) {
      clearTimeout(agentCloseTimer.current);
      agentCloseTimer.current = null;
    }
    setAgentMenuOpen(true);
  };

  const closeAgentMenu = () => {
    agentCloseTimer.current = setTimeout(() => setAgentMenuOpen(false), 150);
  };

  const openTradeMenu = () => {
    if (tradeCloseTimer.current) {
      clearTimeout(tradeCloseTimer.current);
      tradeCloseTimer.current = null;
    }
    setTradeMenuOpen(true);
  };

  const closeTradeMenu = () => {
    tradeCloseTimer.current = setTimeout(() => setTradeMenuOpen(false), 150);
  };

  return (
    <div ref={rootRef} className="flex mx-auto flex-col items-center">
      <div className="grid w-[95%] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:w-[80%] lg:w-full gap-3 px-2">
        {TABS.map((tab, i) => {
          if (tab.label === "Agents") {
            return (
              <div
                key={tab.label}
                className="relative"
                onMouseEnter={openAgentMenu}
                onMouseLeave={closeAgentMenu}
              >
                <button
                  onClick={() => setActiveIdx(i)}
                  className={tabClass(activeIdx === i)}
                >
                  {activeIdx === i ? agentShort : "Agents"}
                </button>

                {agentMenuOpen && (
                  <div className="absolute left-0 top-full z-50 mt-0 w-48 overflow-hidden rounded-xl bg-white shadow-lg">
                    {AGENT_OPTIONS.map((opt, idx) => (
                      <div key={opt.label}>
                        <button
                          onClick={() => {
                            setActiveIdx(i);
                            setAgentCategory(opt.label);
                            setAgentMenuOpen(false);
                          }}
                          className="block w-full px-4 py-3 text-left text-[0.875rem] transition hover:bg-gray-50"
                        >
                          {opt.label}
                        </button>
                        {idx !== AGENT_OPTIONS.length - 1 && (
                          <div className="mx-4 h-px bg-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          if (tab.label === "Trades") {
            return (
              <div
                key={tab.label}
                className="relative"
                onMouseEnter={openTradeMenu}
                onMouseLeave={closeTradeMenu}
              >
                <button
                  onClick={() => setActiveIdx(i)}
                  className={tabClass(activeIdx === i)}
                >
                  {activeIdx === i ? tradeShort : "Trades"}
                </button>

                {tradeMenuOpen && (
                  <div className="absolute left-0 top-full  z-50 mt-0 w-48 overflow-hidden rounded-xl bg-white shadow-lg">
                    {TRADE_OPTIONS.map((opt, idx) => (
                      <div key={opt.label}>
                        <button
                          onClick={() => {
                            setActiveIdx(i);
                            setTradeCategory(opt.label);
                            setTradeMenuOpen(false);
                          }}
                          className="block w-full px-4 py-3 text-left text-[0.875rem] transition hover:bg-gray-50"
                        >
                          {opt.label}
                        </button>
                        {idx !== TRADE_OPTIONS.length - 1 && (
                          <div className="mx-4 h-px bg-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={tab.label}
              onClick={() => {
                setActiveIdx(i);
                setAgentMenuOpen(false);
                setTradeMenuOpen(false);
              }}
              className={tabClass(activeIdx === i)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex w-[95%] items-center gap-3  py-2 sm:w-[80%] lg:w-full">
        <div
          className={`overflow-hidden transition-[width,opacity] duration-300 ${isAi ? "w-11 opacity-100 sm:w-12 lg:w-14" : "w-0 opacity-0"}`}
        >
          <button
            onClick={() => setMode("search")}
            className="flex items-center justify-center rounded-xl bg-white text-[#3D2A0B] hover:border hover:border-primary shadow-md mb-1 transitionh-11 w-11 shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14 "
          >
            <Search size={18} />
          </button>
        </div>

        <div className="flex h-11 flex-1 items-center overflow-hidden rounded-xl bg-white pr-2 shadow-md sm:h-12 lg:h-14">
          <input
            type="text"
            value={isAi ? undefined : query}
            onChange={isAi ? undefined : (e) => setQuery(e.target.value)}
            placeholder={placeholder}
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
                onClick={goToResults}
                className={`${BTN} h-8 w-8 sm:h-10 sm:w-10`}
              >
                <Search size={18} />
              </button>
            </>
          )}
        </div>

        <div
          className={`overflow-hidden transition-[width,opacity] duration-300 ${isAi ? "w-0 opacity-0" : "w-11 opacity-100 sm:w-12 lg:w-14"}`}
        >
          <button
            onClick={() => setMode("ai")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition hover:border hover:border-primary sm:h-12 sm:w-12 lg:h-14 mb-1 lg:w-14"
          >
            <Sparkles size={20} />
          </button>
        </div>
      </div>

      <Filter
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        initialTab={activeTab.label as any}
        agentCategory={activeTab.label === "Trades" ? tradeCategory : agentCategory}
      />
      <AiVoiceModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </div>
  );
};

export default HeroSearchBar;
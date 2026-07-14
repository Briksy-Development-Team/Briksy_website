import { Menu, Globe, HelpCircle, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Place from "../../assets/place holder/place.svg";
import { NavSearchButton, NavSearchPanel } from "./NavSearchBar";
import { useNavExpand, SCROLL_THRESHOLD } from "./FloatingSearch";
import Logo from "../../assets/logo/briksy.svg"
import LogoB from "../../assets/logo/briksyB.svg"

type NavbarProps = {
    mode: "collapsed" | "search" | "ai";
    setMode: (mode: "collapsed" | "search" | "ai") => void;
    hasHero?: boolean; // false on pages with no hero section — navbar stays solid & search icon stays visible
};

type Lang = { label: string; region: string };

const LANGUAGES: Lang[] = [
    { label: "English", region: "UK" },
    { label: "English", region: "US" },
    { label: "French", region: "France" },
    { label: "German", region: "Germany" },
    { label: "Italian", region: "Italy" },
    { label: "Japanese", region: "Japan" },
    { label: "Chinese", region: "China" },
    { label: "Russian", region: "Russia" },
    { label: "Portuguese", region: "Portugal" },
    { label: "Arabic", region: "Saudi Arabia" },
];

const Navbar = ({ mode, setMode, hasHero = true }: NavbarProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [langModalOpen, setLangModalOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState<Lang>({ label: "English", region: "UK" });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(!hasHero);
    const [pastHero, setPastHero] = useState(!hasHero);
    const pastHeroRef = useRef(pastHero);

    // The navbar should only expand if we are past the hero section, OR if there's no hero.
    // Otherwise, the HeroSearchBar is handling the UI.
    const navbarMode = pastHero ? mode : "collapsed";
    const [showPanel, setShowPanel] = useState(navbarMode !== "collapsed");

    useEffect(() => {
        if (!hasHero) return; // no hero to scroll past — stay solid always
        const onScroll = () => {
            setIsScrolled(window.scrollY > 100);

            const isPast = window.scrollY > SCROLL_THRESHOLD;

            // Upwards: ensures hero search starts in default tab state.
            if (isPast !== pastHeroRef.current) {
                setMode("collapsed");
            }
            pastHeroRef.current = isPast;
            setPastHero(isPast);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [hasHero, setMode]);

    useNavExpand(navRef, panelRef, navbarMode, () => setShowPanel(false));

    useEffect(() => {
        if (navbarMode !== "collapsed") setShowPanel(true);
    }, [navbarMode]);

    useEffect(() => {
        const close = (e: MouseEvent) =>
            dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && setDropdownOpen(false);
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    useEffect(() => {
        document.body.style.overflow = langModalOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [langModalOpen]);

    const iconColor = isScrolled ? "text-gray-800" : "text-white";
    const isSelected = (lang: Lang) => selectedLang.label === lang.label && selectedLang.region === lang.region;

    const LangButton = ({ lang, compact }: { lang: Lang; compact?: boolean }) => {
        const selected = isSelected(lang);
        return (
            <button
                onClick={() => setSelectedLang(lang)}
                className={
                    compact
                        ? `px-4 py-2 w-28 rounded-lg text-sm font-medium transition-colors ${selected ? "bg-[#D97706] text-white" : "bg-gray-100 text-gray-700"}`
                        : `text-left px-4 py-2 rounded-lg text-sm transition-colors ${selected ? "bg-[#D97706] text-white" : "hover:bg-gray-50 text-gray-800"}`
                }
            >
                <div className={compact ? "font-semibold" : "font-medium"}>{lang.label}</div>
                <div className={`text-xs ${selected ? "opacity-80" : "text-gray-400"}`}>{lang.region}</div>
            </button>
        );
    };

    return (
        <>
            <nav
                ref={navRef}
                style={{ height: 80 }}
                className={`fixed top-0 left-0 right-0 z-50 overflow-visible
                    ${isScrolled ? "bg-[#F8F4EE] border-b border-[#d8d8d8]" : "bg-transparent border-b border-transparent"}
                    transition-colors duration-300`}
            >
                <div className="h-20 flex items-center justify-between px-10">
                    <Link to="/" className=" shrink-0">
                            <img
                                src={isScrolled ? LogoB : Logo}
                                alt="Briksy"
                                className="h-10 w-auto transition-opacity duration-300"
                            />
                        </Link>

                    <div className="flex-1" />

                    <div className="flex items-center gap-6 shrink-0">
                        {navbarMode === "collapsed" && (
                            <NavSearchButton mode={navbarMode} setMode={setMode} hasHero={hasHero} />
                        )}

                        <button onClick={() => setLangModalOpen(true)} className={`hover:opacity-70 transition-colors ${iconColor}`} aria-label="Language and region">
                            <Globe size={18} />
                        </button>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((v) => !v)}
                                className={`p-2 rounded-3xl space-x-2 border flex items-center justify-center transition-colors ${isScrolled ? "border-gray-300 text-gray-800" : "border-white/40 text-white"
                                    }`}
                            >
                                <Menu size={20} />
                                <img src={Place} alt="profile" />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#88867A] py-2 z-50">
                                    <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors">
                                        <HelpCircle size={20} className="text-gray-800" strokeWidth={1.5} />
                                        <span className="font-semibold text-gray-900 text-sm">Help Or Contact Us</span>
                                    </button>
                                    <div className="border-t border-gray-100 mx-5" />
                                    <button className="w-full text-left px-5 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                                        View Profile
                                    </button>
                                    <div className="border-t border-gray-100 mx-5" />
                                    <div className="px-5 py-4">
                                        <button className="w-full text-left text-sm font-medium text-gray-900 hover:underline">
                                            Become a Agent/Agency
                                        </button>
                                        <button className="w-full text-left text-sm text-gray-400 mt-1 hover:underline">
                                            Open Agent/ Agency Panel
                                        </button>
                                    </div>
                                    <div className="border-t border-gray-100 mx-5" />
                                    <button className="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-gray-50 transition-colors">
                                        Login/SignUp
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 transition-colors">
                                        <LogOut size={18} />
                                        <span className="font-semibold text-sm">Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    ref={panelRef}
                    className="px-10 pb-8"
                    style={{ pointerEvents: navbarMode !== "collapsed" ? "auto" : "none" }}
                >
                    <div className="mt-6">
                        {showPanel && <NavSearchPanel mode={navbarMode} setMode={setMode} />}
                    </div>
                </div>
            </nav>

            {langModalOpen && (
                <div className="fixed inset-0 z-[100] flex pt-16 items-start justify-center" onClick={() => setLangModalOpen(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl h-[60%] w-[35%] p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setLangModalOpen(false)} className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-colors">
                            <X size={28} />
                        </button>

                        <div className="flex justify-start mt-10 mb-6">
                            <div className="border-b-2 border-[#D97706] pb-1 px-2">
                                <span className="text-sm font-semibold text-[#D97706]">Language</span>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-900 mb-3">Suggested languages and regions</p>
                        <div className="flex gap-3 mb-6">
                            {LANGUAGES.slice(0, 2).map((lang) => (
                                <LangButton key={`s-${lang.label}-${lang.region}`} lang={lang} compact />
                            ))}
                        </div>

                        <p className="text-sm font-semibold pt-10 text-gray-900 mb-3">Choose a language and region</p>
                        <div className="grid grid-cols-5 gap-3">
                            {LANGUAGES.map((lang) => (
                                <LangButton key={`${lang.label}-${lang.region}`} lang={lang} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
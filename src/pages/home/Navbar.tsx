import { Menu, Globe, Grid2x2, List, MapPinned, HelpCircle, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Place from "../../assets/place holder/place.svg";

type NavbarProps = {
    navAnchorRef: React.RefObject<HTMLDivElement | null>;
    tabsRef: React.RefObject<HTMLDivElement | null>;
    expandedAnchorRef: React.RefObject<HTMLDivElement | null>;
    mode: "collapsed" | "search" | "ai";
    setMode: (mode: "collapsed" | "search" | "ai") => void;
};

const languages = [
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

const Navbar = ({
    navAnchorRef,
    tabsRef,
    mode,
    setMode,
    expandedAnchorRef,
}: NavbarProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [langModalOpen, setLangModalOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({ label: "English", region: "UK" });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<"grid" | "list" | "map">("grid");

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (langModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [langModalOpen]);

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 right-0 z-50
                    bg-white border-b border-[#d8d8d8]
                    overflow-visible
                    transition-all duration-300
                    ${mode === "collapsed" ? "h-20" : "h-[220px]"}
                `}
            >
                <div className="h-20 flex items-center justify-between px-10">
                    <Link to="/" className="text-4xl font-medium text-[#D97706] shrink-0">
                        briksy<span className="text-red-500">.</span>
                    </Link>

                    <div className="relative flex items-center flex-1 justify-center">
                        <div
                            ref={navAnchorRef}
                            onClick={() => {
                                if (mode === "collapsed" && window.scrollY > 100) {
                                    setMode("search");
                                }
                            }}
                            className="absolute w-[420px] h-[56px] cursor-pointer"
                        />
                        <div ref={tabsRef} className="flex items-center gap-4">
                            {[
                                { id: "grid", icon: <Grid2x2 size={18} />, label: "Grid" },
                                { id: "list", icon: <List size={18} />, label: "List" },
                                { id: "map", icon: <MapPinned size={18} />, label: "Map" },
                            ].map(({ id, icon, label }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id as "grid" | "list" | "map")}
                                    className={`flex  px-2 items-center gap-2 pb-1 transition-colors ${activeTab === id
                                            ? "text-[#D97706] border-b-2 border-[#D97706]"
                                            : "text-black border-b-2 border-transparent"
                                        }`}
                                >
                                    {icon}
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0">
                        {/* Globe / Language trigger */}
                        <button
                            onClick={() => setLangModalOpen(true)}
                            className="text-primary hover:opacity-70 transition-opacity"
                            aria-label="Language and region"
                        >
                            <Globe size={18} />
                        </button>

                        {/* Hamburger + avatar dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="p-2 rounded-3xl space-x-2 border border-gray-300 flex items-center justify-center"
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

                {mode !== "collapsed" && (
                    <div className="px-10 pb-8">
                        <div ref={expandedAnchorRef} className="w-[900px] h-[80px] mx-auto mt-6" />
                    </div>
                )}
            </nav>

            {/* ── Language Modal ── */}
            {langModalOpen && (
                <div
                    className="fixed inset-0 z-[100]  flex pt-16 items-start justify-center"
                    // style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                    onClick={() => setLangModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl h-[60%]  w-[35%] p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setLangModalOpen(false)}
                            className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-colors"
                        >
                            <X size={28} />
                        </button>

                        {/* Tab */}
                        <div className="flex justify-start  mt-10 mb-6">
                            <div className="border-b-2 border-[#D97706] pb-1 px-2">
                                <span className="text-sm font-semibold text-[#D97706]">Language</span>
                            </div>
                        </div>

                        {/* Suggested */}
                        <p className="text-sm font-semibold  text-gray-900 mb-3">
                            Suggested languages and regions
                        </p>

                        <div className="flex gap-3 mb-6">
                            {languages.slice(0, 2).map((lang) => {
                                const isSelected =
                                    selectedLang.label === lang.label &&
                                    selectedLang.region === lang.region;
                                return (
                                    <button
                                        key={`suggested-${lang.label}-${lang.region}`}
                                        onClick={() => setSelectedLang(lang)}
                                        className="px-4 py-2 w-28 rounded-lg text-sm font-medium transition-colors"
                                        style={{
                                            backgroundColor: isSelected ? "#D97706" : "#f3f4f6",
                                            color: isSelected ? "white" : "#374151",
                                        }}
                                    >
                                        <div className="font-semibold">{lang.label}</div>
                                        <div className={`text-xs ${isSelected ? "opacity-80" : "text-gray-400"}`}>
                                            {lang.region}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* All languages */}
                        <p className="text-sm font-semibold pt-10 text-gray-900 mb-3">
                            Choose a language and region
                        </p>
                        <div className="grid grid-cols-5 gap-3">
                            {languages.map((lang) => {
                                const isSelected =
                                    selectedLang.label === lang.label &&
                                    selectedLang.region === lang.region;
                                return (
                                    <button
                                        key={`${lang.label}-${lang.region}`}
                                        onClick={() => setSelectedLang(lang)}
                                        className={`text-left px-4 py-2 rounded-lg text-sm transition-colors ${isSelected
                                            ? "text-white"
                                            : "hover:bg-gray-50 text-gray-800"
                                            }`}
                                        style={isSelected ? { backgroundColor: "#D97706" } : {}}
                                    >
                                        <div className="font-medium">{lang.label}</div>
                                        <div className={`text-xs ${isSelected ? "opacity-80" : "text-gray-400"}`}>
                                            {lang.region}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
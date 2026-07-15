import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { NavSearchButton, NavSearchPanel } from "./NavSearchBar";
import { useNavExpand, SCROLL_THRESHOLD } from "../search/FloatingSearch";
import Logo from "../../assets/logo/briksy.svg";
import LogoB from "../../assets/logo/briksyB.svg";
import LanguageModal from "./LanguageModal.tsx";
import ProfileDropdown from "./ProfileDropdown.tsx";

type NavbarProps = {
  mode: "collapsed" | "search" | "ai";
  setMode: (mode: "collapsed" | "search" | "ai") => void;
  hasHero?: boolean;
};

type Lang = { label: string; region: string };

const Navbar = ({ mode, setMode, hasHero = true }: NavbarProps) => {
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Lang>({
    label: "English",
    region: "UK",
  });
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(!hasHero);
  const [pastHero, setPastHero] = useState(!hasHero);
  const pastHeroRef = useRef(pastHero);

  const navbarMode = pastHero ? mode : "collapsed";
  const [showPanel, setShowPanel] = useState(navbarMode !== "collapsed");

  useEffect(() => {
    if (!hasHero) return;

    const onScroll = () => {
      if (document.body.style.position === "fixed") return;

      setIsScrolled(window.scrollY > 100);

      const isPast = window.scrollY > SCROLL_THRESHOLD;

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

  const iconColor = isScrolled ? "text-gray-800" : "text-white";

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
              <NavSearchButton
                mode={navbarMode}
                setMode={setMode}
                hasHero={hasHero}
              />
            )}

            <button
              onClick={() => setLangModalOpen(true)}
              className={`hover:opacity-70 transition-colors ${iconColor}`}
              aria-label="Language and region"
            >
              <Globe size={18} />
            </button>

            <ProfileDropdown isScrolled={isScrolled} />
          </div>
        </div>

        <div
          ref={panelRef}
          className="px-10 pb-8"
          style={{
            pointerEvents: navbarMode !== "collapsed" ? "auto" : "none",
          }}
        >
          <div className="mt-6">
            {showPanel && (
              <NavSearchPanel mode={navbarMode} setMode={setMode} />
            )}
          </div>
        </div>
      </nav>

      <LanguageModal
        isOpen={langModalOpen}
        onClose={() => setLangModalOpen(false)}
        selectedLang={selectedLang}
        onSelect={setSelectedLang}
      />
    </>
  );
};

export default Navbar;
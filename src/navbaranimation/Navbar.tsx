import { Menu, Globe, Grid2x2, List, MapPinned } from "lucide-react";


type NavbarProps = {
    navAnchorRef: React.RefObject<HTMLDivElement>;
    tabsRef: React.RefObject<HTMLDivElement>;
    expandedAnchorRef: React.RefObject<HTMLDivElement>;
    mode: "collapsed" | "search" | "ai";
    setMode: (mode: "collapsed" | "search" | "ai") => void;
};

const Navbar = ({
    navAnchorRef,
    tabsRef,
    mode,
    setMode,
    expandedAnchorRef,
}: NavbarProps) => {
    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                bg-[#EEEADE]
                border-b border-[#d8d8d8]
                overflow-hidden
                transition-all duration-300
                ${mode === "collapsed" ? "h-20" : "h-[220px]"}
            `}
        >
            <div className="h-20 flex items-center justify-between px-10">
                <h1 className="text-4xl font-medium text-[#30452A] shrink-0">
                    briksy<span className="text-red-500">.</span>
                </h1>

                <div className="relative flex items-center flex-1 justify-center">

                    <div
                        ref={navAnchorRef}
                        onClick={() => {

                            if (mode === "collapsed" && window.scrollY > 100) {
                                setMode("search");
                            }
                        }}
                        className="
              absolute
              w-[420px]
              h-[56px]
              cursor-pointer
            "
                    />
                    <div ref={tabsRef} className="flex items-center gap-10">
                        <button className="flex items-center gap-2 text-[#30452A] border-b-2 border-[#30452A] pb-1">
                            <Grid2x2 size={18} />
                            Grid
                        </button>

                        <button className="flex items-center gap-2 text-gray-500">
                            <List size={18} />
                            List
                        </button>

                        <button className="flex items-center gap-2 text-gray-500">
                            <MapPinned size={18} />
                            Map
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                    <button className="text-[#30452A]">+ Find Builder </button>

                    <Globe size={18} className="text-[#30452A]" />

                    <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center">
                        <Menu size={20} />
                    </div>
                </div>
            </div>

            {mode !== "collapsed" && (
                <div className="px-10 pb-8">
                    <div
                        ref={expandedAnchorRef}
                        className="
        w-[900px]
        h-[80px]
        mx-auto mt-6
      
      "
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;

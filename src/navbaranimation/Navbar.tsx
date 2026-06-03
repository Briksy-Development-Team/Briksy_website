import {
    Menu,
    Globe,
    Grid2x2,
    List,
    MapPinned,
    Search,
    Sparkles,
} from "lucide-react";

const Navbar = ({
    navSearchRef,
    navTabsRef,
}) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-[#d8d8d8] bg-[#EEEADE]">
            <div className="h-full flex items-center justify-between px-10">

                <h1 className="text-4xl font-medium text-[#30452A] shrink-0">
                    briksy<span className="text-red-500">.</span>
                </h1>

                <div className="flex items-center flex-1 justify-center gap-4">

                    <div
                        ref={navSearchRef}
                        className="flex items-center gap-3 opacity-0"
                    >
                        <div className="flex items-center bg-white py-3 rounded-full pl-5 pr-3   ">
                            <input
                                type="text"
                                placeholder="Start your search"
                                className="flex-1 bg-transparent outline-none text-sm"
                            />

                            <button className="w-[20px] h-[20px] rounded-full bg-[#30452A] flex items-center justify-center  shrink-0 ">
                                <Search size={16} className="text-white" />
                            </button>
                        </div>

                        <button className="w-10 h-10 rounded-full bg-[#30452A] flex items-center justify-center">
                            <Sparkles
                                size={16}
                                className="text-white"
                            />
                        </button>
                    </div>

                    <div
                        ref={navTabsRef}
                        className="flex items-center gap-10"
                    >
                        <button className="flex items-center gap-2 text-[#30452A] border-b-2 border-[#30452A] pb-1">
                            <Grid2x2 size={18} />
                            Grid
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#30452A] transition">
                            <List size={18} />
                            List
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#30452A] transition">
                            <MapPinned size={18} />
                            Map
                        </button>
                    </div>

                </div>

                <div className="flex items-center gap-6 shrink-0">
                    <button className="text-[#30452A] hover:opacity-70 transition">
                        + Find Builder
                    </button>

                    <Globe
                        size={18}
                        className="text-[#30452A] cursor-pointer"
                    />

                    <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                        <Menu size={20} />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
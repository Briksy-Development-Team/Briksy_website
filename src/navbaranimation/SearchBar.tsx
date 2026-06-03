import { Search, Sparkles } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex flex-col items-start gap-4 w-[60%] ">
            <div className="flex items-center gap-3  w-full ">
                <div className="flex items-center bg-white rounded-full w-full search-pill pl-7 py-2 pr-1.5 ">
                    <div className="flex-1 ">
                        <p  className="text-xsz font-semibold text-[#30452A] mb-0.5">Where</p>
                        <input
                            type="text"
                            placeholder="Search Your Desired Location..."
                            className="w-full outline-none text-gray-600 placeholder:text-gray-400 bg-transparent text-sm"
                        />
                    </div>

                    <div  className="w-px h-9 bg-gray-200 mx-5 shrink-0" />

                    {/* Type */}
                    <div className="w-1/3 flex flex-col ">
                        <p className="text-xs font-semibold text-[#30452A] mb-0.5">Type</p>
                        <select className="w-full outline-none bg-transparent text-gray-600 cursor-pointer text-sm appearance-none">
                            <option>All</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Commercial</option>
                            <option>Office</option>
                        </select>
                    </div>

                    <button className="w-[50px] h-[50px] rounded-full bg-[#30452A] flex items-center justify-center ml-3 shrink-0 hover:scale-105 transition">
                        <Search size={18} className="text-white" />
                    </button>
                </div>

                <button className="w-[52px] h-[52px] rounded-full bg-[#30452A] flex items-center justify-center hover:scale-105 transition shrink-0">
                    <Sparkles size={18} className="text-white" />
                </button>
            </div>

            {/* Filters */}
            <div 
                className="flex items-start     gap-2.5">
                {["All", "Agents", "Agencies", "Organisations"].map((label) => (
                    <button
                        key={label}
                        className={`px-3 py-1.5 rounded-2xl text-sm transition ${label === "All"
                            ? "bg-white text-black border border-white"
                            : "bg-transparent text-white border border-gray-300"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
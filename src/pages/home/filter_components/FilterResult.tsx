
const FilterResult = () => {
    return (
        <div className="min-h-screen pt-24 bg-gray-50 flex flex-col">
            <div className="w-full h-96 bg-gray-300 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://maps.googleapis.com/maps/api/staticmap?center=-33.8688,151.2093&zoom=12&size=800x400&sensor=false")' }}>
                    <div className="w-full h-full bg-blue-100/50 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xl font-semibold text-blue-900">Google Map Area</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 max-w-7xl w-full mx-auto p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-8 border border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Applied Filters</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#3D2C1D]/10 text-[#3D2C1D] text-sm rounded-full">Status: Buy</span>
                        <span className="px-3 py-1 bg-[#3D2C1D]/10 text-[#3D2C1D] text-sm rounded-full">Type: All types</span>
                        <span className="px-3 py-1 bg-[#3D2C1D]/10 text-[#3D2C1D] text-sm rounded-full">Price: Any</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="col-span-full py-12 text-center text-gray-500">
                        <p className="text-lg">No properties match your exact criteria right now.</p>
                        <p className="text-sm mt-2">Try adjusting your filters.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterResult;
